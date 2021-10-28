import React from 'react'
import ReactDom from 'react-dom'

import { booklist } from './books'
import Book from './Book'
//CSS
import './index.css'

function Greeting() {
  return (
    <section className='booklist'>
      {booklist.map((prop) => {
        return (
          <Book
            img={prop.image}
            title={prop.title}
            author={prop.author}
            number={prop.number}
            description={prop.description}
          />
        )
      })}
    </section>
  )
}

ReactDom.render(<Greeting />, document.getElementById('root'))
