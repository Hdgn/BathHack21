import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-player';

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
    </div>
    )
}

export default MusicOnly;