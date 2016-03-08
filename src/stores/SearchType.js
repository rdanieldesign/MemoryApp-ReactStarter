const $ = require('jquery');

const memories = [];

const filterByType = function(data, type) {
  let filtered = data.filter( (el) => {
    return el.type === type;
  })
  return filtered;
}

const getAllByType = function(type, cb) {
  $.getJSON(`/records/category/${type}`).done( data => {
    cb.call(this, data);
  });
}

const getByInput = function(input, arr) {
   return arr.filter( function(item){
    let title = item.title ? item.title.toLowerCase() : '';
    let searchTerm = input.toLowerCase();
    if(title.indexOf(searchTerm) != -1) {
      return item;
    }
  });
};

export { getAllByType, getByInput };
