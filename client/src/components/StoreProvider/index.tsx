import React, { createContext } from 'react';

export const RootContext = createContext<IStore>(null);

const StoreProvider: React.FC<{store: IStore}> = ({children, store}) => {
  return <RootContext.Provider value={{ ...store }}>{children}</RootContext.Provider>;
};

export default StoreProvider;
