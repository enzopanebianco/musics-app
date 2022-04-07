import styled from 'styled-components/native';
export const Top = styled.View`
    margin-top: 15%;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
`;
export const UserInfo = styled.View`
   flex-direction: row;
`;
export const Image = styled.Image`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    border-width: 1px;
    margin-left: 5%;
    border-color: ${p => p.theme.colors.title};
`;
export const Username = styled.Text`
    color: ${p => p.theme.colors.title};
    font-family:'OpenSans_700Bold' ;
    font-size: 16px;
`;
export const Email = styled.Text`
    color: ${p => p.theme.colors.info};
    font-family: 'OpenSans_300Light';
    font-size: 12px;
`;


