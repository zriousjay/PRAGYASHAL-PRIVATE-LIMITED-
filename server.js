const express = require('express');
const mid = express();

mid.listen(3000);
mid.get('/',(res)=>{res.send('hello world')});