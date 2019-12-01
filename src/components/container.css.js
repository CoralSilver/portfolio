import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 2rem;
`;

export const ContainerLarge = styled(Container)`
  text-align: inherit;
`;
