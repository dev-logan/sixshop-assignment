const mongoose = require('mongoose')

const customFieldSchema = new mongoose.Schema(
    {
        store: {
            type: String,
        },
        category: {
            type: String,
        },
        fieldName: {
            type: String,
        },
        dataType: {
            type: String,
        },
        numberUnit: {
            type: String,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('CustomField', customFieldSchema)
