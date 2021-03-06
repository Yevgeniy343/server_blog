const express = require('express');
const path = require('path');
const app = new express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
mongoose.connect('mongodb+srv://batan:12qtprZT@cluster0.4rkyw.mongodb.net/blu?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true });



app.listen(4000, () => {
    console.log('App listening on port 4000');
});

app.get('/', async (req, res) => {
  const blogposts = await BlogPost.find({});
  res.render('index',{
    blogposts
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/post', (req, res) => {
  res.render('post');
});

app.get('/posts/new', (req, res) => {
  res.render('create');
});

app.post('/posts/store', async (req, res) => {
  await BlogPost.create(req.body, (error,blogpost)=>{
    res.redirect('/');
  })


});

