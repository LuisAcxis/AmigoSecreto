import React, { useState, useEffect } from 'react';
import web from 'core/scripts/web';
import DefaultValues from './DefaultValues';

const StateInit = web.app.state.get();
web.object.assign.recursive(StateInit, DefaultValues);

const AppContext = React.createContext([StateInit, () => {}, () => {}]);

export const AppProvider = (props) => {
  const [state, setState] = useState(StateInit);

  useEffect(() => {
    web.app.state.set(StateInit);
  }, [])

  const updateState = (propState) => {
    const newState = {...state};
    web.object.assign.recursive(newState, propState);
    web.app.state.set(newState);
    setState(newState);
  }

  const resetState = () => {
    web.app.state.set(DefaultValues);
    setState(DefaultValues);
  }

  return (
    <AppContext.Provider value={[state, updateState, resetState]}>
        {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;