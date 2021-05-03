import Markdown from 'markdown-to-jsx';
import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Code from '../Components/Code';
import Audio from '../Components/Audio';
import Images from '../Components/Images';
import Routing from '../Components/Routing';
import More from '../Components/More';
import Ant from '../Components/Ant';
import Articles from '../Components/Articles';
import 'react-image-lightbox/style.css';
import hljs from 'highlight.js/lib/core';


class Page extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            page: null,
            currentSong: {
                currentSongData: {
                    playing: false,
                    url: null,
                    name: null
                }
            }
        }
        this.updateCurrentSongData = this.updateCurrentSongData.bind(this);
        this.reloadNewMarkdown = this.reloadNewMarkdown.bind(this);
    }
    reloadNewMarkdown () {
        try {
            let file = require('./'+this.props.location.pathname.replace('/', '')+'/index.md');
            fetch(file).then((response) => response.text()).then((text) => {
                this.setState({ page: text })
            })
        } catch (ex) {
            let file = require('./page-not-found/index.md');
            fetch(file).then((response) => response.text()).then((text) => {
                this.setState({ page: text })
            })
        }
    }
    componentDidUpdate(prevProps) {
        if ((this.props.location.pathname !== prevProps.location.pathname)) {
            this.reloadNewMarkdown();
        }
    }
    componentDidMount () {
        this.reloadNewMarkdown();
        let storeCurrentSong = sessionStorage.getItem('currentSong');
        if (storeCurrentSong) {
            this.setState({currentSong: JSON.parse(storeCurrentSong)});
        }
    }
    updateCurrentSongData (data) {
        this.props.parentCallback(data);
        this.setState({currentSong: data});
        sessionStorage.setItem('currentSong', JSON.stringify(data));
    }
    render () {

        let contentString = '' + this.state.page;
        return (
            <section className="pagesContent">
                <Markdown
                    options={{
                        forceBlock: true,
                        overrides: {
                            Link: {
                                component: Link,
                            },
                            Code: {
                                component: Code,
                            },
                            Audio: {
                                component: Audio,
                                props: {
                                    parentCallback: this.updateCurrentSongData,
                                    page: this.props.location.pathname,
                                    currentSong: this.state.currentSong
                                }
                            },
                            Images: {
                                component: Images,
                                props: {
                                    page: this.props.location.pathname
                                }
                            },
                            Routing: {
                                component: Routing,
                                props: {
                                    title: "Routing",
                                    cols: ["Output", "Input"]
                                }
                            },
                            Setup: {
                                component: Routing,
                                props: {
                                    title: "Module Setup",
                                    cols: ["Mod. Name", "Note"]
                                }
                            },
                            More: {
                                component: More
                            },
                            Ant: {
                                component: Ant
                            },
                            Articles: {
                                component: Articles
                            }
                        },
                    }}
                >{contentString}</Markdown>

            </section>
        )
    }
}

export default withRouter(props => <Page {...props}/>);
