import { useRef, useState } from 'react';
import video2 from '../../assets/videos/video2.mp4'
import './Video.css';

function Video() {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const onVideoPress = () => {
        if (playing){
            videoRef.current.pause()
            setPlaying(!playing)
        } else {
            videoRef.current.play()
            setPlaying(!playing)
        }
    }

    return ( 
        <div className="video">
            <video 
                className='video__player' 
                loop
                controls
                onClick={onVideoPress}
                ref={videoRef}
                src={video2}></video>
            {/* <Footer /> */}
            {/* <Sidebar /> */}
        </div>
     );
}

export default Video;