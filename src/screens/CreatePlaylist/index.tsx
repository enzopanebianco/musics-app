import React,{useState} from 'react';
import { TitlePages } from '../../components/TitlePages';
import { Button, TextButton } from '../../global/styles/globalStyle';
import * as S from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Feather';
import { useThemeContext } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/UserContext';
import api from '../../config/api';

export default function CreatePlaylist() {
    const navigation = useNavigation();
    const {theme} = useThemeContext();
    const {user} = useAuth();
    const [title,setTitle] = useState('');
    const [cover,setCover] = useState('');

    Icon.loadFont();
    function goBack(){
        navigation.goBack();
    }

    async function sendPlaylist(){

        const playlistRequest = {
            title,
            cover,
            userId:user?.id,
        }
        const response = await api.post('/playlist',playlistRequest);
       
    }


    return (
        <>
            <S.Container>
                <BorderlessButton 
                style={{alignSelf:'flex-start',marginTop:10,marginLeft:5}} 
                onPress={goBack}>
                    <Icon name="arrow-left" size={30} color={theme.colors.title} />
                </BorderlessButton>
                <TitlePages title="Crie uma Playlist" />
                <S.Form>
                    <S.Field>
                        <S.Label>Nome</S.Label>
                        <S.Input onChangeText={e=>setTitle(e)}/>
                    </S.Field>
                    <S.Field>
                        <S.Label>Imagem</S.Label>
                        <S.Input onChangeText={e=>setCover(e)}/>
                    </S.Field>
                    <S.ButtonArea>
                        <Button onPress={sendPlaylist} >
                            <TextButton>Criar</TextButton>
                        </Button>
                    </S.ButtonArea>
                </S.Form>
            </S.Container>
        </>
    )
}