import { Component } from "react";
import Project from "./Project";
import {PROJECTS} from "./StaticProjects"




class ProjectsList extends Component{
    renderProjects = ()=>{

        return (
            PROJECTS.map((project,index)=>{
                return <Project key={index} project={project} />
            })
            
        );

    }
    render(){
        return (
            <div style={{maxWidth:'1140px',margin:'0 auto',padding:'64px 0'}}>
                {this.renderProjects()}
            </div>
        );
    }
}


export default ProjectsList;