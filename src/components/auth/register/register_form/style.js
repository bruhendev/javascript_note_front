import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 3.2rem 1rem;
    gap: 10px;

    input {
        display: block;
        width: 100%;
        height: calc(3.6rem + 2px);
        padding: .6rem 1.2rem;
        font-size: 1.6rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem
    }

    input:hover, input:focus{
        color: #495057;
        background-color: #fff;
        border-color: #720e9e;
        outline: 0;
    }

    
    div {
        margin-top: 3.2rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;