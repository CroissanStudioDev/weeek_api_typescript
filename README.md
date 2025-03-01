# Weeek API TypeScript SDK

A TypeScript SDK for interacting with the Weeek API, focusing on CRM functionality.

## Installation

```bash
npm install weeek-api-sdk
# or
yarn add weeek-api-sdk
```

## Usage

### Creating a client

```typescript
import { createWeekCRMClient } from 'weeek-api-sdk';

// Create a client instance with your API token
const client = createWeekCRMClient('your-api-token');
```

### Working with Funnels

```typescript
// Get all funnels
const { funnels } = await client.getAllFunnels();

// Create a new funnel
const { funnel } = await client.createFunnel({
  name: 'My Sales Funnel',
  isPrivate: false
});

// Get a specific funnel
const { funnel } = await client.getFunnel('funnel-id');

// Update a funnel
await client.updateFunnel('funnel-id', {
  name: 'Updated Funnel Name'
});

// Delete a funnel
await client.deleteFunnel('funnel-id');
```

### Working with Organizations

```typescript
// Get all organizations
const { organizations } = await client.getAllOrganizations();

// Create a new organization
const { organization } = await client.createOrganization({
  name: 'ACME Corp',
  emails: ['contact@acme.com'],
  phones: ['+1234567890']
});

// Get a specific organization
const { organization } = await client.getOrganization('organization-id');

// Update an organization
await client.updateOrganization('organization-id', {
  name: 'ACME Corporation'
});

// Delete an organization
await client.deleteOrganization('organization-id');
```

### Working with Contacts

```typescript
// Get all contacts
const { contacts } = await client.getAllContacts();

// Create a new contact
const { contact } = await client.createContact({
  firstName: 'John',
  lastName: 'Doe',
  emails: ['john.doe@example.com']
});

// Get a specific contact
const { contact } = await client.getContact('contact-id');

// Update a contact
await client.updateContact('contact-id', {
  firstName: 'Jonathan'
});

// Delete a contact
await client.deleteContact('contact-id');
```

### Working with Deals

```typescript
// Get all deals
const { deals } = await client.getAllDeals();

// Create a new deal in a specific status
const { deal } = await client.createDeal('status-id', {
  title: 'New Project Deal',
  amount: 10000
});

// Create a deal with validation to ensure the status exists
const { deal } = await client.createDealWithValidation('status-id', {
  title: 'New Project Deal',
  amount: 10000
});

// Get a specific deal
const { deal } = await client.getDeal('deal-id');

// Update a deal
await client.updateDeal('deal-id', {
  title: 'Updated Deal Title',
  amount: 15000
});

// Move a deal to a different status
await client.moveDeal('deal-id', 'new-status-id');

// Delete a deal
await client.deleteDeal('deal-id');
```

### Working with Statuses

```typescript
// Get all statuses
const { statuses } = await client.getAllStatuses();

// Get statuses for a specific funnel
const { statuses } = await client.getFunnelStatuses('funnel-id');

// Get all statuses with their associated funnel details
const { statuses } = await client.getAllStatusesWithFunnels();
```

## API Reference

The SDK provides typed interfaces for all request and response objects to enable full IntelliSense support in your IDE.

### CRM Client Methods

- **Funnels**
  - `createFunnel(data)`
  - `getAllFunnels()`
  - `getFunnel(funnelId)`
  - `updateFunnel(funnelId, data)`
  - `deleteFunnel(funnelId)`

- **Organizations**
  - `createOrganization(data)`
  - `getAllOrganizations()`
  - `getOrganization(organizationId)`
  - `updateOrganization(organizationId, data)`
  - `deleteOrganization(organizationId)`

- **Contacts**
  - `createContact(data)`
  - `getAllContacts()`
  - `getContact(contactId)`
  - `updateContact(contactId, data)`
  - `deleteContact(contactId)`

- **Deals**
  - `validateStatus(statusId)`
  - `createDealWithValidation(statusId, data)`
  - `createDeal(statusId, data)`
  - `getAllDeals()`
  - `getDeal(dealId)`
  - `updateDeal(dealId, data)`
  - `deleteDeal(dealId)`
  - `moveDeal(dealId, statusId)`

- **Statuses**
  - `getAllStatuses()`
  - `getFunnelStatuses(funnelId)`
  - `getAllStatusesWithFunnels()`

## License

MIT
