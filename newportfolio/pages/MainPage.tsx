import AboutPage from '../PortfolioPages/AboutPage/AboutPage';
import {
    IntroMainText,
    IntroMainTextContainer,
    MainPageContainer,
    MainPageInnerContainer,
    PictureBackgroundSVG,
    PicturesContainer,
    SaeidPicture1,
    SaeidPicture2,
    SaeidPicture3,
    SaeidPicture4,
} from '../styles/MainPage.styles';
import CircleAnimationSVG from '../svgAnimations/CircleAnimationSVG';

export default function MainPage() {
    return (
        <MainPageContainer>
            <MainPageInnerContainer>
                <IntroMainTextContainer>
                    <CircleAnimationSVG />

                    <IntroMainText>
                        My <br />
                        Name is Saeid
                    </IntroMainText>
                </IntroMainTextContainer>
                <PicturesContainer>
                    {/* <PictureBackgroundSVG src="Group 17.svg" /> */}
                    <SaeidPicture1 src="Saeid1.jpg" />
                    <SaeidPicture2 src="Saeid2.jpg" />
                    <SaeidPicture3 src="Saeid3.jpg" />
                    <SaeidPicture4 src="Saeid4.jpg" />
                </PicturesContainer>
            </MainPageInnerContainer>
        </MainPageContainer>
    );
}
