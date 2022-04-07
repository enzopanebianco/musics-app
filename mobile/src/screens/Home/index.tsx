import React from 'react';
import { useState,useEffect } from 'react';
import { Playlist } from '../../@types/interfaces';
import { Avatar } from '../../components/Avatar';
import { TitlePages } from '../../components/TitlePages';
import api from '../../config/api';
import * as S from './styles';
import PlaylistsRender from '../../components/PlaylistsRender';
import { useNavigation } from '@react-navigation/native';

function Home() {
    const [playlists,setPlaylists] = useState<Playlist[]>([]);
    const navigation = useNavigation();
    useEffect(()=>{
        async function getPlaylists() {
            const {data} = await api.get('/playlist');
            setPlaylists(data);
        }
        getPlaylists();
    },[])

    function handleNavigationToUniquePlaylist(id:number){
        navigation.navigate(
            'Playlist',
            {id}
        );
    }

    return (
        <>
            <S.Container >
                <Avatar />
                <TitlePages title="Home"/>
                <PlaylistsRender handleNavigation={handleNavigationToUniquePlaylist}
                 playlists={playlists}/>
            </S.Container>
        </>
    )
}

export default Home;