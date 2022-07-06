import {
    Cards,
    CardsContainer,
    ProgressLabel,
    SkillProgress,
    TechSkillContainer,
    TechSkillHeaderText,
} from './TechSkills.styles';

export default function Techskills() {
    return (
        <TechSkillContainer>
            <TechSkillHeaderText>Technical Skills</TechSkillHeaderText>
            <CardsContainer>
                <Cards>
                    <ProgressLabel>HTML</ProgressLabel>
                    <SkillProgress value="90" max="100" />
                </Cards>
                <Cards>
                    <ProgressLabel>CSS</ProgressLabel>
                    <SkillProgress value="80" max="100" />
                </Cards>
                <Cards>
                    <ProgressLabel>JavaScript</ProgressLabel>
                    <SkillProgress value="70" max="100" />
                </Cards>
                <Cards>
                    <ProgressLabel>React</ProgressLabel>
                    <SkillProgress value="70" max="100" />
                </Cards>
                <Cards>
                    <ProgressLabel>NextJs</ProgressLabel>
                    <SkillProgress value="75" max="100" />
                </Cards>
                <Cards>
                    <ProgressLabel>Python</ProgressLabel>
                    <SkillProgress value="65" max="100" />
                </Cards>
            </CardsContainer>
        </TechSkillContainer>
    );
}
