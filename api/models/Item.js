/**
* Item.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {type: 'STRING', required: true},
    user: {type: 'STRING', required: true},
    message: {type: 'STRING', required: true},
    status: {type: 'STRING', required: true},
    project: {model: 'project'},
    documents: {
        collection: 'document',
        via: 'item'
    }
  }
};

