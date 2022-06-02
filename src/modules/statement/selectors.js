export const isPreparationSelector = (state) => {
    return state.matches('preparation');
}

export const isimperialOfficeSelector= (state) => {
    return state.matches('preparation.imperialOffice');
}
export const isInquisitionSelector = (state) => {
    return state.matches('preparation.inquisition');
}


export const isRecrutingSelector = (state) => {
    return state.matches('recruiting');
}

export const isRecrutingSelectSelector = (state) => {
    return state?.matches('select');
}

export const isRecrutingSpacemarineSelector = (state) => {
    return state?.matches('ultra.spacemarine');
}

export const isRecrutingPrimarchSelector = (state) => {
    return state?.matches('ultra.primarch');
}

export const isRecrutingOrdensSelector = (state) => {
    return state.matches('recruiting.ordens');
}

export const isRecrutingMechanicusSelector = (state) => {
    return state.matches('recruiting.mechanicus');
}

export const isRecrutingBibliariumSelector = (state) => {
    return state.matches('recruiting.bibliarium');
}

export const isTransportingWarpSelector = (state) => {
    return state.matches('transporting.warp');
}

export const isTerrorSelector = (state) => {
    return state.matches('eyeOfTerror');
}

