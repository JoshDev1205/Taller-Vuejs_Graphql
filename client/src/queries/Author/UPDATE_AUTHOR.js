import { gql } from "apollo-boost";

export default gql`
  mutation updateAuthor($id: ID!, $input: AuthorUpdate){
    updateAuthor(
      _id: $id,
      input: $input
    ){
      _id
      name
      country
    }
  }
`;
