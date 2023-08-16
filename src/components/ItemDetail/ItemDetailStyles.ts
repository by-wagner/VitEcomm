import styled from 'styled-components';

export const DetailContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 40px;
background-color: rgba(255, 255, 255, 0.9);
border-radius: 10px;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
`;

export const ProductImage = styled.img`
width: 60%;
border-radius: 10px;
margin-bottom: 20px;
`;

export const ProductTitle = styled.h2`
font-size: 24px;
color: black;
margin-bottom: 10px;
`;

export const ProductDescription = styled.p`
font-size: 18px;
color: rgba(0, 0, 0, 0.6);
text-align: center;
margin-bottom: 20px;
`;

export const ProductPrice = styled.p`
font-size: 20px;
color: black;
font-weight: bold;
`;
