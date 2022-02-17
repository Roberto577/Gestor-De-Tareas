const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const deleteAllBtn = document.querySelector('.btnAll-delete');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');


deleteAllBtn.style.display = "none";



addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    
    const text = input.value;

    //Si el valor del input no esta vacio, ejecutamos
        if(text !== ""){
            const li = document.createElement('li');
            const p = document.createElement('p');
            p.textContent = text;

            li.appendChild(p);
            //Se agrega el boton al li con su funcion
            li.appendChild(addDeleteBtn());
            ul.appendChild(li);

            deleteAllBtn.style.display = "block";

            input.value = "";
            
            empty.style.display = "none";
        } 
});

function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e)=>{
        //Al darle click elimina todo el elemento no solo el boton
        const item = e.target.parentElement;
        ul.removeChild(item);

        //Si no hay mas elementos en la lista devolvemos el mensaje de empty
        const items = document.querySelectorAll('li');
        if(items.length === 0){
            empty.style.display = "block";
            deleteAllBtn.style.display = "none";
        }
    });
    //retornamos el boton
    return deleteBtn;
}

deleteAllBtn.addEventListener('click', (e)=>{
    ul.innerHTML = "";

    const items = document.querySelectorAll('li');
        if(items.length === 0){
            deleteAllBtn.style.display = "none";
            empty.style.display = "block";
        }
});