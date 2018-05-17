import React, { Component } from 'react'

import './style.css';

class WidgetAudio extends Component {


    constructor(props) {
        super(props)
        this.audio = document.getElementById("audiofiles");
    }

    tooglePlayAudio () {

        console.log(1111);

        let elems = document.getElementsByClassName("playBtn");
        for (let i = 0; i < elems.length; i++) {
            if (elems[i].classList.contains('play')) {
                this.audio.play();
                elems[i].classList.remove("play")
                elems[i].classList.add("pause")
            } else {
                this.audio.pause();
                elems[i].classList.add("play")
                elems[i].classList.remove("pause")
            }
        }

        /*if (this.playBtn.classList.contains('play')) {
            this.audio.play();
            this.playBtn.classList.remove("play")
            this.playBtn.classList.add("pause")
        } else if (this.playBtn.classList.contains('pause')) {
            this.audio.pause();
            this.playBtn.classList.remove("pause")
            this.playBtn.classList.add("play")
        }*/
    }


    render () {
        return (
        <div>
            <div className="widget-audio widget">
                <audio id="audiofiles">
                    <source src="http://www.alexkatz.me/codepen/music/interlude.mp3" type="audio/mp3"/>
                </audio>
            </div>

            <div className="audioplayer">
                <button id="pButton" className="play playBtn" onClick={this.tooglePlayAudio}></button>
                <p>Read It To Me! (click play button to have article read to you)</p>
            </div>
        </div>
        )
    }

}


export default WidgetAudio;