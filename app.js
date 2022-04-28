const express = require('express')
const connect = require('./models')
const cors = require('cors')
const routers = require('./routes')
const app = express()

require('dotenv').config()
connect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Request log
app.use((req, res, next) => {
	if (req.originalUrl === '/') return next()
	console.log(
		'Request URL:',
		`[${req.method}]`,
		req.originalUrl,
		' - ',
		new Date().toLocaleString(),
		req.ip
	)
	next()
})

app.use(routers)

// 클라이언트에 error 내용 전송
app.use((err, req, res, next) => {
	res.status(400).send({ errorMessage: err })
})

app.listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!')
})
