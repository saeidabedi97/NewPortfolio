import DiamondAnimationSVG from '../../svgAnimations/DiamondAnimationSVG';
import {
    AboutContainer,
    AboutMeBody,
    AboutMeBodyContainer,
    AboutMeHeader,
    AboutMeHeaderContainer,
    AboutMeTopInnerContainer,
    HorizontalLine,
    HorizontalLineInner,
    HrLineInnerText,
    ProfList,
    ProfListContainer,
} from './AboutPage.styles';

export default function AboutPage() {
    return (
        <AboutContainer>
            <AboutMeTopInnerContainer>
                <AboutMeHeaderContainer>
                    <AboutMeHeader>About me</AboutMeHeader>
                </AboutMeHeaderContainer>
                <AboutMeBodyContainer>
                    <AboutMeBody>
                        <strong>Name and surname:</strong>Saeid Abedi
                    </AboutMeBody>
                    <AboutMeBody>
                        <strong>Born:</strong>July 29th, 1997 in Shiraz, Iran
                    </AboutMeBody>
                    <AboutMeBody>
                        <strong>Place of residence:</strong>Barcelona, Spain
                    </AboutMeBody>
                    <AboutMeBody>
                        <strong>Status:</strong>Single
                    </AboutMeBody>
                    <AboutMeBody>
                        <strong>Languages:</strong>Persian, English, Spanish
                    </AboutMeBody>
                </AboutMeBodyContainer>
            </AboutMeTopInnerContainer>
            <HorizontalLine>
                <HorizontalLineInner>
                    <HrLineInnerText>Proffesionally</HrLineInnerText>
                </HorizontalLineInner>
            </HorizontalLine>
            <ProfListContainer>
                <ProfList>Creative</ProfList>
                <ProfList>Hard worker</ProfList>
                <ProfList>Solution-oriented</ProfList>
                <ProfList>Accurate</ProfList>
                <ProfList>Motivated</ProfList>
            </ProfListContainer>
        </AboutContainer>
    );
}
