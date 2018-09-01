# rescaling-value

[![npm version](https://badge.fury.io/js/rescaling-value.svg)](https://badge.fury.io/js/rescaling-value) [![Greenkeeper badge](https://badges.greenkeeper.io/AvraamMavridis/rescaling-value.svg)](https://greenkeeper.io/) [![Build Status](https://travis-ci.org/AvraamMavridis/rescaling-value.svg?branch=master)](https://travis-ci.org/AvraamMavridis/rescaling-value)

[![NPM](https://nodei.co/npm/rescaling-value.png?mini=true)](https://nodei.co/npm/rescaling-value/)

Simple module to rescale a value of an array of values in [0, 1] range, useful to normalize a value to be used in an AI model for example.

```
import rescaleValue from 'rescaling-value';

rescaleValue(3, [1,2,3,4,5]); // 0.5
```
