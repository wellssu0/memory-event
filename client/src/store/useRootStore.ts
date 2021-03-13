import { useContext } from 'react';
import { RootContext } from '@/components/StoreProvider/index';

export default function useRootStore() {
  return useContext<IStore>(RootContext);
}
