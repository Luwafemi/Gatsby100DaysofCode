import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";

export const postQuery = graphql`
  query ($id: String!) {
    contentfulCities(id: { eq: $id }) {
      id
      name
      description
      location {
        lat
        lon
      }
      image {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO])
      }
    }
  }
`;
const Template = ({ data }) => {
  let city = data.contentfulCities;
  const image = getImage(city.image);
  return (
    <div>
      <Layout>
        {/* <img src={city.image.file.url} alt="" /> */}
        <GatsbyImage image={image} alt="image" />
        <div>
          <Link to="/location">Go Back</Link>
          <h1>{city.name}</h1>
          <h4>{city.description}</h4>
          <small>
            Lat: {city.location.lat}
            <br />
            Lon:{city.location.lon}
          </small>
        </div>
      </Layout>
    </div>
  );
};

export default Template;

// we recommend filtering by id as this is the fastest way to filter. (from the docs)  [Lines 6 and 7]
// How does this work ??
// -- Here we use Gatsby's File System Route Api to generate pages dynamically/programmatically (from GraphQL data). Since we used '{contentfulCities.name}',
//    Gatsby makes a GraphQL query, gets all 'contentfulCities.name' and creates pages with those values e.g. 'abuja', 'lagos' etc
//    It then supplies the 'id' of each value(contentfulCities.name) as an argument in lines 6 and 7 so we can get all data pertaining to each instance.
