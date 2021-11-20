import React ,{ Component, Fragment} from "react";
import WelcomeMsg from "../../Components/WelcomeMsg";
import ProjectsList from "../../Components/ProjectsList";

class Homepage extends Component{
render(){
    return (
        <Fragment>
            <WelcomeMsg/>
            <div style={{backgroundColor:'rgb(238, 238, 238)'}}>

            <ProjectsList/>
            </div>
        </Fragment>
    );
}
}


export default Homepage