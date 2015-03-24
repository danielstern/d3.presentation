var dataset_1 = [{
    'type': 'boat',
    'model': 'Ocean Queen 2000'
}, {
    'type': 'car',
    'model': 'Ferrari'
}];
var dataset_2 = [{
    'price': 23202020,
    'weight': 5656.9
}, {
    'price': 59988,
    'weight': 1.9
}];

var result = _.merge(dataset_1, dataset_2);
console.log(result);