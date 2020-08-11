const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())

const posts = [
    {username: 'Andy', title: 'Post 1'},
    {username: 'Budi', title: 'Post 2'},
    {username: 'Caca', title: 'Post 3'}
]

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.listen(3000, ()=>{
    console.log('Server is running!')
})