import React from 'react';

const CommentDetail = (props) => {
// console.log("test :",props);
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href='/' className="avatar">
                    <img alt="avatar" src={props.src} />
                </a>
                <div className="content">
                <a href='/' className="author">
                  <span>{props.author}</span>
                </a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">{props.content}</div>
                </div>
            </div>
            {/* <div className="comment">
                <a href='/' className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                <a href='/' className="author">
                   <span>sam</span>
                </a>
                <div className="metadata">
                    <span className="date">today at 6:00 pm</span>
                </div>
                <div className="text">nice blog post !</div>
                </div>
            </div>
            <div className="comment">
                <a href='/' className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                <a href='/' className="author">
                   <span>sam</span>
                </a>
                <div className="metadata">
                    <span className="date">today at 6:00 pm</span>
                </div>
                <div className="text">nice blog post !</div>
                </div>
            </div>
            <div className="comment">
                <a href='/' className="avatar">
                    <img alt="avatar" src={faker.image.avatar()} />
                </a>
                <div className="content">
                <a href='/' className="author">
                   <span>sam</span>
                </a>
                <div className="metadata">
                    <span className="date">today at 6:00 pm</span>
                </div>
                <div className="text">nice blog post !</div>
                </div>
            </div> */}
        </div>
    );
};
export default CommentDetail;