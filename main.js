document.addEventListener('DOMContentLoaded',function(){
  
    document.querySelector("#submit").disabled=true;

    document.querySelector("input").onkeyup=()=>{
      document.querySelector("#submit").disabled=false;
    }

    document.querySelector("#submit").onclick=()=>{
      const item=document.getElementById("input").value;
      
      let label=document.createElement("label")
      let labeltext=document.createElement("span")
      let checkbox=document.createElement("input")
      let listitem=document.createElement("li")
      let deletbtn=document.createElement("button")
    

      deletbtn.innerText="x"
      
      checkbox.type="checkbox"
      labeltext.innerHTML=item
      label.appendChild(checkbox)
      label.appendChild(labeltext)
      listitem.appendChild(label)
      listitem.appendChild(deletbtn)
      document.querySelector("#list").append(listitem)
      document.querySelector("#input").value=""
      document.querySelector("#submit").disabled=true;
      
      deletbtn.onclick=()=>{
        deletbtn.parentElement.remove()
      }
      checkbox.onclick=()=>{
        if (checkbox.checked){
          labeltext.style.textDecoration="line-through"
        }else{
          
          labeltext.style.textDecoration=""
        }
      }
      
    }
    })
