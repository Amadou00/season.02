function empty() {
    const EventEmitter = require('events');
    const emitter = new EventEmitter.EventEmitter;

    emitter.on('hi', () => {
        console.log('Ch0ooooooper');
    });

    emitter.emit('hi');
}

function withArgs(lst) {
    const EventEmitter = require('events');
    const emitter = new EventEmitter.EventEmitter;
    lst.forEach(element => {
        emitter.on('newFellow', () =>{
            console.log("Here come's a new pirate ->> " + element)
        });
    });

    emitter.emit('newFellow');    
}

module.exports = {
    empty, withArgs
}

