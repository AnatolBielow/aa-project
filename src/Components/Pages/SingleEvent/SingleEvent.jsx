import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../../../services/api"
import { Description, EventSection, Img, Post, Title } from "./SingleEvent.styled";
import moment from "moment";
import DOMPurify from "dompurify"
import image from "../../Images/newspaper.jpg";
import { PostsMenu } from "../../PostsMenu";

const URL = process.env.REACT_APP_CLIENT

export const SingleEvent = () => {
//    const post =  {
//         id: 1,
//         title: "Post pierwszy",
//         description:
//           "Mus mauris vitae ultricies leo. Fames ac turpis egestas integer eget. Tristique et egestas quis ipsum suspendisse ultrices. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Enim facilisis gravida neque convallis a cras semper auctor. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. ",
//   img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   content: "<p>Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Enim facilisis gravida neque convallis a cras semper auctor. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Magna sit amet purus gravida quis. Urna id volutpat lacus laoreet non. Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Enim tortor at auctor urna nunc. Natoque penatibus et magnis dis parturient. Blandit massa enim nec dui nunc. Fringilla ut morbi tincidunt augue interdum. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Consectetur purus ut faucibus pulvinar. Nisl tincidunt eget nullam non nisi est sit amet. Velit sed ullamcorper morbi tincidunt ornare massa. Elit ullamcorper dignissim cras tincidunt. Lectus magna fringilla urna porttitor rhoncus dolor purus.</p>"
//       }

   const [post, setPost] = useState({});

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
      <Post>
        <Img src={`${URL}${post?.img}`} alt="" />
        <Title>{post.title}</Title>
        <Description>{post.description}</Description>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        ></p>  
        
          <p>Posted {moment(post.date).fromNow()}</p>
           </Post>
    <PostsMenu/>
    </EventSection>
  );
}