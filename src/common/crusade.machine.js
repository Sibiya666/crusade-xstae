import {createMachine} from 'xstate';

export const crusadeMachine = createMachine({
    id: 'crusade',
    initial: 'preparation',
    states: {
        preparation: {
            initial: 'imperialOffice',
            states: {
                imperialOffice: {},
                inquisition: {},
            }
        },
        recruiting: {
            initial: 'guard',
            states: {
                guard: {},
                ordens: {},
                mechanicus: {},
                bibliarium: {},
            },
        },
        transporting: {
            initial: 'warp',
            states: {
                warp: {},
            }
        }
    }
})