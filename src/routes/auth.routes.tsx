import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import PlaylistScreen from '../screens/Playlist';
import { useThemeContext } from '../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from '../screens/Profile';
import CreatePlaylist from '../screens/CreatePlaylist';

const { Screen, Navigator } = createBottomTabNavigator();
const Stack = createStackNavigator();


function HomeStackNavigator() {
    return (
        <>
            <Stack.Navigator headerMode="none">
                <Stack.Screen component={Home} name="Home"/>
                <Stack.Screen component={PlaylistScreen} name="Playlist" />
            </Stack.Navigator>
        </>
    )
}
function ProfileStackNavigator() {
    return (
        <>
            <Stack.Navigator headerMode="none">
                <Stack.Screen component={Profile} name="Profile"/>
                <Stack.Screen component={CreatePlaylist} name="CreatePlaylist" />
            </Stack.Navigator>
        </>
    )
}

export default function AuthRoutes() {

    Icon.loadFont();
    const { theme } = useThemeContext();

    return (
        <>
            
                <Navigator
                    initialRouteName='Home'
                    lazy
                    tabBarOptions={{

                        activeTintColor: theme.colors.icon,
                        inactiveTintColor: theme.colors.title,
                        style: {
                            backgroundColor: theme.colors.card,
                            borderTopColor: 'transparent',
                            display: 'flex', flexDirection: 'row',
                        },

                    }}
                >
                    <Screen name="Home"
                        options={{
                            tabBarLabel: 'Home',

                            tabBarIcon: ({ color, size }) => (
                                <Icon size={size} color={color} name="home" />
                            ),
                        }}
                        component={HomeStackNavigator} />
                    <Screen name="Home2"

                        options={{
                            tabBarLabel: 'Perfil',

                            tabBarIcon: ({ color, size }) => (
                                <Icon size={size} color={color} name="user-o" />
                            ),
                        }}
                        component={ProfileStackNavigator} />
                    
                </Navigator>
        </>
    )
}
