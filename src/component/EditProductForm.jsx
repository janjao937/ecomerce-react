const EditProductForms = ({OnCloseEditHandler,inputForm,setInputForm,file,setFile})=>{


    return(
        <form className="form-container">
        <div className="inputForm">
          <h2>name</h2>
          <input value={inputForm.name} onChange={(e)=>setInputForm({...inputForm,name:e.target.value})} type="text" />
        </div>
        <div className="inputForm">
          <h2>title</h2>
          <textarea value={inputForm.title} onChange={(e)=>setInputForm({...inputForm,title:e.target.value})}/>
        </div>
        <div className="inputForm">
          <h2>price</h2>
          <input value={inputForm.price} onChange={(e)=>setInputForm({...inputForm,price:e.target.value})} type="text" />
        </div>
        <div className="inputForm">
          <h2>amount</h2>
          <input value={inputForm.amount} onChange={(e)=>setInputForm({...inputForm,amount:e.target.value})} type="text" />
        </div>
        <div className="inputForm">
          {
              file?(<img src={URL.createObjectURL(file)} alt={URL.createObjectURL(file)} /> ):(
              <input type="file" onChange={(e)=>{
                  if(e.target.files[0]){
                      setFile(e.target.files[0]);
                  }
              }} />)
          }
      
        </div>

        <div className="buttonForm-container">
        {/* onClick={} */}
          <button  type="submit">save</button>
          <button onClick={OnCloseEditHandler} type="button">cancle</button>
        </div>
      </form>
    )
}


export default EditProductForms;