import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Player from './components/Player';

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1)
  const [like, setLike] = useState(false)
  const [changeLike, setChangeLike] = useState(false)
  

  const likeSong = () => {
    setLike(!like)
    setChangeLike(!changeLike)
  }
  
  const likeBool = ()=>{
    setLike(false)
  }
  
  const likeText = changeLike ? "We would recommend more songs like this" : "We would not recommend songs like this";


  useEffect(() =>{
    setNextSongIndex(()=>{
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex])

  const [songs, setSongs] = useState([
    {
      "title": "All the Time",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': 'All the Time',
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': './songs/All the Time.mp3'
    },
    {
      "title": "Clout",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': 'Clout',
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': './songs/Clout.mp3'
    },
    {
      "title": "Dawsin's Breek",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Dawsin's Breek",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Dawsin's Breek.mp3"
    },
    {
      "title": "Don't Judge Me",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Don't Judge Me",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Don't Judge Me.mp3"
    },
    {
      "title": "Don't Sleep On Me",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Don't Sleep On Me",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Don't Sleep On Me.mp3"
    },
    {
      "title": "Droptop in the Rain",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Droptop in the Rain",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Droptop in the Rain.mp3"
    },
    {
      "title": "Drugs",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Drugs",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Drugs.mp3"
    },
    {
      "title": "Ex",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Ex",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Ex.mp3"
    },
    {
      "title": "Famous Amy",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Famous Amy",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Famous Amy.mp3"
    },
    {
      "title": "Famous Excuses",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Famous Excuses",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Famous Excuses.mp3"
    },
    {
      "title": "Famous Friends",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Famous Friends",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Famous Friends.mp3"
    },
    {
      "title": "Famous Last Words",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Famous Last Words",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Famous Last Words.mp3"
    },
    {
      "title": "Famous Lies",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Famous Lies",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Famous Lies.mp3"
    },
    {
      "title": "Famous",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Famous",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Famous.mp3"
    },
    {
      "title": "In Your Phone",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "In Your Phone",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/In Your Phone.mp3"
    },
    {
      "title": "Lil Favorite",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Lil Favorite",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Lil Favorite.mp3"
    },
    {
      "title": "Love U Better",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Love U Better",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Love U Better.mp3"
    },
    {
      "title": "Message In a Bottle",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Message In a Bottle",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Message In a Bottle.mp3"
    },
    {
      "title": "Nate Howard Intro",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Nate Howard Intro",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Nate Howard Intro.mp3"
    },
    {
      "title": "Number",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Number",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Number.mp3"
    },
    {
      "title": "Pineapple",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Pineapple",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Pineapple.mp3"
    },
    {
      "title": "Side Effects",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Side Effects",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Side Effects.mp3"
    },
    {
      "title": "Simple",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Simple",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Simple.mp3"
    },
    {
      "title": "So Am I",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "So Am I",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/So Am I.mp3"
    },
    {
      "title": "South Beach",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "South Beach",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/South Beach.mp3"
    },
    {
      "title": "Stare",
      'artist': "Ty Dolla $ign",
      'album': 'Beach House 3 Deluxe',
      'track': "Stare",
      'year': '2018',
      'img_src': './songs_images/beach_house_cover.jpg',
      'src': "./songs/Stare.mp3"
    },

  ]);
  return (
    <div className="App">
      <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs}
      like={like} likeSong={likeSong} likeBool={likeBool} likeText={likeText}
      />
    </div>
  ); 
}

export default App;
