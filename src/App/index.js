import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Header from './Components/Header';
import MusicPlayer from './Components/MusicPlayer';
import Pages from './Pages';
import Home from './Home';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            currentSongData: {
                url: null
            }
        }
        this.updateCurrentSongData = this.updateCurrentSongData.bind(this);
    }
    updateCurrentSongData (data) {
        this.setState(data);
    }
    render () {
        return (
            <BrowserRouter>
                //<Header />
                <Switch>
                    <Route path="/static/media/*">
                        <Redirect to="/page-not-found" />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <Route path="/">
                        <Pages parentCallback = {this.updateCurrentSongData} />
                    </Route>
                    <Route path="/*">
                        <Redirect to="/page-not-found" />
                    </Route>
                </Switch>
                <MusicPlayer currentSongData={this.state.currentSongData} />
            </BrowserRouter>
        )
    }
}

export default App;
