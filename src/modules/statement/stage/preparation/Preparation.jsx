import { useContext } from "react";
import { useSelector } from "@xstate/react";
import { GlobalContext } from "../../../../common/global.context";
import { Button } from "../../../shared/components";
import {
  isimperialOfficeSelector,
  isInquisitionSelector,
} from "../../selectors";

export function Preparation() {
  const globalService = useContext(GlobalContext);
  const isimperialOffice = useSelector(
    globalService.crusadeService,
    isimperialOfficeSelector
  );
  const isInquisition = useSelector(
    globalService.crusadeService,
    isInquisitionSelector
  );
  const { send } = globalService.crusadeService;
  
  return (
    <>
      {isimperialOffice && (
        <Button onclick={() => send('NEXT') }>Принять в работу</Button>
      )}
      {isInquisition && <Button onclick={() => send('NEXT') }>Проверка на ересь завершена</Button>}
    </>
  );
}
