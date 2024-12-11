const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/my-portfolio').then(() => console.log('mongodb connected'))
mongoose.connect('mongodb+srv://deepaportfolio:32132132@cluster0.u6g5t.mongodb.net/my-portfolio').then(() => console.log('mongodb connected'))