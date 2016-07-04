'use strict';

const hostToDword = require('./index');
const dns = require('dns');
const assert = require('assert');

const DUMMY_HOST = 'dummy.host';
const DUMMY_IP = '12.34.56.78';
const DUMMY_DWORD = '203569230';

// Setup mocks
dns.resolve4 = (host, cb) => cb(null, [DUMMY_IP]);

hostToDword.fromHost(DUMMY_HOST, (err, addresses) => {
  assert.strictEqual(addresses[0], DUMMY_DWORD);
});

assert.strictEqual(hostToDword.fromIp(DUMMY_IP), DUMMY_DWORD);
