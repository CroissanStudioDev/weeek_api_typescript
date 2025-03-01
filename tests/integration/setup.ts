import dotenv from 'dotenv';
import { WeekCRMClient } from '../../src/clients/crmClient';

// Load environment variables
dotenv.config();

// Environment variables validation
const WEEK_API_KEY = process.env.WEEK_API_KEY_TEST;

if (!WEEK_API_KEY) {
  throw new Error(
    'WEEK_API_KEY_TEST environment variable is required for integration tests'
  );
}

// Export global test client instance
export const client = new WeekCRMClient(WEEK_API_KEY);

// Helper to generate unique test identifiers to avoid conflicts
export const generateTestId = (prefix: string = 'test'): string => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 10000);
  return `${prefix}_${timestamp}_${random}`;
};

// Test resources to clean up after tests
export const testResources = {
  funnels: [] as string[],
  organizations: [] as string[],
  contacts: [] as string[],
  deals: [] as string[],
};

// Global setup and teardown
beforeAll(async () => {
  // Any global setup needed
  console.log('Starting integration tests against Weeek API');
});

afterAll(async () => {
  // Clean up any test resources created during tests
  console.log('Cleaning up test resources...');

  // Clean up in reverse order of dependency

  // Deals
  for (const dealId of testResources.deals) {
    try {
      await client.deleteDeal(dealId);
      console.log(`Deleted test deal: ${dealId}`);
    } catch (error) {
      console.error(`Failed to delete test deal ${dealId}:`, error);
    }
  }

  // Contacts
  for (const contactId of testResources.contacts) {
    try {
      await client.deleteContact(contactId);
      console.log(`Deleted test contact: ${contactId}`);
    } catch (error) {
      console.error(`Failed to delete test contact ${contactId}:`, error);
    }
  }

  // Organizations
  for (const orgId of testResources.organizations) {
    try {
      await client.deleteOrganization(orgId);
      console.log(`Deleted test organization: ${orgId}`);
    } catch (error) {
      console.error(`Failed to delete test organization ${orgId}:`, error);
    }
  }

  // Funnels
  for (const funnelId of testResources.funnels) {
    try {
      await client.deleteFunnel(funnelId);
      console.log(`Deleted test funnel: ${funnelId}`);
    } catch (error) {
      console.error(`Failed to delete test funnel ${funnelId}:`, error);
    }
  }

  console.log('Cleanup completed');
});
