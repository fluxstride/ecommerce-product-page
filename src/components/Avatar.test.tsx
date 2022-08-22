import render from 'react-test-renderer';
import Avatar from './Avatar';

describe('<Avatar/>', () => {
  it('expect the component to match the snapshot', () => {
    const component = render.create(<Avatar />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
