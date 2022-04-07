import React from 'react';
import { FlatList, Text,TouchableOpacity } from 'react-native';
import { Playlist } from '../../@types/interfaces';
import ConvertDateToString from '../../utils/convertDateToString';
import { ListDivider } from '../ListDivider';

import * as S from './styles';

type PlaylistsRenderProps = {
    playlists?: Playlist[];
    handleNavigation:(id:number)=>void;
}
type PlaylistProps = {
    playlist: Playlist;
    handleNavigation:(id:number)=>void;

}


function PlaylistItem({ playlist,handleNavigation }: PlaylistProps) {
    const formattedDate = ConvertDateToString(playlist.createDt)
    return (
        <>
        <TouchableOpacity onPress={()=>handleNavigation(playlist.id)}>
            <S.ContainerPlaylistItem>
                <S.Cover source={{ uri: playlist.cover }} />
                <S.PlaylistInfo>
                    <S.Title>{playlist.title}</S.Title>
                    <S.Author>{playlist.username}</S.Author>
                </S.PlaylistInfo>
                <S.Date>{formattedDate}</S.Date>
            </S.ContainerPlaylistItem>
            </TouchableOpacity>
        </>
    )
}

export default function PlaylistsRender({ playlists,handleNavigation }: PlaylistsRenderProps) {
    return (
        <S.Container>
            <FlatList
                data={playlists}
                keyExtractor={data => data.id.toString()}
                ItemSeparatorComponent={()=><ListDivider />}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <PlaylistItem
                        handleNavigation={handleNavigation}
                        playlist={item}
                    />
                )}
            />
        </S.Container>
    )
}