import { gql } from "@apollo/client";

// note this isn't the up to date mutation for signing in

const SIGN_IN = gql` 
    mutation SignIn($email: String!, $password: String!) {
        signin(email: $email, password: $password) {
            response
            id
        }
    }
`;

const CREATE_ACCOUNT = gql`
    mutation CreateAccount($username: String!, $email: String!, $phone: String!, $password: String!) {
        createAccount(username: $username, email: $email, phone: $phone, password: $password) {
            response
            id
        }
    }
`;

export { CREATE_ACCOUNT, SIGN_IN };