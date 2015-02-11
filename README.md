# node-iBac0n

A NodeJS wrapper for [iBacon](https://github.com/moonthug/ibac0n).


### Version
0.0.1

### Installation

```sh
$ npm install https://github.com/moonthug/node-ibac0n/tarball/master
```

### Examples

```javascript

var ibac0n = require('ibac0n');

ibac0n.start('05b56fa9-b4b8-46f8-ae82-83587b5cc348', 1, 1, -60);

ibac0n.on('close', function() {
    console.log('ibac0n process ended');
});

```

### Development

Feel free to get involved. It's very much a work in progress.


### License

MIT