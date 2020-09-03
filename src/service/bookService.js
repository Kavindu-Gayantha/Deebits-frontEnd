import React from 'react';
import axios from 'axios';

const BASE_URL_FOR_BOOKS="http://localhost:8081/api";

class BookService {
    //get all books
    getAllBooks(){
        return axios.get(BASE_URL_FOR_BOOKS+'/'+`books`);
    }
    //get book by id
    getBookById(bookId){
        return axios.get(BASE_URL_FOR_BOOKS+'/'+bookId);
    }
    // add a book to the list
    addBook(book){
        return axios.post(BASE_URL_FOR_BOOKS+'/'+book);

    }
    //update a book 
    updateBook(book,bookId){
        return axios.put(BASE_URL_FOR_BOOKS+'/'+bookId,book);
    }
    //delete a book by id
    deleteBook(bookId){
        return axios.delete(BASE_URL_FOR_BOOKS+'/'+bookId);
    }
}
export default new BookService();
