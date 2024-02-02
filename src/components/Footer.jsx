import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <a className="text-dark fs-4" href="https://github.com/rachitst" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
//     display: flex;
//     width : 100%
// `
// const Left = styled.div`
//     flex:1;
//     display: flex;
//     flex-direction: column;
//     padding: 20px;;
// `
// const Center = styled.div`
//     flex:1;
//     padding: 20px;
// `

// const Title = styled.h2`
//     margin-bottom: 30px;
// `
// const List = styled.ul`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex-wrap: wrap;
// `
// const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 10px;
// `

// const Right = styled.div`
//     flex:1;
//     padding: 20px;
// `
// const Logo = styled.h1``

// const Description= styled.p`
//     margin: 20px 0px;
// `

// const SocialContainer = styled.div`
//     display: flex;
// `
// const SocialIcon = styled.div`
//     width: 40px;
//     height: 40px;
//     color: white;
//     border-radius: 50%;
//     background-color: #${props => props.color};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 10px;
// `
// const ContactItem = styled.div`
//     margin-bottom: 20px;
//     display: flex;
//     align-items: center;

// `
// const Payment = styled.img`
//     width: 50%;
// `

// export const Footer = () => {
//   return(
//     <Container>
//         <Left>
//             <Logo>Rachit</Logo>
//             <Description>This is my react project on ecommerce. 
//             In this website I have used React components for styling. This website is made using React JS.</Description>
//             <SocialContainer>
//             </SocialContainer>
//         </Left>
//         <Center>
//             <Title>Useful links</Title>
//             <List>
//                 <ListItem>Home</ListItem>
//                 <ListItem>Cart</ListItem>
//                 <ListItem>Man Fashion</ListItem>
//                 <ListItem>Woman Fashion</ListItem>
//                 <ListItem>Accessories</ListItem>
//                 <ListItem>My Account</ListItem>
//                 <ListItem>Order Tracking</ListItem>
//                 <ListItem>Wishlist</ListItem>
//                 <ListItem>Terms</ListItem>
//                 <ListItem>Home</ListItem>
//             </List>
//         </Center>
//         <Right>
//             <Title>Contact</Title>
//             <ContactItem>
//                 <Room style={{marginRight:"10px"}}/> Malad , Mumbai - 400097
//             </ContactItem>
//             <ContactItem>
//                 <Phone style={{marginRight:"10px"}}/> +91 9653339798
//             </ContactItem>
//             <ContactItem>
//                 <MailOutline style={{marginRight:"10px"}}/> rachitchheda16@gmail.com
//             </ContactItem>
//             <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
//         </Right>
//     </Container>
//   )
// }

// export default Footer;
