/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
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
import assert from 'assert'

import { pad_sequences } from './sequence_utils.js'

const sequences = [[10, 20, 30], [5, 15], [], [1, 2, 3, 4, 5, 6]]

Array.from([
  [[sequences, 4, 'post', 'post'], [[10, 20, 30, 0], [5, 15, 0, 0], [0, 0, 0, 0], [1, 2, 3, 4]], 'post pad, post truncate'],
  [[sequences, 4, 'post', 'pre'], [[10, 20, 30, 0], [5, 15, 0, 0], [0, 0, 0, 0], [3, 4, 5, 6]], 'post pad, post truncate'],
  [[sequences, 4, 'pre', 'post'], [[0, 10, 20, 30], [0, 0, 5, 15], [0, 0, 0, 0], [1, 2, 3, 4]], 'pre pad, post truncate'],
  [[sequences, 4, 'pre', 'pre'], [[0, 10, 20, 30], [0, 0, 5, 15], [0, 0, 0, 0], [3, 4, 5, 6]], 'pre pad, pre truncate'],
  [[sequences, 4, 'pre', 'pre', 42], [[42, 10, 20, 30], [42, 42, 5, 15], [42, 42, 42, 42], [3, 4, 5, 6]], 'custom padding character']
]).forEach(([args, expected, msg]) => {
  const output = pad_sequences.apply(null, args)
  assert.deepEqual(output, expected, msg)
})
