const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
	{
		store: {
			type: String,
		},
		status: {
			type: String,
		},
		customer: {
			type: String,
		},
		products: {
			type: [String],
		},
		price: {
			type: Number,
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

module.exports = mongoose.model('Order', orderSchema)
