// Create a TODO List with the following features:
// 1. Add a todo item


const addItem = () => {
    

    const list = document.getElementById("list");
    const listItem = document.createElement("LI");

    list.appendChild(listItem);

    listItem.innerHTML = document.getElementById("input").value;

    

    //remove button
    const removeBtn = document.createElement("input");

    removeBtn.classList.add("material-icons", "remove");

    removeBtn.setAttribute("type", "button");
    removeBtn.setAttribute("value", "close");
    removeBtn.setAttribute("id", "removeBtn");

    removeBtn.addEventListener("click", () => {
      listItem.parentNode.removeChild(listItem);
    }, false);

    
    
     //complete button
    const completeBtn = document.createElement("input");

    completeBtn.setAttribute("type", "button");
    completeBtn.setAttribute("value", "done");
    completeBtn.setAttribute("id", "completeBtn");

    completeBtn.classList.add("material-icons", "completeBtn");

    completeBtn.addEventListener("click", (e) => {
      listItem.classList.toggle("complete");
    })


    // button container
    const btnContainer = document.createElement("div");

    btnContainer.appendChild(completeBtn);
    btnContainer.appendChild(removeBtn);

    listItem.appendChild(btnContainer);

    
                                 
  }
  
  
  