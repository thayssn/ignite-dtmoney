import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const ModalContainer = styled.form`

`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`

interface RadioBoxProps {
    isSelected: boolean,
    typeColor: 'deposit' | 'withdraw'
}

const colors = {
    'deposit' : '#33CC95',
    'withdraw': '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid  ${ ({ isSelected, typeColor }) => isSelected
        ? transparentize(0.4,colors[typeColor])
        : '#D7D7D7'};
    border-radius: var(--border-radius);

    background-color: ${ ({ isSelected, typeColor }) => isSelected
        ? transparentize(0.9, colors[typeColor])
        : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: .2s;

    &:hover{
        filter: none;

        border-color: ${darken(0.1, "#D7D7D7")}
    }

    img{
        width: 20px;
        height: 20px;
    }

    span{
        color: var(--body-text);
        display: inline-block;

        margin-left: 1rem;

        font-size: 1rem;
    }
`