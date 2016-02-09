const $ = require('jquery');
import Person from '../actions/person.js';

const getAllMemories = function(cb){
    $.getJSON('/records/all').done( data => {
      cb.call(this, data);
    });
}

const getSingleMemory = function(id, cb){
    $.getJSON('/records/single/' + id).done( data => {
      cb.call(this, data[0]);
    });
}

const formatData = function(data) {
  return JSON.stringify({
    type: data.type,
    title: data.title,
    properties: data.properties
  });
}

const addMemory = function(data){
  let formattedData = formatData(data);
  return $.ajax({
      url: '/records/new',
      contentType: 'application/json',
      dataType: 'json',
      data: formattedData,
      type: 'POST'
  }).done( function(res){
      if (res.msg === '') {
          console.log('great!');
      } else {
          alert(res.msg);
      }
  });
};

const updateMemory = function(data) {
  let formattedData = formatData(data);
  return $.ajax({
      url: `/records/update/${data._id}`,
      contentType: 'application/json',
      data: formattedData,
      type: 'PUT'
  }).done( function(res){
      if (res.msg === '') {
          console.log('wonderful!');
      } else {
          alert(res.msg);
      }
  });
}

const testClass = (memory) => {
  // new Person(memory);
}

// export { Memories as default, addMemory };
export { getAllMemories, getSingleMemory, addMemory, updateMemory };
