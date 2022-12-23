import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_CLIENTS = gql`
    query getClients {
        clients {
            id
            name
            phone
        }
    }
`

export default function Clients() {
    const { data, loading, error } = useQuery(GET_CLIENTS)

    console.log(data)

    if (loading) {
        return (
            <>Loading...</>
        )
    }
    if (error) return <p>Something went wrong...</p>

    return (
        <>
            {!loading && !error && (
                <div>
                    {data.clients.map(client => (
                        <div key={client.id}>
                            <h2>{client.name}</h2>
                        </div>
                    ))}
                </div>
            )}
        </>

    )
}
