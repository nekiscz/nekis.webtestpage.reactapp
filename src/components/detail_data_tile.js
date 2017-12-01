import React from 'react';

export default (data) => {
    return (
        <div className={data.className}>
            <code>{data.name}: {data.value}</code>
        </div>
    )
}