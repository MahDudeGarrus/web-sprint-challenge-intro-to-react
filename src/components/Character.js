// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterDiv = styled.div`
width: 350px
margin: 0 auto;
height: 600px;
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
            <p>Featured Films: {character.films.map(films => <li >{films}</li>)}</p>
        </CharacterDiv>
    )
}