let countEl = document.getElementById("count-el")
console.log(countEl)
let saveEl=document.getElementById("save-el")
let count = 0
function increment() {
    count = count + 1
    countEl.textContent = count
} 
function save() {
    let save = " " + count + " - "
    saveEl.textContent += save 
    console.log(count)
    count = 0
    countEl.textContent = 0
}