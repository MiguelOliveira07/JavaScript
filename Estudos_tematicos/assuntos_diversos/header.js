const head = document.head
const body = document.body

// const estilo =  '<link rel="stylesheet" href="header.css">'
// head.innerHTML+=estilo

const estilotopo=
    "align-items: center;"+
    "background-color: rgb(226, 226, 226);"+
    "display: flex;"+
    "justify-content:space-between;"+
    "padding-left: 25px;"+
    "padding-right: 100px;"

const estiloimg = 
    "height:200px; "
    "width:200px;"


const topo=document.createElement('div')
topo.setAttribute('id','topo')
// topo.setAttribute('class','topo')
topo.setAttribute('style',estilotopo)

body.prepend(topo)

const logo=
"<div id='logo' class='logo'>"+
 "<img src='youtube.png' title='YouTube' style='"+estiloimg+"'/>"+
"</div>"

topo.innerHTML+=logo

const login=
    "<div id='login' class='login'"+
        "<p id='matricula'>Matrícula:<span></span></p>"+
        "<p id='nome'>Nome:<span></span></p>"
    "</div>"

topo.innerHTML+=login