const Memories = [
  {
    properties: {
      name: 'Title 1',
      age: 26
    },
    _id: 1
  },
  {
    properties: {
      name: 'Title 2',
      date: '01/21/1989'
    },
    _id: 2
  },
  {
    properties: {
      name: 'Title 3',
      copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    _id: 3
  }
];

const addMemory = memory => {
  let newRecord = {
    _id: Memories.length + 1,
    properties: memory
  }
  Memories.push(newRecord);
  console.log(Memories);
};

export { Memories as default, addMemory };
