import { createMachine, send, assign  } from "xstate";
import { ordensMachine } from "./ordens.machine";

export const crusadeMachine =
  createMachine({
    id: "crusade",
    initial: "preparation",
    context: {
      legion: undefined,
    },
    states: {
      preparation: {
        initial: "imperialOffice",
        states: {
          imperialOffice: {
            on: {
              NEXT: {
                target: "inquisition",
              },
            },
          },
          inquisition: {
            on: {
              NEXT: {
                target: "finished",
              },
            },
          },
          finished: {
            type: "final",
            on: {
              "": "#crusade.recruiting",
            },
          },
        },
      },
      recruiting: {
        initial: "ordens",
        states: {
          ordens: {
            invoke: {
              id: "ordensInvoke",
              src: ordensMachine,
              onDone: [
                {
                  target: "bibliarium",
                  actions: assign({
                    legion: (context, event) => {
                      return event.data.legion
                    }
                  })
                },
              ]
            },
            on: {
              PRIMARCH: {
                actions: send(
                  {
                    type: "PRIMARCH",
                  },
                  {
                    to: "ordensInvoke",
                  }
                ),
              },
            },
          },
          bibliarium: {
            on: {
              '': {
                target: '#crusade.eyeOfTerror',
                cond: 'isAlpha',
              },
              BACK: {
                target: "ordens",
                actions: send({ type: "PRIMARCH" }),
              },
              NEXT: {
                target: "finished",
              },
            },
          },
          finished: {
            type: "final",
          },
        },
        onDone: {
          target: "transporting",
        },
      },
      transporting: {
        initial: "warp",
        states: {
          warp: {},
        },
      },

      eyeOfTerror: {
        type: "final",
      },
    },
    on: {
      RESTART: '#crusade.preparation.imperialOffice'
    }
  },{
    guards: {
      isAlpha: (context, event) => {
        return context.legion === 'alpha'
      }
    }
  });
