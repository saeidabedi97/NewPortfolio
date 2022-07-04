import styled from 'styled-components';

export const MainPageContainer = styled.div`
    display: flex;
    height: 43rem;
    position: relative;
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
`;

export const IntroMainText = styled.h1`
    color: #66fcf1;
    font-family: 'Sansita swashed';
    font-size: 95px;
    position: absolute;
    text-align: center;
    font-weight: 1000;
    width: 85%;
`;

export const PicturesContainer = styled.section`
    height: 100%;
    width: 45%;
    position: relative;
    top: 10%;
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
`;

export const SaeidPicture4 = styled.img`
    height: 350px;
    width: 450px;
    border-radius: 5%;
    position: absolute;
    top: 40%;
`;

export const PictureBackgroundSVG = styled.img`
    opacity: 0.8;
`;
