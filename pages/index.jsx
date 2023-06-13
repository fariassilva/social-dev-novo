import styled from "styled-components"
import Navbar from "../rsc/components/layout/Navbar"
import Container from "../rsc/components/layout/Container"
import CreatePost from "../rsc/components/cards/CreatePost"
import H3 from "../rsc/components/typography/H3"
import Post from "../rsc/components/cards/Post"

const Content = styled.div`

margin: 50px 0;


`
const LastPostText = styled(H3)`
padding: 40px 0;
`
const RefreshPosts = styled.span`
font-weight: bold;
color: ${props => props.theme.primary};
cursor: pointer;


`
const RefreshPostsContainer = styled.div`
text-align: center;
`

const PostContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 20px;
`
function HomePage () {
  
  return (

 <>
    <Navbar/>

    <Content>
      <Container>
      <CreatePost/>
      <LastPostText>Ultimas postagens:</LastPostText>
      <RefreshPostsContainer>
        <RefreshPosts>Carregar novas postagens</RefreshPosts>

      </RefreshPostsContainer>

      <PostContainer>
        <Post />
        <Post />
        <Post />


      </PostContainer>
      

      </Container>
    
    </Content>

  </>
  )
}

export default HomePage