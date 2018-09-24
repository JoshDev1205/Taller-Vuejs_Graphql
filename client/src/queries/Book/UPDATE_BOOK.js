import { gql } from "apollo-boost";

export default gql`
  mutation updateBook($id: ID!, $input: BookUpdate){
    updateBook(
      _id: $id,
      input: $input
    ){
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
