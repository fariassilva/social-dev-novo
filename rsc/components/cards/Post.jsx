import styled from "styled-components";

const PostContainer = styled.div`
 background-color: ${props => props.theme.white};
 padding: 20px;
 border-radius: 10px;

`
const StyledUsername = styled.p`
font-weight: bold;
font-size: 18px;
`
const StyledDate = styled.p`
font-size: 12px;
`
const ContainerText = styled.p`
margin-top: 10px;
`

function Post () {
 return(
  <PostContainer>
    <StyledUsername>@username</StyledUsername>
    <StyledDate>01 de janeiro 2020</StyledDate>
    <ContainerText>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales ut nunc non suscipit. Ut faucibus justo ac ligula feugiat faucibus. Duis nisi ligula, fringilla tincidunt sem sed, fermentum blandit urna. Suspendisse vitae erat eget augue elementum tincidunt ac at diam. Etiam sollicitudin interdum justo, at tincidunt dui ullamcorper quis. Aliquam erat volutpat. Nulla tempus diam nibh. Donec suscipit nec massa vitae tempor.
    </ContainerText>
  </PostContainer>

 )

}

export default Post