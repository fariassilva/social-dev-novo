import styled from "styled-components"
import Navbar from "../rsc/components/layout/Navbar"
import Container from "../rsc/components/layout/Container"
import CreatePost from "../rsc/components/cards/CreatePost"

const Content = styled.div`

margin: 50px 0;


`

function HomePage () {
  
  return (

 <>
    <Navbar/>

    <Content>
      <Container>
      <CreatePost/>

      </Container>
    
    </Content>

  </>
  )
}

export default HomePage