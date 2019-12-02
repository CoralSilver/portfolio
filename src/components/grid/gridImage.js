import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { Grid } from './gridImage.css';
import { Container } from '../container.css';

const GridImage = ({ items, title }) => (
  <Container>
    <h1>{title}</h1>
    <Grid>
      {items.map((item, i) => (
        <Item {...item} key={i} />
      ))}
    </Grid>
  </Container>
);

GridImage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default GridImage;