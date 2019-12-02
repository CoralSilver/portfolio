import styled from "styled-components"

export const Title = styled.h2`
  display: block;
  font-size: 1.35rem;
  color: #141414;
  margin: 1rem 1rem 0.5rem;
`

export const Copy = styled.span`
  color: #757575;
  margin: 0 1rem 2rem;
  font-size: 0.9rem;
`

export const Card = styled.figure`
  background-color: #fff;
  box-shadow: 0px 0px 8px 1px gainsboro;
  cursor: pointer;
  transition: scale 0.3s;
  padding-bottom: 1.5rem;
  margin-bottom: 0;
  &:hover {
    transform: scale(1.01);
  }
`
