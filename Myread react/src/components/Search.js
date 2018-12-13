
import React from 'react';
import * as BooksAPI from '../BooksAPI';
import Book from './Book'



class Search extends React.Component{
  state = {
    value:"",
    books:[]
  };

  handleChange = (event)=> {
    this.setState({value: event.target.value});
  }

  _handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      BooksAPI.search(this.state.value).then( resp => this.setState({ books: resp }) );

    }
  }

    render(){
      let books="";
      if(!this.state.books.error && books){
        books=this.state.books.map(book => (
        <li key = {book.id}>
          <Book {...book} changeshelf={this.props.changeshelf}/>
        </li>
        ))
      }else {

        books="No Book Found";
      }


        return(

           <div className="search-books">
            <div className="search-books-bar">
            <button className="close-search" onClick={() => this.props.showSearchPage(false)}>Close</button>
            <div className="search-books-input-wrapper">


                {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
                */}

                <input type="text" placeholder="Search by title or author" value={this.state.value} onChange={this.handleChange} onKeyPress={this._handleKeyPress} />

            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">

             {
               books
             }

            </ol>
            </div>
        </div>
      )
    }

}
export default Search
