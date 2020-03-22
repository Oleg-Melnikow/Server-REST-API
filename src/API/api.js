import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7000/'
})

export const API = {
    async getBooks() {
        let response = await instance.get('books')
        return response.data
    },
    async deleteBook(bookId){
        debugger
        let response = await instance.delete(`books/${bookId}`)
        return response.data
    },
    async updateBook(book, bookId){
        return instance.put(`books/${bookId}`, book)

    }
}