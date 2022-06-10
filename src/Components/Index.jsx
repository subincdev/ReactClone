import styled from "styled-components";
import whiteArrowImg from "../images/right-arrow.png";
import { Link } from "react-router-dom";
import blueArrowImg from "../images/blue-arrow.png";

const Section = styled.section`
  background-color: #282c35;
  width: 100wh;
  text-align: center;
  padding: 100px 0 50px;
`;

const SectionTitle = styled.h2`
  font-size: 60px;
  font-weight: 700;
  color: #61dafc;
`;

const SectionSubTitle = styled.p`
  color: white;
  font-size: 30px;
  font-weight: lighter;
  margin: 20px 0 50px 0;
`;

const BlueButton = styled(Link)`
  background-color: #61dafc;
  color: #282c35;
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.4, 0.95);
  &:hover {
    background-color: white;
  }
`;

const TextButton = styled(Link)`
  background-color: #282c35;
  color: #61dafc;
  padding: 15px 25px;
  font-size: 20px;
  border: none;
  font-weight: lighter;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.4, 0.95);
  &:hover {
    color: white;
  }
  &::after {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 5px;
    background-image: url(${blueArrowImg});
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.4, 0.95);
  }
  &:hover::after {
    background-image: url(${whiteArrowImg});
  }
`;

function MainSection() {
  return (
    <>
      <SectionTitle>React</SectionTitle>
      <SectionSubTitle>
        사용자 인터페이스를 만들기 위한 JavaScript 라이브러리
      </SectionSubTitle>
      <BlueButton to="/docs">시작하기</BlueButton>
      <TextButton to="/tutorial">자습서 읽어보기</TextButton>
    </>
  );
}

export default function Index() {
  return (
    <>
      <Section>
        <MainSection />
      </Section>
      {/* <CardList>
        <Card cardName="특징1" />
        <Card cardName="특징2" />
        <Card cardName="특징3" />
      </CardList> */}
    </>
  );
}
