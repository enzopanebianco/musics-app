import React from 'react';
import * as S from './styles';

type TitlePagesProps={
    title:string;
}

export function TitlePages({title}:TitlePagesProps){
    return(
        <>
            <S.Container>
                <S.Title>{title}</S.Title>
            </S.Container>
        </>
    )
}