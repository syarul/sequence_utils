# sequence_utils
A simple utility to pad and truncate arrays to the same length


[![NPM Version](https://img.shields.io/npm/v/array-sequence-utils.svg)](https://www.npmjs.com/package/array-sequence-utils)
[![sequence_utils CI](https://github.com/syarul/sequence_utils/actions/workflows/main-ci.yml/badge.svg)](https://github.com/syarul/sequence_utils/actions/workflows/main-ci.yml)

converted `tensorflow.keras.preprocessing.sequence`

## Usage

```bash
    npm install array-sequence-utils
```
```js
import { pad_sequences } from 'array-sequence-utils'

const sequences = [[10, 20, 30], [5, 15], [], [1, 2, 3, 4, 5, 6]]

console.log(pad_sequences(sequences, 4, 'post', 'post'))
// [[10, 20, 30, 0], [5, 15, 0, 0], [0, 0, 0, 0], [1, 2, 3, 4]]
```

## Params

 * @param {number[][]} vectors The sequences represented as an array of array
 *   of numbers.
 * @param {number} maxLen Maximum length. Sequences longer than `maxLen` will be
 *   truncated. Sequences shorter than `maxLen` will be padded.
 * @param {'pre'|'post'} padding Padding type, default to 'pre'.
 * @param {'pre'|'post'} truncating Truncation type, default to 'pre'.
 * @param {number} value Padding value, default to 0 (which usually reserve for padding)
