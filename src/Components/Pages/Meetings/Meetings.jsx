
import { BackButton } from "../../BackButton";
import meeting from "../../Images/meeting.jpg";
import { BasicMap } from "../../Map/BasicMap";
import API from "../../../services/api";
import {
  Title,
  City,
  AddressWrapper,
  Street,
  Date,
  Time,
  AddressContainer,
  Section,
  MapContainer,
  GroupName,
  OpenDay,
  OpenDayTitle,
  Link,
} from "./Meetings.styled";
import { useEffect, useState } from "react";

export const Meetings = () => {
  const [addresses, setAddresses] = useState([]);

  const fetchAddresses = async () => {
    try {
      const res = await API.get("/addresses");
      setAddresses(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  const toNumberArray = (value) => value.split(",");

  return (
    <Section img={meeting}>
      <Title>Mityngi AA</Title>

      {addresses.map((address, index) => (
        <AddressWrapper key={index}>
          <AddressContainer>
            <City>{address.city}</City>
            <GroupName>"{address.groupName}"</GroupName>
            <Street>{address.street}</Street>

            <Date>
              {address.date}: <Time>{address.time}</Time>
            </Date>
            <OpenDayTitle>Mityng otwarty:</OpenDayTitle>
            <OpenDay>{address.openDay}</OpenDay>
          </AddressContainer>
          <MapContainer>
            <BasicMap
              center={toNumberArray(address.coordinate)}
              popup={address.popup}
            />
          </MapContainer>
        </AddressWrapper>
      ))}
      <Link href="https://spis.aa.org.pl/index.php/meetings/?tsml-day=any&tsml-region=szwecja">
        Spis Mityngów w Szwecji
      </Link>
      <BackButton />
    </Section>
  );
};
