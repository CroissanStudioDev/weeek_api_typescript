import axios from 'axios';
import { WeekCRMClient } from '../src/clients/crmClient';

// Ensure we have access to environment variables
import dotenv from 'dotenv';
dotenv.config();

// Create a more detailed axios mock that properly mimics axios behavior
const mockAxiosInstance = {
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
  interceptors: {
    response: {
      use: jest.fn((successFn, errorFn) => {
        // Store the error handler for tests to use
        mockAxiosInstance._errorHandler = errorFn;
        return { successFn, errorFn };
      }),
    },
  },
  _errorHandler: null,
};

// Mock axios
jest.mock('axios', () => ({
  create: jest.fn(() => mockAxiosInstance),
}));

describe('WeekCRMClient', () => {
  let client: WeekCRMClient;
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  // Get the API key from environment variables
  const API_KEY = process.env.WEEK_API_KEY_TEST || 'test-token';

  beforeEach(() => {
    jest.clearAllMocks();

    // Reset all mock implementations
    mockAxiosInstance.get.mockReset();
    mockAxiosInstance.post.mockReset();
    mockAxiosInstance.put.mockReset();
    mockAxiosInstance.delete.mockReset();

    client = new WeekCRMClient(API_KEY);
  });

  describe('Funnel methods', () => {
    it('should get all funnels', async () => {
      const mockResponse = {
        data: {
          success: true,
          funnels: [
            { id: '1', name: 'Test Funnel 1' },
            { id: '2', name: 'Test Funnel 2' },
          ],
        },
      };

      mockAxiosInstance.get.mockResolvedValueOnce(mockResponse);

      const result = await client.getAllFunnels();

      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/crm/funnels');
      expect(result).toEqual(mockResponse.data);
    });

    it('should create a funnel', async () => {
      const funnelData = { name: 'New Funnel' };
      const mockResponse = {
        data: {
          success: true,
          funnel: { id: '1', name: 'New Funnel' },
        },
      };

      mockAxiosInstance.post.mockResolvedValueOnce(mockResponse);

      const result = await client.createFunnel(funnelData);

      expect(mockAxiosInstance.post).toHaveBeenCalledWith(
        '/crm/funnels',
        funnelData
      );
      expect(result).toEqual(mockResponse.data);
    });

    it('should handle errors correctly', async () => {
      const mockAxiosError = {
        response: {
          status: 400,
          data: {
            message: 'Bad Request',
          },
        },
        message: 'Request failed with status code 400',
      };

      mockAxiosInstance.get.mockRejectedValueOnce(mockAxiosError);

      await expect(client.getAllFunnels()).rejects.toThrow(
        'API Error (400): Bad Request'
      );
    });

    it('should handle network errors correctly', async () => {
      const mockNetworkError = {
        request: {},
        message: 'Network Error',
      };

      mockAxiosInstance.get.mockRejectedValueOnce(mockNetworkError);

      await expect(client.getAllFunnels()).rejects.toThrow(
        'No response received from the API'
      );
    });

    it('should handle unexpected errors correctly', async () => {
      const mockUnexpectedError = new Error('Unexpected Error');

      mockAxiosInstance.get.mockRejectedValueOnce(mockUnexpectedError);

      await expect(client.getAllFunnels()).rejects.toThrow(
        'Request error: Unexpected Error'
      );
    });
  });

  describe('Organization methods', () => {
    it('should get all organizations', async () => {
      const mockResponse = {
        data: {
          success: true,
          organizations: [
            { id: '1', name: 'Org 1' },
            { id: '2', name: 'Org 2' },
          ],
        },
      };

      mockAxiosInstance.get.mockResolvedValueOnce(mockResponse);

      const result = await client.getAllOrganizations();

      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/crm/organizations');
      expect(result).toEqual(mockResponse.data);
    });

    it('should create an organization', async () => {
      const orgData = {
        name: 'New Org',
        emails: ['info@example.com'],
      };
      const mockResponse = {
        data: {
          success: true,
          organization: { id: '1', name: 'New Org' },
        },
      };

      mockAxiosInstance.post.mockResolvedValueOnce(mockResponse);

      const result = await client.createOrganization(orgData);

      expect(mockAxiosInstance.post).toHaveBeenCalledWith(
        '/crm/organizations',
        orgData
      );
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('Contact methods', () => {
    it('should get all contacts', async () => {
      const mockResponse = {
        data: {
          success: true,
          contacts: [
            { id: '1', firstName: 'John', lastName: 'Doe' },
            { id: '2', firstName: 'Jane', lastName: 'Smith' },
          ],
        },
      };

      mockAxiosInstance.get.mockResolvedValueOnce(mockResponse);

      const result = await client.getAllContacts();

      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/crm/contacts');
      expect(result).toEqual(mockResponse.data);
    });

    it('should create a contact', async () => {
      const contactData = {
        firstName: 'John',
        lastName: 'Doe',
      };
      const mockResponse = {
        data: {
          success: true,
          contact: { id: '1', firstName: 'John', lastName: 'Doe' },
        },
      };

      mockAxiosInstance.post.mockResolvedValueOnce(mockResponse);

      const result = await client.createContact(contactData);

      expect(mockAxiosInstance.post).toHaveBeenCalledWith(
        '/crm/contacts',
        contactData
      );
      expect(result).toEqual(mockResponse.data);
    });
  });

  describe('Deal methods', () => {
    it('should create a deal', async () => {
      const statusId = 'status-123';
      const dealData = {
        title: 'New Deal',
        amount: 10000,
      };
      const mockResponse = {
        data: {
          success: true,
          deal: { id: '1', title: 'New Deal', amount: 10000 },
        },
      };

      mockAxiosInstance.post.mockResolvedValueOnce(mockResponse);

      const result = await client.createDeal(statusId, dealData);

      expect(mockAxiosInstance.post).toHaveBeenCalledWith(
        `/crm/statuses/${statusId}/deals`,
        dealData
      );
      expect(result).toEqual(mockResponse.data);
    });

    it('should validate status before creating a deal', async () => {
      // Mock getAllStatuses to return test statuses
      const mockStatusesResponse = {
        data: {
          success: true,
          statuses: [{ id: 'valid-status', name: 'Valid Status' }],
        },
      };

      mockAxiosInstance.get.mockResolvedValueOnce(mockStatusesResponse);

      const validationResult = await client.validateStatus('valid-status');

      expect(validationResult.valid).toBe(true);
      expect(validationResult.status).toBeDefined();
      expect(validationResult.status?.id).toBe('valid-status');
    });
  });

  describe('Status methods', () => {
    it('should get all statuses', async () => {
      const mockResponse = {
        data: {
          success: true,
          statuses: [
            { id: '1', name: 'Status 1' },
            { id: '2', name: 'Status 2' },
          ],
        },
      };

      mockAxiosInstance.get.mockResolvedValueOnce(mockResponse);

      const result = await client.getAllStatuses();

      expect(mockAxiosInstance.get).toHaveBeenCalledWith('/crm/statuses');
      expect(result).toEqual(mockResponse.data);
    });

    it('should get funnel statuses', async () => {
      const funnelId = 'funnel-123';
      const mockResponse = {
        data: {
          success: true,
          statuses: [
            { id: '1', name: 'Status 1', funnelId: funnelId },
            { id: '2', name: 'Status 2', funnelId: funnelId },
          ],
        },
      };

      mockAxiosInstance.get.mockResolvedValueOnce(mockResponse);

      const result = await client.getFunnelStatuses(funnelId);

      expect(mockAxiosInstance.get).toHaveBeenCalledWith(
        `/crm/funnels/${funnelId}/statuses`
      );
      expect(result).toEqual(mockResponse.data);
    });
  });
});
