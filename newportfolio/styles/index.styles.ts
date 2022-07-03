import styled from 'styled-components';
export const NavHeader = styled.nav`
    background-color: #1f2833;
    height: 50px;
    width: 100%;
    border-bottom: 3px solid #66fcf1;
    display: flex;
    justify-content: space-between;
    position: fixed;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    list-style-type: none;
    cursor: pointer;
`;

export const NavItem = styled.li`
    font-family: 'Sansita Swashed';
    font-size: 20px;
    color: #fff8f0;
    &:hover {
        color: #66fcf1;
    }
`;

export const NavLogo = styled.p`
    font-family: 'Sansita Swashed';
    font-size: 20px;
    color: #66fcf1;
    line-height: 85%;
    margin-right: 5%;
    width: 10rem;
`;
