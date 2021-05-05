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

router.get('/leave-note', (req,res,next) => {
    res.render('leave-note')
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

router.get('*', function(req, res){
    res.send('404 PAGE', 404);
});

module.exports = router