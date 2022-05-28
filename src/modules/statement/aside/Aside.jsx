import { useContext } from 'react';
import { useActor } from '@xstate/react';
import { Button } from '../../shared/components';
import { GlobalContext } from '../../../common/global.context';

export function Aside(props) {
    const globalService = useContext(GlobalContext)
    const [crusade] = useActor(globalService.crusadeService);

    return (
        <>  
            {crusade.matches('preparation') && <Button>Отправить запрос в инквизицию</Button>}
            {crusade.matches('preparation.inquisition') && <Button>Заняться подбором войск</Button>}

            {crusade.matches('recruiting.guard') && <Button>Подбор имперской гвардии завершен</Button>}
            {crusade.matches('recruiting.ordens') && <Button>Выбор ордена завершен</Button>}
            {crusade.matches('recruiting.mechanicus') && <Button>Отряды механикус присоединяются</Button>}
            {crusade.matches('recruiting.bibliarium') && <Button>Библиарий благославил</Button>}

            {crusade.matches('transporting.warp') && <Button>Заняться подбором войск</Button>}
        </>
    )
}
