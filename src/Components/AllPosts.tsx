import React from 'react';
import { useSelector } from 'react-redux';

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
            <div key={post.id}>
                <p> {post.title} </p>
            </div>
        )
    })
    return(
        <div>
            {displayAllPosts}
        </div>
    );
};


export default AllPosts;