import {
  Container,
  Box,
  Card,
  Typography,
  Divider,
  FormControl,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';

export default function ChatPage() {
  return (
    <Container maxWidth="xl">
      <Card
        sx={{
          minHeight: '470px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            alignItems: 'center',
            minHeight: '70px',
            padding: '0 30px',
          }}
        >
          <Typography
            sx={{
              color: '#767D87',
            }}
          >
            Messages
          </Typography>
        </Box>
        <Divider />
        <Box
          sx={{
            minHeight: '350px',
            padding: "30px 30px"
          }}
        >
          <Typography>Messages</Typography>
        </Box>
        <Box
          sx={{
            minHeight: '50px',
            padding: '0 30px',
          }}
        >
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="emogi">
                    <InsertEmoticonIcon />
                  </IconButton>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <SendIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </Card>
    </Container>
  );
}
