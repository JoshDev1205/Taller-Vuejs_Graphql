import { gql } from "apollo-boost";

export default gql`
  mutation createAuthor($name: String!, $country: String!){
    createAuthor(
      name: $name,
      country: $country
    ){
      _id
      name
      country
    }
  }
`;
