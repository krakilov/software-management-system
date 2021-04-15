const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
    isPrivate: {
        type: Boolean,
        required: true,
        default: false
    },
    author: {
        type: Types.ObjectId,
        required: true
    },
    members: [Types.ObjectId],
    tasks: [Types.ObjectId]
}, { collection: 'projects' });

module.exports = model('User', schema);