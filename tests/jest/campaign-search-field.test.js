import React from 'react';
import { render, screen } from '@testing-library/react';

import { CampaignSearchField } from '../../src/components/campaign-select/search-field';
import sampleCampaigns from './mocks/sampleCampaigns';


describe('CampaignSearchField', () => {
  test('renders CampaignSearchField component', () => {
    render(<CampaignSearchField 
      label="Search"
      searchPlaceholder="Search"
      loadingAvailableCampaigns={false}
      availableCampaigns={sampleCampaigns}
      selectedCampaigns={[]}
      addOrRemoveCampaignCallback={() => true}
       />);
  });

  test('renders a spinner if loadingAvailableCampaigns is true', () => {
    const {container} = render(<CampaignSearchField 
      label="Search"
      searchPlaceholder="Search"
      loadingAvailableCampaigns={true}
      availableCampaigns={[]}
      selectedCampaigns={[]}
      addOrRemoveCampaignCallback={() => true}
       />);
    const spinnerElements = container.querySelectorAll('.components-spinner');
    expect(spinnerElements.length).toEqual(1);
    
  });

  test('does not render a spinner if loadingAvailableCampaigns is false', () => {
    const {container} = render(<CampaignSearchField 
      label="Search"
      searchPlaceholder="Search"
      loadingAvailableCampaigns={false}
      availableCampaigns={[]}
      selectedCampaigns={[]}
      addOrRemoveCampaignCallback={() => true}
       />);
    const spinnerElements = container.querySelectorAll('.components-spinner');
    expect(spinnerElements.length).toEqual(0);
    
  });

});