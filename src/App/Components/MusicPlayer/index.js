import React from 'react';
import ReactPlayer from 'react-player';


class MusicPlayer extends React.Component {
    constructor (props) {
        super(props);
        this.wrapperRef = React.createRef();
    }
    componentDidMount () {
        const storedCurrentSong = sessionStorage.getItem('currentSong');
        console.log('bloopawoopa', storedCurrentSong);
    }
    componentDidUpdate () {
        const wrapper = this.wrapperRef.current;
        if (this.props.currentSongData.playing === true) {
            wrapper.classList.add('musicPlayerOpen');
        } else {
            wrapper.classList.remove('musicPlayerOpen');
        }
    }
    render () {
        return (
            <section className="musicPlayerContainer">
                <div className="musicPlayerSpacer"></div>
                <div ref={this.wrapperRef} className="musicPlayerFixed">
                    <div>Now playing: {this.props.currentSongData.name}</div>
                    <ReactPlayer
                        url={this.props.currentSongData.url}
                        playing={this.props.currentSongData.playing}
                        controls={true}
                        height="50px"
                        config={{
                            file: {
                                forceAudio: true
                            }
                        }}
                    />
                </div>
            </section>
        )
    }
}
//https://github.com/retrofuturejosh/demo-react-modular-audio-player/blob/master/public/heyJude.mp3?raw=true
//https://soundcloud.com/lil-baby-4pf/the-bigger-picture
export default MusicPlayer;
