import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
  }
`
