import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        box-sizing:border-box;
    }
    body{
        height:100%;
        padding:80px 0px;
        width:100%;
        background:linear-gradient(to bottom, #636FA4,#E8CBC0);
        background-repeat:no-repeat;
    }
`
export const sharedStyles = css`
    background:#eee;
    border-radius:5px;
    outline:none;
    border:1px solid #ddd;
    padding:15px;
    width:100%;
    margin:10px 0px 20px;
`
export const FormWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    width:100%;
`
export const StyledForm = styled.form`
    max-width:700px;
    background:#fff;
    padding:40px;
    width:100%;
    border-radius:5px;
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
    h2{
        margin-bottom:20px;
        font-weight:500;
    }
    `
export const StyledInput = styled.input`
    height:40px;
    ${sharedStyles}
`
export const StyledFieldSet = styled.fieldset`
    padding:20px;
    border-radius:5px;
    border:1px solid #ddd;
    margin:10px 0px;
    legend{
        display:inline-block;
        padding:0px 5px 5px;
    }
    label{
        margin-right:10px;
    }
    input{
        margin-right:10px;
    }
`
export const StyledTextArea = styled.textarea`
    max-height:100px;
    resize:none;
    ${sharedStyles}
`
export const StyledError = styled.div`
    padding:10px 0px;
    p{
        color:red;
        font-weight:bold;
    }
`
export const StyledButton = styled.div`
    background:#636FA4;
    color:#fff;
    padding:14px;
    font-weight:bold;
    font-size:18px;
    border-radius:5px;
    margin:20px 0px;
    width:200px;
    text-align:center;
    cursor:pointer;
    transition:all 0.2s;
    &:hover{
        opacity:0.9;
    }
    `