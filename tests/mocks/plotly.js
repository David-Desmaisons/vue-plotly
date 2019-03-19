export default {
  Plots: {
    resize: jest.fn()
  },
  plot: jest.fn(),
  newPlot: jest.fn(element => {
    element.on = jest.fn();
    element.removeAllListeners = jest.fn();
  }),
  react: jest.fn(),
  relayout: jest.fn(),
  restyle: jest.fn(),
  update: jest.fn(),
  purge: jest.fn(),
  addTraces: jest.fn(),
  deleteTraces: jest.fn(),
  moveTraces: jest.fn(),
  extendTraces: jest.fn(),
  prependTraces: jest.fn(),
  toImage: jest.fn(),
  downloadImage: jest.fn()
};
