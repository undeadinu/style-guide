import React from 'react';
import Media from './Media';
import {shallow} from 'enzyme';

const defaultProps = {
  contentArray: [
    <span key={1} className="sg-link sg-link--gray sg-link--emphasised">The Goat</span>,
    <span key={2}>Master </span>
  ],
  aside: <div>aside</div>
};

test('render', () => {
  const media = shallow(
    <Media {...defaultProps} />
  );

  expect(media.hasClass('sg-media')).toEqual(true);
  expect(media.find('.sg-media__content')).toHaveLength(defaultProps.contentArray.length);
});

test('error when no aside', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(
    <Media contentArray={defaultProps.contentArray} />
  );
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('error when no content array', () => {
  const spy = jest.spyOn(console, 'error');

  console.error = jest.fn();
  shallow(
    <Media aside={defaultProps.aside} />
  );
  expect(console.error.mock.calls).toHaveLength(1);

  spy.mockRestore();
});

test('testing modifications - all on', () => {
  const media = shallow(
    <Media
      {...defaultProps}
      clickable
      graySecondaryLight
      focused
      toRight
      small
      transparent
      noPadding
      spacedBottom
    />
  );

  expect(media.hasClass('sg-media--clickable')).toEqual(true);
  expect(media.hasClass('sg-media--gray-secondary-light')).toEqual(true);
  expect(media.hasClass('sg-media--focused')).toEqual(true);
  expect(media.hasClass('sg-media--to-right')).toEqual(true);
  expect(media.hasClass('sg-media--transparent')).toEqual(true);
  expect(media.hasClass('sg-media--no-padding')).toEqual(true);

  expect(media.find('.sg-media__content--spaced-bottom')).toHaveLength(defaultProps.contentArray.length);
  expect(media.find('.sg-media__content--small')).toHaveLength(defaultProps.contentArray.length);
});

test('testing modifications - all off', () => {
  const media = shallow(
    <Media {...defaultProps} />
  );

  expect(media.hasClass('sg-media--clickable')).toEqual(false);
  expect(media.hasClass('sg-media--gray-secondary-light')).toEqual(false);
  expect(media.hasClass('sg-media--focused')).toEqual(false);
  expect(media.hasClass('sg-media--to-right')).toEqual(false);
  expect(media.hasClass('sg-media--transparent')).toEqual(false);
  expect(media.hasClass('sg-media--no-padding')).toEqual(false);

  expect(media.find('.sg-media__content--spaced-bottom')).toHaveLength(0);
  expect(media.find('.sg-media__content--small')).toHaveLength(0);

});
