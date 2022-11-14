import { createContext, PropsWithChildren, useMemo, useState } from 'react';

import {
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from '@mui/material';

const AppThemeContext = createContext({});

type Props = PropsWithChildren;

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          // primary: amber,
          // divider: amber[200],
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
        }
      : {
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          // background: {
          //   default: deepOrange[900],
          //   paper: deepOrange[900],
          // },
          // text: {
          //   primary: '#fff',
          //   secondary: grey[500],
          // },
        }),
  },
});

export function AppThemeProvider({ children }: Props) {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <AppThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
}
