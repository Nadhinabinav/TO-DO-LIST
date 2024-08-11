//selecting popup box ,overlay,button

var popupuverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupuverlay.style .display="block"
    popupbox.style .display="block"
})

//selecting cancel popup

var cancelpopup=document.getElementById("cancel-popup")


cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupuverlay.style .display="none"
    popupbox.style .display="none"
})


//selecting container,add-book,book-title-input,book-author-input,book-description-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}</p>
            <button>Delete</button>`
            container.append(div)
            popupuverlay.style .display="none"
            popupbox.style .display="none"
})
//var deletenote=document.getElementById("deletenote")
function deletebook(event)
{
    event.target.ParentElement.remove()
}



