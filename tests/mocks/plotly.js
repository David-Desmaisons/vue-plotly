export default {
  plot: jest.fn(),
  newPlot: jest.fn(element => {
    element.on = jest.fn();
  }),
  react: jest.fn(),
  relayout: jest.fn(),
  restyle: jest.fn(),
  update: jest.fn(),
  purge: jest.fn()
};
