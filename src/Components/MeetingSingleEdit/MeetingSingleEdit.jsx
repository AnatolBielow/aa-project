import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import API from "../../services/api";
import { deleteIcon, editIcon } from "../Images/Icons";
import {
  
  Editor,
  Input,
  Label,
  Wrapper,
} from "./MeetingSingleEdit.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { MeetengsMenu } from "../MeetingsMenu";

export const MeetingSingleEdit = () => {
  const state = useLocation().state;
  const [city, setCity] = useState(state?.city || "");
  const [groupName, setGroupName] = useState(state?.groupName || "");
  const [street, setStreet] = useState(state?.street || "");
  const [date, setDate] = useState(state?.date || "");
  const [time, setTime] = useState(state?.time || "");
  const [coordinate, setCoordinate] = useState(state?.coordinate || "");
  const [popup, setPopup] = useState(state?.popup || "");
  const [openDay, setOpenDay] = useState(state?.openDay || "");

  
  
  const navigate = useNavigate();


  const handleSend = async () => {
    console.log(state)
    try {
      state
        ? await API.put(`/addresses/${state.id}`, {
            city,
            groupName,
            street,
            date,
            time,
            coordinate,
            popup,
            openDay,
          })
        : await API.post(`/addresses/`, {
            city,
            groupName,
            street,
            date,
            time,
            coordinate,
            popup,
            openDay,
          });
      navigate("/panel/addresses");
    } catch (err) {
      console.log(err);
    }
  };

  
  return (
    <Wrapper>
      <Editor>
        <Label>
          Miasto
          <br />
          <Input
            value={city}
            placeholder="Miasto"
            onChange={(e) => setCity(e.target.value)}
          />
        </Label>
        <Label>
          Grupa
          <br />
          <Input
            value={groupName}
            placeholder="Nazwa Grupy"
            onChange={(e) => setGroupName(e.target.value)}
          />
        </Label>
        <Label>
          Adres
          <br />
          <Input
            value={street}
            placeholder="Ulica"
            onChange={(e) => setStreet(e.target.value)}
          />
        </Label>
        <Label>
          Data
          <br />
          <Input
            value={date}
            placeholder="Niedziela"
            onChange={(e) => setDate(e.target.value)}
          />
        </Label>
        <Label>
          Godzina
          <br />
          <Input
            value={time}
            placeholder="20:00"
            onChange={(e) => setTime(e.target.value)}
          />
        </Label>
        <Label>
          Koordynaty
          <br />
          <Input
            value={coordinate}
            placeholder="59.34294, 18.0436"
            onChange={(e) => setCoordinate(e.target.value)}
          />
        </Label>
        <Label>
          Popup
          <br />
          <Input
            value={popup}
            placeholder="Dodatkowe informacje"
            onChange={(e) => setPopup(e.target.value)}
          />
        </Label>
        <Label>
          Open Day
          <br />
          <Input
            value={openDay}
            placeholder="Dzień otwarty"
            onChange={(e) => setOpenDay(e.target.value)}
          />
        </Label>
        <button onClick={() => handleSend()}>Zapisz</button>
      </Editor>
    
    </Wrapper>
  );
};
