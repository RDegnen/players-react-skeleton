import React from 'react';
import { shallow } from 'enzyme';

import { NewPlayer } from '../../src/pages/Player/NewPlayer';
import FormContainer from '../../src/components/FormContainer';

const getComponent = props => shallow(<NewPlayer history={{}} {...props} />);

describe('<NewPlayer />', () => {
  it('should match snapshot', () => {
    const component = getComponent();
    expect(component).toMatchSnapshot();
  });

  it('should render FormContainer with proper history', () => {
    const history = {
      someKey: 'SomeValue',
      anotherKey: {
        deeperKey: 'DeeperValue',
      },
    };
    const component = getComponent({ history });
    expect(component.find(FormContainer).props().history).toEqual(history);
  });
});
