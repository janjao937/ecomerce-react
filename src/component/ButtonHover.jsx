import "../UiStyles/ButtonHover.scss";

    const ButtonHover =({ height="60px",type="button",color="white",background="sandybrown",text="",onClick})=>{
        return(
        <div>
        <button type={type} style={{background:background,color:color,height:height}} className="button" onClick={onClick}><span>{text}</span> </button>
        </div>
    );

    }




export default ButtonHover;