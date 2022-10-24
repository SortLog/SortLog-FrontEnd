import { gql } from "@apollo/client";

export const GET_USER = gql`
  query {
    findUsers {
      email
      name
      photoUrl
    }
    findUserById(id: "63343af774e468a1647f3e54") {
      email
      name
    }
  }
`;
