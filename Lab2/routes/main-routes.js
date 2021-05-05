const express = require('express')
const fs = require('fs')
const path = require('path')

const router = express.Router()



let rawdata = fs.readFileSync('notes.json');
let notes = JSON.parse(rawdata);


router.get('/', (req,res,next) => {
    res.render('index')
})

router.get('/read-notes', (req,res,next) => {
    res.render('read-notes', { notes: notes })
})

router.post('/add-note', (req,res,next) => {
    notes.push({
        id: Math.random(),
        note: req.body.note
    })

    fs.writeFile(path.join(__dirname, '..', 'notes.json'), JSON.stringify(notes, null, 2), () => {
        res.status(302).redirect('/')
    })
})

module.exports = router