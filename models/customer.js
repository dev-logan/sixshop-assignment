const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
	{
		store: {
			type: String,
		},
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		password: {
			type: String,
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

module.exports = mongoose.model('Customer', customerSchema)
