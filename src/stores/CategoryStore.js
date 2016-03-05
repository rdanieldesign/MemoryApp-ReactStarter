const $ = require('jquery');

const getAllCategories = function(cb){
  $.getJSON('/categories/all').done( data => {
    cb.call(this, data);
  });
}

const addCategory = function(data, cb){
  return $.ajax({
      url: '/categories/new',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(data),
      type: 'POST'
  }).done( (res) => {
      if (res.msg === '') {
        if (cb) {
          console.log('category added');
          cb.call(this);
        } else {
          console.log('category added');
        }
      } else {
          alert(res.msg);
      }
  });
};

const checkForExistingCategory = function (newCat, catList) {
  let alreadyExists = false;
  catList.forEach( (item) => {
    if (item === newCat) {
      alreadyExists = true;
    }
  });
  return alreadyExists;
}

const deleteCategory = function(id) {
  return $.ajax({
      url: `/categories/delete/${id}`,
      contentType: 'application/json',
      data: {},
      type: 'POST'
  }).done( function(res){
      if (res.msg === '') {
          console.log('deleted!');
      } else {
          alert(res.msg);
      }
  });
}

export { getAllCategories, addCategory, deleteCategory, checkForExistingCategory };
