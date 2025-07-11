import { useParams } from "react-router-dom/cjs/react-router-dom.min"; 
import { Link } from "react-router-dom"; 
import Rating from "../components/ui/Rating"; 
import Price from "../components/ui/Price"; 
import Book from "../components/ui/Book"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  

const BookInfo = ({ books, cart, addToCart, addBookToCart }) => {   
    const { id } = useParams();   
    const book = books.find((book) => +book.id === +id);    

    // Renamed the local function
    function handleAddBookToCart(book) {     
        addToCart(book);   
    }    

    function bookExistsOnCart() {     
        return cart.find((book) => book.id === +id);   
    }    

    return (     
        <div id="books__body">       
            <main id="books__main">         
                <div className="books__container">           
                    <div className="row">             
                        <div className="books__selected--top">               
                            <Link to="/books" className="book__link">                 
                                <FontAwesomeIcon icon="arrow-left" />               
                            </Link>               
                            <Link to="/books" className="book__link">                 
                                <h2 className="book__selected--title--top">Books</h2>               
                            </Link>             
                        </div>             
                        <div className="book__selected">               
                            <figure className="book__selected--figure">                 
                                <img src={book.url} alt="" className="book__selected--img" />               
                            </figure>               
                            <div className="book__selected--description">                 
                                <h2 className="book__selected--title">{book.title}</h2>                 
                                <Rating rating={book.rating} />                 
                                <div className="book__selected--price">                   
                                    <Price                     
                                        originalPrice={book.originalPrice}                     
                                        salePrice={book.salePrice}                   
                                    />                 
                                </div>                 
                                <div className="book__summary">                   
                                    <h3 className="book__summary--title">                     
                                        <b>Summary</b>                   
                                    </h3>                   
                                    <p className="book__summary__para">                     
                                        {book.summary                       
                                            .split(new RegExp(`(${book.title})`, "g"))                       
                                            .map((part, index) =>                         
                                                part === book.title ? <em key={index}>{part}</em> : part                       
                                            )}                   
                                    </p>                 
                                </div>                 
                                {bookExistsOnCart() ? (                   
                                    <Link to={`/cart`} className="book__link">                     
                                        <button className="btn">Checkout</button>                   
                                    </Link>                 
                                ) : (                   
                                    <button className="btn" onClick={() => handleAddBookToCart(book)}>                     
                                        Add to Cart                   
                                    </button>                 
                                )}               
                            </div>             
                        </div>           
                    </div>         
                </div>         
                <div className="books__container">           
                    <div className="row">             
                        <div className="book__selected--top">               
                            <h2 className="book__selected--title--top">Recommended Books</h2>             
                        </div>             
                        <div className="books">               
                            {books                 
                                .filter((book) => book.rating === 5 && +book.id !== +id)                 
                                .map((book) => (                   
                                    <Book book={book} key={book.id} />                 
                                ))}             
                        </div>           
                    </div>         
                </div>       
            </main>     
        </div>   
    ); 
};  

export default BookInfo;