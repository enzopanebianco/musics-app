import React from 'react';
import * as S from './styles';
import {View} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import { BorderlessButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

type HeaderProps = {
    title:string;
    action?:boolean;
    icon?:IconProps;
}

export function Header({title,action,icon}:HeaderProps){
    Icon.loadFont();
    return(
        <>
        <S.Container>
            <BorderlessButton>
                <Icon name="arrow-left" color="#fff" size={24} />
            </BorderlessButton>
            <S.Title>{title}</S.Title>
            {
            action?
            <S.Icon>{icon}</S.Icon>:
            <View />
            }
        </S.Container>
        </>
    )
}