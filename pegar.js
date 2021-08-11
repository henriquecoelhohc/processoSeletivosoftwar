window.onload = () => {
    const form = document.querySelector('#form');
    const table = document.querySelector('#table');

    function datta(event)  {
        event.preventDefault();
        const nome = form.nome.value;
        const codigo = form.codigo.value;
        const desc = form.desc.value;
        const precim = form.precim.value;
        const data = form.data.value;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${nome}</td>
            <td>${codigo}</td>
            <td>${desc}</td>
            <td>${precim}</td>
            <td>${data}</td>
            <button> Excluir </button>
            <button> Editar </button>
        `
        
        table.insertAdjacentElement('beforeend', tr); 
        form.reset(); 
    }

    form.addEventListener('submit', datta);

      

}
