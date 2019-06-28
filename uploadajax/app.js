const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log('Going to Store the Data in Disk');
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      console.log('File name is ',file.fieldname);
      cb(null, file.fieldname + '-' + Date.now()+".jpg")
    }
  })
  
  
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use( multer({ storage: storage }).single('file'));
app.post('/upload',(request, response)=>{
  console.log('Server Upload ......');
        response.json({'msg':'File Uploaded ....'});
})
app.listen(1234,()=>{
  console.log('Server Started...');
})