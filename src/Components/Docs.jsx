import styled from "styled-components";
import PageTitle from "./PageTitle";
import ContentsContainer from "./ContentsContainer";
import Sidebar from "./Sidebar";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

function Footer() {
  const StyledFooter = styled.footer`
    width: 100%;
    background-color: #20232a;
    z-index: -2;
  `;
  return (
    <StyledFooter>
      <ul>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
        <li>lorem</li>
      </ul>
    </StyledFooter>
  );
}
export default function Docs() {
  return (
    <>
      <Layout>
        <ContentsContainer>
          <PageTitle pageName="docs" />
        </ContentsContainer>
        <Footer pageName="footer" />
      </Layout>
      <Sidebar pageName="docs" />
    </>
  );
}
