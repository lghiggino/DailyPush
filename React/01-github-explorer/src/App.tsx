import './styles/global.scss';

import { RepositoryList } from './components/RepositoryList/RepositoryList';
import { FormWithStatusBar } from './components/FormWithStatusBar/FormWithStatusBar';

export function App(){
    // throw new Error('deu erro aqui')
    return (
    <>
        <RepositoryList />
        <FormWithStatusBar />
    </>
    )
}