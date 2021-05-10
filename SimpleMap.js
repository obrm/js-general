'use strict'
/*
--------------------------------------------------------------------------------------------------------------------
Assignment 1
--------------------------------------------------------------------------------------------------------------------
Map is a data structure that holds key-value pairs where both keys and values can be of any type.
Implement a simplified Map (let's call it SimpleMap) with the following methods:

1. SimpleMap.set(key, value);
  For simplicity keys will only be strings
2. SimpleMap.get(key);
  Should return `null` if such key doesn't exist
3. SimpleMap.has(key);
  Should return a boolean state of whether SimpleMap has this key stored or not
4. SimpleMap.delete(key);
  Should delete a specific item from SimpleMap
5. SimpleMap.clear();
  Should delete all items from SimpleMap

Bonus: add the following methods to your implementation
  6. SimpleMap.size;
    Returns the amount of items currently stored in SimpleMap. Note that that there are no parentheses.
  7. SimpleMap.keys();
    Returns an array of all keys
  8. SimpleMap.values();
    Returns an array of all values
  9. SimpleMap.entries();
    Returns an array of key-value tuples: [[key, value], [key, value]]
  10. SimpleMap.forEach((key, value) => callback(key, value));

Obviously you cannot use the built-in Map.

You can use this documentation article as a reference:
https:developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
*/

class SimpleMap {
  constructor() {
    // initialize the _size variable of the this class
    this._size = 0
    // initialize this class to be an empty object
    this._map = {}
  }

  set(key, value) {
    // if there is no such key already in this map
    if (!this.has(key)) {
      // increase the size of this map
      this._size++
    }
    // set the value of this key
    this._map[key] = value
  }

  delete(key) {
    // if this map has such key
    if (this.has(key)) {
      // decrease the size of this map by one
      this._size--
      // store the value of this key
      const value = this._map[key]
      // delete the key value pair
      delete this._map[key]
      // return the value
      return value
    } else {
      // if there is no such key in this map, return null
      return null
    }
  }

  has(key) {
    // return true or false depending on this map object hasOwnProperty of this key
    return this._map.hasOwnProperty(key)
  }

  hasValue(value) {
    // loop over this map
    for (const key in this._map) {
      // check if the given value is equal to this key's value
      if (this._map[key] === value) {
        // return true
        return true
      }
    }
    // return false if there is no match
    return false
  }

  get(key) {
    // if this map has the given key, return the given key's value
    // else return null
    return this.has(key) ? this._map[key] : null
  }

  clear() {
    // set size to 0
    this.size = 0
    // set this map to an empty object
    this._map = {}
  }

  keys() {
    // create keys array
    const keys = []
    // loop over this map
    for (const key in this._map) {
      // check if this key is in this map
      if (this._map.hasOwnProperty(key)) {
        // push current key into the keys array
        keys.push(key)
      }
    }
    // return keys array
    return keys
  }

  values() {
    // create values array
    const values = []
    // loop over this map
    for (const key in this._map) {
      // push current value to values array
      values.push(this._map[key])
    }
    // return values array
    return values
  }

  size() {
    // return _size variable of this map
    return this._size
  }

  entries() {
    // create entries array
    const entries = []
    // loop over this map
    for (const key in this._map) {
      // push current key, value pair as an array [key, value] to entries array
      entries.push([key, this._map[key]])
    }
    // return entries array
    return entries
  }

  myForeEach(callback) {
    // create entries array
    const entries = this.entries()

    // create i constant set to zero
    const i = 0
    // loop over entries array
    for (let j = 0; j < entries.length; j++) {
      // in each iteration execute given callback with both key and value
      callback(entries[j][i], entries[j][i + 1])
    }
  }
}

let sm = new SimpleMap()
sm.set('Israel', 'Jerusalem')
sm.set('Israel', 'Jerusalem')
sm.set('US', 'Washington')
sm.set('UK', 'London')

console.log(sm.size())
