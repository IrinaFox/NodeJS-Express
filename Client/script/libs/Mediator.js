'use strict';

function Mediator () {
    var channels = {};

    this.sub = function (channel, callback) {
        if (!channels[channel]) {
            channels[channel] = [];
        }

        channels[channel].push(callback);
    };

    this.pub = function (channel, arg) {
        if (channels[channel]) {
            channels[channel].forEach (function (callback) {
                callback(arg);
            });
        }
    };

    return this;
}