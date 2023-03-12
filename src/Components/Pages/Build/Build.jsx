import { ImageContainer, SectionStyled, PageTitle } from "../Page.styled"
import build from '../../Images/build.jpg'
export const Build = () => {
    return (
        <SectionStyled>
            <PageTitle>Strona w budowie</PageTitle>
            <ImageContainer>
                <img src={build} alt="W budowie"/>
            </ImageContainer>
        </SectionStyled>
    )
}