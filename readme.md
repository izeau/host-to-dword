# host-do-dword

Simple Node utility to convert hostnames or IP addresses to their DWORD equivalent.

## Usage

### API (install with `npm install host-to-dword`)

```js
const hostToDword = require('host-to-dword');

// Asynchronous because we use DNS resolution
hostToDword.fromHost('github.com', (err, addresses) => {
  // addresses is an array of dwords
});

// dword is the IP converted to a dword
const dword = hostToDword.fromIp('12.34.56.78');
```

### Command line (install with `npm install -g host-to-dword`)

```
host-to-dword -h github.com
host-to-dword -4 12.34.56.78
```

## License (MIT)

Copyright (c) 2016 Jean Dupouy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
