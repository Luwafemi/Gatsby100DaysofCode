import React from "react";
import { graphql,Link } from "gatsby";
import { Container,Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/layout";
import { Helmet } from "react-helmet";

export const postQuery = graphql`
  query ($pathh: String!) {
    wpPost(uri: { eq: $pathh }) {
        id
        title
        date
        excerpt
        uri
        seo {
        metaDesc
      }
    }
  }
`;
const Template = ({ data }) => {
  let post = data.wpPost
  return (
    <div>
      <Layout>
      <Helmet> 
       <meta name="description" content={post.seo.metaDesc} />
      </Helmet>
      <Container maxW='xl' centerContent>
                <Box p={5} mt={10} shadow="md" borderWidth='1px'>
                  <Heading as={'h2'}>{post.title}</Heading>
                  <Text mt={4}>
                      <span dangerouslySetInnerHTML={{__html:post.excerpt}}/>
                  </Text>
                  <Link to='/blog'> {'<< Go back'}</Link>
              </Box> 
        </Container>
      </Layout>
    </div>
  );
};

export default Template;


