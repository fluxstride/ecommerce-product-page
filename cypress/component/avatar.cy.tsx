import React from 'react';
import Avatar from '../../src/components/Avatar';

describe('<Avatar/>', () => {
  it('mounts', () => {
    cy.mount(<Avatar />);
    const avatarButton = cy.get("[data-cy='avatar_button']");
    avatarButton.click();
    avatarButton.contains(/test/);
    expect(true).to.equal(true);
  });
});
