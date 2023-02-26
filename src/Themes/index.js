import PropTypes from 'prop-types';
import { useMemo } from 'react';
import * as React from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import { useColorMode } from '../Hooks/ColorMode';

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {


  const { mode } = useColorMode();
  const themeOptions = useMemo(
    () => ({
      palette: {
        mode
      },
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {/* <GlobalStyles /> */}
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
