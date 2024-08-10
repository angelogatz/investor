import {AppRegistry, ImageBackground, StatusBar, StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Main() {

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
          <SafeAreaView  style={{ flex: 1, backgroundColor: '#312effd9'}}>
            <StatusBar translucent backgroundColor="transparent" />
            <App theme={DefaultTheme} />
          </SafeAreaView>
        </ImageBackground>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
