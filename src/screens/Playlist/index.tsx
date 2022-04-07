import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { UniquePlaylist } from '../../@types/interfaces';
import api from '../../config/api';
import * as S from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { BorderlessButton } from 'react-native-gesture-handler';
import { TitlePages } from '../../components/TitlePages';
import { LinearGradient } from 'expo-linear-gradient';
import { MusicsRenderer } from '../../components/MusicsRenderer';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/UserContext';

type PlaylistScreenProps = {
    id: string;
}

export default function PlaylistScreen() {
    const { params }: any = useRoute();
    const navigation = useNavigation();
    const { theme } = useThemeContext();
    const { user } = useAuth();
    const { id } = params;
    const [playlist, setPlaylist] = useState<UniquePlaylist>();
    const [myPlaylist, setMyPlaylist] = useState<Boolean>();

    useEffect(() => {
        async function getPlaylist() {
            const { data } = await api.get(`/playlist/${id}`);
            setPlaylist(data);
            if (playlist?.userId.toString() === user?.id) {
                setMyPlaylist(true);
            }
        }
        getPlaylist();
    }, [user?.id,playlist?.id])
    Icon.loadFont();

    function goBack() {
        navigation.goBack();
    }

    return (
        <>
            <S.Container>
                <S.ImgBackground source={{ uri: playlist?.cover }}>
                    <LinearGradient style={{ height: '100%', justifyContent: 'space-between' }} colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.15)']}>
                        <S.BtnGoBack>
                            <BorderlessButton onPress={goBack}>
                                <Icon name="arrow-left" size={30} color="#000" />
                            </BorderlessButton>
                        </S.BtnGoBack>
                        {/* <Header action title="Playlist" icon={()=><Icon name="plus" color="#fff" size={24} />}/> */}
                        <View>
                            <S.Title>{playlist?.title}</S.Title>
                            <S.Author>Criado por: {playlist?.username}</S.Author>
                        </View>
                    </LinearGradient>
                </S.ImgBackground>
                <S.PlaylistAction>
                    <TitlePages title="Músicas" />
                    {myPlaylist &&
                        <Icon name="plus-circle" size={30} color={theme.colors.title} />
                    }
                </S.PlaylistAction>
                <MusicsRenderer musics={playlist?.playlistMusics} />
            </S.Container>
        </>
    )
}