import { useContext } from "react";
import { useSelector } from "@xstate/react";
import { Aside } from "./aside";
import { GlobalContext } from "../../common/global.context";
import {
  isTerrorSelector,
  isTransportingWarpSelector,
  isimperialOfficeSelector,
  isInquisitionSelector,
  isRecrutingBibliariumSelector,
  isRecrutingOrdensSelector
} from "./selectors";

import { OrdensShowcase } from './stage/recruting/ordens-showcase/OrdensShowcase';

import statementScss from "./Statement.module.scss";
import terror from "../../assets/eyeOfTheTerror.webp";
import burokratia from "../../assets/burokratia.webp";
import bibl from "../../assets/bibl.webp";
import toBeContinued from "../../assets/toBeContinued.jpeg";
import inq from "../../assets/inq.jpeg";
import logo from "../../assets/logo.jpeg";

export function Statement() {
  const globalService = useContext(GlobalContext);
  const isimperialOffice = useSelector(
    globalService.crusadeService,
    isimperialOfficeSelector
  );
  const isInquisition = useSelector(
    globalService.crusadeService,
    isInquisitionSelector
  );
  const isRecrutingBibliarium = useSelector(
    globalService.crusadeService,
    isRecrutingBibliariumSelector
  );
  const isRecrutingOrdens = useSelector(
    globalService.crusadeService,
    isRecrutingOrdensSelector
  );
  const isTerror = useSelector(globalService.crusadeService, isTerrorSelector);
  const isWarp = useSelector(
    globalService.crusadeService,
    isTransportingWarpSelector
  );

  const { send } = globalService.crusadeService;

  return (
    <>
      <main className={statementScss.statement}>

        <header className={statementScss.header}>
            <img 
                className={statementScss.logo}
                onClick={() => send('RESTART')}
                src={logo}
                alt="logo"
            />
            <h1 className={statementScss.title}>Crusade 16:789:PO</h1>
        </header>

        <section className={statementScss.content}>
          {isimperialOffice && <img src={burokratia} alt="" />}
          {isInquisition && <img src={inq} alt="" />}

          {isRecrutingOrdens && <OrdensShowcase/>}

          {isRecrutingBibliarium && <img src={bibl} alt="" />}
          {isWarp && <img src={toBeContinued} alt="" />}
          {isTerror && <img src={terror} alt="" />}
        </section>

        <aside className={statementScss.aside}>
          <Aside></Aside>
        </aside>
      </main>
    </>
  );
}
