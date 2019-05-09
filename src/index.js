// import libraries

import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import AprovalReject from './AprovalReject';
import CommentDetail from './CommentDetail';


// create component
const App = () => {
    return (

        <div className="ui container comments">
        <AprovalReject>
            <CommentDetail 
                author='sam'
                date='today 9:00 am'
                content='nice blog 1'
                src={faker.image.avatar()} 
            />
        </AprovalReject>
        <AprovalReject>
            <CommentDetail 
                author='jany'
                date='yesterday 9:00 am'
                content='nice blog 2'
                src={faker.image.avatar()}
            />
        </AprovalReject>
        <AprovalReject>
            <CommentDetail 
                author='christin'
                date='today 12:00 pm'
                content='nice blog 3'
                src={faker.image.avatar()}
            />
        </AprovalReject>
        <AprovalReject>
            <CommentDetail
                author='don'
                date='today 10:00 am'
                content='nice blog 4'
                src={faker.image.avatar()}
            />
        </AprovalReject>
        </div>
    );
};


// use that comeponent and show in browser
ReactDOM.render(<App/>, document.querySelector("#root"));