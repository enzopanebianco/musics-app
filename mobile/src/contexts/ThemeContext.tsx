import React, { ReactNode, useState, useEffect, useContext, SetStateAction, Dispatch } from "react";
import { createContext } from "react";
import { DefaultTheme } from "styled-components/native";
import light from '../global/styles/theme/light';
import dark from '../global/styles/theme/dark';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeProvider } from 'styled-components';

interface ThemeProps {
    toggleTheme: () => void;
    theme:DefaultTheme;
}
const ThemeContext = createContext({} as ThemeProps);

interface ThemeProviderProps {
    children: ReactNode;
}
export function ThemeContextProvider({ children }: ThemeProviderProps) {

    const [theme, setTheme] = useState<DefaultTheme>(light);

    async function toggleTheme() {
        const themeSelected: DefaultTheme = theme.title === 'light' ? dark : light;
        setTheme(themeSelected);
        await AsyncStorage.setItem('theme', themeSelected.title);
    }

    useEffect(() => {
        async function getTokenTheme() {
            const tokenTheme = await AsyncStorage.getItem('theme');
            if (tokenTheme) {
                setTheme(tokenTheme === 'light' ? light : dark);
            }
            else {
                setTheme(light);
                await AsyncStorage.setItem('light', 'light');
            }
        }
        getTokenTheme();
    }, [theme])

    return (
        <ThemeContext.Provider value={{ toggleTheme,theme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext);

    return context;
}