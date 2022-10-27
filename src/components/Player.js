import React, {useState, useRef, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

function Player(props) {
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)

    const shuffleFunc = ()=> {
        setShuffle(!shuffle)
    }

    const repeatFunc = () => {
        setRepeat(!repeat)
    }

    useEffect(()=>{
        setTimeout(()=>{
            props.likeBool();
        }, 5000)
        
    },)


    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    });

    const SkipSong = (forwards) => {
        if (forwards === true) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }

        if (repeat === true) {

            if (forwards === true) {
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex;
                    temp += 0

                    return temp
                })
            } else {
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex;
                    temp += 0

                    return temp
                })
            }
        }

        if (shuffle === true) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp += Math.floor(Math.random() * props.songs.length)
                if (temp > props.songs.length - 1) {
                    temp = 0
                }

                return temp;
            })
        }
    };

    return (
    <div className="flex">
        <p>
            <div className="text-anim">
                <strong>Upcoming Song:</strong>
            </div>
            <div className="nextsong-details">
                <img
                src={props.songs[props.nextSongIndex].img_src}
                alt={props.songs[props.nextSongIndex].title}
                style={{ width: "4em", height: "auto"}}/>
                <p>
                    <b>{props.songs[props.nextSongIndex].title}</b>&nbsp; by &nbsp;
                    <b>{props.songs[props.nextSongIndex].artist}</b>
                    {/* &nbsp; from album
                    &nbsp; */}
                    {/* <b>{props.songs[props.nextSongIndex].album}</b> */}
                </p>
            </div>
        </p>
        <div className="music-player">
            <audio
            src={props.songs[props.currentSongIndex].src}
            ref={audioElement}>
            </audio>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong} />
            <div className="player-footer">
                <h6 className='like'>{props.like && props.likeText}</h6>
                <ul className="list list--footer">
                    <li>
                        <a href="#" class="list__link conditional" onClick={props.likeSong}>
                            <i class="fa fa-heart-o"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() =>shuffleFunc()} class="list__link">
                            <i class="fa fa-random"></i>
                        </a>
                        <span className='like'>
                            {shuffle && <h6>Shuffle is on</h6>}
                        </span>
                    </li>
                    <li>
                        <a href="#" onClick={repeatFunc} class="list__link">
                            <i class="fa fa-undo"></i>
                        </a>
                            <span className='like'>
                                {repeat && <h6>Repeat is on</h6>}
                            </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
}

export default Player;