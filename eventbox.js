function empty() {
    const EventEmitter = require('events');
    const emitter = new EventEmitter.EventEmitter;

    emitter.on('event', () => {
        console.log('Ch0ooooooper');
    });

    emitter.emit('event');
}

function withArgs(lst) {
    const EventEmitter = require('events');
    const emitter = new EventEmitter.EventEmitter;
    lst.forEach(element => {
        emitter.on('event', () =>{
            console.log("Here come's a new pirate ->> " + element)
        });
    });

    emitter.emit('event');

    
}

module.exports = {
    empty, withArgs
}

