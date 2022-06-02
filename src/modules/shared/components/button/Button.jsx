import React from 'react';
import buttonScss from './Button.module.scss'
 
export function Button(props) {
    const { children, onclick } = props;

    return (
        <>
            <button 
                className={buttonScss.button}
                onClick={onclick}
            >
                {children}
            </button>
        </>
    )
}