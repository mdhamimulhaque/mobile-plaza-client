import React from 'react';



const Blog = () => {

    // --->time
    const today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time)

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    // ---> date
    let date = `${day}-${month}-${year}`;
    console.log(date);


    return (
        <div>
            blogs
        </div>
    );
};

export default Blog;