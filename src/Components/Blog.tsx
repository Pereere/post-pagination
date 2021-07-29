import React from "react";
// @ts-ignore
import { useParams } from "react-router-dom";

const Blog = () => {

    const store = (e:any) => {
        e.preventDefault();
        localStorage.setItem('jwt', 'login');
    }

    // const { id } = useParams();
    return(
        <div>
            <h3> Blog Par ID: </h3>

            <button onClick={store}> Storage </button>
        </div>
    );
};

export default Blog;