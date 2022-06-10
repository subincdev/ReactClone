import styled from "styled-components";

export default function PageTitle({ pageName }) {
  const PageH2 = styled.h2`
    font-size: 60px;
    font-weight: 600;
    color: #282c35;
  `;
  if (pageName === "docs") {
    return <PageH2>시작하기</PageH2>;
  } else if (pageName === "tutorial") {
    return <PageH2>자습서: React 시작하기</PageH2>;
  } else if (pageName === "blog") {
    return <PageH2>How to Upgrade to the React 18 Release Candidate</PageH2>;
  } else if (pageName === "community") {
    return <PageH2>Where To Get Support</PageH2>;
  }
}
