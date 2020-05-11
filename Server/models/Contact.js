

const mongoose = require('mongoose');
const {Schema} = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name'
      },
    number:{
        type: String,
        required: 'Kindly enter the number'
      }
})

mongoose.model('contacts', contactSchema);