import React from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles';
import { useThemeContext } from '../../contexts/ThemeContext';
import MusicLanding from '../../assets/musicLanding.svg';
import GoogleIcon from '../../assets/google-icon.svg';
import { useAuth } from '../../contexts/UserContext';

function SignIn() {
    const { toggleTheme, theme } = useThemeContext();
    const { signIn,loading } = useAuth();

    Icon.loadFont();

    function handleSignIn() {
        signIn();
    }
   
    return (
        <>
            <S.Container>
                <S.BtnChangeTheme>
                    <Icon onPress={toggleTheme} name="palette" size={30}
                        color={theme.colors.title} />
                </S.BtnChangeTheme>
                <S.Content>
                    <S.ImageLanding>
                        <MusicLanding height={300} width={300} />
                    </S.ImageLanding>
                    <S.Introdution>Entre No Musics!</S.Introdution>
                </S.Content>
                
                    <S.BtnGoogle onPress={handleSignIn}>
                        <GoogleIcon height={30} width={30} />
                        <S.TextGoogle >Entrar com google</S.TextGoogle>
                    </S.BtnGoogle>

            </S.Container>
        </>
    )
}

export default SignIn;