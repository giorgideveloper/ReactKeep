import React from 'react';

const List = (props) => {
    const { repos } = props;
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
        <div>
            {repos.map((repo) => {
                return (
                    <div key={repo.id} className='list'>
                        <label for="exampleFormControlTextarea1" className="form-label">{repo.title}</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4">{repo.text_ka}</textarea>
                    </div>

                );
            })}
        </div>
    );
};
export default List;
