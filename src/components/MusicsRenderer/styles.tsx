import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 7.5%;
  width: 100%;
`;
export const ContainerMusicItem = styled.View`
   flex-direction: row;
    width: 95%;
    align-self: center;
    align-items: center;
    justify-content: space-between;
    flex:1;
    background: ${p=>p.theme.colors.card};
    height: 60px;
    padding:8px
`;
export const Cover = styled.Image`
    height: 100%;
    width: 60px;
    margin-left: 3.75%;
`;
export const MusicInfo = styled.View`
    justify-content: space-around;
    /* margin-left: 3.75%; */
    margin-right: 15%;
`;
export const Author = styled.Text`
    color:${p=>p.theme.colors.info};
    font-size: 12px;
    font-family: 'OpenSans_400Regular';
`;
export const Title = styled.Text`
    color:${p=>p.theme.colors.music_title};
    font-family: 'OpenSans_400Regular';
    font-size: 15px;
`;
export const Position = styled.Text`
    color:${p=>p.theme.colors.title};
    margin-right: 5%;
    font-family: 'OpenSans_300Light';
    padding-top: 6px;
`;

