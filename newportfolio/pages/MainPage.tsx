import AboutPage from '../PortfolioPages/AboutPage/AboutPage';
import {
    CVButton,
    FrontendText,
    IntroMainBottomContainer,
    IntroMainText,
    IntroMainTextContainer,
    MainPageContainer,
    MainPageInnerContainer,
    PicturesContainer,
    SaeidPicture1,
    SaeidPicture2,
    SaeidPicture3,
    SaeidPicture4,
} from '../styles/MainPage.styles';
import PathAnimationSVG from '../svgAnimations/PathAnimationSVG';

export default function MainPage() {
    return (
        <MainPageContainer>
            <MainPageInnerContainer>
                <IntroMainTextContainer>
                    <PathAnimationSVG />
                    <IntroMainText>
                        My <br />
                        Name is Saeid
                    </IntroMainText>
                    <IntroMainBottomContainer>
                        <FrontendText>FRONTEND DEVELOPER</FrontendText>
                        <CVButton
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View CV
                        </CVButton>
                    </IntroMainBottomContainer>
                </IntroMainTextContainer>
                <PicturesContainer>
                    <SaeidPicture1 src="Saeid1.jpg" />
                    <SaeidPicture2 src="Saeid2.jpg" />
                    <SaeidPicture3 src="Saeid3.jpg" />
                    <SaeidPicture4 src="Saeid4.jpg" />
                </PicturesContainer>
            </MainPageInnerContainer>
        </MainPageContainer>
    );
}
