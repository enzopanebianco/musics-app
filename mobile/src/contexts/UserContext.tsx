import React, { createContext, ReactNode, useContext, useEffect } from 'react';
import { logInAsync, GoogleLogInConfig, GoogleUser } from 'expo-google-app-auth';
import { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../config/api';
import jwtDecode from 'jwt-decode';

type User = {
    id: string;
    username: string;
    email: string;
    photo: string;
}

type UserRequest = {
    username: string;
    email: string;
    password: string;
    photo: string;
}

type UserProps = {
    signIn: () => void;
    user: User | null;
    loading: boolean;
}
const UserContext = createContext({} as UserProps);


type ProviderProps = {
    children: ReactNode;
}

export function UserContextProvider({ children }: ProviderProps) {
    const [userRequest, setUserRequest] = useState<UserRequest | null>();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    async function signIn() {
        setLoading(true);
        const config: GoogleLogInConfig = {
            iosClientId: '276847480368-kqpt95ivscvuvffqcn1adck74l3p3p3a.apps.googleusercontent.com',
            androidClientId: '276847480368-6ql2gi06cvt3f9opa4v5e669nl5kb714.apps.googleusercontent.com',
            scopes: ['profile', 'email']
        }
        const { type, user }: any = await logInAsync(config);
        if (type === 'success') {
            const { email, name, photoUrl } = user;
            await setUserRequest({
                email: email,
                username: name,
                photo: photoUrl,
                password: '123'
            })
            if (userRequest) {
                
                const response = await api.post('/user', userRequest)
                const { data } = response;
                console.log(response)
                setUser(data.user);
                await AsyncStorage.setItem('user', data.token);
            }

        }
        else {
            setUserRequest(null);
        }
        setLoading(false);
    }

    async function LoadUserStorage() {
        const storage = await AsyncStorage.getItem('user');
        if (storage) {
            const parsedStorage = jwtDecode(storage) as User;
            setUser(parsedStorage);
        }
    }

    useEffect(() => {
        LoadUserStorage();
    }, [])

    return (
        <UserContext.Provider value={{ signIn, user, loading }}>
            {children}
        </UserContext.Provider>
    )
}
export function useAuth() {
    const context = useContext(UserContext);
    return context;
}