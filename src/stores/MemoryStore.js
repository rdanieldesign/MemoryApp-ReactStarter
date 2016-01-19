const $ = require('jquery');

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

const addMemory = function(memory){
  let data = JSON.stringify({ properties: memory });
    return $.ajax({
        url: '/records/new',
        contentType: 'application/json',
        dataType: 'json',
        data: data,
        type: 'POST'
    }).done( function(res){
        if (res.msg === '') {
            console.log('great!');
        } else {
            alert(res.msg);
        }
    });
};

// export { Memories as default, addMemory };
export { getAllMemories, getSingleMemory, addMemory };
