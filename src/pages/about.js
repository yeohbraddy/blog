import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

const AboutContainer = styled.div.attrs({
    className: "dt mw6-ns mw5 center pv4 pv5-m pv6-ns avenir"
})``

const ImgContainer = styled.div.attrs({
    className: "dtc v-mid"
})``

const Img = styled.img.attrs({
    className: "mw5",
    src: "../images/me.jpg",
    alt: "Me"
})``

const AboutContentContainer = styled.div.attrs({
    className: "dtc v-mid pl3"
})``

const AboutContent = styled.div.attrs({
    className: "lh-copy"
})``

const Website = styled.a.attrs({
    className: "avenir",
    href: "https://www.yeohbraddy.com",
    target: "_blank"
})``

const About = () => (
    <Layout>
        <AboutContainer>
            <ImgContainer>
                {/* <Img/> */}
            </ImgContainer>
            <AboutContentContainer>
                <AboutContent>
                    Hi, I'm Braddy. You can find more about me at
                    <Website> https://www.yeohbraddy.com</Website>
                </AboutContent>
            </AboutContentContainer> 
        </AboutContainer> 
    </Layout>
);

export default About;