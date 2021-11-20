import './Project.css'
const Project = (props) => {
    return (
        <div className='project' style={{display:'flex',marginBottom:'56px'}}>
            <a style={{marginLeft:'24px'}} href={props.project.link} title={props.project.title}>
                <img className='projectImage' style={{width:'270px'}} src={props.project.img} alt={props.project.title} />
            </a>
            <div>
                <a className='projectName' href={props.project.link} title={props.project.title}>
                    <h2>{props.project.title}</h2>
                </a>
                <p className='projectDescription'>
                    {props.project.description}
                </p>
                <p className='projectDescription'>
                    {props.project.description2}
                </p>
                <p className='projectDescription'>
                    {props.project.description3}
                </p>
                <div className='actionContainer'>
                    {props.project.buttons.map((button, index) => {
                        return (<a className='button' key={index} href={button.link} title={button.text}>{button.text}</a>)
                    })}
                </div>
            </div>
        </div>




    );
}
export default Project;