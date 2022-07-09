import styled from 'styled-components';

export const TechSkillContainer = styled.div`
    position: relative;
    top: 1050px;

    height: 850px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 482px) {
        top: 1350px;
        left: 250px;
    }
`;

export const TechSkillHeaderText = styled.h3`
    font-family: 'Sansita Swashed';
    font-size: 35px;
`;

export const SkillProgress = styled.progress``;

export const CardsContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    gap: 25px;
    padding: 15px;
    min-width: 650px;
`;

export const Cards = styled.div`
    width: 250px;
    height: 250px;
    background-color: rgba(0, 215, 255, 0.26);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`;

export const SkillProgressContainer = styled.div``;

export const ProgressLabelContainer = styled.div``;

export const ProgressLabel = styled.p`
    font-size: 35px;
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
`;
