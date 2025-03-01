import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import {
  Funnel,
  CreateFunnelRequest,
  CreateFunnelResponse,
  GetFunnelsResponse,
  GetFunnelResponse,
  UpdateFunnelRequest,
  UpdateFunnelResponse,
  DeleteFunnelResponse,
  ApiErrorResponse,
  AxiosErrorExtended,
  GetStatusesResponse,
  GetFunnelStatusesResponse,
  GetStatusesWithFunnelsResponse,
  Status,
  StatusWithFunnel,
  ValidateStatusResult,
  CreateDealRequest,
  CreateDealResponse,
  GetDealsResponse,
  GetDealResponse,
  UpdateDealResponse,
  DeleteDealResponse,
  Organization,
  CreateOrganizationRequest,
  CreateOrganizationResponse,
  GetOrganizationsResponse,
  GetOrganizationResponse,
  UpdateOrganizationResponse,
  DeleteOrganizationResponse,
  CreateContactRequest,
  CreateContactResponse,
  GetContactsResponse,
  GetContactResponse,
  UpdateContactResponse,
  DeleteContactResponse,
} from '../types/crm';

export class WeekCRMClient {
  private client: AxiosInstance;
  private baseURL: string = 'https://api.weeek.net/public/v1';

  constructor(token: string) {
    const config: AxiosRequestConfig = {
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    this.client = axios.create(config);

    // Add response interceptor for error handling
    this.client.interceptors.response.use(
      (response: AxiosResponse): AxiosResponse => response,
      (error: AxiosError<ApiErrorResponse>): Promise<never> => {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          'Unknown error occurred';
        console.error(`Weeek API Error: ${errorMessage}`);
        return Promise.reject(error);
      }
    );
  }

  // Funnel Methods

  /**
   * Create a new funnel
   * @param data The funnel data
   * @returns Promise with the created funnel
   */
  public async createFunnel(
    data: CreateFunnelRequest
  ): Promise<CreateFunnelResponse> {
    try {
      const response = await this.client.post<CreateFunnelResponse>(
        '/crm/funnels',
        data
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Get all funnels
   * @returns Promise with all funnels
   */
  public async getAllFunnels(): Promise<GetFunnelsResponse> {
    try {
      const response = await this.client.get<GetFunnelsResponse>(
        '/crm/funnels'
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Get a specific funnel by ID
   * @param funnelId The ID of the funnel to retrieve
   * @returns Promise with the funnel data
   */
  public async getFunnel(funnelId: string): Promise<GetFunnelResponse> {
    try {
      const response = await this.client.get<GetFunnelResponse>(
        `/crm/funnels/${funnelId}`
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Update an existing funnel
   * @param funnelId The ID of the funnel to update
   * @param data The updated funnel data
   * @returns Promise with the updated funnel
   */
  public async updateFunnel(
    funnelId: string,
    data: UpdateFunnelRequest
  ): Promise<UpdateFunnelResponse> {
    try {
      const response = await this.client.put<UpdateFunnelResponse>(
        `/crm/funnels/${funnelId}`,
        data
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Delete a funnel
   * @param funnelId The ID of the funnel to delete
   * @returns Promise with success status
   */
  public async deleteFunnel(funnelId: string): Promise<DeleteFunnelResponse> {
    try {
      const response = await this.client.delete<DeleteFunnelResponse>(
        `/crm/funnels/${funnelId}`
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  // Organization Methods

  /**
   * Create a new organization
   * @param data The organization data
   * @returns Promise with the created organization
   */
  public async createOrganization(
    data: CreateOrganizationRequest
  ): Promise<CreateOrganizationResponse> {
    try {
      const response = await this.client.post<CreateOrganizationResponse>(
        '/crm/organizations',
        data
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Get all organizations
   * @returns Promise with all organizations
   */
  public async getAllOrganizations(): Promise<GetOrganizationsResponse> {
    try {
      const response = await this.client.get<GetOrganizationsResponse>(
        '/crm/organizations'
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Get a specific organization by ID
   * @param organizationId The ID of the organization to retrieve
   * @returns Promise with the organization data
   */
  public async getOrganization(
    organizationId: string
  ): Promise<GetOrganizationResponse> {
    try {
      const response = await this.client.get<GetOrganizationResponse>(
        `/crm/organizations/${organizationId}`
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Update an existing organization
   * @param organizationId The ID of the organization to update
   * @param data The updated organization data
   * @returns Promise with the updated organization
   */
  public async updateOrganization(
    organizationId: string,
    data: Partial<CreateOrganizationRequest>
  ): Promise<UpdateOrganizationResponse> {
    try {
      const response = await this.client.put<UpdateOrganizationResponse>(
        `/crm/organizations/${organizationId}`,
        data
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Delete an organization
   * @param organizationId The ID of the organization to delete
   * @returns Promise with success status
   */
  public async deleteOrganization(
    organizationId: string
  ): Promise<DeleteOrganizationResponse> {
    try {
      const response = await this.client.delete<DeleteOrganizationResponse>(
        `/crm/organizations/${organizationId}`
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  // Contact Methods

  /**
   * Create a new contact
   * @param data The contact data
   * @returns Promise with the created contact
   */
  public async createContact(
    data: CreateContactRequest
  ): Promise<CreateContactResponse> {
    try {
      const response = await this.client.post<CreateContactResponse>(
        '/crm/contacts',
        data
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Get all contacts
   * @returns Promise with all contacts
   */
  public async getAllContacts(): Promise<GetContactsResponse> {
    try {
      const response = await this.client.get<GetContactsResponse>(
        '/crm/contacts'
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Get a specific contact by ID
   * @param contactId The ID of the contact to retrieve
   * @returns Promise with the contact data
   */
  public async getContact(contactId: string): Promise<GetContactResponse> {
    try {
      const response = await this.client.get<GetContactResponse>(
        `/crm/contacts/${contactId}`
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Update an existing contact
   * @param contactId The ID of the contact to update
   * @param data The updated contact data
   * @returns Promise with the updated contact
   */
  public async updateContact(
    contactId: string,
    data: Partial<CreateContactRequest>
  ): Promise<UpdateContactResponse> {
    try {
      const response = await this.client.put<UpdateContactResponse>(
        `/crm/contacts/${contactId}`,
        data
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Delete a contact
   * @param contactId The ID of the contact to delete
   * @returns Promise with success status
   */
  public async deleteContact(
    contactId: string
  ): Promise<DeleteContactResponse> {
    try {
      const response = await this.client.delete<DeleteContactResponse>(
        `/crm/contacts/${contactId}`
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  // Deal Methods

  /**
   * Validates if a status exists before creating a deal
   * @param statusId The ID of the status to validate
   * @returns A promise with validation result
   */
  public async validateStatus(statusId: string): Promise<ValidateStatusResult> {
    try {
      const { statuses } = await this.getAllStatuses();
      const status = statuses.find(s => s.id === statusId);

      if (!status) {
        return {
          valid: false,
          message: `Status ID ${statusId} not found. Please verify it exists in your Weeek account.`,
        };
      }

      return {
        valid: true,
        status,
      };
    } catch (error: any) {
      return {
        valid: false,
        message: `Failed to validate status: ${
          error.message || 'Unknown error'
        }`,
      };
    }
  }

  /**
   * Helper method to create a deal with validation
   * @param statusId The ID of the status where the deal should be created
   * @param data The deal data
   * @returns Promise with the created deal or error if validation fails
   */
  public async createDealWithValidation(
    statusId: string,
    data: CreateDealRequest
  ): Promise<CreateDealResponse> {
    // First validate the status exists
    const validation = await this.validateStatus(statusId);

    if (!validation.valid) {
      throw new Error(validation.message);
    }

    // If valid, create the deal
    return this.createDeal(statusId, data);
  }

  /**
   * Create a new deal in a specific status
   * @param statusId The ID of the status where the deal should be created
   * @param data The deal data
   * @returns Promise with the created deal
   */
  public async createDeal(
    statusId: string,
    data: CreateDealRequest
  ): Promise<CreateDealResponse> {
    try {
      const response = await this.client.post<CreateDealResponse>(
        `/crm/statuses/${statusId}/deals`,
        data
      );
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        throw new Error(
          `Status ID not found: ${statusId}. Please verify the status exists in your Weeek account.`
        );
      }
      throw this.handleApiError(error);
    }
  }

  /**
   * Get all deals
   * @returns Promise with all deals
   */
  public async getAllDeals(): Promise<GetDealsResponse> {
    try {
      const response = await this.client.get<GetDealsResponse>('/crm/deals');
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Get a specific deal by ID
   * @param dealId The ID of the deal to retrieve
   * @returns Promise with the deal data
   */
  public async getDeal(dealId: string): Promise<GetDealResponse> {
    try {
      const response = await this.client.get<GetDealResponse>(
        `/crm/deals/${dealId}`
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Update an existing deal
   * @param dealId The ID of the deal to update
   * @param data The updated deal data
   * @returns Promise with the updated deal
   */
  public async updateDeal(
    dealId: string,
    data: Partial<CreateDealRequest>
  ): Promise<UpdateDealResponse> {
    try {
      const response = await this.client.put<UpdateDealResponse>(
        `/crm/deals/${dealId}`,
        data
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Delete a deal
   * @param dealId The ID of the deal to delete
   * @returns Promise with success status
   */
  public async deleteDeal(dealId: string): Promise<DeleteDealResponse> {
    try {
      const response = await this.client.delete<DeleteDealResponse>(
        `/crm/deals/${dealId}`
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Move a deal to a different status
   * @param dealId The ID of the deal to move
   * @param statusId The ID of the status to move the deal to
   * @returns Promise with the updated deal
   */
  public async moveDeal(
    dealId: string,
    statusId: string
  ): Promise<UpdateDealResponse> {
    try {
      const response = await this.client.post<UpdateDealResponse>(
        `/crm/deals/${dealId}/move`,
        { statusId }
      );
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 404) {
        throw new Error(
          `Either Deal ID (${dealId}) or Status ID (${statusId}) not found. Please verify both exist.`
        );
      }
      throw this.handleApiError(error);
    }
  }

  // Status Methods

  /**
   * Get all statuses
   * @returns Promise with all statuses
   */
  public async getAllStatuses(): Promise<GetStatusesResponse> {
    try {
      const response = await this.client.get<GetStatusesResponse>(
        '/crm/statuses'
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Get all statuses for a specific funnel
   * @param funnelId The ID of the funnel
   * @returns Promise with the funnel statuses
   */
  public async getFunnelStatuses(
    funnelId: string
  ): Promise<GetFunnelStatusesResponse> {
    try {
      const response = await this.client.get<GetFunnelStatusesResponse>(
        `/crm/funnels/${funnelId}/statuses`
      );
      return response.data;
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  /**
   * Get all statuses with their associated funnel details
   * This is a helper method that makes multiple API calls to enrich the status data
   * @returns Promise with all statuses including their funnel details
   */
  public async getAllStatusesWithFunnels(): Promise<GetStatusesWithFunnelsResponse> {
    try {
      // Get all statuses
      const statusesResponse = await this.getAllStatuses();
      const statuses = statusesResponse.statuses;

      // Get all funnels
      const funnelsResponse = await this.getAllFunnels();
      const funnels = funnelsResponse.funnels;

      // Map funnels to statuses
      const statusesWithFunnels: StatusWithFunnel[] = statuses.map(status => {
        const funnel = funnels.find(f => f.id === status.funnelId);
        return {
          ...status,
          funnel,
        };
      });

      return {
        success: true,
        statuses: statusesWithFunnels,
      };
    } catch (error: any) {
      throw this.handleApiError(error);
    }
  }

  // Error handling utilities

  /**
   * Helper method to handle API errors
   * @param error The error from the API request
   * @returns A standardized error object
   */
  private handleApiError(error: any): Error {
    // Check if it's an axios error with response
    const axiosError = error as AxiosErrorExtended;

    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const statusCode = axiosError.response.status;
      const errorData = axiosError.response.data || {};

      return new Error(
        `API Error (${statusCode}): ${errorData.message || 'Unknown error'}`
      );
    } else if (axiosError.request) {
      // The request was made but no response was received
      return new Error('No response received from the API');
    } else if (error instanceof Error) {
      // It's a standard Error object
      return new Error(`Request error: ${error.message || 'Unknown error'}`);
    } else {
      // It's something else
      const message =
        error && typeof error === 'object' && 'message' in error
          ? error.message
          : 'Unknown error';
      return new Error(`Request error: ${message}`);
    }
  }
}

// Export a factory function to create the client
export const createWeekCRMClient = (token: string): WeekCRMClient => {
  return new WeekCRMClient(token);
};
