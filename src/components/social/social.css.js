import styled from "styled-components"

export const SocialIcons = styled.ul`
  margin: 0;
  list-style-type: none;
  li {
    display: inline-flex;
    padding: 1rem;
  }
  svg {
    cursor: pointer;
    height: 30px;
    width: 30px;
    fill: #fdcc71;
    transition: transform 0.3s;
    &:hover {
      transform: translateY(-5%);
    }
  }
`
