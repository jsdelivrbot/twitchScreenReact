import React,{Component} from 'react'
import axios from 'axios'
import GameList from './game-list'
import StreamList from './stream-list'
import ScreenStream from '../components/screen-stream'
// import GameListItem from

const URL_TOP_GAMES = "https://api.twitch.tv/kraken/games/top"
const URL_STREAM_LIST = "https://api.twitch.tv/kraken/streams/" 
const CLIENT_ID="client_id=4vanrv34kq4ot0f3qh84ng3qz2m9o7"
// const twitch = new TwitchApi({
//     clientId: '4vanrv34kq4ot0f3qh84ng3qz2m9o7',
//     clientSecret: '1ab8qsau7spg5lriibkwno3ulm2xbeg'
//   });

class App extends Component {
  constructor(props){
    super(props)
    this.state={gameList:{},currentGame:{},streamList:{},currentStream:{}}
  }
  componentWillMount(){
    this.initGames();
  }
  initGames(){
    axios.get(`${URL_TOP_GAMES}?limit=100&${CLIENT_ID}`).then(function(response){
      this.setState({gameList:response.data.top});
      // console.log(this.state.gameList)
      // console.log(response.data.top)
    }.bind(this));
  }
  applyGameToListStreams(){
    axios.get(`${URL_STREAM_LIST}?game=${this.state.currentGame.game.name}&${CLIENT_ID}`).then(function(response){
      this.setState({streamList: response.data.streams})
      // console.log(this.state.streamList)
    }.bind(this))
  }
  onClickListGame(game){
    this.setState({currentGame:game},function(){
      this.applyGameToListStreams();
    })
  }
  onClickListStream(stream){
    this.setState({currentStream:stream}, function(){
       this.applyGameToListStreams();
       // console.log(this.state.currentStream)
    })
  }
  render(){
    const renderGameList = () =>{
      if (this.state.gameList.length>=99) {
       return <GameList gameList={this.state.gameList} callback={this.onClickListGame.bind(this)}/>
     }
   }
   const renderStreamList=()=>{
    if (this.state.streamList.length>=1) {
      return <StreamList streamList={this.state.streamList} callback={this.onClickListStream.bind(this)}/>
    }
  }
  const renderScreenStream=()=>{
    if (this.state.currentStream.stream_type ==="live") {
      return <ScreenStream currentStream={this.state.currentStream}/>
    }
  }
  return(
    <div>
    {renderGameList()}
    {renderStreamList()}
    {renderScreenStream()}
    </div>
    );
}
}

export default App;