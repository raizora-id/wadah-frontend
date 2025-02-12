export function getAppUrl() {
    if (
      process.env.VERCEL_ENV === "production" ||
      process.env.NODE_ENV === "production"
    ) {
      return "https://redantcolony.com";
    }
  
    if (process.env.VERCEL_ENV === "preview") {
      return `https://${process.env.VERCEL_URL}`;
    }
  
    return "http://localhost:3001";
  }
  
  export function getEmailUrl() {
    if (process.env.NODE_ENV === "development") {
      return "http://localhost:3000";
    }
  
    return "https://redantcolony.com";
  }
  
  export function getWebsiteUrl() {
    if (
      process.env.VERCEL_ENV === "production" ||
      process.env.NODE_ENV === "production"
    ) {
      return "https://redantcolony.com";
    }
  
    if (process.env.VERCEL_ENV === "preview") {
      return `https://${process.env.VERCEL_URL}`;
    }
  
    return "http://localhost:3000";
  }
  