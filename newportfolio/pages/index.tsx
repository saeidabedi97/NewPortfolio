import type { NextPage } from 'next';
import Head from 'next/head';
import MainPage from './MainPage';
import GlobalStyle from '../styles/GlobalStyles';
import { NavHeader, NavList, NavItem, NavLogo } from '../styles/index.styles';
import RandomQuote from '../RandomQuote/RandomQuote';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Saeid portfolio</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@500&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <GlobalStyle />
            <NavHeader>
                <NavList>
                    <NavItem>BIOGRAPHY</NavItem>
                    <NavItem>SKILLS</NavItem>
                    <NavItem>PROJECTS</NavItem>
                    <NavItem>CONTACTS</NavItem>
                </NavList>
                <div>
                    <NavLogo>SAEID ABEDI</NavLogo>
                </div>
            </NavHeader>
            <RandomQuote />
            <MainPage />
        </div>
    );
};

export default Home;
