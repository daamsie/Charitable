import React from 'react';
import { render, screen } from '@testing-library/react';

import { CampaignSearchResultsItem } from '../../src/components/campaign-select/search-results-item';

const campaignSample = {
  id: 0,
  title: "My Title",
}

describe('CampaignSearchResultsItem', () => {
  test('renders CampaignSearchResultsItem component', () => {
    render(<CampaignSearchResultsItem campaign={campaignSample} isSelected={true} />);
  });

  test('a checkbox is rendered in CampaignSearchResultsItem component', () => {
    const { container } = render(<CampaignSearchResultsItem campaign={campaignSample} isSelected={true} />);
    const checkboxContainer = container.querySelectorAll('input[type="checkbox"]');
    expect(checkboxContainer.length).toEqual(1);
  });

  test('the checkbox will be checked in CampaignSearchResultsItem component if isSelected is true', () => {
    const { container } = render(<CampaignSearchResultsItem campaign={campaignSample} isSelected={true} />);
    const checkboxContainer = container.querySelectorAll('input[type="checkbox"]:checked');
    expect(checkboxContainer.length).toEqual(1);
  });

  test('the checkbox will not be checked in CampaignSearchResultsItem component if isSelected is true', () => {
    const { container } = render(<CampaignSearchResultsItem campaign={campaignSample} isSelected={false} />);
    const checkboxContainer = container.querySelectorAll('input[type="checkbox"]:checked');
    expect(checkboxContainer.length).toEqual(0);
  });

  test('an "inactive" label is included if this is an inactive campaign', () => {
    const { container } = render(<CampaignSearchResultsItem campaign={campaignSample} isSelected={false} />);
    const labelContainer = container.querySelectorAll('.label.inactive');
    expect(labelContainer.length).toEqual(1);
  });
});