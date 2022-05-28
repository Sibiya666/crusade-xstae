import {createMachine} from 'xstate';

const toogleMachine = createMachine({
    id: 'toogle',
    initial: 'inactive',
    states: {
        inactive: {
            on:{
                TOOGLE: 'active',
            }
        },
        active: {
            on: {
                TOOGLE: 'inactive',
            }
        }
    }

})

export default toogleMachine;