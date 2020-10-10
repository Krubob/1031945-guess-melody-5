const AVATAR_URL = `https://picsum.photos/200/300?random`;
export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/c/cc/Handel_-_messiah_-_38_how_beautiful_are_the_feet.ogg`,
      genre: `classic`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/e/e3/Andr%C3%A9_Michelle_-_Construct_Infinity.ogg`,
      genre: `techno`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/b/b2/Original_Dixieland_Jass_Band_-_Livery_Stable_Blues_%281917%29_alternate_edit.ogg`,
      genre: `jazz`,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/46/Example_of_double_tracking_in_a_pop-rock_song_%283_guitar_tracks%29.ogg`,
      genre: `rock`,
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
      artist: `Johann Bach`,
    }, {
      picture: `${AVATAR_URL}=${Math.random()}`,
      artist: `Johannes Brahms`,
    }, {
      picture: `${AVATAR_URL}=${Math.random()}`,
      artist: `Peter Tchaikovsky`,
    }],
  }
];
