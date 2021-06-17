import theme from 'styled-theming';

export const backgroundColor: theme.ThemeSet = theme('mode', {
  light: '#fafafa',
  dark: '#252832'
});

export const sidebarBackgroundColor: theme.ThemeSet = theme('mode', {
  light: '#252832',
  dark: '#fff'
});

export const textColor: theme.ThemeSet = theme('mode', {
  light: '#252832',
  dark: '#fff'
});

export const sidebarTextColor: theme.ThemeSet = theme('mode', {
  light: '#fafafa',
  dark: '#252832'
});

export const secondaryGrey: theme.ThemeSet = theme('mode', {
  light: 'rgba(255, 255, 255, 0.4)',
  dark: '#f4f4f4'
})

export const shadow: theme.ThemeSet = theme('mode', {
  light: '0 5px 15px #00000033',
  dark: '0 0px 15px rgba(255, 255, 255, 0.3)' 
})
