import React from 'react';
import {useLocation, useParams} from 'react-router';


const Post = () => {
    const {id} = useParams();
//     const param = useParams();
//    const id = param.id
    const location = useLocation();
    const query = new URLSearchParams(location.search);

    // console.log(useLocation());
    return (
        <div>
            <h1>
                id is = {id}
            </h1>
            <h2>
                {query.get("name")}
            </h2>
            same as
            <h3>
                {/* this is used to query url parameter */}
                {new URLSearchParams(useLocation().search).get("name")}
            </h3>
        </div>
    );
};

export default Post;