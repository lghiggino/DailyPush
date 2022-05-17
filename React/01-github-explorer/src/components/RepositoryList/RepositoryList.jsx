import { useState, useEffect } from 'react'
import axios from 'axios'
import { RepositoryItem } from './RepositoryItem'
import './RepositoryList.scss'

const repository = {
    name: "unform 2",
    description: "Forms in React",
    link: "https://github.com/unform/unform"
}

const repository2 = {
    name: "typeOrm",
    description: "TypeOrm readme.md",
    link: "https://github.com/typeorm/typeorm/blob/master/docs/example-with-express.md"
}



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
                {/* <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository2} />
                <RepositoryItem />
                <RepositoryItem /> */}
            </ul>
        </section>
    )
}