import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainPageContainer = styled.div`
    height: 43rem;
    width: 100%;
    position: relative;
    display: flex;
`;

export const MainPageInnerContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 10%;
`;

export const IntroMainTextContainer = styled.section`
    width: 40%;
    height: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    @media (max-width: 480px) {
        justify-content: center;
        align-items: center;
        width: 320px;
    }
`;

export const IntroMainText = styled.h1`
    color: #66fcf1;
    font-family: 'Sansita swashed';
    font-size: 95px;
    text-align: center;
    font-weight: 1000;
    width: 85%;
    @media (max-width: 480px) {
        font-size: 55px;
        position: absolute;
        top: 25px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
        font-size: 55px;
    }
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 75px;
    }
    @media (min-wdith: 1025px) and (max-width: 1280px) {
        font-size: 85px;
    }
    @media (min-width: 1281px) {
        font-size: 95px;
    }
`;

export const IntroMainBottomContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 426px) {
        position: relative;
        top: 35px;
    }
`;

export const CVButton = styled(motion.button)`
    border-top-right-radius: 25%;
    border-bottom-left-radius: 25%;
    border: 4px solid #66fcf1;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    cursor: pointer;
    color: whitesmoke;
    text-align: center;
    background-color: transparent;
    width: 100px;
    font-weight: 600;

    @media (max-width: 428px) {
        width: 75px;
        margin-right: 25px;
        font-size: 12px;
    }
`;

export const FrontendText = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    color: whitesmoke;
    font-size: 15px;
    @media (max-width: 428px) {
        font-size: 12px;
        margin-left: 10px;
    }
`;

export const PicturesContainer = styled.section`
    height: 100%;
    width: 45%;
    position: relative;
    top: 10%;

    @media (max-width: 800px) {
        display: none;
    }
`;

export const SaeidPicture1 = styled.img`
    height: 400px;
    width: 350px;
    border-radius: 5%;
    opacity: 0.5;
    position: absolute;
    left: 40%;
    &:hover {
        opacity: 1;
        z-index: 1;
    }
    @media (max-width: 800px) {
        display: none;
    }
`;

export const SaeidPicture2 = styled.img`
    height: 400px;
    width: 350px;
    border-radius: 5%;
    opacity: 0.5;
    position: absolute;

    &:hover {
        opacity: 1;
        z-index: 1;
    }
    @media (max-width: 800px) {
        display: none;
    }
`;

export const SaeidPicture3 = styled.img`
    height: 350px;
    width: 350px;
    border-radius: 5%;
    opacity: 0.5;
    position: absolute;
    left: 50%;
    top: 40%;
    &:hover {
        opacity: 1;
        z-index: 1;
    }
    @media (max-width: 800px) {
        display: none;
    }
`;

export const SaeidPicture4 = styled.img`
    height: 350px;
    width: 450px;
    border-radius: 5%;
    position: absolute;
    top: 40%;
    @media (max-width: 800px) {
        display: none;
    }
`;
