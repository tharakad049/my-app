import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import GDSEButton from "../../components/common/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userId: '',
                id: '',
                title: '',
                body: ''
            }
        }
    }

    handleSubmit(){
        console.log("ok");
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Poster Manage
                </Typography>

                <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}>


                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                    <Typography variant = "h4">Id </Typography>
                        <TextValidator id="outlined-basic" placeHolder="Id"variant="outlined" size="small"style={{width: '100%'}} 
                        validators={['required', 'isPositive']}
                        
                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                    <Typography variant = "h4">Name </Typography>
                        <TextValidator id="outlined-basic" placeHolder="Name"  variant="outlined" size="small" 
                        style={{width: '100%'}}
                        validators={['required', 'isPositive']}

                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                    <Typography variant = "h4">Title </Typography>
                        <TextValidator id="outlined-basic" placeHolder="Title"  variant="outlined" size="small"
                        style={{width: '100%'}}
                        validators={['required', 'isPositive']}

                        />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                    <Typography variant = "h4">Body </Typography>
                        <TextValidator id="outlined-basic" placeHolder="Body" variant="outlined" size="small"
                        style={{width: '100%'}}
                        validators={['required', 'isPositive']}

                        />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                        <GDSEButton size="small" variant="contained" label="save"
                        type = "submit"
                        />
                    </Grid>
                </Grid>

                </ValidatorForm>

            </Fragment>
        )
    }
}
export default withStyles(styleSheet)(Posts) 