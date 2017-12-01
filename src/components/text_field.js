import React from 'react';

const TextField = (field) => {
    var error = '';
    var wrapperClass = `input-field ${field.wrapperClass ? field.wrapperClass : ''}`;

    if (field.meta.error) {
        error = displayError(field.meta.error)
    }

    return (
        <div className='text-field'>
            <div className={wrapperClass}>
                <input
                    {...field.input}
                    placeholder={field.placeholder}
                    id={field.name}
                    type="text" />
                <label htmlFor={field.name}>{field.label}{field.meta.touched ? error : ''}</label>
            </div>
        </div>
    )
}

const displayError = (text) => {
    return (
        <span className='new badge red accent-2' data-badge-caption={text} />
    )
}

export default TextField;