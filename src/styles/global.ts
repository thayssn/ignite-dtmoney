import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

:root{
    --red: #E52E4D;
    --purple: #5429CC;
    --light-purple: #6933FF;
    --green: #33CC95;

    --background: #F0F2F5;
    --title-text: #363F5F;
    --body-text: #969CB3;
    --shape: #FFFFFF;

    --border-radius: 0.31rem;

    --input-background: #e7e9ee;
    --input-border-color: #d7d7d7;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media(max-width: 1080px){
        font-size: 93.75%; // 15px
    }
    
    @media(max-width: 720px){
        font-size: 87.5%; // 14px
    }
}

body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

button {
    border: 0;
    border-radius: var(--border-radius);

    cursor: pointer;
    transition: filter 0.3s;
    
    &:hover{
        filter: brightness(0.9);
    }
}


h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
}

[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

// React Modal

.react-modal{
    background-color: var(--background);

    width: 100%;
    max-width: 576px;
    padding: 3rem;
    border-radius: var(--border-radius);

    position: relative;

    &__overlay{
        background-color: rgba(0,0,0,.6);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 3rem;

    }

    &__close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;

        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.7);
        }
    }

    h2{
        color: var(--title-text);
        
        font-weight: 600;
        text-transform: uppercase;

        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        height: 4rem;
        padding: 0 1.5rem;
        border: 1px solid var(--input-border-color);
        border-radius: var(--border-radius);
        
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--body-text);
        }

        & + input {
            margin-top: 1rem;
        }
    }


    button[type="submit"]{
        color: #FFFFFF;
        background-color: var(--green);

        width: 100%;
        height: 3rem;
        padding: 0 1.5rem;
        margin-top: 2rem;

        font-weight: 600;
    }
}

`