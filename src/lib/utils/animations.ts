export function fadeIn(
  node: HTMLElement,
  options: { delay?: number; type?: 'up' | 'left' | 'right' } = {}
) {
  const { delay = 0, type = 'up' } = options;

  const classMap = {
    up: 'fade-up',
    left: 'fade-left',
    right: 'fade-right'
  };

  node.classList.add(classMap[type]);

  if (delay) node.style.transitionDelay = `${delay}s`;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('visible');
        observer.disconnect();
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}

export function animateCounter(node: HTMLElement) {
  const target = parseInt(node.dataset.target || '0', 10);
  const suffix = node.dataset.suffix || '+';
  const start = performance.now();

  function update(now: number) {
    const progress = Math.min((now - start) / 2000, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(ease * target);
    node.textContent = target >= 1000 ? current.toLocaleString() + suffix : current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
