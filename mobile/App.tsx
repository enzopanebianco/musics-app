import { StatusBar } from 'react-native';
import React from 'react';
import Routes from './src/routes/';
import { ThemeContextProvider, useThemeContext } from './src/contexts/ThemeContext';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {OpenSans_700Bold,OpenSans_400Regular,OpenSans_300Light} from '@expo-google-fonts/open-sans';
import { UserContextProvider } from './src/contexts/UserContext';

export default function App({props}:any) {

  const {theme} = useThemeContext();

  const [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
      <ThemeContextProvider>
        <UserContextProvider>
        <StatusBar 
         backgroundColor="transparent"
         translucent
          barStyle={theme?theme.title==='light'?'dark-content':'light-content':'default'}
        />
        <Routes />
        </UserContextProvider>
      </ThemeContextProvider>
    </>
  );
}

