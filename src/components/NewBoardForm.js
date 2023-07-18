import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = ({ addBoardCallback }) => {
    const [formFields, setFormFields] = useState({
        title:'',
        owner:'',
        cards:[],
    });

    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
        })
    };


    const onOwnerChange = (event) => {
        setFormFields({
            ...formFields,
            owner: event.target.value
        })
    };

    // a way to handle both changes at once (refactored above 2 functions into one)
    // const handleChange = (event) => {
    //     const name = event.target.name;
    //     setFormFields({
    //         ...formFields,
    //         [name]: event.target.value
    //     });
    // };

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        addBoardCallback({
            titleData: formFields.title,
            ownerData: formFields.owner,
        });

        setFormFields({
            title: '',
            owner: '',
        });
    };

    return (
        <form onSubmit={onFormSubmit}>

        <div>
            <label htmlFor="boardTitle">Board Title:</label>
            <input 
            title="boardTitle"
            value={formFields.title}
            onChange={onTitleChange} />
        </div>

        <div>
            <label htmlFor="owner">Owner:</label>
            <input 
            owner="owner"
            value={formFields.owner}
            onChange={onOwnerChange} />
        </div>

        <input
            type="submit"
            value="Add Board" />

        </form>
    )
}

NewBoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired
};

export default NewBoardForm;

