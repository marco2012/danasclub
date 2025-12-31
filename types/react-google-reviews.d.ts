declare module 'react-google-reviews' {
  import * as React from 'react';
  // Lightweight declaration to appease TS when using the library in Vite.
  export const ReactGoogleReviews: React.FC<Record<string, unknown>>;
  export const ReactGoogleReview: React.FC<Record<string, unknown>>;
  export const FeaturableAPIResponse: unknown;
  export const dangerouslyFetchPlaceReviews: (...args: any[]) => Promise<any>;
}
