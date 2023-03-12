import {  HamburgerStyled } from "./Hamburger.styled"

export const Hamburger = ({open, setOpen}) => {

    return (
           <HamburgerStyled open={open} onClick={()=> setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </HamburgerStyled>     
    )
}
