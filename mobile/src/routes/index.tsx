import SignIn from '../screens/SignIn';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './auth.routes';
import { useAuth } from '../contexts/UserContext';


export default function Routes() {
    const {user} = useAuth();
    return (
        <NavigationContainer>
           
                {user?.username?
                <AuthRoutes />
                :
                <SignIn />
            }   
        </NavigationContainer>
    )
}