import styled from 'styled-components'

export const StyledSideBar = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
height: 100vh;

transition: all 1s linear;

&.isClosed{
    opacity: 0;
    max-width: 0px;
}

&.isVisible{
    opacity: 1;
    max-width: 350px !important;
}


`;

