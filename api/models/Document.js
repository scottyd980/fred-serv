/**
* Document.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {type: 'STRING', required: true},
    type: {type: 'STRING', required: true},
    content: {type: 'STRING', required: true},
    item: {model: 'item'}
  }
};

