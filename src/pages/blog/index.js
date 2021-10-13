import React from 'react'
import Layout from '../../components/layout';
import { graphql, Link } from 'gatsby';

function BlogPage({data}) {
    return (
        <Layout>
            <ul>
            {
                data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <Link to={node.slug}>Read Post</Link>
                </article>
                ))
            }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                }
                id
                slug
            }
        }
    }
  
`;


export default BlogPage;