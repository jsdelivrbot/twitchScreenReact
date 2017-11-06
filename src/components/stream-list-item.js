import React,{Component} from 'react'

const StreamListItem =(props) =>{
const {stream} = props;
// console.log(stream)
  return <li onClick={handleStreamOnclick}>{stream.channel.display_name}
  </li>
  function handleStreamOnclick(){
    props.callback(stream)
  }
}

export default StreamListItem;