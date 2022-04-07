import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 7.5%;
    background: ${p=>p.theme.colors.primary};
    height: 100%;
    align-items: center;
`;
export const Form = styled.View`
    align-items: center;
    margin-top: 7.5%;
    width: 90%;
`;
export const Field = styled.View`
    margin-bottom: 7.5%;
    width: 100%;
`;
export const Label = styled.Text`
    color:${p=>p.theme.colors.info};
    font-size: 18px;
    margin-bottom: 3.75%;
    font-family: 'OpenSans_400Regular';
`;
export const Input = styled.TextInput`
    background: ${p=>p.theme.colors.card};
    border-bottom-color: ${p=>p.theme.colors.info};
    border-bottom-width: 1px;
    padding:8px;
    border-radius: 2px;
    color:${p=>p.theme.colors.title};
    font-family: 'OpenSans_400Regular';
`;
export const ButtonArea = styled.View`
    width: 60%;
`;