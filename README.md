# node-iBac0n

A simple command line app for creating an iBeacon on a Mac.

Based heavily on [BeaconOSX](https://github.com/mttrb/BeaconOSX).

### Version
0.0.1

### Installation

```sh
$ npm install https://github.com/moonthug/node-ibac0n/tarball/master
```

### Examples

```javascript

var ibac0n = require('ibac0n');

ibacon.start('05b56fa9-b4b8-46f8-ae82-83587b5cc348', 1, 1, -60);

ibacon.on('close', function() {
    console.log('ibac0n process ended');
});

```

### Development

Feel free to get involved. It's very much a work in progress.


### License

MIT