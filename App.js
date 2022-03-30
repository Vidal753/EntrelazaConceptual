import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import Navigation from './navigation/AuthenticatedNavigation';
import { store, persistor } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}
