import styled from 'styled-components';

export const BoxContainer = styled.div`
    color: var(--title-text);
    background-color: var(--shape);

    padding: 1.5rem 2rem;
    border-radius: 5px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        margin-top: 1rem;
        
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
    
    &.highlight-background{
        color: white;
        background-color: var(--green);
    }
`