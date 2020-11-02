function empty() {
    const EventEmitter = require('events');
    const emitter = new EventEmitter.EventEmitter;

    emitter.on('hi', () => {
        console.log('Ch0ooooooper');
    });

    emitter.emit('hi');
}

function withArgs(lstName) {
    const EventEmitter = require('events');
    const emitter = new EventEmitter.EventEmitter;
    lstName.forEach(element => {
        console.log("Here come's a new pirate ->> " + element)
    });

    lstName.forEach(name => {
        emitter.emit('newFellow')
    });  
}

module.exports = {
    empty, withArgs
}

