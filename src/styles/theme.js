export const theme = {
  colors: {
    primary: '#ff5500',    // Vibrant Orange
    primaryLight: '#ff7733', // Light Orange
    primaryDark: '#cc4400',  // Dark Orange
    accent: '#ff8c1a',     // Warm Orange
    accentLight: '#ffa64d', // Light Warm Orange
    secondary: '#333333',  // Dark Gray
    secondaryLight: '#4d4d4d', // Medium Gray
    secondaryDark: '#1a1a1a', // Very Dark Gray
    dark: '#000000',      // Pure Black
    darkLight: '#262626',  // Soft Black
    white: '#ffffff',      // Pure White
    lightGray: '#f7f7f7',  // Very Light Gray
    lightGray2: '#f0f0f0', // Light Gray
    lightGray3: '#e6e6e6', // Medium Light Gray
    gradient: {
      primary: 'linear-gradient(135deg, #ff5500 0%, #ff8c1a 100%)',
      secondary: 'linear-gradient(135deg, #333333 0%, #4d4d4d 100%)',
      accent: 'linear-gradient(135deg, #ff7733 0%, #ffa64d 100%)',
      dark: 'linear-gradient(to right, #000000 0%, #ff5500 100%)',
      hero: 'linear-gradient(45deg, #000000 0%, #ff5500 50%, #ff8c1a 100%)'
    }
  },
  fonts: {
    primary: "'Inter', sans-serif",
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    large: '1440px',
  },
  transitions: {
    default: '0.3s ease',
    smooth: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 20px rgba(0, 0, 0, 0.15)',
    large: '0 8px 30px rgba(0, 0, 0, 0.2)'
  }
};

export default theme;
