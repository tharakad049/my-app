import React, { Component } from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../components/common/Button"
import GDSESnackBar from "../../components/common/SnackBar";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "admin",
            password : "admin",
            formData:{
                user_name: "",
                password: "",
            },
            open: false,
            message: '',
            severity: ''
        }
    }
    checkValidity(){
        console.log(this.state.formData)
        let formData = this.state.formData
        if(formData.user_name === this.state.userName && formData.password === this.state.password){
            console.log("success")
            this.setState({
                open: true,
                message: 'User credential matching sucess!',
                severity: 'success'
            })
        }else{
           console.log("error") 
           this.setState({
            open: true,
            message: 'User credential not matching!',
            severity: 'error'
        })
      }
    }

    render(){
        const {classes } = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.login_cover}>
                <div className={classes.title_container}>
                    <Typography variant = "h4">Login </Typography>
                </div>
                <div className={classes.from_container}>
                <TextField id="outlined-basic" label="User Name"  variant="outlined" 
                onChange={(e) => {
                    let formData = this.state.formData
                    formData.user_name = e.target.value
                    this.setState({formData})
                }}/>
                <TextField id="outlined-password-input" label="Password" type="password"autoComplete="current-password" 
                onChange={(e) => {
                    let formData = this.state.formData
                    formData.password = e.target.value
                    this.setState({formData})
                }}
                />
                </div>
                <div className={classes.btn_container}>
                    <GDSEButton 
                    variant="contained" 
                    label="Login" 
                    onClick={() => {
                        console.log("Hello")
                        this.checkValidity();
                    }}
                    />
                </div>
                </div>
                <GDSESnackBar
                    open={this.state.open}
                    onClose={() => {
                        this.setState({ open: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />
            </div>
        )
    }

}

export default withStyles(styleSheet)(Login)