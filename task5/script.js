

text.oninput = () => {
    duplicateField.textContent = text.value;
}
document.getElementById('but').addEventListener('click', () =>{
    let data = document.getElementById('text').value;
    console.log(data);
    text.value = '';
    duplicateField.textContent = '';
})
