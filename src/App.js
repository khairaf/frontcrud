import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import UsersContainer from './components/UsersContainer'

function App () {
  return (
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  )
}

export default App








// import React, { Component } from 'react';
// import Post from './Post';
// import clsx from 'clsx'
// import InputAdornment from '@material-ui/core/InputAdornment';
// import TextField from '@material-ui/core/TextField';
// import Container from '@material-ui/core/Container';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import { withStyles } from "@material-ui/core/styles";
// import axios from 'axios';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   textField: {
//     flexBasis: 200,
//   },
// });


// class App extends Component {
//   state = {
//     data: [],
//     formData: {
//       name: '',
//       age: '',
//       salary: '',
//     },
//     isUpdate: false,
   
//   }

//   getAPI = () => {
//     fetch("http://dummy.restapiexample.com/api/v1/employees")
//     .then((res) => res.json())
//     .then(data => {
//       this.setState({
//         data
//       })
//       console.log(this.state.data)
//     })
//   }

//   componentDidMount(){
//     this.getAPI();
//   }

//   handleChange = e => {
//     let newFormData = {...this.state.formData};
//     newFormData[e.target.name] = e.target.value;
    
//     this.setState({
//       formData: newFormData
//     }, 
//     //() => console.log("value form:", this.state.formData)
//     )
    
//   }

//   handleSubmit = () => {
//     //this.postToAPI()
    
//     console.log("data", this.state.formData) 
//     const ID = this.state.id;
//     this.state.isUpdate ? 
//     axios.put(`http://dummy.restapiexample.com/api/v1/update/${ID}`, this.state.formData)
//      .then(res => { 
//       console.log(res)
//       this.getAPI();
//       this.setState({
//         formData:{
//             name: '',
//             age: '',
//             salary: '',
//         },
//         isUpdate: false,
        
//       }, () => console.log(this.state))
      
//     })
//      :
//     //console.log(this.state.formData)
//     axios.post('http://dummy.restapiexample.com/api/v1/create', this.state.formData)
//     .then(response => {
//       console.log(response);
//       this.getAPI();
//     })
//     .catch(function (error) {
//       console.log("errornya", error);
//     });
//   }

//   handleUpdate = (data) => {
    
//     console.log(data)
//     const employee = {
//             name: data.employee_name,
//             age: data.employee_age,
//             salary: data.employee_salary,
//         }
//     this.setState({
//       formData: employee, 
//       isUpdate: true,
//       id: data.id,
//     }, () => console.log("setelah", this.state.formData))
    
//   }

//   handleRemove = (data) => {
//     console.log(data)
//     const options = {
//       method: 'DELETE',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     };

//     fetch(`http://dummy.restapiexample.com/api/v1/delete/${data}`, options)
//       .then(res => res.json())
//       .then(res => this.getAPI());
//   }

//   render() {
//     const { classes } = this.props;
//     const { name, age, salary } = this.state.formData;
//     //console.log("test: ", name, age, salary)
//     return (
//       <div>
//         <h1>Input Data Employee :</h1>
//         <Container maxWidth="sm">
//         <div className={classes.root}>
          
//       <TextField
//         id="outlined-adornment-weight"
//         className={clsx(classes.margin, classes.textField)}
//         variant="outlined"
//         label="User Name"
//         name="name"
//         value={name}
//         onChange={this.handleChange}
//         helperText="User Name"
//         InputProps={{
//           endAdornment: <InputAdornment position="start">Name</InputAdornment>,
//         }}
//       />
//       <TextField
//         id="outlined-adornment-weight"
//         className={clsx(classes.margin, classes.textField)}
//         variant="outlined"
//         label="Employee Age"
//         name="age"
//         value={age}
//         onChange={this.handleChange}
//         helperText="User Name"
//         InputProps={{
//           endAdornment: <InputAdornment position="end">y.o</InputAdornment>,
//         }}
//       />
//       <TextField
//         id="outlined-adornment-amount"
//         className={clsx(classes.margin, classes.textField)}
//         variant="outlined"
//         label="Salary"
//         name="salary"
//         value={salary}
//         onChange={this.handleChange}
//         InputProps={{
//           startAdornment: <InputAdornment position="start">IDR</InputAdornment>,
//         }}
//       />
     
//        <CardActions>
//           <Button size="small" color="primary" onClick={this.handleSubmit}>
//             Save
//           </Button>
//         </CardActions>      
//       </div>

//     </Container>
//         <h1>List Data Employee :</h1>
//         {
//           this.state.data.map((detail , index) => {
//             return <Post 
//                       key={detail.id}
//                       detail={detail}
//                       nomer={index+1} 
//                       name={detail.employee_name} 
//                       salary={detail.employee_salary} 
//                       age={detail.employee_age}
//                       profile={detail.profile_image}
//                       id={detail.id}
//                       remove={this.handleRemove}
//                       update={this.handleUpdate}
//                     />
//           })
//         }
//       </div>
//     );
//   }

  
// }


// export default withStyles(styles, { withTheme: true })(App);



// // {
// // id: "110466",
// // employee_name: "km-test-3",
// // employee_salary: "123",
// // employee_age: "222",
// // profile_image: ""
// // },