import { useMachine } from '@xstate/react';
import React from 'react';
import buttonScss from './Button.module.scss'

import  toogleMachine  from '../../machines/toogle';
 
export function Button() {
    const [state,  toogle] = useMachine(toogleMachine);
    
    return (
        <>
            <button 
                className={buttonScss.button}
                onClick={()=> toogle('TOOGLE')}
            >
            {state.value === 'inactive'
                ? 'Не хочу '
                : 'Не буду'
            }
            </button>
        </>
    )
}