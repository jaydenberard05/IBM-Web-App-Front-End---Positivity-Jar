import { gql } from "@apollo/client";

const ADD_FRIEND = gql`
    mutation AddFriend($id: ID!, $friendUsername: String!) {
        addFriend(id: $id, friendUsername: $friendUsername) {
            response
        }
    }
`;

const LOAD_FRIENDS = gql`
    query GetAllFriends($id: ID!) {
        getAllFriends(id: $id) {
            friends
        }
    }
`;

export { ADD_FRIEND, LOAD_FRIENDS };