import styled from "styled-components";

export const CardList = styled.ul` 
padding: 15px;
margin: 0 auto;
@media (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
}
@media (min-width: 1200px) {
    max-width: 1200px;
}
`
export const CardItem = styled.li` 
margin: 0 auto;
margin-top: 30px;



@media (min-width: 767px) {
    max-width: 350px;

}
`