# values-between-range

Return values between given range
[![NPM](https://nodei.co/npm/values-between-range.png)](https://nodei.co/npm/values-between-range/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)]()


##
```js
var values_between = require('values-between-range')
```
#### values_between( min, max, howMany, precision )
* ##### *min* - minimum value
* ##### *max* - maximum value
* ##### *howMany* - how many numbers return  *(default = 3)*
* ##### *precision* - precision of the numbers (default = 1)


## Usage

```js
values_between(1, 10);
// [ '1.0', '5.5', '10.0' ]

values_between(1, 10, 10);
// [ '1.0', '2.0', '3.0', '4.0', '5.0', '6.0', '7.0', '8.0', '9.0', '10.0' ];

values_between(1, 10, 10, 0);
// [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ];

values_between(1, 10, 10, 7);
// [
  '1.0000000',
  '2.0000000',
  '3.0000000',
  '4.0000000',
  '5.0000000',
  '6.0000000',
  '7.0000000',
  '8.0000000',
  '9.0000000',
  '10.0000000'
];

values_between(0.5432, 0.76576, 5, 5);
// [ '0.54320', '0.59884', '0.65448', '0.71012', '0.76576' ];

values_between(0.3, 2.4, 10, 3);
// [ '0.300', '0.533', '0.767', '1.000', '1.233', '1.467', '1.700', '1.933', '2.167', '2.400' ];
```
## Errors

```js
values_between('3', 0.02, 100);
// Error: Incorrect type of argument

values_between(0.1, 0.099, 100);
// Error: min >= max min = 0.1, max = 0.099

values_between(2, 5, 3, -1);
// Error: Value can not be lower than 0

values_between(2, 5, 1, 1);
// Error: howMany must be grater than 2. It's 1
```

