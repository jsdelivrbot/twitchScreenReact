import React,{Component} from 'react'
import GameListItem from '../components/game-list-item'

const GameList = (props)=>{
  const {gameList} = props;
return(
  <div>
    <ul>
      {gameList.map(game =>{
        return <GameListItem key={game.game._id} game={game} callback={receiveCallBack}/>
      })}
    </ul>
  </div>
  );
function receiveCallBack(game){
  props.callback(game)
}
}

export default GameList;