import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BackIcon from '../BackIcon';

describe('BackIcon component', () => {
  it('renders correctly', () => {
    // Mock navigation and screenName
    const navigation = {
      navigate: jest.fn(),
    };
    const screenName = 'TargetScreen';

    const { getByTestId } = render(
      <BackIcon
        style={{ width: 30, height: 30 }}
        navigation={navigation}
        screenName={screenName}
      />
    );

    
  });

  it('navigates to the specified screen when pressed', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    const screenName = 'TargetScreen';

    const { getByTestId } = render(
      <BackIcon
        style={{ width: 30, height: 30 }}
        navigation={navigation}
        screenName={screenName}
      />
    );

    
  });
});

