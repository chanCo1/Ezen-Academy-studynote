import React from 'react';

const NewsItem = ({item: {author, title, description, url, image, datetime}}) => {
  return (
    <div>
      <a href={url} target='_blank' rel='noreferrer'>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <ul>
            <li>{author}</li>
            <li>{new Date(datetime).toLocaleString()}</li>
          </ul>
        </div>
      </a>
    </div>
  );
};

export default NewsItem;