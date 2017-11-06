import React,{Component} from 'react'
import StreamListItem from '../components/stream-list-item'

const StreamList = (props) =>{
  const {streamList} = props;
  // console.log(props)
 return (
    <div>
      <ul>
        {
          streamList.map(stream =>{
            return <StreamListItem key={stream.channel._id} stream={stream} callback={receiveStreamCallback}/>
          })
        }
      </ul>
    </div>
  );
 function receiveStreamCallback(stream){
  props.callback(stream)
 }
}

export default StreamList;
