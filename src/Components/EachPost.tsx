import React from 'react';

const EachPost = (props: any) => {
    return (
        <div className="each-post-id">
            <div>
                <h3> {props.postTitle}</h3>
            </div>

            <div>
                <p> {props.postBody} </p>
            </div>
        </div>
    );
};

export default EachPost;