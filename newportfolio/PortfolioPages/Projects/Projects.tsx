import {
    HorizontalLine,
    HorizontalLineInner,
    HrLineInnerText,
} from '../AboutPage/AboutPage.styles';
import { ProjectsContainer, ProjectsHeaderText } from './Projects.styles';

export default function Projects() {
    return (
        <ProjectsContainer>
            <HorizontalLine>
                <HorizontalLineInner>
                    <ProjectsHeaderText>Projects</ProjectsHeaderText>
                </HorizontalLineInner>
            </HorizontalLine>
        </ProjectsContainer>
    );
}
