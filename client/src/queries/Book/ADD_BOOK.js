import { gql } from "apollo-boost";

export default gql`
  mutation createBook($title: String!, $desc: String!, $authorId: ID!){
    createBook(
      title: $title,
      desc: $desc,
      authorId: $authorId
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
