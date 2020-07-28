require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const app = express();

app.use(express.json());
app.use(cors());
/* 
Below codes are replaced by npm cors library, thanks to npm & cors
*/
//---------------------------------------------------------------------
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
//   res.setHeader('Access-Control-Allow-Header', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
//   next();
// })
//---------------------------------------------------------------------
app.use(routes);
// app.use('/v1', routes);
/* 
Below codes had been separated into individual components:
controllers, middlewares, models, routes.
for a better maintenance, readable, variable pollution avoiding.
*/
//---------------------------------------------------------------------
// app.get('/posts', (req, res) => {
//   return res.json(post);
// })

// app.get('/posts/:id', (req, res) => {
//   const { id } = req.params;
//   if(id !== undefined) {
//     const postFound = post.find((postByUser) => (postByUser.id === +id));
//     if(!postFound) {
//       return res.status(404).json('post not found')
//     }
//     return res.json(postFound);
//   }
//   return res.status(400).json('id not found');
// })

// app.post('/posts', (req, res) => {
//   const { author, content } = req.body;
//   const newPost = {
//     author,
//     content,
//     id: currentId++
//   }
//   post.push(newPost);
//   return res.status(201).json(newPost);
// })

// app.delete('/posts/:id', (req, res) => {
//   const { id } = req.params;
//   const postIndex = post.findIndex((postByUser) => (postByUser.id === Number(id)));
//   if(postIndex === -1) {
//     return res.status(404).json('post not found');
//   }
//   post.splice(postIndex, 1);
//   return res.status(200).json('post had been deleted');
// })

// app.put('/posts/:id', (req, res) => {
//   const { id } = req.params;
//   const { author, content } = req.body;
//   const postFound =  post.find((postByUser) => (postByUser.id === Number(id)));
//   if(!postFound) {
//     return res.status(404).json('post not found');
//   }
//   postFound.author = author;
//   postFound.content = content;
//   return res.json(postFound);
// })
//---------------------------------------------------------------------

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`------- Captain Teemo on duty ${PORT} -------`)
})
