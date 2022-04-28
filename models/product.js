const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
	{
		store: {
			type: String,
		},
		name: {
			type: String,
		},
		price: {
			type: Number,
		},
		categories: {
			type: [String],
		},
		custom: [
			{
				fieldName: String,
				dataType: String,
				numberUnit: String,
			},
		],
	},
	{ timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)
