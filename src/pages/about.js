import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return(
        <main>
            <h1>About Me</h1>
            <Link to="/">Home</Link>
            <p>Ei ciao sono davide e questo è il mio sito</p>
        </main>
    )
}

export const Head = () => (
    <>
      <title>About Me</title>
      <meta name="description" content="Your description" />
    </>
  )
export default AboutPage