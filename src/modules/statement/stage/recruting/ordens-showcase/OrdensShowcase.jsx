import { useContext } from "react";
import { useSelector } from "@xstate/react";
import { GlobalContext } from "../../../../../common/global.context";
import {
  isRecrutingSelectSelector,
  isRecrutingSpacemarineSelector,
  isRecrutingPrimarchSelector,
} from "../../../selectors";
import legions from "../../../../../assets/legions.webp";
import ultra from "../../../../../assets/ultra.jpeg";
import jil from "../../../../../assets/jil.webp";

export function OrdensShowcase() {
  const globalService = useContext(GlobalContext);
  const isRecrutingSelect = useSelector(
    globalService.crusadeService.children.get("ordensInvoke"),
    isRecrutingSelectSelector
  );

  const isSpacemarine = useSelector(
    globalService.crusadeService.children?.get("ordensInvoke"),
    isRecrutingSpacemarineSelector
  );
  const isRecrutingPrimarch = useSelector(
    globalService.crusadeService.children?.get("ordensInvoke"),
    isRecrutingPrimarchSelector
  );
  return (
    <>
      {isRecrutingSelect && <img src={legions} alt="" />}
      {isSpacemarine && <img src={ultra} alt="" />}
      {isRecrutingPrimarch && <img src={jil} alt="" />}
    </>
  );
}
