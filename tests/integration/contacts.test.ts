import { client, generateTestId, testResources } from './setup';

describe('Contact API Integration', () => {
  let testContactId: string;
  const firstName = generateTestId('first');
  const lastName = generateTestId('last');
  const testEmail = `${generateTestId('email')}@example.com`;
  const testPhone = '+1987654321';

  describe('Contact CRUD operations', () => {
    it('should create a contact', async () => {
      const response = await client.createContact({
        firstName,
        lastName,
        emails: [testEmail],
        phones: [testPhone],
      });

      expect(response.success).toBe(true);
      expect(response.contact).toBeDefined();
      expect(response.contact.firstName).toBe(firstName);
      expect(response.contact.lastName).toBe(lastName);

      // Check emails and phones
      expect(response.contact.emails.length).toBe(1);
      expect(response.contact.emails[0].email).toBe(testEmail);

      expect(response.contact.phones.length).toBe(1);
      expect(response.contact.phones[0].phone).toBe(testPhone);

      // Store contact ID for later tests and cleanup
      testContactId = response.contact.id;
      testResources.contacts.push(testContactId);

      console.log(`Created test contact: ${testContactId}`);
    });

    it('should get all contacts', async () => {
      const response = await client.getAllContacts();

      expect(response.success).toBe(true);
      expect(Array.isArray(response.contacts)).toBe(true);

      // Verify our test contact is in the list
      const foundContact = response.contacts.find(
        contact => contact.id === testContactId
      );
      expect(foundContact).toBeDefined();
      expect(foundContact?.firstName).toBe(firstName);
      expect(foundContact?.lastName).toBe(lastName);
    });

    it('should get a specific contact', async () => {
      const response = await client.getContact(testContactId);

      expect(response.success).toBe(true);
      expect(response.contact).toBeDefined();
      expect(response.contact.id).toBe(testContactId);
      expect(response.contact.firstName).toBe(firstName);
      expect(response.contact.lastName).toBe(lastName);

      // Verify emails and phones
      expect(response.contact.emails.length).toBe(1);
      expect(response.contact.emails[0].email).toBe(testEmail);

      expect(response.contact.phones.length).toBe(1);
      expect(response.contact.phones[0].phone).toBe(testPhone);
    });

    it('should update a contact', async () => {
      const updatedFirstName = `${firstName}_updated`;
      const updatedLastName = `${lastName}_updated`;

      const response = await client.updateContact(testContactId, {
        firstName: updatedFirstName,
        lastName: updatedLastName,
      });

      expect(response.success).toBe(true);
      expect(response.contact).toBeDefined();
      expect(response.contact.id).toBe(testContactId);
      expect(response.contact.firstName).toBe(updatedFirstName);

      // Verify by getting the contact
      const verifyResponse = await client.getContact(testContactId);
      expect(verifyResponse.contact.firstName).toBe(updatedFirstName);
      expect(verifyResponse.contact.lastName).toBe(updatedLastName);
    });
  });
});
