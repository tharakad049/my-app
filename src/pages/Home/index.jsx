import { Divider } from "@mui/material";
import { Component , Fragment  } from "react";
import Countable from "../../components/Home/Countable";
import Greeting from "../../components/Home/Greeting";

class HomePage extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <Fragment>
            <Greeting name = "GDSE"/>
            <Divider Light />
            <Countable/>
        </Fragment>
        )
    }
}

export default HomePage