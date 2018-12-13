import React from 'react';
import Book from './Book'


class MyShelf extends React.Component {
    render(){
      const shelfbooks = this.props.books;

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">


                  {shelfbooks.map(book => (
                    <li key = {book.id}>
                      <Book {...book} changeshelf={this.props.changeshelf}/>
                    </li>
                    ))}

                  </ol>
                </div>
              </div>
        )
    }
}

export default MyShelf ;
