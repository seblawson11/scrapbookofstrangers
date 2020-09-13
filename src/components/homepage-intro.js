import React from 'react'
import './homepage-intro.scss'
import Button from '@material-ui/core/Button';
import { Link } from "gatsby"

const HomepageIntro = () => {
  return (
    <div className="homepage-intro">
      <div className="homepage-title">
        <h2>Welcome to The Scrapbook of Strangers</h2>
        <h3> This is not a blog, its a book. Happy Reading.</h3>
        <div className="homepage-buttons">
          <Link to="/posts/">
            <Button variant="contained" color="primary">
                Read the Book
            </Button>
          </Link>
          <Link to="/whereandhow/">
            <Button variant="contained" color="primary">
                Write for the book
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomepageIntro
