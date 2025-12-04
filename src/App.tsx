import React, { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Container, CssBaseline, Grid, IconButton, Modal, Toolbar, Typography, Link, ThemeProvider, createTheme } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { characters, Character } from './data/characters';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const imageBaseUrl = 'https://zzz-quick-reference.s3.us-east-2.amazonaws.com/';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [open, setOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const handleOpen = (character: Character) => {
    setSelectedCharacter(character);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const dpsCharacters = characters.filter(c => c.role === 'DPS');
  const offFieldDpsCharacters = characters.filter(c => c.role === 'Off-field DPS');
  const supportCharacters = characters.filter(c => c.role === 'Support');

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Zenless Zone Zero Quick Reference Guide
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={{ mt: 4, mb: 4 }}>
          <div>
            {[{ title: 'DPS', list: dpsCharacters }, { title: 'Off-field DPS', list: offFieldDpsCharacters }, { title: 'Support', list: supportCharacters }].map(group => (
              <Accordion key={group.title} defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="h6">{group.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    {group.list.map((character) => (
                      <Grid item key={character.id} xs={6} sm={4} md={3} lg={2}>
                        <CardActionArea onClick={() => handleOpen(character)}>
                          <Card>
                            <CardMedia
                              component="img"
                              height="140"
                              image={`${imageBaseUrl}${character.imageFile}`}
                              alt={character.name}
                            />
                            <CardContent sx={{ py: 1 }}>
                              <Typography variant="subtitle1" component="div">
                                {character.name}
                              </Typography>
                            </CardContent>
                          </Card>
                        </CardActionArea>
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 2,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              Zenless Zone Zero Quick Reference Guide. All assets © HoYoverse.
            </Typography>
          </Container>
        </Box>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="character-guide-title"
          aria-describedby="character-guide-description"
        >
          <Box sx={modalStyle}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="character-guide-title" variant="h6" component="h2">
              {selectedCharacter?.name}
            </Typography>
            <Typography id="character-guide-description" sx={{ mt: 2 }}>
              {selectedCharacter?.guide}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
}

export default App;
