const $ = require('jquery');

class Util {

  constructor () {}

  extend(obj1, obj2) {
    let newObj = Object.assign(obj1, obj2);
    return newObj;
  }

  inputFormatter(input) {
    // {fieldName: 'title', fieldValue: 'Taylor', type: 'person', id: '432423423423'}
    let data;
    if (input.target) {
      data = {
        fieldName: input.target.name,
        fieldValue: input.target.value,
        type: $(input.target).attr('data-type') || null,
        id: $(input.target).attr('data-id') || null
      }
    } else {
      data = {
        fieldName: input.fieldName,
        fieldValue: input.fieldValue,
        type: input.type || null,
        id: input.id || null
      }
    }
    return data;
  }
}
export default Util;