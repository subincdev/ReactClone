import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../images/React.png";

const Header = styled.header`
  background-color: #20232a;
  position: fixed;
  width: 100%;
  top: 0;
`;

const HeaderNav = styled.ul`
  display: flex;
  width: 50%;
  margin: 0 auto;
  padding: 20px 80px;
  list-style: none;
`;

const StyledLink = styled(Link)`
  color: #898b91;
  font-size: 18px;
  font-weight: 200;
  text-decoration: none;
  margin-right: 40px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.4, 0.95);
  &:hover {
    color: #61dafc;
  }
  &:first-child {
    margin-right: auto;
    position: relative;
    color: #61dafc;
    font-size: 20px;
    font-weight: 600;
  }
  &:first-child::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -35px;
    top: -2px;
    width: 24px;
    height: 24px;
    background-image: url(${logoImg});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
export default function Nav() {
  return (
    <Header>
      <HeaderNav>
        <StyledLink to="">React</StyledLink>
        <StyledLink to="/docs">문서</StyledLink>
        <StyledLink to="/tutorial">자습서</StyledLink>
        <StyledLink to="/blog">블로그</StyledLink>
        <StyledLink to="/community">커뮤니티</StyledLink>
      </HeaderNav>
    </Header>
  );
}
