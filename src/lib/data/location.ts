export interface HoursRange {
  label: string;
  weekdayStart: number;
  weekdayEnd: number;
  open: string;
  close: string;
}

export interface LocationData {
  address: string;
  phone: string;
  email: string;
  mapsUrl: string;
  timezoneOffset: number;
  hours: HoursRange[];
}

export const locationData: LocationData = {
  address: 'Maturín, Sector Las Avenidas, Cruce Av Luis del Valle García con Av. Fuerzas Armadas, Calle Villa Pool, Local 01',
  phone: '+58 412 114 5790',
  email: 'optikt.vision@gmail.com',
  mapsUrl: 'https://maps.google.com/?q=9.7460715,-63.2159275',
  timezoneOffset: -4,
  hours: [
    { label: 'Lunes a Viernes', weekdayStart: 1, weekdayEnd: 5, open: '08:30', close: '17:00' },
    { label: 'Sábado', weekdayStart: 6, weekdayEnd: 6, open: '09:00', close: '13:00' },
  ],
};
