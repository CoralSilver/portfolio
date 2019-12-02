import styled from "styled-components"

export default styled.header`
  background: #ffffff82;
  width: 100%;

  nav {
    color: purple;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  h1,
  a {
    font-size: inherit;
  }

  @media only screen and (max-width: 400px) {
    li {
      padding-right: 0.5rem;
      font-size: 0.7rem;
    }
  }
`
