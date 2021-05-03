import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../../Pages/articles.js';

class Articles extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="articles">
                {articles.map((article) => {
                    return (
                        <div>
                            <Link to={article.url}>{article.name}</Link> - {article.desc} ({article.date})
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Articles;
