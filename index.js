// docuent.gmetElementById("count-el").innerText=5
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")
let count =0
function incerment(){
  count=count+1
  countEl.innerText=count
}
function save(){
  saveEl.textContent+=count+" - "
  countEl.textContent=0
  count=0
  //textContent property of the Node interface reprsents the text content of the node
  //and its descendants

}
