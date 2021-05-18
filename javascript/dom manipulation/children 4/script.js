let val
const list=document.querySelectorAll('.list-group')
const li=document.querySelectorAll('li')

//get child nodes
val=list[0].childNodes
val=list[0].childNodes[0]
val=list[0].childNodes[1].nodeName
val=list[0].childNodes[1].nodeType

// 1-element
// 2-attribute
// 3-text node
// 8-comment
// 9-document itself
//10 doctype



//first child
val =list[0].firstChild
val =list[0].firstElementChild

//last child
val =list[0].lastChild
val =list[0].lastElementChild

//get children of element nodes
val=list[0].children
val=list[0].children[0]


//count child element
val=list[0].childElementCount

//get parent node
val=li[0].parentNode
val=li[0].parentElement
val=li[0].parentElement.parentElement.classList.add('test')

//get next sibling
val=li[0].nextSibling
val=li[0].nextElementSibling
val=li[0].nextElementSibling.nextElementSibling


//get prev sibling

val=li[1].previousSibling
val=li[1].previousElementSibling
val=li[1].previousElementSibling.previousElementSibling



console.log(val);