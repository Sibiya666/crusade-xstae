import { Statement } from './modules/statement';
import { GlobalProvider } from './common/global.context';
import { inspect } from '@xstate/inspect';

inspect({
  iframe: false
});

function App() {
  return (
    <main className="App">
      <GlobalProvider>
        <Statement></Statement>
      </GlobalProvider>
    </main>
  );
}

export default App;
