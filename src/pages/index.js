// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src="../images/mountain_bw.jpg"
        alt="Black and White picture of snowy mountain in the distance"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage;

/*
====NOTES====

general
- gatsby is a static html generator. During build time, it will do any data queries and generate static HTML pages
- Data layer connects the data from the outside with the app
  - ie: database, firebase
  - to connect data to the data layer and to receive it into your html, plugins are required 
    - (see gatsby-config for more info)
- gatsby has a "built-in" router as the pages folder


*/