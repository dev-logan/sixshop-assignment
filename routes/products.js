const express = require('express')
const router = express.Router()
const Product = require('../models/product')

// 상품 정보 등록
router.post('/products', async (req, res) => {
	const { store, name, price, categories, custom } = req.body

	// value 값의 type 확인
	for (const field of custom) {
		const { dataType, value } = field

		let typeCheck
		if (dataType === 'Date') {
			typeCheck = value instanceof Date
		} else if (dataType === 'string') {
			typeCheck = typeof value === 'string'
		} else if (dataType === 'Array') {
			typeCheck = value instanceof Array
		} else if (dataType === 'number') {
			typeCheck = typeof value === 'number'
		} else {
			return res.status(400).json({
				msg: '올바른 데이터 유형을 입력해주세요.',
			})
		}
		if (!typeCheck) {
			return res.status(400).json({
				msg: '사용자 정의 필드 입력값의 데이터 유형을 확인해주세요.',
			})
		}
	}

	try {
		await Product.create({ store, name, price, categories, custom })
	} catch (error) {
		console.error(error)
	}
	res.json({ msg: '상품 정보 등록 완료' })
})

module.exports = router
