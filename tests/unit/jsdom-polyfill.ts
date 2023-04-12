window.URL.createObjectURL = ()=>
  `blob:${location.protocol}//${location.host}/${Math.random()}`

HTMLCanvasElement.prototype.getContext = ()=> null

Object.defineProperty(
  HTMLDivElement.prototype,
  'clientWidth',
  { get(){ return parseInt(this.style.width) } }
);

Object.defineProperty(
  HTMLDivElement.prototype,
  'clientHeight',
  { get(){ return parseInt(this.style.height) } }
);
