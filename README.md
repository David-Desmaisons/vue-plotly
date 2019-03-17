
# vue-plotly-js
[![GitHub open issues](https://img.shields.io/github/issues/David-Desmaisons/vue-plotly.svg)](https://github.com/David-Desmaisons/vue-plotly/issues)
[![CircleCI](https://circleci.com/gh/David-Desmaisons/vue-plotly.svg?style=shield)](https://circleci.com/gh/David-Desmaisons/vue-plotly)
[![codecov](https://codecov.io/gh/David-Desmaisons/vue-plotly/branch/master/graph/badge.svg)](https://codecov.io/gh/David-Desmaisons/vue-plotly)
[![Npm version](https://img.shields.io/npm/v/vue-plotly.svg)](https://www.npmjs.com/package/vue-plotly)
[![MIT License](https://img.shields.io/github/license/David-Desmaisons/vue-plotly.svg)](https://github.com/David-Desmaisons/vue-plotly/blob/master/LICENSE)

## Usage
```HTML
<Plotly :data="data" :layout="layout" :display-mode-bar="false"></Plotly>
```
```javascript
import { Plotly } from 'vue-plotly'

export default {
  components: {
    Plotly
  },
  data:{
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
```
## API

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
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Update the API section of README.md with generated documentation
```
npm run doc:build
```
