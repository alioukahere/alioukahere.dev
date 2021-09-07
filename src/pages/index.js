import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'

const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Mamadou Aliou Diallo - Full Stack Web Developer</title>
      </Helmet>

      <Header />
    </main>
  )
}

export default IndexPage
