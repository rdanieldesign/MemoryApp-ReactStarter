class Memory {

  constructor (options) {
    this.category = options.category;

    this._controller();
  }

  _controller () {
    this.sayHello();
  }

  sayHello () {
  }
}

export default Memory;