import styled from "styled-components";

export const Section = styled.section`
  padding: 15px;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.4)
    ),
    url(${(props) => props.img});
  background-size: cover;
`;
export const AddressWrapper = styled.div`
  margin-top: 30px;

  @media (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 3rem;
  text-align: center;
  text-transform: uppercase;
  margin-top: 2rem;
  @media (min-width: 1200px) {
    font-size: 6rem;
  }
`;

export const AddressContainer = styled.address`
  display: block;
  box-sizing: content-box;
  margin-top: 100px;
  padding: 15px;
  text-align: center;
  width: calc(100vw-30px);
  background-color: rgba(255, 255, 255, 0.6);
  -webkit-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.7);
  @media (min-width: 767px) {
    width: 300px;
  }
`;
export const City = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;
export const GroupName = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;
export const OpenDayTitle = styled.p`
  font-size: 1.2rem;
  margin-top: 1.5rem;
`;
export const OpenDay = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
`;
export const Street = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0.03rem;
  margin-top: 1.2rem;
  font-style: italic;
`;

export const Date = styled.p`
  font-size: 1.2rem;
  letter-spacing: 0.03rem;
  margin-top: 1rem;
  font-weight: 700;
`;
export const Time = styled.span``;

export const MapContainer = styled.div`
  margin-top: 15px;
  width: calc(100vw-30px);
  height: calc(100vh / 2);

  -webkit-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.7);
  @media (min-width: 767px) {
    width: 500px;
    height: 350px;
  }
`;

export const Link = styled.a`
  display: block;
  width: fit-content;
  box-sizing: border-box;
  padding: 15px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  margin: 30px auto 0 auto;
  background-color: ${({ theme }) => theme.accent};
  -webkit-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0.4);
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.accent2};
    -webkit-box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0);
    box-shadow: 0px 4px 11px 1px rgba(0, 0, 0, 0);
  }
`;
