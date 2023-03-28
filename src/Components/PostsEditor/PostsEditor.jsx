import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import API from "../../services/api"
import { deleteIcon, editIcon } from "../Images/Icons"
import { BtnWrapper, ButtonDelete, Desc, Edit, PostItem, PostsList, Title, Wrapper } from "./PostsEditor.styled"

export const PostsEditor = () => {
const [posts, setPosts] = useState([])

const location = useLocation()
const navigate = useNavigate()
const postId = location.pathname.split("/"[2])

const fetchPosts = async () => {
    try {
        const res = await API.get("/posts")
        setPosts(res.data)
    } catch (error) {
        
    }
}

useEffect(()=> {
    fetchPosts()
},[])

const handleDelete = async (id) => {
    try {
       await API.delete(`posts/${id}`)
       toast.success("Post został usunięty")
       fetchPosts()
    } catch (error) {
       console.log(error) 
    }
}

    return (
        <Wrapper>
              <PostsList>
            {posts.map((post)=> (
                <PostItem key={post.id}>
                    <Title>{post.title}</Title>
                    <Desc>{post.description}</Desc>
                    <BtnWrapper>
                        <Edit to={`/panel/home?edit=2`} state={post}>{editIcon}</Edit>
                    </BtnWrapper>
                    <BtnWrapper>    
                        <ButtonDelete onClick={()=>handleDelete(post.id)}>{deleteIcon}</ButtonDelete>
                    </BtnWrapper>
                </PostItem>
            ))}
        </PostsList>
        </Wrapper>
      
    )
}