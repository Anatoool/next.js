import { Box } from '@mui/material';

import { MoviesSearchForm } from 'components/MoviesSearchForm';

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <Box sx={{ flex: '1', maxWidth: 800 }}>
          <MoviesSearchForm />
        </Box>
      </Box>
    </>
  );
}
