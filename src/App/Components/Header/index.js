import React from 'react';
import {
  Link,
} from 'react-router-dom';


class Header extends React.Component {
    render () {
        return (
            <section className="header">
                <div className="headerLogo"><Link to="/">AntFrisby.org</Link></div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/now">Now</Link></li>
                    <li><Link to="/sound/experiments">Sound</Link></li>
                    <li><Link to="/programming">Programming</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </section>
        )
    }
}

export default Header;
