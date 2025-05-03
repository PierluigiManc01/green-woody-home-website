
// Function to check if a specific cookie exists and has been accepted
export const isCookieAccepted = (cookieType: 'necessary' | 'analytics' | 'marketing'): boolean => {
  const consentValue = localStorage.getItem('cookie-consent');
  
  // Necessary cookies are always allowed if any consent has been given
  if (cookieType === 'necessary') {
    return !!consentValue;
  }
  
  // For other cookie types, check if user accepted all cookies
  return consentValue === 'all';
};

// Function to set a cookie
export const setCookie = (
  name: string, 
  value: string, 
  days: number = 365, 
  cookieType: 'necessary' | 'analytics' | 'marketing' = 'necessary'
): boolean => {
  // Check if this type of cookie is accepted
  if (!isCookieAccepted(cookieType)) {
    return false;
  }

  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + days);
  
  const cookieValue = `${encodeURIComponent(value)}; expires=${expiryDate.toUTCString()}; path=/; SameSite=Strict`;
  document.cookie = `${name}=${cookieValue}`;
  
  return true;
};

// Function to get a cookie value
export const getCookie = (name: string): string | null => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  
  return null;
};

// Function to delete a cookie
export const deleteCookie = (name: string): void => {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

// Function to reset all cookie consent
export const resetCookieConsent = (): void => {
  localStorage.removeItem('cookie-consent');
};
