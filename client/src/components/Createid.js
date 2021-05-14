import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Createid() {
  const classes = useStyles();

  const [f_name, setfname] =useState('');
  const [l_name, setlname] =useState('');
  const [email_id, setEmail] =useState('');
  const [roll_no, setRollno] =useState('');
  const [mobile_no, setMobile] =useState('');
  const [batch, setBatch] =useState('');
  const [id_type, setIDtype] =useState('');
  const name=f_name+" "+l_name;
  const password=f_name+"@123";
  const status="active"
  
  const CreateNewuser = async (e)=>{
    e.preventDefault();
    const res = await fetch('/register',
    {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        name,
        password ,
        roll_no,
        batch,
        email_id,
        mobile_no,
        id_type,
        status
      })
    });
    
      const data =res.json();
      if(res.status === 400 || !data)
      {
        window.alert("Please Fill all fields");
      }
      else
         if(res.status === 422 || !data)
      {
        window.alert("Email Id Already Exists");
      }
      else
      {
        window.alert("Successfully Created Id");
      }
        }
    


  return (
     
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create New Id Form
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="f_name"
                name="f_name"
                variant="outlined"
                required
                fullWidth
                id="f_name"
                label="First Name"
                onChange={(e) => setfname(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="l_name"
                label="Last Name"
                name="l_name"
                onChange={(e) => setlname(e.target.value)}
                autoComplete="l_name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email_id"
                label="Email Address"
                name="email_id"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email_id"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="roll_no"
                label="Roll Number"
                id="roll_no"
                onChange={(e) => setRollno(e.target.value)}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="batch"
                label="Batch"
                id="batch"
                onChange={(e) => setBatch(e.target.value)}

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="mobile_no"
                label="Mobile Number"
                id="mobile_no"
                onChange={(e) => setMobile(e.target.value)}

              />
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="id_type">Id-Type</InputLabel>
            <Select
            native
          value={id_type.id_type}
          onChange={(e) => setIDtype(e.target.value)}
          label="Id-Type"
          inputProps={{
            name: 'id_type',
            id: 'id_type',
          }}
        >
          <option aria-label="None" value="" />
          <option value="admin">admin</option>
          <option value="student">student</option>
          
        </Select>
      </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {CreateNewuser}
          >
            Create ID
          </Button>
        </form>
      </div>

    </Container>
  );
}