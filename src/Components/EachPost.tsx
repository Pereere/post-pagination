import React from 'react';

const EachPost = (props: any) => {
    return (
            <div className="each-post">
                <div className="each-post-title">
                    <h3> {props.postTitle}</h3>
                </div>

                <div>
                    <p> {props.postBody} </p>
                </div>
            </div>
    );
};

export default EachPost;