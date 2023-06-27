/**
 * @license
 * Copyright 2019 Shahrul Nizam Selamat All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/* eslint-disable camelcase */
/**
 * A simple utility to pad and truncate arrays to the same length
 *
 * @param {number[][]} vectors The sequences represented as an array of array
 *   of numbers.
 * @param {number} maxLen Maximum length. Sequences longer than `maxLen` will be
 *   truncated. Sequences shorter than `maxLen` will be padded.
 * @param {'pre'|'post'} padding Padding type, default to 'pre'.
 * @param {'pre'|'post'} truncating Truncation type, default to 'pre'.
 * @param {number} value Padding value, default to 0 (which usually reserve for padding)
 */
export function pad_sequences (vectors, maxLen, padding = 'pre', truncating = 'pre', value = 0) {
  const validVector = Array.isArray(vectors) && vectors.every(Array.isArray)
  if (validVector) {
    return vectors.map(vector => {
      if (vector.length >= maxLen) {
        if (truncating === 'pre') {
          return vector.slice(vector.length - maxLen)
        } else {
          return vector.slice(0, maxLen)
        }
      } else {
        const padLen = maxLen - vector.length
        const padded = new Array(padLen).fill(value)

        if (padding === 'pre') {
          return [...padded, ...vector]
        } else {
          return [...vector, ...padded]
        }
      }
    })
  } else {
    throw new Error('Input is not a valid array of vectors')
  }
}
