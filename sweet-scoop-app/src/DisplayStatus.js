function DisplayStatus ({type, message}){

    if (type === "success"){
        return (<div style={{color: "green"}}>{message}</div>);
    } 
    else if (type === "error"){
        return (<div style={{color: "red"}}>{message}</div>);     
    }

    return null;
}

export default DisplayStatus;