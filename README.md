
<p align="center"><img width="140"src="https://raw.githubusercontent.com/David-Desmaisons/vue-plotly/master/example/assets/logo.png"></p>

# vue-plotly
[![GitHub open issues](https://img.shields.io/github/issues/David-Desmaisons/vue-plotly.svg)](https://github.com/David-Desmaisons/vue-plotly/issues)
[![CircleCI](https://circleci.com/gh/David-Desmaisons/vue-plotly.svg?style=shield)](https://circleci.com/gh/David-Desmaisons/vue-plotly)
[![codecov](https://codecov.io/gh/David-Desmaisons/vue-plotly/branch/master/graph/badge.svg)](https://codecov.io/gh/David-Desmaisons/vue-plotly)
[![Npm version](https://img.shields.io/npm/v/vue-plotly.svg)](https://www.npmjs.com/package/vue-plotly)
[![MIT License](https://img.shields.io/github/license/David-Desmaisons/vue-plotly.svg)](https://github.com/David-Desmaisons/vue-plotly/blob/master/LICENSE)

<h2>Thin Vue3 wrapper for <a
              href="https://plot.ly/javascript/"
              target="_blank"
            >plotly.js</a></h2>
<span>It provides:</span>
<ul>
  <li>all plotly.js methods and events</li>
  <li>data reactivity</li>
  <li>Redraw on resizing</li>
</ul>

![example](https://github.com/David-Desmaisons/vue-plotly/raw/master/example/assets/demo.gif)

## Live example
https://david-desmaisons.github.io/vue-plotly/

## Usage
```HTML
<Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
```
```javascript
import Plotly from 'vue-plotly'

export default {
  components: {
    Plotly
  },
  data() {
    return {
      data:[{
        x: [1,2,3,4],
        y: [10,15,13,17],
        type:"scatter"
      }],
      layout:{
        title: "My graph"
      }
    }
  }
}
```
## API

### Props

- `data` ***Array*** (*optional*)

  [Data](https://plot.ly/javascript/reference/) to be displayed

- `layout` ***Object*** (*optional*)

  Graphic [layout](https://plot.ly/javascript/reference/#layout)

- `id` ***String*** (*optional*)

  Id of the root HTML element of the component.

- Others:

  Plotly component implements the [transparent wrapper pattern](https://zendev.com/2018/05/31/transparent-wrapper-components-in-vue.html):<br>All other props will be passed as plotly graphic [option](https://plot.ly/javascript/configuration-options/).

### Exposed methods

All [Plotly.js instance methods](https://plotly.com/javascript/plotlyjs-function-reference) are exposed by the component instance with "`plotly`" prefix, plus the simplifyed `toImage()` and `downloadImage()`, that preset some options.
See the usage example at [`graphpicker.vue`](./example/components/graphpicker.vue).

### Events

All [Plotly.js events](https://plotly.com/javascript/plotlyjs-events) are re-emited by the component instance and you can listen with the `v-on` directive.
See the usage example at [`graphpicker.vue`](./example/components/graphpicker.vue).

If you need, all event names are exported by this package:
```javascript
import { eventNames } from 'vue-plotly'
```

## Installation
```
npm install vue-plotly
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build
```

### Run your tests
One time:
```
yarn test
```
Hacking:
```
yarn test:watch --open --ui
```

### Lints and fixes files
```
yarn lint
```
