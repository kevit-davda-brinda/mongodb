const mongoose = require('mongoose');

const taskModel = mongoose.model('Tasks', {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
})

module.exports = taskModel