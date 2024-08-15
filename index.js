import {AppRegistry, ImageBackground, StatusBar, StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { darkTheme, lightTheme } from './src/Utils/themeConfig';
import { useState } from 'react';

export default function Main() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

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
          <SafeAreaView  style={{ flex: 1, backgroundColor: isDarkTheme ? '#a5a5a5a2' : '#312effd9'}}>
            <StatusBar translucent backgroundColor="transparent" />
            <App 
              theme={isDarkTheme ? darkTheme : lightTheme} 
              setIsDarkTheme={setIsDarkTheme} 
              isDarkTheme={isDarkTheme} 
            />
          </SafeAreaView>
        </ImageBackground>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
