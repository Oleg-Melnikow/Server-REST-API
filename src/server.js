const express = require("express");
const app = express();
const cors = require("cors");
const {v1: uuidv1} = require('uuid');

let books = [
    {
        id: uuidv1(),
        name: "The Old Man and The Sea",
        author: "Ernest Hemingway",
        url: "https://i.pinimg.com/originals/2b/2c/77/2b2c77008a3051fb688ec5085fa7873d.jpg"
    },
    {
        id: uuidv1(),
        name: "The Godfather",
        author: "Mario Puzo",
        url: "https://i05.kanobu.ru/c/839aeb62eeeabc84dca3a8ad4c0a3a7b/200x284/u.kanobu.ru/entities/7/cc4a555e-a39c-4ba0-9eb6-f97d2177fe43.jpg"
    },
    {
        id: uuidv1(),
        name: "The Richest Man in Babylon",
        author: "George S. Clason",
        url: "https://images-na.ssl-images-amazon.com/images/I/41u6OPmichL._SX331_BO1,204,203,200_.jpg"
    }
]

app.use(express.json())

app.use(cors({
    origin: "*",
    method: ["GET", "PUT", "POST", "DELETE"]
}))

app.get('/books', (req, res, next) => {
    res.send(books);
});

app.get("/books/:id", cors(), (req, res, next) => {
    const bookId = req.params.id
    const book = books.find(b => b.id === bookId)
    if (book) {
        return res.json(book)
    }
    return res.status(404).json({status: `Book with ${bookId} not found`})

});

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id
    console.log(req.params.id)
    books = books.filter(b => b.id !== bookId)
    const delBook = books.find(b => b.id === bookId)
    if (!delBook) {
        return res.status(200).json(books)
    } else {
        return res.send("Something wrong").status(400)
    }
});

app.put("/books/:id", cors(), (req, res) => {
    const bookId = req.params.id
    console.log(req.body)
    books.forEach((book) => {
        if (book.id === bookId) {
            book.name = req.body.name
            book.author = req.body.author
            book.url = req.body.url
        }
    })
    const newBook = books.find(b => b.id === bookId)
    return res.json(newBook)
})


app.listen(7000, () => {
    console.log("It's working", new Date())
})