# Weeek API TypeScript SDK

[![npm version](https://img.shields.io/npm/v/weeek-api-sdk.svg)](https://www.npmjs.com/package/weeek-api-sdk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/github/actions/workflow/status/croissanstudio/weeek-api-sdk/release.yml?branch=main)](https://github.com/croissanstudio/weeek-api-sdk/actions)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9%2B-blue)](https://www.typescriptlang.org/)

A modern, type-safe SDK for the Weeek API, built with TypeScript to provide an intuitive and developer-friendly interface to Weeek's CRM functionality.

## 📋 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [API Reference](#-api-reference)
  - [Funnels](#funnels)
  - [Organizations](#organizations)
  - [Contacts](#contacts)
  - [Deals](#deals)
  - [Statuses](#statuses)
- [Examples](#-examples)
- [Error Handling](#-error-handling)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **Fully Typed** - TypeScript definitions for all API responses and requests
- **Promise-Based** - Modern async/await syntax for all API calls
- **Comprehensive** - Support for all major Weeek CRM endpoints
- **Error Handling** - Detailed error messages and proper error handling
- **Zero Dependencies** - Only requires axios for HTTP requests
- **IDE Support** - Full IntelliSense and code completion in modern IDEs
- **Documented** - Extensive documentation with examples

## 🚀 Installation

```bash
# Using npm
npm install weeek-api-sdk

# Using yarn
yarn add weeek-api-sdk

# Using pnpm
pnpm add weeek-api-sdk
```

## 🏁 Quick Start

```typescript
import { createWeekCRMClient } from 'weeek-api-sdk';

// Create a client instance with your API token
const client = createWeekCRMClient('your-api-token');

// Example: Creating a new funnel
async function createSalesFunnel() {
  try {
    const response = await client.createFunnel({
      name: 'Sales Pipeline',
      isPrivate: false
    });
    
    console.log('Funnel created:', response.funnel);
    return response.funnel;
  } catch (error) {
    console.error('Error creating funnel:', error);
  }
}
```

## 📖 API Reference

The SDK provides a comprehensive set of methods for interacting with the Weeek API. All methods return promises that resolve to typed response objects.

### Funnels

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

### Organizations

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

### Contacts

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

### Deals

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

### Statuses

```typescript
// Get all statuses
const { statuses } = await client.getAllStatuses();

// Get statuses for a specific funnel
const { statuses } = await client.getFunnelStatuses('funnel-id');

// Get all statuses with their associated funnel details
const { statuses } = await client.getAllStatusesWithFunnels();
```

## 📝 Examples

### Managing a Complete Sales Process

```typescript
async function manageSalesProcess() {
  // Create a sales funnel
  const { funnel } = await client.createFunnel({
    name: 'Q3 Sales Pipeline',
    isPrivate: false
  });
  
  // Get the default status
  const { statuses } = await client.getFunnelStatuses(funnel.id);
  const initialStatus = statuses[0];
  
  // Create a potential client organization
  const { organization } = await client.createOrganization({
    name: 'TechCorp Inc.',
    emails: ['info@techcorp.com']
  });
  
  // Create a contact at the organization
  const { contact } = await client.createContact({
    firstName: 'Jane',
    lastName: 'Smith',
    emails: ['jane.smith@techcorp.com'],
    organizations: [organization.id]
  });
  
  // Create a deal in the initial status
  const { deal } = await client.createDeal(initialStatus.id, {
    title: 'Enterprise License Deal',
    amount: 25000,
    organizations: [organization.id],
    contacts: [contact.id]
  });
  
  console.log('Created full sales process with:', {
    funnel: funnel.name,
    organization: organization.name,
    contact: `${contact.firstName} ${contact.lastName}`,
    deal: deal.title
  });
  
  return { funnel, organization, contact, deal };
}
```

## 🔧 Error Handling

The SDK provides detailed error information for all API calls:

```typescript
try {
  const response = await client.getFunnel('non-existent-id');
} catch (error) {
  if (error.response) {
    // The request was made and the server responded with an error status
    console.error('API Error:', error.response.data.message);
    console.error('Status Code:', error.response.status);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('Network Error:', error.message);
  } else {
    // Something else went wrong
    console.error('Error:', error.message);
  }
}
```

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
