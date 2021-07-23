const express = require('express');
const app = express();
const port = 80;

var md5 = require('md5');

app.get('/:tagId', (req, res) => {
    var id = req.params.tagId;
    var value = '';
    // for(let i=0; i< 100000; i++) {
    //     value = id
    // }
    // value = id
    value = 'aaaaㅂㅈㅁㅁㅈ1111'
    res.send(value);
})

app.get('/hash/:tagId', (req, res) => {
    var id = req.params.tagId;
    var value = '';
    // for(let i=0; i< 100000; i++) {
    //     value = md5(id)
    // }
    value = md5(id)
    res.send(value);
})

app.listen(port, () => {
    console.log("port : ", port);
})