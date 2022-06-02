import { assign, createMachine } from "xstate";

export const ordensMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QHsBOEwDtYDoCuANgC6oCGOsADqQMZgC2pqAlpmAMQByAogBoAqiUJWSxmRZskxCQAD0QAmACwBOHADYFAZnUB2ABz6tKgKyaFAGhABPRAEZdJnCv1n1+lwAZP7rQF8-KzQMbHxiMhxKFkZUGgALLj5BJBARMQkpGXkEVS0cTzszTy19JQdcpStbBAcnFzcPfW9fAMCQTGQMeBTgrFxCEnIqWgYmVjAZNPFJaRTs3Usbe3U1F1r1LU8TBzsFEwCg9D6wwcjopnjJ0WnMucQtJQUcExVlBVeTd7tTKuXV-Qcen0uhUSl0SnU6gOIF6oQGEQAZqxmLA4pArukZllECZXM5SloTI8TNsfOpfjUVvj1pttrpdvs2rD+uFSBibrNQNklPoKSp1M4VJ5XCZvMYDPpocz2RlOXJFJUlghtIKVPzPrpdMKVI5dK0-EA */
  createMachine({
    id: "ordens",
    initial: "select",
    context: {
      legion: undefined
    },
    states: {
      select: {
        on: {
          NEXT: {
            target: "#ordens.ultra",
            actions: assign({
              legion: 'ultra'
            })
          },
          END: {
            target: "#ordens.alpha",
            actions: assign({
              legion: 'alpha'
            })
          },
        },
      },
      ultra: {
        initial: "spacemarine",
        states: {
          spacemarine: {
            on: {
              NEXT: {
                target: "primarch",
              },
            },
          },
          primarch: {},
        },
      },
      alpha: {
        on: {
          '': 'finished'
        }
      },
      finished: {
        type: "final",
        data: {
          legion: (context) => {
           return  context.legion
          }
        },
      },
    },

    on: {
      PRIMARCH: "#ordens.ultra",
      NEXT: "#ordens.finished",
    },
  });
