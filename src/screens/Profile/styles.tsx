import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100%;
    background: ${p=>p.theme.colors.primary};
    align-items: center;
`;
export const PlaylistAction = styled.View`
    flex-direction:row;
    align-items:flex-end;
    justify-content:space-between;
    width: 90%;
`;

