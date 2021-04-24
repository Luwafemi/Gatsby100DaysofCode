import * as React from "react";
import {Link as GatsbyLink, graphql} from 'gatsby'
import { Container,Stack, Box, Heading, Text, Link } from "@chakra-ui/react";
const Blog = ({data})=>{
    return(
        <Container maxW='xl' centerContent>
          <Heading as={`h1`} m ={5}>#100DaysOfGatsby</Heading>  
          <Stack spacing={8}>
              {data.allWpPost.nodes.map(post=>(
                <Box p={5} shadow="md" borderWidth='1px' key={post.id}>
                  <Heading as={'h2'}>{post.title}</Heading>
                  <Text mt={4}>
                      <span dangerouslySetInnerHTML={{__html:post.excerpt}}/>
                  </Text>
                  <Link as={GatsbyLink} to={"/blog"+post.uri}>{"Read More >>"}</Link>
              </Box> )
              )}
          </Stack>
        </Container>
    )
}
export const query = graphql`
    {
        allWpPost {
          nodes {
            id
            title
            date
            excerpt
            uri
          }
        }
      }
`
export default Blog