import { Page } from "../Page";
import image from "../../Images/newspaper.jpg";
import { useContext, useEffect, useState } from "react";
import API from "../../../services/api";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  ContentWrapper,
  Description,
  EventsSection,
  Img,
  ImgContainer,
  Post,
  Posts,
  Title,
} from "./Events.styled";
import { AuthContext } from "../../../context/authContext";

const URL = process.env.REACT_APP_CLIENT
const title = "Wydarzenia Intergrupy AA";

export const Events = () => {
  const {currentUser} = useContext(AuthContext)
  
 const navigate = useNavigate() 
  // const posts = [
  //   {
  //     id: 1,
  //     title: "Post pierwszy",
  //     description:
  //       "Mus mauris vitae ultricies leo. Fames ac turpis egestas integer eget. Tristique et egestas quis ipsum suspendisse ultrices. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Enim facilisis gravida neque convallis a cras semper auctor. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. ",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  //   {
  //     id: 2,
  //     title: "Post drugi",
  //     description:
  //       "Mus mauris vitae ultricies leo. Fames ac turpis egestas integer eget. Tristique et egestas quis ipsum suspendisse ultrices. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Enim facilisis gravida neque convallis a cras semper auctor. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. ",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },

  //   {
  //     id: 3,
  //     title: "Post pierwszy",
  //     description:
  //       "Mus mauris vitae ultricies leo. Fames ac turpis egestas integer eget. Tristique et egestas quis ipsum suspendisse ultrices. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Enim facilisis gravida neque convallis a cras semper auctor. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. ",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },

  //   {
  //     id: 4,
  //     title: "Post pierwszy",
  //     description: "Lorem ipsum jakiś tekst",
  //     img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   },
  // ];
  const [posts, setPosts]= useState([])

    const fetchPosts = async ()=> {
      try {
        const res = await API.get('/posts')
        setPosts(res.data)
      } catch (error) {
        console.log(error)
      }
    }
   useEffect(()=> {
    fetchPosts()
   },[])


  return (
    <EventsSection img={image}>
      <Posts>
        {posts.map((post) => (
          <Post key={post.id}>
            <ImgContainer>
              <Img src={`${URL}${post.img}`} alt="" />
            </ImgContainer>
            <ContentWrapper>
           
                <Title>{post.title}</Title>
              <Description>{post.description}</Description>
              <Button onClick={()=> navigate(`/events/${post.id}`)}>Czytaj więcej</Button>
            </ContentWrapper>
          </Post>
        ))}
      </Posts>
    </EventsSection>
  );
};
