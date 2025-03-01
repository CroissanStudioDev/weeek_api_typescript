// Types for Funnel API

export type FunnelColor =
  | 'blue'
  | 'green'
  | 'red'
  | 'yellow'
  | 'purple'
  | 'pink'
  | 'orange'
  | 'gray';

export interface CustomFieldOption {
  id: string;
  name: string;
  color: FunnelColor;
}

export interface CustomFieldConfig {
  type: string;
}

export interface CustomField {
  id: string;
  name: string;
  type: string;
  config: CustomFieldConfig;
  options: CustomFieldOption[];
}

export interface Funnel {
  id: string;
  creatorId: string;
  currencyId: number;
  name: string;
  logo: string | null;
  dealsCount: number;
  dealsAmount: number;
  isPrivate: boolean;
  isBookmarked: boolean;
  createdAt: string;
  updatedAt: string;
  team: string[];
  customFields: CustomField[];
}

export interface CreateFunnelRequest {
  name: string;
  currencyId?: number;
  isPrivate?: boolean;
}

export interface CreateFunnelResponse {
  success: boolean;
  funnel: Funnel;
}

export interface UpdateFunnelRequest {
  name?: string;
  currencyId?: number;
  isPrivate?: boolean;
}

export interface UpdateFunnelResponse {
  success: boolean;
  funnel: Funnel;
}

export interface GetFunnelsResponse {
  success: boolean;
  funnels: Funnel[];
}

export interface GetFunnelResponse {
  success: boolean;
  funnel: Funnel;
}

export interface DeleteFunnelResponse {
  success: boolean;
}

// API error response interface
export interface ApiErrorResponse {
  message?: string;
  [key: string]: any;
}

// Axios error interface for better type checking
export interface AxiosErrorExtended extends Error {
  response?: {
    status: number;
    data: ApiErrorResponse;
  };
  request?: any;
  config?: any;
  isAxiosError?: boolean;
}

// Deal Types
export type WinStatus = 'won' | 'lost' | 'archived' | null;

export interface Task {
  id: number;
  parentId: number;
  title: string;
  description: string;
  duration: number;
  overdue: number;
  type: string;
  priority: number;
  isCompleted: boolean;
  authorId: string;
  userId: string;
  boardId: number;
  boardColumnId: number;
  projectId: number;
  image: string;
  isPrivate: boolean;
  startDate: string;
  startDateTime: string;
  dueDate: string;
  dueDateTime: string;
  createdAt: string;
  updatedAt: string;
  tags: number[];
  subscribers: string[];
  subTasks: number[];
  workloads: any[];
  timeEntries: any[];
  customFields: CustomFieldValue[];
  attachments: Attachment[];
}

export interface Attachment {
  id: string;
  creatorId: string;
  service: string;
  name: string;
  url: string;
  size: number;
  createdAt: string;
}

export interface CustomFieldValue {
  id: string;
  name: string;
  type: string;
  config: CustomFieldConfig;
  options: CustomFieldOption[];
  value: any;
}

export interface Deal {
  id: string;
  creatorId: string;
  funnelId: string;
  statusId: string;
  assignees: string[];
  organizations: string[];
  contacts: string[];
  title: string | null;
  description: string | null;
  amount: number | null;
  winStatus: WinStatus;
  createdAt: string;
  updatedAt: string;
  tags: number[];
  tasks: Task[];
  customFields: CustomFieldValue[];
  attachments: Attachment[];
}

export interface CreateDealRequest {
  title?: string | null;
  amount?: number | null;
  winStatus?: WinStatus;
  description?: string | null;
  assignees?: string[];
  organizations?: string[];
  contacts?: string[];
  tags?: number[];
  customFields?: Record<string, any>;
}

export interface CreateDealResponse {
  success: boolean;
  deal: Deal;
}

export interface GetDealsResponse {
  success: boolean;
  deals: Deal[];
}

export interface GetDealResponse {
  success: boolean;
  deal: Deal;
}

export interface UpdateDealResponse {
  success: boolean;
  deal: Deal;
}

export interface DeleteDealResponse {
  success: boolean;
}

// Organization Types
export interface OrganizationAddress {
  id: string;
  address: string;
}

export interface OrganizationEmail {
  id: string;
  email: string;
}

export interface OrganizationPhone {
  id: string;
  phone: string;
}

export interface Organization {
  id: string;
  creatorId: string;
  name: string;
  responsibleId: string | null;
  addresses: OrganizationAddress[];
  emails: OrganizationEmail[];
  phones: OrganizationPhone[];
  contacts: string[];
  tags: number[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrganizationRequest {
  name: string;
  addresses?: string[];
  emails?: string[];
  phones?: string[];
  responsibles?: string[];
}

export interface CreateOrganizationResponse {
  success: boolean;
  organization: Organization;
}

export interface GetOrganizationsResponse {
  success: boolean;
  organizations: Organization[];
}

export interface GetOrganizationResponse {
  success: boolean;
  organization: Organization;
}

export interface UpdateOrganizationResponse {
  success: boolean;
  organization: Organization;
}

export interface DeleteOrganizationResponse {
  success: boolean;
}

// Contact Types
export interface ContactEmail {
  id: string;
  email: string;
}

export interface ContactPhone {
  id: string;
  phone: string;
}

export interface Contact {
  id: string;
  creatorId: string;
  lastName: string | null;
  firstName: string;
  middleName: string | null;
  organizations: string[];
  emails: ContactEmail[];
  phones: ContactPhone[];
  tags: number[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateContactRequest {
  firstName: string;
  lastName?: string | null;
  middleName?: string | null;
  organizations?: string[] | null;
  emails?: string[] | null;
  phones?: string[] | null;
  tags?: number[] | null;
}

export interface CreateContactResponse {
  success: boolean;
  contact: Contact;
}

export interface GetContactsResponse {
  success: boolean;
  contacts: Contact[];
}

export interface GetContactResponse {
  success: boolean;
  contact: Contact;
}

export interface UpdateContactResponse {
  success: boolean;
  contact: Contact;
}

export interface DeleteContactResponse {
  success: boolean;
}

// Status Types
export interface Status {
  id: string;
  creatorId: string;
  name: string;
  dealsCount: number;
  dealsAmount: number;
  createdAt: string;
  updatedAt: string;
  // Optional fields that might be present in some responses
  funnelId?: string;
  color?: FunnelColor;
  position?: number;
}

export interface GetStatusesResponse {
  success: boolean;
  statuses: Status[];
}

export interface GetFunnelStatusesResponse {
  success: boolean;
  statuses: Status[];
}

export interface ValidateStatusResult {
  valid: boolean;
  message?: string;
  status?: Status;
}

export interface StatusWithFunnel extends Status {
  funnel?: Funnel;
}

export interface GetStatusesWithFunnelsResponse {
  success: boolean;
  statuses: StatusWithFunnel[];
}
