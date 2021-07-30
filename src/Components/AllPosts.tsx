import React from 'react';
import { useSelector } from 'react-redux';
import EachPost from "./EachPost";

interface postType {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const AllPosts = () => {


    const allPosts = useSelector( (state:any) => state.postReducer);

    const displayAllPosts = allPosts.map( (post:any) => {
        return(
            <div key={post.id} >
                <EachPost
                    postId={post.id}
                    postTitle={post.title}
                    postBody={post.body}
                />
            </div>
        )
    })
    return(
        <div className="each-post-con">
            {displayAllPosts}
        </div>
    );
};


export default AllPosts;