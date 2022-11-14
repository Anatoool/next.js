import {
  Autocomplete,
  Box,
  Button,
  Card,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

import { getYearsList } from 'utils/dates/getYearsList';

const YEARS_LIST = getYearsList().map((y) => ({
  label: `${y}`,
  value: `${y}`,
}));

export function MoviesSearchForm() {
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <Card sx={{ py: 3, px: 4 }}>
      <Box component="form" sx={{ display: 'flex' }} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          id="text"
          label="Search"
          sx={{ flex: '0 1 240px', mr: 2 }}
        />
        <Autocomplete
          disablePortal
          options={YEARS_LIST}
          renderInput={(params) => <TextField {...params} label="Year" />}
          sx={{ flex: '0 1 125px', mr: 2 }}
        />

        <Button
          size="large"
          variant="contained"
          sx={{ flex: '0 1 120px', ml: 'auto' }}
        >
          Search
        </Button>
      </Box>
    </Card>
  );
}
