import Memory from './memory';

class Person extends Memory {

  constructor (person) {

    const options = {
      title: person.title || '',
      age: person.age || null
    }

    super(options);

    this.options = options;

    this.controller();
  }

  controller () {
    console.log(this.options);
  }
}

export default Person;