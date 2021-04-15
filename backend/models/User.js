const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        required: true
    },
    projects: [Types.ObjectId]
}, { collection: 'users' });

module.exports = model('Project', schema);