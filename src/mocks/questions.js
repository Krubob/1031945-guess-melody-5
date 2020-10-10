const AVATAR_URL = `https://picsum.photos/200/300?random`;
export default [
  {
    type: `genre`,
    genre: `disco`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/46/Example_of_double_tracking_in_a_pop-rock_song_%283_guitar_tracks%29.ogg`,
      genre: `rock`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/0/0e/Stringed_Disco_%28MacLeod%2C_Kevin%29_%28ISRC_USUAN1100059%29.oga`,
      genre: `disco`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/b/b2/Original_Dixieland_Jass_Band_-_Livery_Stable_Blues_%281917%29_alternate_edit.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Tentacles_-_03_-_Disco_Time.ogg`,
      genre: `disco`,
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Johannes Brahms`,
      src: `https://upload.wikimedia.org/wikipedia/commons/f/fc/Brahms-waltz02.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}=${Math.random()}`,
      artist: `Rick and Morty`,
    }, {
      picture: `${AVATAR_URL}=${Math.random()}`,
      artist: `Felix Mendelssohn`,
    }, {
      picture: `${AVATAR_URL}=${Math.random()}`,
      artist: `Johannes Brahms`,
    }, {
      picture: `${AVATAR_URL}=${Math.random()}`,
      artist: `Peter Tchaikovsky`,
    }],
  }
];
