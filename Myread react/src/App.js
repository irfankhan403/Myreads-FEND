import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelves from './components/Shelves'
import Search from './components/Search'
import SearchButton from './components/Searchbutton'
import Header from './components/Header'


import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  };

  updateSearchPage = (state) => {
    this.setState({
      showSearchPage: state
    });
  };
  
  
 /* Getting books*/
    componentDidMount(){
      /*BooksAPI.getAll().then( (resp) => console.log(resp) ) */
      /* changing state */
      BooksAPI.getAll().then( resp => this.setState({ books: resp }) );
    }
 
    changebookshelf = (book, shelf) => {
      console.log("books indi", this);
      this.setState({ books: this.state.books.map(d => { 
        if( d.id === book.id){
         // console.log("d id id", d.id)
          //console.log("book id is", book.id)
          d.shelf = shelf;
          return d;
        }else
          return d;
           })
      });
    };

  

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (

          //search component
         <Search showSearchPage={this.updateSearchPage} />

          
        ) : (
          <div className="list-books">
            <Header />
            <Shelves 
                allBooks =  {this.state.books} 
                changeshelf= {this.changebookshelf}/>
            <SearchButton  showSearchPage={this.updateSearchPage}/>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
