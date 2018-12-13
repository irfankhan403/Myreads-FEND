import React from 'react';
import MyShelf from './MyShelf'



class Shelves extends React.Component {

    render(){
      const allBooks = this.props.allBooks
      const currentlyreading = allBooks.filter( obj => obj.shelf === "currentlyReading");
      const wantToRead  = allBooks.filter( obj => obj.shelf === "wantToRead");
      const read = allBooks.filter( obj => obj.shelf === "read");
   console.log("shekf books",allBooks);
        return(
            <div className="list-books-content">
            <div>
                <MyShelf books={currentlyreading} title={"currentlyreading"} changeshelf={this.props.changeshelf} /> {/* Want to read*/}
                <MyShelf books={wantToRead} title={"Want To Read"} changeshelf={this.props.changeshelf} />{/* Want to read*/}
                <MyShelf books={read} title ={"Read"} changeshelf={this.props.changeshelf}/>{/* Want to read*/}
       
            </div>
            </div>
        );

    }
}

export default Shelves;