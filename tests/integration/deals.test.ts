import { client, generateTestId, testResources } from './setup';

// Skip the entire test suite since the deals API endpoints don't seem to be available
describe.skip('Deal API Integration', () => {
  // We need a funnel and status to create deals
  let testFunnelId: string;
  let testStatusId: string;
  let testDealId: string;

  const testFunnelName = generateTestId('funnel_for_deals');
  const testDealTitle = generateTestId('deal');
  const testDealAmount = 10000;

  // Setup: Create a funnel for testing deals
  beforeAll(async () => {
    try {
      // Create a funnel
      const funnelResponse = await client.createFunnel({
        name: testFunnelName,
        isPrivate: false,
      });
      testFunnelId = funnelResponse.funnel.id;
      testResources.funnels.push(testFunnelId);
      console.log(`Created test funnel for deals: ${testFunnelId}`);

      // Get the default status for the funnel
      const statusesResponse = await client.getFunnelStatuses(testFunnelId);
      if (statusesResponse.statuses.length === 0) {
        throw new Error('No statuses found for the test funnel');
      }
      testStatusId = statusesResponse.statuses[0].id;
      console.log(`Using test status for deals: ${testStatusId}`);
    } catch (error) {
      console.error('Failed to set up test data for deals:', error);
      throw error;
    }
  });

  describe('Deal CRUD operations', () => {
    it('should create a deal', async () => {
      const dealData = {
        title: testDealTitle,
        amount: testDealAmount,
        description: 'Test deal description',
      };

      const response = await client.createDeal(testStatusId, dealData);

      expect(response.success).toBe(true);
      expect(response.deal).toBeDefined();
      expect(response.deal.title).toBe(testDealTitle);
      expect(response.deal.amount).toBe(testDealAmount);
      expect(response.deal.description).toBe('Test deal description');
      expect(response.deal.statusId).toBe(testStatusId);

      // Store deal ID for later tests and cleanup
      testDealId = response.deal.id;
      testResources.deals.push(testDealId);

      console.log(`Created test deal: ${testDealId}`);
    });

    it('should get all deals', async () => {
      const response = await client.getAllDeals();

      expect(response.success).toBe(true);
      expect(Array.isArray(response.deals)).toBe(true);

      // Verify our test deal is in the list
      const foundDeal = response.deals.find(deal => deal.id === testDealId);
      expect(foundDeal).toBeDefined();
      expect(foundDeal?.title).toBe(testDealTitle);
      expect(foundDeal?.amount).toBe(testDealAmount);
    });

    it('should get a specific deal', async () => {
      const response = await client.getDeal(testDealId);

      expect(response.success).toBe(true);
      expect(response.deal).toBeDefined();
      expect(response.deal.id).toBe(testDealId);
      expect(response.deal.title).toBe(testDealTitle);
      expect(response.deal.amount).toBe(testDealAmount);
      expect(response.deal.statusId).toBe(testStatusId);
    });

    it('should update a deal', async () => {
      const updatedTitle = `${testDealTitle}_updated`;
      const updatedAmount = testDealAmount + 5000;

      const response = await client.updateDeal(testDealId, {
        title: updatedTitle,
        amount: updatedAmount,
      });

      expect(response.success).toBe(true);
      expect(response.deal).toBeDefined();
      expect(response.deal.id).toBe(testDealId);
      expect(response.deal.title).toBe(updatedTitle);
      expect(response.deal.amount).toBe(updatedAmount);

      // Verify by getting the deal
      const verifyResponse = await client.getDeal(testDealId);
      expect(verifyResponse.deal.title).toBe(updatedTitle);
      expect(verifyResponse.deal.amount).toBe(updatedAmount);
    });
  });

  describe('Deal validation', () => {
    it('should validate an existing status', async () => {
      const validationResult = await client.validateStatus(testStatusId);

      expect(validationResult.valid).toBe(true);
      expect(validationResult.status).toBeDefined();
      expect(validationResult.status?.id).toBe(testStatusId);
    });

    it('should invalidate a non-existent status', async () => {
      const fakeStatusId = 'non-existent-status-id';
      const validationResult = await client.validateStatus(fakeStatusId);

      expect(validationResult.valid).toBe(false);
      expect(validationResult.message).toContain('not found');
      expect(validationResult.status).toBeUndefined();
    });
  });
});
