import React, { Component } from 'react';
import clsx from 'clsx';
//import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    flexBasis: 200,
  },
});

 class InputText extends Component {

  
  state = {
    Posts: [],
    FormData: {
      id: '1',
      employee_name: '',
      employee_age: '',
      employee_salary: '',
      profile_image: '',

    }
  }

  handleChange = e => {
    let newFormData = ({...this.state.FormData});
    // let timestamp = new Date().getTime();
    // newValues['id'] = timestamp;
    newFormData[e.target.name] = e.target.value
    //setValues({ ...values, [prop]: event.target.value });
    this.setState({
      FormData: newFormData
    })
    console.log(FormData)
  };

  getAPI = () => {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => res.json())
    .then(data => {
      this.setState({Posts: data})
    })
  }

  handleSubmit = () => {
    this.postToAPI()
  }

  postToAPI = () => {
    const options = {
      method: 'POST',
      body: JSON.stringify(this.state.FormData),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://dummy.restapiexample.com/api/v1/create', options)
      // .then(res => res.json())
      .then(res => res.text())
      .then(text => console.log(text))
      // .then(res => this.getAPI());
  }
  
  
  render() {
    const { classes } = this.props;
  return (
    <Container maxWidth="sm">
        <div className={classes.root}>
          <TextField
            id="outlined-adornment-weight"
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
            label="User ID"
            name="id"
            //value={values.id}
            onChange={this.handleChange}
            helperText="User ID"
            InputProps={{
              endAdornment: <InputAdornment position="start">ID</InputAdornment>,
            }}
          />
      <TextField
        id="outlined-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="User Name"
        name="employee_name"
        //value={values.userName}
        onChange={this.handleChange}
        helperText="User Name"
        InputProps={{
          endAdornment: <InputAdornment position="start">Name</InputAdornment>,
        }}
      />
      <TextField
        id="outlined-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Employee Age"
        name="employee_age"
        //value={values.age}
        onChange={this.handleChange}
        helperText="User Name"
        InputProps={{
          endAdornment: <InputAdornment position="end">y.o</InputAdornment>,
        }}
      />
      <TextField
        id="outlined-adornment-amount"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Salary"
        name="employee_salary"
        //value={values.salary}
        onChange={this.handleChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">IDR</InputAdornment>,
        }}
      />
      <TextField
        id="outlined-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="Profile Picture"
        name="profile_image"
        //value={values.profilePict}
        onChange={this.handleChange}
        helperText="Profile Picture"
        InputProps={{
          endAdornment: <InputAdornment position="start">url</InputAdornment>,
        }}
      />
       <CardActions>
          <Button size="small" color="primary" onClick={this.handleSubmit}>
            Save
          </Button>
        </CardActions>      
      </div>

    </Container>
    
    );
  }
}

export default withStyles(styles, { withTheme: true })(InputText);