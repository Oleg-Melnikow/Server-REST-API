const express = require("express");
const app = express();
const cors = require("cors");

let books = [
    {
        id: 1,
        name: "The Old Man and The Sea",
        author: "Ernest Hemingway",
        url: "https://i.pinimg.com/originals/2b/2c/77/2b2c77008a3051fb688ec5085fa7873d.jpg"
    },
    {
        id: 2,
        name: "The Godfather",
        author: "Mario Puzo",
        url: "https://i05.kanobu.ru/c/839aeb62eeeabc84dca3a8ad4c0a3a7b/200x284/u.kanobu.ru/entities/7/cc4a555e-a39c-4ba0-9eb6-f97d2177fe43.jpg"
    },
    {
        id: 3,
        name: "The Richest Man in Babylon",
        author: "George S. Clason",
        url: "https://images-na.ssl-images-amazon.com/images/I/41u6OPmichL._SX331_BO1,204,203,200_.jpg"
    }
]

app.use(cors({
    origin: "*",
    method: ["GET", "PUT", "POST", "DELETE"]
}))

app.get('/books', (req, res, next) => {
    res.send(books);
});

app.get("/books/:id", cors(), (req, res, next) => {
    const bookId = parseInt(req.params.id, 10)
    const book = books.find(b => b.id === bookId)
    if (book) {
        return res.json(book)
    }
    return res.status(404).json({status: `Book with ${bookId} not found`})

});


app.listen(7000, () => {
    console.log("It's working", new Date())
})