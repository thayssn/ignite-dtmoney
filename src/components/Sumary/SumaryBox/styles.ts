import styled from 'styled-components';

export const BoxContainer = styled.div`
    color: var(--title-text);
    background-color: var(--shape);

    padding: 1.5rem 2rem;
    border-radius: var(--border-radius);

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
    
    &.highlight-green{
        color: white;
        background-color: var(--green);
    }

    &.highlight-red{
        color: white;
        background-color: var(--red);
    }
`