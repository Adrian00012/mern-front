import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

function Controls(props) {
  return (
    <div>
      <div className="Buttons">
        <button onClick={() => props.Random()}>
          <i class="bi bi-shuffle"></i>
        </button>
        <button onClick={() => props.SkipSong(false)}>
          <i class="bi bi-caret-left"></i>
        </button>
        <button onClick={() => props.setIsPlaying(!props.isPlaying)}>
          {props.isPlaying ? (
            <i class="bi bi-pause"></i>
          ) : (
            <i class="bi bi-play"></i>
          )}
        </button>
        <button onClick={() => props.SkipSong(true)}>
          <i class="bi bi-caret-right"></i>
        </button>
        <button>
          <i
            class="bi bi-repeat"
            onClick={() => props.setIsRepeat(!props.isRepeat)}
          ></i>
        </button>
      </div>
    </div>
  );
}

export default Controls;
