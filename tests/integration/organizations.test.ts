import { client, generateTestId, testResources } from './setup';

describe('Organization API Integration', () => {
  let testOrganizationId: string;
  const testOrganizationName = generateTestId('org');
  const testEmail = `${generateTestId('email')}@example.com`;
  const testPhone = '+1234567890';

  describe('Organization CRUD operations', () => {
    it('should create an organization', async () => {
      const response = await client.createOrganization({
        name: testOrganizationName,
        emails: [testEmail],
        phones: [testPhone],
      });

      expect(response.success).toBe(true);
      expect(response.organization).toBeDefined();
      expect(response.organization.name).toBe(testOrganizationName);

      // Check emails and phones
      expect(response.organization.emails.length).toBe(1);
      expect(response.organization.emails[0].email).toBe(testEmail);

      expect(response.organization.phones.length).toBe(1);
      expect(response.organization.phones[0].phone).toBe(testPhone);

      // Store organization ID for later tests and cleanup
      testOrganizationId = response.organization.id;
      testResources.organizations.push(testOrganizationId);

      console.log(`Created test organization: ${testOrganizationId}`);
    });

    it('should get all organizations', async () => {
      const response = await client.getAllOrganizations();

      expect(response.success).toBe(true);
      expect(Array.isArray(response.organizations)).toBe(true);

      // Verify our test organization is in the list
      const foundOrg = response.organizations.find(
        org => org.id === testOrganizationId
      );
      expect(foundOrg).toBeDefined();
      expect(foundOrg?.name).toBe(testOrganizationName);
    });

    it('should get a specific organization', async () => {
      const response = await client.getOrganization(testOrganizationId);

      expect(response.success).toBe(true);
      expect(response.organization).toBeDefined();
      expect(response.organization.id).toBe(testOrganizationId);
      expect(response.organization.name).toBe(testOrganizationName);

      // Verify emails and phones
      expect(response.organization.emails.length).toBe(1);
      expect(response.organization.emails[0].email).toBe(testEmail);

      expect(response.organization.phones.length).toBe(1);
      expect(response.organization.phones[0].phone).toBe(testPhone);
    });

    it('should update an organization', async () => {
      const updatedName = `${testOrganizationName}_updated`;

      const response = await client.updateOrganization(testOrganizationId, {
        name: updatedName,
      });

      expect(response.success).toBe(true);
      expect(response.organization).toBeDefined();
      expect(response.organization.id).toBe(testOrganizationId);
      expect(response.organization.name).toBe(updatedName);

      // Verify by getting the organization
      const verifyResponse = await client.getOrganization(testOrganizationId);
      expect(verifyResponse.organization.name).toBe(updatedName);
    });
  });
});
