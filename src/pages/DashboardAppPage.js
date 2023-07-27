// @mui
import { Container, Typography } from '@mui/material';
import { getAuth } from 'firebase/auth';

export default function DashboardAppPage() {
  console.log('dashboard', getAuth());
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard Page
      </Typography>
    </Container>
  );
}
