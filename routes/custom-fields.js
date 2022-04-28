const express = require('express')
const router = express.Router()
const CustomField = require('../models/custom-field')

// 사용자 정의 필드 정의
router.post('/custom', async (req, res) => {
	const { store, category, fieldName, dataType, numberUnit } = req.body

    if (dataType === 'number') {
        if (numberUnit === undefined) {
            return res.status(400).json({
				msg: '데이터 유형이 숫자인 경우, 단위를 필수로 입력해야 합니다.',
			})
        }
    }

	try {
		await CustomField.create({
			store,
			category,
			fieldName,
			dataType,
			numberUnit,
		})
	} catch (error) {
		console.error(error)
	}

	res.json({ msg: '사용자 정의 필드 정의 완료' })
})

// 사용자 정의 필드 불러오기
router.get('/custom', async (req, res) => {
	const { store, category } = req.query
    let fields
	try {
		fields = await CustomField.find({ store, category })
	} catch (error) {
		console.error(error)
	}
	res.json({ fields })
})

// 사용자 정의 필드 수정
router.put('/custom', async (req, res) => {
	const { id, fieldName, dataType, numberUnit } = req.body
	try {
		const field = await CustomField.findOne({ _id: id })
		field.fieldName = fieldName
		field.dataType = dataType
		field.numberUnit = numberUnit
		await field.save()
	} catch (error) {
		console.error(error)
	}
	res.json({ msg: '사용자 정의 필드 수정 완료' })
})

// 사용자 정의 필드 삭제
router.delete('/custom', async (req, res) => {
	const { id } = req.body
	try {
		await CustomField.deleteOne({ _id: id })
	} catch (error) {
		console.error(error)
	}
	res.json({ msg: '사용자 정의 필드 삭제 완료' })
})

module.exports = router
