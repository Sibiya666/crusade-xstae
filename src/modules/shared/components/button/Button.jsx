import React from 'react';
import buttonScss from './Button.module.scss'
 
export function Button(props) {
    const { children } = props;

    return (
        <>
            <button 
                className={buttonScss.button}
            >
                {children}
            </button>
        </>
    )
}