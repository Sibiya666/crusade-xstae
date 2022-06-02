import { useContext } from 'react';
import { useSelector } from '@xstate/react';
import { GlobalContext } from '../../../common/global.context';
import { isPreparationSelector, isRecrutingSelector } from '../selectors'
import { Preparation, Recruting } from '../stage/'

export function Aside() {
    const globalService = useContext(GlobalContext)
    const isPreparation = useSelector(globalService.crusadeService, isPreparationSelector)
    const isRecruting = useSelector(globalService.crusadeService, isRecrutingSelector)
    
    return (
        <>  
            {isPreparation && <Preparation/>}
            {isRecruting && <Recruting/>}
        </>
    )
}
