const $ = require('jquery');

const getAllMemories = function(){
    return $.getJSON('/records/all');
}

const getSingleMemory = function(id){
    return $.getJSON('/records/single/' + id);
}

const addMemory = function(memory){
  let data = { properties: JSON.stringify(memory) };
    return $.ajax({
        url: '/records/new',
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
