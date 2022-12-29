import React, {useState} from 'react'

function TextForm(props) {

   const handleUpClick =()=>{
       let newText = text.toUpperCase();
       text.lastIndexOf();
       setText(newText)
   }

  const handleOnChange =(event)=>{
      setText(event.target.value)
  }



  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText )
}


  const handleLastId =()=>{
    let newText3 = text.slice(0, 3);
    setText(newText3)
  }

   const handleCopy =()=>{
     var text = document.getElementById('myBox');
     text.select();
     navigator.clipboard.writeText(text.value);
   }


  const handleExtraSpaces  =()=>{ 
    let newText = text.split(/[  ]+/);   
    setText(newText.join(" "))
  }










const [text, setText] = useState('write here');

  return (
      <>
    <div className="container">
 <h1>{props.heading}</h1>     
<div class="mb-3">
  <label for="myBox" class="form-label">{props.heading}</label>
  <textarea class="form-control"value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
</div>

<button className='btn btn-success mx-1' onClick= {handleUpClick}> covert to uppercase</button>
<button className='btn btn-outline-dark mx-1' onClick= {handleLoClick}> covert to lowercase</button>

<button className='btn btn-secondary' onClick= {handleLastId}> free btn </button>

<button className='btn btn-success mx-1' onClick= {handleCopy}> click to copy </button>

<button className='btn btn-dark mx-1' onClick= {handleCopy}> click to copy </button>

<button className='btn btn-dark mx-1' onClick= {handleExtraSpaces}> Remove extra spaces  </button>


    </div>

    <div className="container">
<h2> Your text summary  </h2>
<p>{text.split(" ").length} words, {text.length} characters </p>
<p> {0.008 * text.split(" ").length}  Minutes Read </p>
<h2>Preview</h2>
<p>{text}</p>
    </div>
    </>
  )
}

export default TextForm