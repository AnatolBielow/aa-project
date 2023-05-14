import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import API from "../../services/api";
import { deleteIcon, editIcon } from "../Images/Icons";
import { AddressesContainer, Bold, BtnWrapper, ButtonDelete, Buttons, Content, Edit, Item, Title } from "./MeetingsMenu.styled";

export const MeetengsMenu = () => {

    const [addresses, setAddresses] = useState([])

    const fetchAddresses = async () => {
        try {
            const res = await API.get("/addresses")
            setAddresses(res.data)
        } catch (error) {
  
        }
    }
  
    useEffect(()=> {
        fetchAddresses()
    },[])
  
  
    const handleDelete = async (id) => {
        try {
           await API.delete(`addresses/${id}`)
           toast.success("Adres został usunięty")
           fetchAddresses()
        } catch (error) {
           console.log(error)
        }
    }
  

    return (
        <AddressesContainer>
        {addresses.map((address) => (
          <Item key={address.id}>
            <Title>{address.city}</Title>
            <Content>"{address.groupName}"</Content>
            <Content>{address.street}</Content>
            <Content>{address.date}</Content>
            <Content>{address.time}</Content>
            <Content>{address.coordinate}</Content>
            <Content>"{address.popup}"</Content>
            <Content>
              <Bold>Dzień otwarty:</Bold> {address.openDay}
            </Content>
            <Buttons>
              <BtnWrapper>
                <Edit to={`/panel/address?edit=2`} state={address}>
                  {editIcon}
                </Edit>
              </BtnWrapper>
              <BtnWrapper>
                <ButtonDelete
                onClick={()=>handleDelete(address.id)}
                >
                  {deleteIcon}
                </ButtonDelete>
              </BtnWrapper>
            </Buttons>
          </Item>
        ))}
      </AddressesContainer>
    )
}

