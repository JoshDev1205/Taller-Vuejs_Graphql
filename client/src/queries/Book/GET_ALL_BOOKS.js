import { gql } from "apollo-boost";

export default gql`
  query books {
    books {
      _id
      title
      desc
      quantity
      author {
        name
      }
    }
  }
`;
