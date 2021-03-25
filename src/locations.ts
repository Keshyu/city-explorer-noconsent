const locations = [
  {
    name: "Мирнинское управление автодорог",
    coordinate: { latitude: 62.5120849, longitude: 113.9835664 },
    color: '#c44536',
  },
  {
    name: "Алмазавтоматика",
    coordinate: { latitude: 62.5263731, longitude: 113.9724382 },
    color: '#f8961e',
  },
  {
    name: "Нюрбинский горно-обогатительный комбинат, ЗАО \"АК \"АЛРОСА\"",
    coordinate: { latitude: 62.5314617, longitude: 113.9773762 },
    color: '#ffe66d',
    dark: true,
  },
  {
    name: "Якутнипроалмаз, институт ПАО \"АК \"АЛРОСА\"",
    coordinate: { latitude: 62.5401782, longitude: 113.9849394 },
    color: '#fff3b0',
    dark: true,
  },
  {
    name: "Офис АЛРОСА",
    coordinate: { latitude: 62.5411770, longitude: 113.9721994 },
    color: '#b8f2e6',
    dark: true,
  },
  {
    name: "Центр Подготовки Кадров АК \"АЛРОСА\"",
    coordinate: { latitude: 62.5417553, longitude: 113.9692259 },
    color: '#90be6d',
  },
  {
    name: "Дворец культуры \"Алмаз\"",
    coordinate: { latitude: 62.5416927, longitude: 113.9790353 },
    color: '#577590',
  },
  {
    name: "Центр Сортировки Алмазов",
    coordinate: { latitude: 62.5454997, longitude: 113.9828060 },
    color: '#4ecdc4',
  },
  {
    name: "Рудник Мир",
    coordinate: { latitude: 62.5373729, longitude: 114.0053918 },
    color: '#ff595e',
  },
];

export const initialRegion = {
  latitude: 62.52458430047007,
  latitudeDelta: 0.05282575853648552,
  longitude: 113.98163583129644,
  longitudeDelta: 0.06437301635742188,
};

export const mapBoundaries = {
  northEast: {
    latitude: 62.55,
    longitude: 114.05
  },
  southWest: {
    latitude: 62.49,
    longitude: 113.9,
  },
};

export default locations;
