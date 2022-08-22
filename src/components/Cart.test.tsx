import React from 'react';
import render from 'react-test-renderer';
import Cart from './Cart';

describe('<Cart/>', () => {
  it('expect the Cart component to match the given snapshot', () => {
    const component = render.create(<Cart />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
