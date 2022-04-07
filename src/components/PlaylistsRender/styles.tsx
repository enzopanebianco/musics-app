import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 7.5%;
  width: 100%;
`;
export const ContainerPlaylistItem = styled.View`
    flex-direction: row;
    width: 95%;
    align-self: center;
    justify-content: space-between;
    flex:1;
    background: ${p=>p.theme.colors.card};
    height: 60px;
    padding:8px
`;
export const Cover = styled.Image`
    height: 100%;
    width: 60px;
`;
export const PlaylistInfo = styled.View`
    justify-content: space-around;
    width:35%
`;
export const Author = styled.Text`
    color:${p=>p.theme.colors.info};
    font-size: 12px;
    font-family: 'OpenSans_400Regular';
    
`;
export const Title = styled.Text`
    color:${p=>p.theme.colors.playlist_title};
    font-family: 'OpenSans_400Regular';
    font-size: 15px;
`;
export const Date = styled.Text`
    color:${p=>p.theme.colors.title};
   
    font-family: 'OpenSans_300Light';
    padding-top: 6px;
`;
