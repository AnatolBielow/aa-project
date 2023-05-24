import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../../../services/api"
import { Description, EventSection, Img, Post, Title } from "./SingleEvent.styled";
import moment from "moment";
import DOMPurify from "dompurify"
import image from "../../Images/newspaper.jpg";
import { PostsMenu } from "../../PostsMenu";

const URL = process.env.REACT_APP_CLIENT


export const SingleEvent = () => {

   const [post, setPost] = useState(null);

  const location = useLocation();


  const postId = location.pathname.split("/")[2];


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);


  return (
    <EventSection img = {image}>
      {post? <Post>
        <Img src={`${URL}uploads/images/${post?.img}`} alt="" />
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        ></p>  
        
          <p>Posted {moment(post.date).fromNow()}</p>
           </Post>: <div>Ładuję...</div>}
    <PostsMenu/>
    </EventSection>
  );
}