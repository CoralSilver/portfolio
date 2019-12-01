import styled from 'styled-components';

export const Title = styled.h2`
  display: block;
  font-size: 1.35rem;
  color: #333;
  margin: 1rem 1rem .5rem;
`;

export const Copy = styled.span`
  color: #757575;
  margin: 0 1rem 2rem;
  font-size: .9rem;
`;

export const Card = styled.figure`
  background-color: #fff;
  cursor: pointer;
  transition: scale .3s;
  padding-bottom: 1.5rem;
  margin-bottom: 0;
  &:hover {
    transform: scale(1.01);
  }
`;