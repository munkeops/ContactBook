
'use strict';
var mongoose = require('mongoose'),


Contact = mongoose.model('contacts');




exports.list_all_contacts = function(req, res) {
  Contact.find({}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};




exports.create_a_contact = function(req, res) {
  var new_contact = new Contact(req.body);
  new_contact.save(function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};


exports.read_a_contact = function(req, res) {
  Contact.find({productId:req.params.productId}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};


exports.update_a_contact = function(req, res) {
  Contact.findOneAndUpdate({productId: req.params.productId}, req.body, {new: true}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};


exports.delete_a_contact = function(req, res) {


  Contact.remove({
    _id: req.params.productId
  }, function(err, contact) {
    if (err)
      res.send(err);
    res.json({ message: 'Contact successfully deleted' });
  });
};