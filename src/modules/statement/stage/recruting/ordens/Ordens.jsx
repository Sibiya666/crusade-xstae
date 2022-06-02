import { useContext } from "react";
import { useSelector } from "@xstate/react";
import { GlobalContext } from "../../../../../common/global.context";
import { Button } from "../../../../shared/components";
import { isRecrutingSelectSelector, isRecrutingSpacemarineSelector, isRecrutingPrimarchSelector } from "../../../selectors";

export function Ordens() {
  const globalService = useContext(GlobalContext);

  const isRecrutingSelect = useSelector(
    globalService.crusadeService.children.get('ordensInvoke'),
    isRecrutingSelectSelector
  );

  const isSpacemarine = useSelector(globalService.crusadeService.children?.get('ordensInvoke'), isRecrutingSpacemarineSelector)
  const isRecrutingPrimarch = useSelector(globalService.crusadeService.children?.get('ordensInvoke'), isRecrutingPrimarchSelector)
  
  const { send } = globalService.crusadeService.children?.get('ordensInvoke');
  
  return (
    <>
        {isRecrutingSelect && (
          <>
            <Button onclick={() => send('NEXT') }>Ультрамарины</Button>
            <Button onclick={() => send('END') }>Альфа легион</Button>
          </>
        )}
        {isSpacemarine && <Button onclick={() => send('NEXT') }>Добавить космодесантников</Button>}
        {isRecrutingPrimarch &&  <Button onclick={() => send('NEXT')}>Примарх</Button>}
    </>
  );
}
