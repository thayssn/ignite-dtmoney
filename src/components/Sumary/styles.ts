import styled from 'styled-components';

export const SumaryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top: -10rem;

    div{
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
    }

    .highlight-background{
        color: white;
        background-color: var(--green);
    }
`