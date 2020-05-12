const mongoose = require('mongoose');
const Contact = mongoose.model('contacts');

module.exports = (app) => {

  app.get('/api/contact', async (req, res) => {
    let contacts = await Contact.find();
    return res.status(200).send(contacts);
  });

  app.post(`/api/contact`, async (req, res) => {
    // const user = new Contact();
    // user.name = req.body.name;
    // user.number = req.body.number;
    // // user.email = req.body.email;
    // user.save();
    // let contact = await Contact.create(req.body);

    var contact= new Contact(req.body);
    contact.save(function(err, cartItem) {
      if (err)
        res.send(err);
      res.json(cartItem);
    });
    // return res.status(201).send({
    //   error: false,
    //   user
    // })
  })

  app.put('/api/contact/:id', async (req, res) => {
    const {id} = req.params;

    let contact = await Contact.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      contact
    })

  });

  app.delete('/api/contact/:id', async (req, res) => {
    const {id} = req.params;

    let contact = await Contact.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      contact
    })

  })

}