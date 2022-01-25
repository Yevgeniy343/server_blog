const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb+srv://batan:12qtprZT@cluster0.4rkyw.mongodb.net/blu');

BlogPost.create({
  title: 'its2',
  body:'text text text text text text text text text text text text text text vtext texttext text'
}, (error, blogpost)=>{
  console.log(error, blogpost)
});

/*BlogPost.find({
  title:'uyuy'}, (error, blogpost) => {
  console.log(error, blogpost)
  });*/
