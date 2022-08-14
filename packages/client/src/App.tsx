import { FC, useEffect } from 'react';
import { Provider } from 'mobx-react';
import Store from './store';
import { WSManager } from './ws';

const store = new Store();

const App: FC<{}> = () => {
  useEffect(() => {
    const ws = new WSManager();
    ws.init();
  }, []);

  return (
    <Provider store={store}>
      <div className='app'></div>
    </Provider>
  );
};

export default App;
