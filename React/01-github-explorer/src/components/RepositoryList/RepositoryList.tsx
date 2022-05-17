import { useState, useEffect } from 'react'
import axios from 'axios'
import { RepositoryItem, RepositoryItemProps } from './RepositoryItem'
import './RepositoryList.scss'

interface Repository {
    id: string;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([])

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
                {repositories && repositories.map(repository => (
                    <RepositoryItem key={repository.id} repository={repository} />
                ))}
            </ul>
        </section>
    )
}