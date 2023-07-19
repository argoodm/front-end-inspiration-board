import React from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';

const Board = ({ id, title, owner, cards, createCard, likeCard }) => {
    
    return (
        <div key={id} className="board">
            <h2>{title}</h2>
            <p>{owner}</p>
            <p className='title_underline'> --------------------------------- </p>

            {/* <button 
                onClick = {() => createBoard()}
                className='create_board'
            >Create New Board</button> */}
            <section>
                <CardList cards={cards} likeCard={likeCard} />
                <button 
                    className='create_card'
                    onClick = {() => createCard()}
                >Create New Card</button>
            </section>
        </div>
    )
};

Board.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
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