import React, { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import withListLoading from './WithListLoading';
function App2() {
    const ListLoading = withListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://keep.jrwebdeveloper.com/api/notes`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                setAppState({ loading: false, repos: repos.data });
            });
    }, [setAppState]);
    return (
        <div className='App'>
            <div className='container'>
                <h1>My Repositories</h1>
            </div>
            <div className='repo-container'>
                <ListLoading isLoading={appState.loading} repos={appState.repos} />
            </div>
        </div>
    );
}
export default App2;
