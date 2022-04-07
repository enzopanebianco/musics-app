import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

let distance = getStatusBarHeight();
let convertedDistace = distance.toString();

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 10px; 
    width: 100%;
    background: rgba(0,0,0,0.1);
    align-items: center;
`;

export const Title = styled.Text`
    color:white;
    text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    font-family: 'OpenSans_700Bold';
    font-size: 20px;
`;
export const Icon = styled.View`
    color:white;
    text-shadow: 0px 4px 4px rgba(0,0,0,0.25);
`;
