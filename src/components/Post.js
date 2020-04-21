import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image"


const Card = styled.article.attrs({
    className: "bg-white center mw6-ns mw5 ba b--black-10 mv4 avenir"
})``

const CardTitleDiv = styled.div.attrs({
    className: "pv2 ph3"
})``

const CardTitle = styled.h1.attrs({
    className: "f3-ns f5 ttu tracked"
})``

const CardContentDiv = styled.div.attrs({
    className: "pa3"
})``

const CardContentLink = styled.p.attrs({
    className: "link dim black f4-ns f6 lh-title",
})``

const CardContentDetail = styled.small.attrs({
    className: "gray db pv2"
})``

const Post = ({ title, author, date, description, path, image }) => (
    <Card>
        <CardTitleDiv>
            <CardTitle>{title}</CardTitle>
        </CardTitleDiv>
        <Img fluid={image}/>
        <CardContentDiv>
            <Link to={path}><CardContentLink>{description}</CardContentLink></Link>
            <CardContentDetail>{author} @ <time>{date}</time></CardContentDetail>
        </CardContentDiv>
    </Card>
);

export default Post;