import React from 'react';
import PropTypes from 'prop-types';

const Board = ({id , title, owner, cards, createBoard, createCard}) => {
    
    return (
        <>
            <h2>{title}</h2>
            <p>{owner}</p>
            <p className='title_underline'> --------------------------------- </p>
            <p>{cards}</p>

            <button 
                onClick = {() => createBoard()}
                className='create_board'
            >Create New Board</button>
            <button 
                className='creat_card'
                onClick = {() => createCard()}
            >Create New Card</button>
        </>
    )
};

Board.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
        PropTypes.shape = ({
            id: PropTypes.number.isRequired,
            messsage: PropTypes.string.isRequired,
            likeCount: PropTypes.string.isRequired,
            board: PropTypes.string.isRequired,
            boardId: PropTypes.number.isRequired
        })
    ),
    createBoard: PropTypes.func.isRequired,
    createCard: PropTypes.func.isRequired
}

export default Board