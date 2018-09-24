import { gql } from "apollo-boost";

export default gql`
  query authors {
    authors {
      _id
      name
      country
    }
  }
`;
