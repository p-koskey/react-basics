import React from 'react';
import ReactDOM from 'react-dom';
//CSS
import './index.css';
//Variables
const title = 'Ambitious Girl';
const author = 'Meena Harris';

//Main Component
function BookList() {
  return (    
  <section className='booklist'>
          <Book/>
          <Book/>
          <Book/>
          <Book/>
          <Book/>
          <Book/>
  </section>
  ); 

}

//Child Component
const Book = () =>{  
  
  return <article className="book">
   <img src="https://images-na.ssl-images-amazon.com/images/I/61zcFAIwgRL._AC_UL200_SR200,200_.jpg" alt=""/>
    <h1>{title}</h1>
    <h4>{author.toUpperCase()}</h4>
   
  </article>
}


ReactDOM.render(<BookList />, document.getElementById('root'));