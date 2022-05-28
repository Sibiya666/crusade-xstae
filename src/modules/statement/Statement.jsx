import { Aside }  from './aside';

import statementScss from './Statement.module.scss'

export function Statement(props) {
    return (
        <>
        <main className={statementScss.statement}>
            <header className={statementScss.header}>Crusade 16:789:PO</header>
            <section className={statementScss.content}>
                Описание
            </section>
            <aside className={statementScss.aside}>
                <Aside></Aside>
            </aside>
        </main>
        </>
    )
}