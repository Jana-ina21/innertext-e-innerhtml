const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const listaOrdenada = document.getElementById('lista-ordenada');

titulo.innerText = "Manipulando o DOM com JavaScript";

listaNaoOrdenada.innerHTML = `
    <li>Item 1 da lista não ordenada</li>
    <li>Item 2 da lista não ordenada</li>
    <li>Item 3 da lista não ordenada</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com.br" target="_blank">Google</a></li>
    <li><a href="https://www.youtube.com.br" target="_blank">YouTube</a></li>
    <li><a href="https://www.wikipedia.org.br" target="_blank">Wikipedia</a></li>
`;