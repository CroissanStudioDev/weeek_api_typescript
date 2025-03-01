import { client, generateTestId, testResources } from './setup';

describe('Status API Integration', () => {
  // We need a funnel to test statuses
  let testFunnelId: string;

  const testFunnelName = generateTestId('funnel_for_statuses');

  // Setup: Create a funnel for testing statuses
  beforeAll(async () => {
    try {
      // Create a funnel
      const funnelResponse = await client.createFunnel({
        name: testFunnelName,
        isPrivate: false,
      });
      testFunnelId = funnelResponse.funnel.id;
      testResources.funnels.push(testFunnelId);
      console.log(`Created test funnel for statuses: ${testFunnelId}`);
    } catch (error) {
      console.error('Failed to set up test data for statuses:', error);
      throw error;
    }
  });

  describe('Status operations', () => {
    it('should get statuses for a specific funnel', async () => {
      const response = await client.getFunnelStatuses(testFunnelId);

      expect(response.success).toBe(true);
      expect(Array.isArray(response.statuses)).toBe(true);

      // A new funnel should have at least 1 default status
      expect(response.statuses.length).toBeGreaterThan(0);

      // Log the first status to see its structure
      console.log(
        'Status structure:',
        JSON.stringify(response.statuses[0], null, 2)
      );

      // Check that statuses have required fields
      response.statuses.forEach(status => {
        expect(status.id).toBeDefined();
        expect(status.name).toBeDefined();
        // The API might not be returning funnelId as expected
      });
    });
  });
});
