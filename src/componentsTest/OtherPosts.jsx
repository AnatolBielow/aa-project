import React from "react";

import { Link } from "react-router-dom";

const OtherPosts = ()=> {

    const posts = [
        {
           id: 1,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil laudantium rem! Alias veniam itaque neque iusto expedita,",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem suscipit, enim ut voluptate maiores tempora maxime est doloribus, eligendi aliquam magni, possimus repellendus nisi ea explicabo laboriosam culpa quia.",
            img: "https://images.pexels.com/photos/6386260/pexels-photo-6386260.jpeg"
        }, 
        {
            id: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil laudantium rem! Alias veniam itaque neque iusto expedita,",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem suscipit, enim ut voluptate maiores tempora maxime est doloribus, eligendi aliquam magni, possimus repellendus nisi ea explicabo laboriosam culpa quia.",
            img: "https://images.pexels.com/photos/13869711/pexels-photo-13869711.jpeg"
        },
        {
            id: 3,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil laudantium rem! Alias veniam itaque neque iusto expedita,",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem suscipit, enim ut voluptate maiores tempora maxime est doloribus, eligendi aliquam magni, possimus repellendus nisi ea explicabo laboriosam culpa quia.",
            img: "https://images.pexels.com/photos/7364446/pexels-photo-7364446.jpeg"
        },
        {
            id: 4,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil laudantium rem! Alias veniam itaque neque iusto expedita,",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem suscipit, enim ut voluptate maiores tempora maxime est doloribus, eligendi aliquam magni, possimus repellendus nisi ea explicabo laboriosam culpa quia.",
            img: "https://images.pexels.com/photos/7143920/pexels-photo-7143920.jpeg?cs=srgb&dl=pexels-jakub-novacek-7143920.jpg"
        },
    ]
    return (
        <div>
           <div className="posts">
            {posts.map(post =>(
                <div className="post" key={post.id}>
                    <h1>{post.title}</h1>
                    <h2>{post.description}</h2>
                    <div className="img">
                        <img src={post.img} alt="" width={300}/>
                    </div>
                   <Link to={`/post/${post.id}`}>Czytaj</Link>

                </div>
            ))}
            </div> 
        </div>
    )
}

export default OtherPosts
