import PropTypes from 'prop-types';
import { useMemo } from 'react';
import * as React from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import { useColorMode } from '../Hooks/ColorMode';
import { amber, deepOrange, grey } from '@mui/material/colors';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

// const themeObj = {
//   dark: {
//     background: {
//       // default: "#403C3B"
//       default: "red"
//     }
//   }
// }
export default function ThemeProvider({ children }) {

  const { mode } = useColorMode();
  const themeOptions = useMemo(
    () => ({
      palette: {
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              primary: amber,
              // divider: amber[200],
              text: {
                primary: grey[900],
                secondary: grey[800],
              },
            }
          : {
              // palette values for dark mode
              primary: deepOrange,
              // divider: deepOrange[700],
              background: {
                default: {
                  primary: {
                    dark: '#403C3B',
                  },
                },
                // paper:  {
                //   primary: {
                //     dark: '#403C3B',
                //   },
                // },
              },
              text: {
                primary: '#fff',
                // secondary: grey[900],
                secondary: grey[800],
              },
            }),
      },
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
