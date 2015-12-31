const Memories = [
  {
    title: 'Title 1',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit atque, omnis similique iste obcaecati quaerat quasi voluptas. Harum recusandae aperiam aliquam amet. Praesentium saepe cumque eius ea esse consectetur qui!',
    _id: 1
  },
  {
    title: 'Title 2',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit atque, omnis similique iste obcaecati quaerat quasi voluptas. Harum recusandae aperiam aliquam amet. Praesentium saepe cumque eius ea esse consectetur qui!',
    _id: 2
  },
  {
    title: 'Title 3',
    copy: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit atque, omnis similique iste obcaecati quaerat quasi voluptas. Harum recusandae aperiam aliquam amet. Praesentium saepe cumque eius ea esse consectetur qui!',
    _id: 3
  }
];

const addMemory = memory => {
  memory['_id'] = Memories.length + 1;
  Memories.push(memory);
  console.log(Memories);
};

export { Memories as default, addMemory };
