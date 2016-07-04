'use strict';

const dns = require('dns');

exports.fromHost = (host, cb) => {
  dns.resolve4(host, (err, addresses) => {
    if (err) { return cb(err); }

    cb(null, addresses.map(exports.fromIp));
  });
};

exports.fromIp = ip => Number('0x' + ip
  .split('.')
  .map(byte => Number(byte).toString(16))
  .join('')
).toString();