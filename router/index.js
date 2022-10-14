const {Router} = require('express')

const router = Router()

const fs = require('fs')

router.get('/get-goodslist', (req, res) => {
    fs.readFile('data/goodslist.json', (err, data) => {
        if (err) return console.log(err)

        // console.log()
        res.send(JSON.parse(data))
    })
})
router.get('/get-swiperlist', (req, res) => {
    fs.readFile('data/swiperlist.json', (err, data) => {
        if (err) return console.log(err)

        // console.log()
        res.send(JSON.parse(data))
    })
})
router.get('/get-swiperlistes', (req, res) => {
    fs.readFile('data/swiperlistes.json', (err, data) => {
        if (err) return console.log(err)

        // console.log()
        res.send(JSON.parse(data))
    })
})
router.get('/get-swiperone', (req, res) => {
    fs.readFile('data/swiperone.json', (err, data) => {
        if (err) return console.log(err)

        // console.log()
        res.send(JSON.parse(data))
    })
})
router.get('/get-miaoshaone', (req, res) => {
    fs.readFile('data/miaoshaone.json', (err, data) => {
        if (err) return console.log(err)
        router.get('/get-navlist', (req, res) => {
            fs.readFile('data/navlist.json', (err, data) => {
                if (err) return console.log(err)

                // console.log()
                res.send(JSON.parse(data))
            })
        })
        router.get('/get-classlist', (req, res) => {
            fs.readFile('data/classlist.json', (err, data) => {
                if (err) return console.log(err)

                // console.log()
                res.send(JSON.parse(data))
            })
        })

        // console.log()
        res.send(JSON.parse(data))
    })
})
router.get('/get-miaoshatwo', (req, res) => {
    fs.readFile('data/miaoshatwo.json', (err, data) => {
        if (err) return console.log(err)

        // console.log()
        res.send(JSON.parse(data))
    })
})

router.get('/get-classlist',(req,res) => {
    fs.readFile('data/classlist.json',(err,data) =>{
        if (err) return console.log(err)

        // console.log()
        res.send(JSON.parse(data))
    })
})

router.get('/get-administrators',(req,res) => {
    fs.readFile('data/administrators.json',(err,data) =>{
        if (err) return console.log(err)

        // console.log()
        res.send(JSON.parse(data))
    })
})


router.get('/get-miaoshatwo',(req,res) => {
    fs.readFile('data/miaoshatwo.json',(err,data) =>{
        if (err) return console.log(err)

        // console.log()
        res.send(JSON.parse(data))
    })
})




module.exports = router