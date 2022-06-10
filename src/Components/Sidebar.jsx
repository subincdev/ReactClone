import styled from "styled-components";

function DocsSidebar() {
  const StyledListItem = styled.li`
    margin-bottom: 10px;
  `;
  return (
    <ul>
      <StyledListItem>설치</StyledListItem>
      <StyledListItem>시작하기</StyledListItem>
      <StyledListItem>웹 사이트에 React 추가하기</StyledListItem>
      <StyledListItem>새로운 React 앱 만들기</StyledListItem>
      <StyledListItem>CDN 링크</StyledListItem>
      <StyledListItem>배포채널</StyledListItem>
    </ul>
  );
}

export default function StyledSidebar({ pageName }) {
  const StyledSidebar = styled.aside`
    position: fixed;
    z-index: -1;
    height: 100vh;
    padding: 200px 30px;
    top: 0;
    right: 0;
    background-color: #f7f7f7;
    width: 500px;
    box-sizing: border-box;
  `;
  return (
    <StyledSidebar>
      <DocsSidebar />
      {/* <PageSidebar pageName="docs"/> */}
    </StyledSidebar>
  );
}
