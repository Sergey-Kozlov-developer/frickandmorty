import { Provider } from 'react-redux';
import { store } from '../store/store';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  console.log('Store provider mounted', store.getState()); // Проверка
  return <Provider store={store}>{children}</Provider>;
};
