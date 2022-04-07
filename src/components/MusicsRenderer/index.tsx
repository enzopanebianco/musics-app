import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Music } from '../../@types/interfaces';
import ConvertDateToString from '../../utils/convertDateToString';
import { ListDivider } from '../ListDivider';
import * as S from './styles';

type MusicsRendererProps = {
    musics?:Music[];
    handle?:()=>void;
}
type MusicItemProps = {
    music?:Music;
    handle?:()=>void;
}

function MusicItem({music}:MusicItemProps){

    return(
        <>
            <S.ContainerMusicItem>
                <S.Cover source={{uri:music?.musicCover}}/>
                <S.MusicInfo>
                    <S.Title>{music?.title}</S.Title>
                    <S.Author>{music?.author}</S.Author>
                </S.MusicInfo>
                <S.Position>{music?.position}</S.Position>
            </S.ContainerMusicItem>
        </>
    )
}

export function MusicsRenderer({musics}:MusicsRendererProps){
    return(
        <>
            <S.Container>
                <FlatList 
                    data={musics}
                    keyExtractor={data=>data.id.toString()}
                    ItemSeparatorComponent={()=><ListDivider />}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>(
                        <MusicItem music={item}/>
                    )}
                />
            </S.Container>
        </>
    )
}