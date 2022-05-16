export function RepositoryItem({ repository }) {
    return (
        <li>
            <strong>{repository?.name ?? 'Default'}</strong>
            <p>{repository?.description ?? 'Repo description'}</p>

            <a href={repository?.link ?? ""}>Acessar o Repositório</a>
        </li>
    ) 
}