import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const NewCardForm = ({ createCard, boardId }) => {
    const [formFields, setFormFields] = useState({
        message: '',
    });

    const onMessageChange = (event) => {
        setFormFields({
            ...formFields,
            message: event.target.value
        })
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        createCard(formFields, boardId);
        setFormFields({
            message: '',
        })
    }

    // console.log(boardId)

    return (
        <form id='add-card' onSubmit={onFormSubmit}>

            <div className="card-form-input">
                {/* <label htmlFor="cardMessage">Card Message:</label> */}
                <input
                    name="message"
                    maxLength="40"
                    value={formFields.message}
                    onChange={onMessageChange}
                    className="input-form"
                    id='card-message'
                    placeholder='Card Message'
                    required                 
                />
            </div>

            <div className="add-card">
                <button 
                type="submit" 
                form="add-card" 
                >
                    +
                </button>
            </div>
            
        </form>
    )
}

NewCardForm.propTypes = {
    createCard: PropTypes.func.isRequired
};

export default NewCardForm