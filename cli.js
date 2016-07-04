#!/usr/bin/env node

'use strict';

const hostToDword = require('./index.js');

switch (process.argv[2]) {
  case '-h':
    hostToDword.fromHost(process.argv[3], (err, addresses) => {
      if (err) {
        console.log(err.stack);
        process.exit(1);
      }

      console.log(addresses.join('\n'));
    });
    break;

  case '-4':
    console.log(hostToDword.fromIp(process.argv[3]));
    break;

  default:
    console.log('Usage: host-to-dword <format> <hostname or address>');
    console.log('');
    console.log('  Where <format> is either:');
    console.log('    -h    for hostname resolution');
    console.log('    -4    for IPv4 resolution');
    process.exit(1);
}