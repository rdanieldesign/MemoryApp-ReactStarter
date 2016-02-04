const $ = require('jquery');

const memories = [];

const filterByType = function(data, type){
  let filtered = data.filter( (el) => {
    return el.properties.type === type;
  })
  return filtered;
}

const getAllMemories = function(type, cb, context){
  $.getJSON('/records/all').done( data => {
    let results = filterByType(data, type);
    cb.call(context, results);
  });
}

const getAllByType = function(type, cb) {
  getAllMemories(type, cb, this);
}

const getByInput = function(input, arr){
   return arr.filter( function(item){
    let title = item.properties.title.toLowerCase();
    let searchTerm = input.toLowerCase();
    if(title.indexOf(searchTerm) != -1) {
      return item;
    }
  });
};

export { getAllByType, getByInput };
