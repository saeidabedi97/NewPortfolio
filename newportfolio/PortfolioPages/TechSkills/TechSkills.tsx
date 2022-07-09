import {
    HorizontalLine,
    HorizontalLineInner,
    HrLineInnerText,
} from '../AboutPage/AboutPage.styles';
import {
    Cards,
    CardsContainer,
    ProgressLabel,
    SkillProgress,
    TechSkillContainer,
    TechSkillHeaderText,
    ToolCards,
    ToolCardsContainer,
    ToolInnerText,
    ToolsHeaderText,
} from './TechSkills.styles';

export default function Techskills() {
    return (
        <TechSkillContainer>
            <HorizontalLine>
                <HorizontalLineInner>
                    <TechSkillHeaderText>Technical skills</TechSkillHeaderText>
                </HorizontalLineInner>
            </HorizontalLine>
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
                <Cards>
                    <ProgressLabel>Bootstrap</ProgressLabel>
                    <SkillProgress value="85" max="100" />
                </Cards>
                <Cards>
                    <ProgressLabel>TypeScript</ProgressLabel>
                    <SkillProgress value="65" max="100" />
                </Cards>
            </CardsContainer>
            <HorizontalLine>
                <HorizontalLineInner>
                    <ToolsHeaderText>Tools Skills</ToolsHeaderText>
                </HorizontalLineInner>
            </HorizontalLine>
            <ToolCardsContainer>
                <ToolCards>
                    <ToolInnerText>Adobe XD</ToolInnerText>
                </ToolCards>
                <ToolCards>
                    <ToolInnerText>Figma</ToolInnerText>
                </ToolCards>
                <ToolCards>
                    <ToolInnerText>Git </ToolInnerText>
                </ToolCards>
                <ToolCards>
                    <ToolInnerText>Anaconda</ToolInnerText>
                </ToolCards>
                <ToolCards>
                    <ToolInnerText>MS office</ToolInnerText>
                </ToolCards>
            </ToolCardsContainer>
        </TechSkillContainer>
    );
}
