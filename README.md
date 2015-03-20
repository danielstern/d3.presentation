# D3.js is Your Utility Belt and You Are Batman

![Holy opaque wall of code, Batman!](https://cloud.githubusercontent.com/assets/4268152/6759387/0525a4e2-cf16-11e4-8744-c016f8fc0aa6.png)

### Contents

- Introduction to D3
  - History
  - Mike Bostock & the New York Times
  - The web's biggest open source library

- Using D3
  - Selections and Data Joins
  - Drawing a basic graph
  - Smooth transitions
  - Four markups: Combining SVG, HTML, CSS and JavaScript
  
- Utilities
  - Sorting
    - ascending
  - Nests
  - Scale
  - Range
  - Transitions
  - AJAX
    - csv
    - dsv
    - json
  - Colors
    - hsl
    - rgb
    - lab
    - crazy other things
  - Reduction
    - mean
    - quantile
    - min
    - median
  
- Resources
  - bl.ocks

Check this out.

```
  _.functions(d3)
```
```javascript

    ["ascending", "bisect", "bisectLeft", "bisectRight", "bisector", "color", "csv", "descending", "dispatch", "dsv", "ease",
    "entries", "extent", "format", "formatPrefix", "functor", "hcl", "hsl", "html", "interpolate", "interpolateArray", 
    "interpolateHcl", "interpolateHsl", "interpolateLab", "interpolateNumber", "interpolateObject", "interpolateRgb", 
    "interpolateRound", "interpolateString", "interpolateTransform", "interpolateZoom", "json", "keys", "lab", "locale", "map",
    "max", "mean", "median", "merge", "min", "mouse", "nest", "pairs", "permute", "quantile", "range", "rebind", "requote",
    "rgb", "round", "select", "selectAll", "selection", "set", "shuffle", "sum", "text", "timer", "tip", "touch", "touches",
    "transform", "transition", "transpose", "tsv", "values", "xhr", "xml", "zip"]
```

### Top 5 D3.js Utilites

 1. Nests
 2. Selections
 3. Scales
 4. Colors
 5. Transitions

### Resources
- Documentation
  - https://github.com/mbostock/d3/wiki

- Tutorials
  - Data Joins 
    - https://medium.com/@c_behrens/enter-update-exit-6cafc6014c36
    - http://bost.ocks.org/mike/join/

### What is D3?

- D3 is a JavaScript object, plain and simple. It's full of functions that do different stuff. Go to http://bl.ocks.org/mbostock/4063550 and open the dev tools. Type `d3` and press enter. There you have it, `d3` itself.
- D3 is a data manipulation library. 90% of the time, it will help you take a big array of stuff, and turn it into a different array of stuff
- D3 is a DOM manipulation library. D3 manipulates the DOM using `selections` which are totally different from how other libraries treat the DOM
- D3 is a full-featured color scheme creation library
- D3 is a data visualization library. It visualizes data by attaching properties of data to DOM elements. 
- D3 is a charting library. It has powerful (and frighteningly obscure) `axis` and `scale` functions. It's also loaded with special transformer functions like `d3.pie()`, which makes it all the more a charting library.
