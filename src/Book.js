import React from 'react'

const Book = (props) => {
  const { img, title, author, number, description } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>by {author}</h4>
      <p>{number}</p>
      {description}
    </article>
  )
}

export default Book
