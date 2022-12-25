import React from 'react'
import { useQuery } from '@apollo/client'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientsQueries'
import Spinner from './Spinner'

export default function Clients() {
    const { data, loading, error } = useQuery(GET_CLIENTS)

    console.log(data)

    if (loading) {
        return (
            <Spinner/>
        )
    }
    if (error) return <p>Something went wrong...</p>

    return (
        <>
            {!loading && !error && (
                <table className='table mt-3 table-hover'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.clients.map(client => (
                            <ClientRow key={client.id} client={client} />
                        ))}
                    </tbody>
                </table>
            )}
        </>

    )
}
