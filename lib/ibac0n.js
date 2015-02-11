/**
 * Created by moonman
 */

///////////////////////////////////////////////////////////////////////////////
//
//
// DEPENDENCIES
//

// Packages
var childProcess = require('child_process'),
    events       = require('events'),
    path         = require('path'),
    util         = require('util');

// Libs


///////////////////////////////////////////////////////////////////////////////
//
//
// IMPLEMENTATION
//

//
// Config
var ibac0nBinary    = path.resolve(__dirname + '/../bin/ibac0n');


///////////////////////////////////////
//
// CONSTRUCTOR


/**
 *
 * @constructor
 */
var IBac0n = function() {
    events.EventEmitter.call(this);

    this.process    = null;
    this.isRunning  = false;
};


util.inherits(IBac0n, events.EventEmitter);

///////////////////////////////////////
//
// PUBLIC METHODS

/**
 *
 * @param {String} uuid
 * @param {Number} majorVersion
 * @param {Number} minorVesion
 * @param {Number} power
 */
IBac0n.prototype.start = function(uuid, majorVersion, minorVesion, power) {
    var self = this;

    if(!uuid) throw new Error('A UUID must be specified');

    if(this.isRunning == true) {
        return;
    }

    var args = [
        uuid,
        majorVersion    || 1,
        minorVesion     || 1,
        power           || -60
    ];

    this.process = childProcess.spawn(ibac0nBinary, args);
    this.isRunning = true;

    this.process.stdout.on('data', function (data) {
    });

    this.process.stderr.on('data', function (data) {
        //self.emit('error');
    });

    this.process.on('close', function (code) {
        self.emit('close', code);
    });
};

/**
 *
 */
IBac0n.prototype.stop = function() {
    this.process.stdin.end();
};

///////////////////////////////////////
//
// PRIVATE METHODS


///////////////////////////////////////////////////////////////////////////////
//
//
// EXPORTS
//

module.exports = new IBac0n();