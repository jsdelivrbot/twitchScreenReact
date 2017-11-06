import React,{Component} from 'react'

const GameListItem = (props) =>{
  const {game} = props;
  return <li onClick={handleOnClick}>
  <p>{game.game.name}</p>
  </li>
   function handleOnClick(){
    props.callback(game)
    // console.log(game)
  }   
}
export default GameListItem;