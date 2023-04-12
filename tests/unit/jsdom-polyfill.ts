window.URL.createObjectURL = ()=>
  `blob:${location.protocol}//${location.host}/${Math.random()}`

HTMLCanvasElement.prototype.getContext = ()=> null
