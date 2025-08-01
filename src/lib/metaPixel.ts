// Meta Pixel Configuration
export const META_PIXEL_CONFIG = {
  PIXEL_ID: '1086310532994843',
  ACCESS_TOKEN: 'EAAWPfSdcOoIBPP0ZCjfNZAaMjPnzZCi6BB0vEvGLuSMmeJejYnhfXKmYJ9FLakQcs3chcbXrdtlkZC9R5FhN2BP4BvoYqGS5vvZCpvlnRlXgHHlwTIMZABXKoOvoUZAZBFTwCfgk2uaxtigIpbp7b1oFcs39qiV4WSXl8MRZAs1KQlLWC45IQxW9HMUc5mKqZCKnOHRgZDZD',
  CONVERSION_API_URL: `https://graph.facebook.com/v19.0/1086310532994843/events`,
}

// Common event names for consistency
export const META_PIXEL_EVENTS = {
  PAGE_VIEW: 'PageView',
  LEAD: 'Lead',
  CONTACT: 'Contact',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  PURCHASE: 'Purchase',
  ADD_TO_CART: 'AddToCart',
  VIEW_CONTENT: 'ViewContent',
  SEARCH: 'Search',
  SUBSCRIBE: 'Subscribe'
} as const
