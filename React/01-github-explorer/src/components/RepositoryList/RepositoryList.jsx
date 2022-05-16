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
    return (
        <section className="repository-list">
            <h1>Liste de Repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository2} /> 
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}