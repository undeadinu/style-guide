import React from 'react';
import SpinnerContainer from './SpinnerContainer';
import {shallow} from 'enzyme';

test('render', () => {
  const container = shallow(
    <SpinnerContainer>children</SpinnerContainer>
  );

  expect(container.hasClass('sg-spinner-container')).toEqual(true);
});

test('full', () => {
  const container = shallow(<SpinnerContainer full />);

  expect(container.hasClass('sg-spinner-container--full')).toEqual(true);
});

test('loading', () => {
  const container = shallow(<SpinnerContainer loading />);

  expect(container.find('.sg-spinner-container__overlay')).toHaveLength(1);
});
