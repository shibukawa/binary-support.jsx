binary-support.jsx
===========================================

[![Build Status](https://travis-ci.org/shibukawa/binary-support.jsx.png)](https://travis-ci.org/shibukawa/binary-support.jsx])

Synopsis
---------------

Binary support checking utility for JSX

Motivation
---------------

JavaScript has several ways to handle binary data, but each environment support some of them.
This module provides information for that to implement effective algorithm.

Code Example
---------------

```js
import "binary-support.jsx";

class _Main {
    static function main(argv : string[]) : void
    {
        length = 100;
        if (BinarySupport.uint8array)
        {
            var uArray = new Uint8Array(length);
            uArray[0] = 100;
        }
        else // It works on old IEs
        {
            var aArray = [] : int[];
            aArray[0] = 100;
        }
    }
}
```

Installation
---------------

```sh
$ npm install binary-support.jsx
```

API Reference
------------------

It provides four readonly static variables:

### BinarySupport.arraybuffer : boolean

    If `ArrayBuffer` is supported, this value become `true`.

### BinarySupport.nodebuffer : boolean

    If `Buffer` of node.js API is supported, this value become `true`.

### BinarySupport.uint8array : boolean

    If `Uint8Array` is supported, this value become `true`.

### BinarySupport.blob : boolean

    If `Blob` is supported, this value become `true`.

Development
-------------

## Repository

* Repository: git://github.com/shibukawa/binary-support.jsx.git
* Issues: https://github.com/shibukawa/binary-support.jsx/issues

## Build Sample

```sh
$ grunt build
```

## Generate API reference

```sh
$ grunt doc
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

MIT

Complete license is written in `LICENSE.md`.

This checking algorithm is ported from [JSZip](http://stuk.github.io/jszip/). JSZip is released under MIT or GPL v3.
