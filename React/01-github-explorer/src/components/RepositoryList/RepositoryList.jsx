import { useState, useEffect } from 'react'
import axios from 'axios'
import { RepositoryItem } from './RepositoryItem'
import './RepositoryList.scss'

export function RepositoryList() {
    const [repositories, setRepositories] = useState([])

    async function getRepoData() {
        const { data } = await axios.get('https://api.github.com/users/lghiggino/repos')
        setRepositories(data)
        console.log(repositories)
    }

    useEffect(() => {
        getRepoData()
    }, [])


    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories && repositories.map(item => (
                    <RepositoryItem key={item.id} repository={item} />
                ))}
            </ul>
        </section>
    )
}