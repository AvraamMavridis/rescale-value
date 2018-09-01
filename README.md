# rescaling-value

Simple module to rescale a value of an array of values in [0, 1] range, useful to normalize a value to be used in an AI model for example.

```
import rescaleValue from 'rescaling-value';

rescaleValue(3, [1,2,3,4,5]); // 0.5
```
