import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/Layout";

const Container = styled.div.attrs({
  className: "pa6 avenir"
})``

const Title = styled.h1.attrs({
  className: "mt4"
})``

const Subtitle = styled.p.attrs({
  className: "fw2 mb5"
})``

const Back = styled.a.attrs({
  className: "link dim black"
})``

export default function Template({ data }) {
    const post = data.markdownRemark;
    const { title, author, date } = post.frontmatter;
    return (
        <Layout>
          <Container>
            <Link to="/"><Back>Back to blogs</Back></Link>
            <Title>{title}</Title>
            <Subtitle>Posted by {author} on {date}</Subtitle>
            <div dangerouslySetInnerHTML={{__html: post.html }}/>
          </Container>
        </Layout>
    )
}

//https://ultimatecourses.com/blog/building-a-blog-with-gatsby-and-graphql

export const postQuery = graphql`
query BlogPost($path:String! ) {
    markdownRemark(frontmatter: {path: {eq: $path }}) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`; 