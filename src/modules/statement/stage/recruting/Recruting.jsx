import { useContext } from "react";
import { useSelector } from "@xstate/react";
import { GlobalContext } from "../../../../common/global.context";
import { Button } from "../../../shared/components";
import { isRecrutingMechanicusSelector, isRecrutingOrdensSelector, isRecrutingBibliariumSelector } from "../../selectors";
import { Ordens } from './ordens';

export function Recruting() {
  const globalService = useContext(GlobalContext);

  const isRecrutingOrdens = useSelector(
    globalService.crusadeService,
    isRecrutingOrdensSelector
  );

  const isRecrutingMechanicus = useSelector(globalService.crusadeService, isRecrutingMechanicusSelector)
  const isRecrutingBibliarium = useSelector(globalService.crusadeService, isRecrutingBibliariumSelector)
  const { send } = globalService.crusadeService;
  
  return (
    <>
      {
        isRecrutingOrdens && (<Ordens />)
      }

      {isRecrutingMechanicus && <Button onclick={()=>send('NEXT')}>Отряды механикус присоединяются</Button>}
      {isRecrutingBibliarium && <Button onclick={()=>send('NEXT')}>Библиарий одобрил</Button>}
      {isRecrutingBibliarium && <Button onclick={()=>send('BACK')}>Библиарий отправил доработать</Button>}
    </>
  );
}
