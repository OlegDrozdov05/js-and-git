import EventEmitter from 'events'
const emitter = new EventEmitter();
const eventName = 'greet'

//.on - выполняет колбэк функцию когда у eventName происходит emit
emitter.on(eventName,() => console.log("Hello"))
emitter.on(eventName,() => console.log("How are you"))
emitter.on(eventName,() => console.log("test"))
emitter.on(eventName, function(data){
    console.log(data);
});
//emitter.emit(eventName) - вызов eventName (можно передавать параметры)
emitter.emit(eventName,"dataaaa");