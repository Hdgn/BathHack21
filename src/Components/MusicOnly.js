import React, { useEffect, useState } from 'react';
import SpotifyPlayer from './SpotifyPlayer.js';
// import SpotifyPlayer2 from 'react-spotify-web-playback';


const MusicOnly = (props) => {
    const [ album, setAlbum ] = useState("spotify:album:1TIUsv8qmYLpBEhvmBmyBk")
     
    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
        width: '100%',
        height: 300,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'
    
    

    return (
    <div>
        <SpotifyPlayer
        uri={album}
        size={size}
        view={view}
        theme={theme}
        />
        {/* <SpotifyPlayer2
        token="3620e161c19749428f372e49f4759244"
        uris={['spotify:artist:6HQYnRM4OzToCYPpVBInuU']}
        />; */}
    </div>
    )
}

export default MusicOnly;