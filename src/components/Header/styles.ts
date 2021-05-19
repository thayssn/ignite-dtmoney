import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: var(--purple); 
    padding: 2rem 1rem 10rem;
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        color: #FFF;
        background-color: var(--light-purple);

        font-size: 1rem;
        line-height: 1.5rem;
        
        padding: 0.75rem 2rem;
    }
`