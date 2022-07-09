import styled from 'styled-components';

export const AboutContainer = styled.section`
    background: rgba(0, 215, 255, 0.15);
    height: 650px;
    width: 650px;
    border-radius: 50%;
    position: relative;

    top: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 480px) {
        top: 80px;
    }
`;

export const AboutMeTopInnerContainer = styled.div``;
export const AboutMeHeaderContainer = styled.div``;

export const AboutMeHeader = styled.h2`
    font-family: 'Sansita Swashed';
    font-size: 30px;
    color: whitesmoke;
`;

export const AboutMeBodyContainer = styled.div``;

export const AboutMeBody = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: whitesmoke;
`;

export const HorizontalLine = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    width: 85%;
    margin: 5% 0% 0% 0%;

    &::before,
    &::after {
        content: '';
        flex: 1;
        border-bottom: 5px solid #66fcf1;
    }
`;

export const HorizontalLineInner = styled.div``;

export const HrLineInnerText = styled.p`
    font-family: 'Sansita Swashed';
    font-size: 28px;
    padding: 10px;
    color: whitesmoke;
`;

export const ProfListContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const ProfList = styled.li`
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    color: whitesmoke;
`;
