import React from 'react'
import ReactDOM from 'react-dom'
//CSS
import './index.css'
//Variables
const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/61zcFAIwgRL._AC_UL200_SR200,200_.jpg',
  title: 'Ambitious Girl',
  author: 'Meena Harris',
}
const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL._AC_UL200_SR200,200_.jpg',
  title: 'Becoming',
  author: 'Mitchelle Obama',
}

//Main Component
function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

//Child Component
const Book = ({img, title, author}) => {

  //const {img, title, author} = props ---> props destructuring
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList />, document.getElementById('root'))
