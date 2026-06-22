<script lang="ts">
  import lottie, { type AnimationItem } from 'lottie-web';
  import { getActiveOccasion } from '$lib/data/occasions';

  let active = $state(getActiveOccasion());
  let prevId = $state(active?.id);
  let container = $state<HTMLDivElement | null>(null);
  let anim = $state<AnimationItem | null>(null);
  let lottieReady = $state(false);
  let playedSound = $state(false);
  let reducedMotion = $state(false);

  $effect(() => {
    const next = getActiveOccasion();
    if (next?.id !== prevId) {
      lottieReady = false;
      prevId = next?.id;
    }
    active = next;
  });

  $effect(() => {
    reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  $effect(() => {
    if (!active || !container || reducedMotion) return;
    if (!active.src) return;

    lottieReady = false;

    anim = lottie.loadAnimation({
      container,
      renderer: 'svg',
      loop: active.loop ?? true,
      autoplay: active.autoplay ?? true,
      path: active.src,
    });

    if (active.speed) {
      anim.setSpeed(active.speed);
    }

    anim.addEventListener('data_ready', () => {
      lottieReady = true;
    });

    return () => {
      anim?.destroy();
      anim = null;
    };
  });

  function playSound() {
    if (playedSound || !active?.sound) return;
    const audio = new Audio(active.sound.src);
    audio.volume = active.sound.volume ?? 0.3;
    audio.play().catch(() => {});
    playedSound = true;
  }
</script>

<svelte:window onclick={playSound} ontouchstart={playSound} />

{#if active && !reducedMotion}
  <div
    class="occasion-fx {active.position}"
    role="presentation"
    aria-hidden="true"
  >
    {#if active.svg}
      <div
        class="occasion-svg"
        style="width: {active.position === 'fullscreen' ? '100%' : active.size + 'px'}; height: {active.position === 'fullscreen' ? '100%' : active.size + 'px'};"
      >
        {@html active.svg}
      </div>
    {/if}

    {#if active.src}
      <div
        bind:this={container}
        class:lottie-visible={lottieReady}
        class:lottie-hidden={!lottieReady}
        style="width: {active.position === 'fullscreen' ? '100%' : active.size + 'px'}; height: {active.position === 'fullscreen' ? '100%' : active.size + 'px'};"
      ></div>
    {/if}
  </div>
{/if}

<style>
  .occasion-fx {
    position: fixed;
    z-index: 9999;
    pointer-events: none;
  }

  .occasion-fx.corner-br {
    bottom: 24px;
    right: 24px;
  }

  .occasion-fx.corner-bl {
    bottom: 24px;
    left: 24px;
  }

  .occasion-fx.corner-tr {
    top: 80px;
    right: 24px;
  }

  .occasion-fx.corner-tl {
    top: 80px;
    left: 24px;
  }

  .occasion-fx.fullscreen {
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .occasion-fx.floating {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .lottie-hidden {
    display: none;
  }

  .lottie-visible {
    display: block;
  }

  .occasion-fx:not(.fullscreen) .occasion-svg {
    animation: float 3s ease-in-out infinite;
  }

  .occasion-svg :global(svg) {
    width: 100%;
    height: 100%;
    display: block;
  }

  .occasion-fx:not(.fullscreen) .occasion-svg :global(svg) {
    animation: rotate 6s linear infinite;
  }

  .occasion-fx.fullscreen .occasion-svg :global(svg),
  .occasion-fx.fullscreen .lottie-visible :global(svg) {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
</style>
