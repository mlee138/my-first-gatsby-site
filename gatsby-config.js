module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'blog',
        path: `${__dirname}/blog`
      }
    },
    "gatsby-plugin-mdx"
  ],
};

/* 
plugins
- each plugin is a seperate npm package
- look through docs to find the plugin I need 

types of plugins
- source: tells gatsby where to get the data from
  - ie. filestyem, CMS, database
- transformer: converts data nodes into a node of readable data
- to use any of the data, you must use GraphQL queries
*/