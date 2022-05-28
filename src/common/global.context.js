import React, { createContext } from 'react';
import {useInterpret, }  from '@xstate/react';
import {crusadeMachine } from './crusade.machine';

export const GlobalContext = createContext({});

export const GlobalProvider = (props) => {
    const crusadeService = useInterpret(crusadeMachine);

    return (
        <GlobalContext.Provider  value={{crusadeService}}>
            {props.children}
        </GlobalContext.Provider>
    )
}