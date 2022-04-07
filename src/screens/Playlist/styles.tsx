import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
let distance = getStatusBarHeight();
let convertedDistance = distance.toString();

export const Container = styled.View`
    margin-top: ${convertedDistance}px;
    height:100%;
    background: ${p => p.theme.colors.primary};
`;
export const ImgBackground = styled.ImageBackground`
    width:100%;
    height: 250px;
    z-index: 0;
`;

export const Title = styled.Text`
    color:#f7f7f7;
    font-family: 'OpenSans_700Bold';
    font-size: 30px;
    text-shadow:2px 4px 3px rgba(0,0,0,0.3);
    margin-left: 10px;
    margin-bottom: 5px;
    width: 100%;
`;
export const BtnGoBack = styled.View`
    margin-top: 10px;
    margin-left: 5px;
`;
export const Author = styled.Text`
    color:#fff;
    text-shadow:2px 4px 3px rgba(0,0,0,0.3);

    align-self: flex-end;
    margin-right: 3.75%;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-family: 'OpenSans_700Bold';
    font-size: 15px;
    margin-left: 10px;


`;
export const PlaylistAction = styled.View`
    flex-direction:row;
    align-items:flex-end;
    justify-content:space-between;
    width: 90%;
`;