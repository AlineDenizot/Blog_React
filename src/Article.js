import React from 'react';
import PropTypes from 'prop-types';

function Article({title, description, author}) {
    return (
        <div>
            <h3>{title}</h3>
            <p> {description} </p>
            <h5>{author}</h5>
        </div>
    )
}

Article.propTypes = {
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   author: PropTypes.string.isRequired
  };
export default Article;