import React from 'react';
import { RiPlayCircleLine, RiStopCircleLine } from 'react-icons/ri';
import port_map from '../../port_map.js';

class Audio extends React.Component {
    constructor (props) {
        super(props);
        this.updateCurrentSongData = this.updateCurrentSongData.bind(this);
        this.state = {
            playing: false,
            url: null,
            name: null
        }
    }
    updateCurrentSongData (data) {
        this.props.parentCallback(data);
        this.setState({
            playing: data.currentSongData.playing,
            url: data.currentSongData.url,
            name: data.currentSongData.name
        });
    }
    render () {
        let mp3Url;
        if (this.props.src.startsWith('http')) {
            mp3Url = this.props.src.trim();
        } else if (this.props.src.startsWith('/')) {
            mp3Url = port_map.asset_servers[this.props.srv].host
            + ":"
            + port_map.asset_servers[this.props.srv].port
            + this.props.src.trim();
        } else {
            mp3Url = port_map.asset_servers[this.props.srv].host
            + ":"
            + port_map.asset_servers[this.props.srv].port
            + this.props.page
            + "/"
            + this.props.src.trim();
        }
        let button;
        if (this.props.currentSong.currentSongData.url === mp3Url) {
            button = <RiStopCircleLine className="playButton" onClick={() => this.updateCurrentSongData({currentSongData: {playing: false, url:null, name: null}})} />
        } else {
            button = <RiPlayCircleLine className="playButton" onClick={() => this.updateCurrentSongData({currentSongData: {playing: true, url:mp3Url, name: this.props.name}})} />
        }
        return (
            <div>
                {button}<span className="audioComponentChildren"> {this.props.children}</span>
            </div>
        )
    }
}

export default Audio;
