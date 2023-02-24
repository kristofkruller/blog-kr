import styled from "styled-components";

export const ArticleHomeWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  gap: 20px;
  & * {
    display: flex;
  }
`
export const ContentWrap = styled.div`
  flex-direction: column;
  align-items: center;
  max-width: 1360px;
`
export const Title = styled.h2`
  width: 100%;
  justify-content: center;
  opacity: .8;
`

export const Content = styled.p`
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 2;
  font-weight: 600;

  & time {
    opacity: .5;
  }
`