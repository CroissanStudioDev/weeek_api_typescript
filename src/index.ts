// Export type definitions
export * from './types/index';

// Export clients
export * from './clients/index';

// Create and export the default client
import { WeekCRMClient, createWeekCRMClient } from './clients/index';
export default createWeekCRMClient;
export { WeekCRMClient };
