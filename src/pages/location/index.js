import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";

export const query = graphql`
  {
    allContentfulCities {
      edges {
        node {
          name
          description
          gatsbyPath(filePath: "/location/{contentfulCities.name}")
          location {
            lat
            lon
          }
        }
      }
    }
  }
`;
const Location = ({ data }) => (
  <Layout>
    {data.allContentfulCities.edges.map(({ node: city }) => (
      <div key={city.id}>
        <h4>
          <Link to={city.gatsbyPath}>{city.name}</Link>
        </h4>
        -{city.description}
        <br />
        <small>
          Lat: {city.location.lat}
          <br />
          Lon:{city.location.lon}
        </small>
      </div>
    ))}
  </Layout>
);

export default Location;
