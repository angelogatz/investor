import {AppRegistry, ImageBackground, StatusBar, StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import useGlobalContext from 'components/context/globalContext';
import GlobalContextProvider from 'components/context/globalContext';


export const Main = () => {

  const bkg = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
  })

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <ImageBackground
          source={require('./src/assets/images/backgroudStandard.jpg')}
          style={bkg.backgroundImage}
        >
          <StatusBar translucent backgroundColor="transparent" />
          <GlobalContextProvider><App/></GlobalContextProvider>
        </ImageBackground>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
