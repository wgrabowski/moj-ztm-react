import { Provider } from 'react-redux';
import { store } from '@moj-ztm/ztm-api';


export function App() {
  return (
    <Provider store={store}>
      hello world
    </Provider>
  );
}

export default App;
