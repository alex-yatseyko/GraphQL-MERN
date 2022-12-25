import { gql } from '@apollo/client'

export const DELETE_CLIENT = gql`
    mutation deleteClient($id: ID!) {
        deleteClient(id: $id) {
            name
            email
            phone
        }
    }
`