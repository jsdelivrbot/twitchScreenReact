import React,{Component} from 'react'

// const BASE_URL = "https://www.youtube.com/embed/";
const URL_STREAM = 'https://player.twitch.tv/?channel='

const ScreenStream =(props)=>{
  const currentStream = props;
  console.log(currentStream)
  return <div>
    <iframe src={`${URL_STREAM}{currentStream.channel.name}`}></iframe>
  </div>
}

export default ScreenStream;