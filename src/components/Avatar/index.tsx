import React from 'react';
import { View } from 'react-native';
import { useAuth } from '../../contexts/UserContext';
import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useThemeContext } from '../../contexts/ThemeContext';

export function Avatar() {
    const { theme, toggleTheme } = useThemeContext();
    const { user } = useAuth();
    Icon.loadFont();

    return (
        <>
            <S.Top>
                <Icon onPress={toggleTheme} name="palette" size={30}
                    color={theme.colors.title} />
                <S.UserInfo>
                    <View>
                        <S.Username>{user?.username}</S.Username>
                        <S.Email>{user?.email}</S.Email>
                    </View>
                    <S.Image source={{ uri: user?.photo }} />
                </S.UserInfo>
            </S.Top>
        </>
    )
}