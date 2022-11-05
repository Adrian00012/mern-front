import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import Controls from "./Controls";
import NextList from "./NextList";
import { memo } from "react";
function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
 const [isDuration, setIsDuration]=useState(0);

  useEffect(() => {
    setIsDuration(Math.floor(audioEl.current.duration))
    if (isPlaying) {
      audioEl.current.play();
     
      setTimeout(function(){
        audioEl.current.pause();
        
        setIsPlaying(false)
      
    }, isDuration*1000);
    } else {
      audioEl.current.pause();
    }
    if (isRepeat) {
      audioEl.current.loop = true;
    } else {
      audioEl.current.loop = false;
    }
  
  },);
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;
       
        if (temp > props.songs.length - 1) {
          temp = 0;
          
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        
        if (temp > props.songs.length - 1) {
          temp--;
          
        } else if (temp < 0) {
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  };
  const SelectSong = (p) => {
    let temp = p.id - 1;
    props.setCurrentSongIndex(() => {
      return temp;
    });
  };
  const Random = () => {
    var min = 0;
    var max = props.songs.length;

    var x = Math.floor(Math.random() * (max - min) + min);
    props.setCurrentSongIndex(x);
    return setIsPlaying(true)
  };
  return (
    <div className="Player">
      <audio
        src={props.songs[props.currentSongIndex].music_uri}
        ref={audioEl}
        autoPlay
      ></audio>

      {/* {/* details */}
      <div className="PlayerControl">
      <PlayerDetails song={props.songs[props.currentSongIndex]}></PlayerDetails>
      {/* controls */}
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
        Random={Random}
        isRepeat={isRepeat}
        setIsRepeat={setIsRepeat}
      ></Controls>
      </div>
      <NextList
        nextSong={props.songs}
        indice={props.currentSongIndex}
        select={SelectSong}
      />
    </div>
  );
}

export default memo(Player);
