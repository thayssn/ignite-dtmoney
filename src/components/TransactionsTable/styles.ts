import styled from 'styled-components'

export const TransactionsTableContainer = styled.div`

    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: var(--body-text);

            padding: 1rem 2rem;

            text-align: left;
            line-height: 1.5;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            border-radius: var(--border-radius);

            color: var(--body-text);
            background-color: var(--shape);

            &.amount{
                min-width: 200px;
            }

            &:first-child{
                color: var(--text-title)
            }

            &.withdraw{
                color: var(--red);
            }

            &.deposit{
                color: var(--green);
            }
        }
    }
`; 