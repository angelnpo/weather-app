const mockAxios = {
  get: jest.fn(() => Promise.resolve({
    data: {
      main: {
        temp: 280.32, // 7.17°C (converted from Kelvin)
      },
      weather: [{
        main: 'Clear'
      }]
    }
  }))
};

export default mockAxios;
