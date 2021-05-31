// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div`
background: #BDB76B;
opacity: 0.7;
width: auto;
margin: 5px;
padding: 10px;
height: auto;
`

export default function Character(props) {
    const {character} = props;
    return (
        <CharacterDiv>
            <h2>Name: {character.name}</h2>
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Featured Films: {character.films.map((films, index) => <li key={films[index]}>{films}</li>)}</p> {/* Gave unique key using index of each film*/}
        </CharacterDiv>
    )
}