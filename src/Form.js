import React from 'react'
import {
    GlobalStyles,
    FormWrapper,
    StyledForm,
    StyledInput,
    StyledFieldSet,
    StyledTextArea,
    StyledError,
    StyledButton
} from './FormElements'

function Form() {

    return (
        <>
        <GlobalStyles />
        <FormWrapper>
            <StyledForm>
                <h2>Contact Form</h2>
                <label htmlFor="name">Name</label>
                <StyledInput type="text" name="name"/>
                <label htmlFor="email">Email Address</label>
                <StyledInput type="email" name="email"/>
                <StyledFieldSet>
                    <legend>Gender</legend>
                    <label>
                        <input type="radio" name="female"/>
                        Female
                    </label>
                    <label>
                        <input type="radio" name="male"/>
                        Male
                    </label>
                </StyledFieldSet>

                <label htmlFor="message">Message</label>
                <StyledTextArea type="text" name="message"/>

                <StyledError>
                    <p>Error Message goes here</p>
                </StyledError>
                
                <StyledButton type="submit">Send Message</StyledButton>
            </StyledForm>
        </FormWrapper>
        </>
    );
}

export default Form;

