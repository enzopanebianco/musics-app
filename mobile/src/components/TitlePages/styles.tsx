import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: flex-start;
    margin-top: 7.5%;
    width: 90%;
`;
export const Title = styled.Text`
    color:${p=>p.theme.colors.title};
    font-family:'OpenSans_700Bold' ;
    font-size: 25px;
    margin-left: 3.75%;
`;
