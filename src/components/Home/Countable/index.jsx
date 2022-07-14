import { Typography} from "@mui/material";
import Button from '@mui/material/Button';
import React, { Component } from "react";
import GDSEButton from "../../common/Button";

class Countable extends Component{
    constructor (props){
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount(){
        this.setState({
            count: this.state.count -1
        })
    }

    resetCount(){
        this.setState({
            count: this.state.count = 0
        })
    }

    render(){
        return(
            <div>
                <Typography  variant="h4" gutterBottom > Count : {this.state.count} </Typography>
                {/* <Button variant="contained" onClick={() =>{ this.incrementCount()}} >Increase</Button>
                <Button variant="contained" onClick={() =>{ this.decrementCount()}} style={
                    {
                        marginLeft: "20px"
                    }
                }>Decrease</Button>

                <Button variant="contained" color="" onClick={() =>{ this.resetCount()}} style = {
                    {
                        marginLeft: "20px"
                    }
                }
                >Reset</Button> */}


                <GDSEButton 
                    label="Increase!"
                    variant="contained"
                    onClick={() => {
                        console.log('Increase button clicked!')
                        this.incrementCount()

                    }}
                />
                <GDSEButton 
                    label="Decrease!"
                    variant="outlined"
                    onClick={() => {
                        console.log('Decrease button clicked!')
                        this.decrementCount()

                    }}
                    style={{marginLeft: '15px'}}
                />
                <GDSEButton 
                    label="Reset!"
                    variant="outlined"
                    color="error"
                    // disabled={true}
                    onClick={() => {
                        console.log('Reset button clicked!')
                        this.resetCount()

                    }}
                    style={{marginLeft: '15px'}}
                />
            </div>
        )
    }
}
 
export default Countable 