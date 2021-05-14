import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://cache.careers360.mobi/media/presets/860X430/article_images/2020/7/6/COVID-19_IIIT_Bangalore_holds_e-convocation_to_the_class_of_2020_4CoWgjU.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login1() {
  const classes = useStyles();
  const history = useHistory();

  const [email_id, setEmail] =useState('');
  const [password, setPassword] =useState('');
  
  
  const loginUser = async (e)=>{
    e.preventDefault();
    let res = await fetch('/login',
    {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        email_id,
        password,
        "here":"here"
      })
      
    })
    let data = await res.json();
     console.log(data.id_type)
      if(res.status === 400 || !data)
      {
        window.alert("Invalid Credentials");
      }
      else
      { 
        if(data.id_type ==='admin')
            history.push("/Admindashboard");
          else
            history.push("/Clientdashboard");
     }
        }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          
        <Grid sm={4} md={7} className={classes.logoimage} />
        <Paper variant="outlined">
              <img src="https://www.iiitb.ac.in/includefiles/settings/iiitb_logo2.png" />
          </Paper>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            
            Sign in
          </Typography>
          <form method="POST" className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email_id"
              id="email_id"
              value={email_id}
              onChange={(e) => setEmail(e.target.value)}
              label="Email Address"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
             
              
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick = {loginUser}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}