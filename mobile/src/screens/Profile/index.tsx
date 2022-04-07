import React from 'react';
import { useState, useEffect } from 'react';
import { UniqueUser } from '../../@types/interfaces';
import { Avatar } from '../../components/Avatar';
import { TitlePages } from '../../components/TitlePages';
import api from '../../config/api';
import { useAuth } from '../../contexts/UserContext';
import * as S from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useThemeContext } from '../../contexts/ThemeContext';
import { TouchableOpacity, Text } from 'react-native';
import PlaylistsRender from '../../components/PlaylistsRender';
import { useNavigation } from '@react-navigation/core';


export default function Profile() {
    const [myPlaylist, setMyPlaylist] = useState<UniqueUser>();
    const { user } = useAuth();
    const { theme } = useThemeContext();
    const navigation = useNavigation();

    Icon.loadFont();

    useEffect(() => {
        async function getUser() {
            const { data } = await api.get(`/user/${user?.id}`);
            console.log(data);
            setMyPlaylist(data);
        }
        getUser();
    }, [user?.id])

    function handleNavigationToUniquePlaylist(id: number) {
        navigation.navigate(
            'Playlist',
            { id }
        );
    }

    function handleNavigationToCreatePlaylist(){
        navigation.navigate('CreatePlaylist');
    }

    return (
        <>
            <S.Container>
                <Avatar />
               
                <S.PlaylistAction>
                    <TitlePages title="Minhas Playlists" />
                    <TouchableOpacity onPress={handleNavigationToCreatePlaylist}>
                        <Icon size={30}  name="plus-circle" color={theme.colors.title} />
                    </TouchableOpacity>
                </S.PlaylistAction>
                <PlaylistsRender
                    handleNavigation={handleNavigationToUniquePlaylist}
                    playlists={myPlaylist?.playlists} />
            </S.Container>
        </>
    )
}