import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Post from "../components/Post";

const Blog = ({ data }) => (
    <Layout>
       {
           data.allMarkdownRemark.edges.map((post, i) => {
               const { title, author, date, description, path, image } = post.node.frontmatter;
               {console.log(image.childImageSharp.fluid.src)}
               return (
                   <Post
                        key={i}
                        title={title}
                        author={author}
                        date={date}
                        description={description}
                        key={`${date}__${title}`}
                        path={path}
                        image={image.childImageSharp.fluid}
                    />
                    
               )
           })
       }
    </Layout>
);

export default Blog;

export const AllBlogsQuery = graphql`
    query MyQuery {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        date
                        title
                        description
                        author
                        path
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`