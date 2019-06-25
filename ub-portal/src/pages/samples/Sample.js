import React from 'react';

const Sample = ({match}) => {
    return (
        <div>
            <h2>{match.params.title}</h2>
            <div>
                검색조건
            </div>
            <div>
                목록
            </div>
        </div>
    );
};

export default Sample;