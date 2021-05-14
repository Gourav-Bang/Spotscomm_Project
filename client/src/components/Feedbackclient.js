import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import PageviewIcon from '@material-ui/icons/Pageview';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Feedbackclient() {
  const classes = useStyles();

  const [l_name, setlname] =useState('');
  const [email_id, setEmail] =useState('');
  const [mobile_no, setMobile] =useState('');

  return (
    <Container component="main" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PageviewIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Feedback
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3}>
              <TextField
                autoComplete="Name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email_id"
                label="Email Address"
                name="email_id"
                
              />
            </Grid>
            <Grid item xs={6} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={9}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="feedback"
                label="Feedback/Complaints"
                multiline
                rows={5}
                id="feedback"
                autoFocus
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}