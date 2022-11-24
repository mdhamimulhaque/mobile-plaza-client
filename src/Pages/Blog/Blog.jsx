import React, { useEffect } from 'react';

const Blog = () => {
    useEffect(() => {
        fetch(`Products.json`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            blogs
        </div>
    );
};

export default Blog;