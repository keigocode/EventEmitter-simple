class MyEventEmitter {
  constructor() {
    this._events = {};
  }
  on(name, callback){
    if(!this._events[name]) {
      this._events[name] = [];
    };

    this._events[name].push(callback);
  }
  emit(name, data){
    if(!this._events[name]) return;
    const expulse = (callback) => {
      callback(data);
    }
    this._events[name].forEach(expulse);
  }
}
