import React from 'react';
import { render, screen } from '@testing-library/react';

import { CampaignSearchResults } from '../../src/components/campaign-select/search-results';
import sampleCampaigns from './mocks/sampleCampaigns';

describe('CampaignSearchResults', () => {
  test('renders CampaignSearchResults component with all campaigns showing', () => {
    const {container} = render(<CampaignSearchResults 
      selectedCampaigns={[]} 
      availableCampaigns={sampleCampaigns}
      searchText=""
      addOrRemoveCampaignCallback={() => true} />);

      expect(container.firstChild.childNodes.length).toEqual(sampleCampaigns.length);
  });

  test('filtering CampaignSearchResults by searchText "second" filters to one result', () => {
    const {container} = render(<CampaignSearchResults 
      selectedCampaigns={[]} 
      availableCampaigns={sampleCampaigns}
      searchText="second"
      addOrRemoveCampaignCallback={() => true} />);
    
    expect(container.firstChild.childNodes.length).toEqual(1);

  });

  test('if there are no results, CampaignSearchResults returns a message', () => {
    const {container} = render(<CampaignSearchResults 
      selectedCampaigns={[]} 
      availableCampaigns={sampleCampaigns}
      searchText="fundraising for poop"
      addOrRemoveCampaignCallback={() => true} />);
    
    const noResultsContainer = container.querySelectorAll('.charitable-campaign-list-card__search-no-results');
    expect(noResultsContainer.length).toEqual(1);
  });
});