import React, { useState } from 'react'
import { Container, TextField, Box, Grid } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import SendIcon from '@mui/icons-material/Send';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3j062E0hCdkBqMZahzXxy0TvTaF1LgwA",
  authDomain: "testapp-c4717.firebaseapp.com",
  projectId: "testapp-c4717",
  storageBucket: "testapp-c4717.appspot.com",
  messagingSenderId: "526971112401",
  appId: "1:526971112401:web:93700a39467347cff4eef0",
  measurementId: "G-N66YZJX36N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); //eslint-disable-line


export default function MainPage() {

  const [loading, setLoading] = useState(false)  //eslint-disable-line

  const handleClick = () => {

  }

  return (
      <Container fixed>
        <Box mt={4} mb={4}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={4}>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
            </Grid>
            <Grid item xs={4}>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" fullWidth/>
            </Grid>
          </Grid>
        </Box>
        <LoadingButton
          onClick={handleClick}
          endIcon={<SendIcon />}
          loading={loading}
          loadingPosition="end"
          variant="contained"
        >
          Send
        </LoadingButton>
      </Container>
  )
}
