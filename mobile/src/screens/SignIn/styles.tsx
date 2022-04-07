import styled from 'styled-components/native';

export const Container = styled.View`
    background:${p=>p.theme.colors.primary};
    height:100%;
    align-items: center;
    justify-content: space-evenly;
`;

export const Content = styled.View`
    align-items: center;
`;
export const BtnChangeTheme = styled.View`
    position: absolute;
    top:8%;
    right:8%;
    z-index: 5;
`;
export const Introdution = styled.Text`
    color:${p=>p.theme.colors.title};
    font-size:25px;
    font-family: 'OpenSans_700Bold';
    text-transform: uppercase;
`;
export const ImageLanding = styled.View`
    background: ${p=>p.theme.colors.card};
    border-radius: 250px;
    opacity: 0.8;
    
`;
export const BtnGoogle = styled.TouchableOpacity`
    flex-direction: row;
    background: #ea4335;
    align-items: center;
    padding: 8px;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    width: 60%;
    border-radius: 2px;
`;
export const TextGoogle = styled.Text`
    color:white;
    font-size: 13px;
    font-family:'OpenSans_700Bold' ;
    text-transform: uppercase;
`;