import { PagesContainer, PageTitle } from "./Subtitle.component";

export const Subtitle = ({title, pL, pR}) => {
    return(
        <PagesContainer style={{paddingLeft: pL, paddingRight: pR}}>
            <PageTitle>{title}</PageTitle>
        </PagesContainer>
    )
}