import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

import {SplashScreen, GetStarted} from './screens';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {showSplashScreen && <SplashScreen />}
        {!showSplashScreen && <AppNavigation />}
      </PersistGate>
    </Provider>
  );
};
export default App;
