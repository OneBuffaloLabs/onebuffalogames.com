import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-B7KW5V5951';

export const initGA = (): void => {
  // Check for production environment and if the GA ID exists
  if (GA_MEASUREMENT_ID && process.env.NODE_ENV === 'production') {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
};

export const logPageView = (): void => {
  // Check for production environment and if the GA ID exists
  if (GA_MEASUREMENT_ID && process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }
};

export const logEvent = (category: string, action: string, label?: string): void => {
  // Check for production environment and if the GA ID exists
  if (GA_MEASUREMENT_ID && process.env.NODE_ENV === 'production') {
    ReactGA.event({ category, action, label });
  }
};
