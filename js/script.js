// Get COM FETCH - ele usa o fetch mesmo

// Com essas 5 linhas de codigo voce já consegue fazer uma requisição 

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    });

// é para tratar os erros é só adicionar um catch

// POST com FETCH
const data = {
    title: 'Algum Título',
    content: 'Algum conteudo',
    userId: 1
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data), // convertendo os dados de javascript em json 
})
.then((response) => response.json())
.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});




// AXIOS 
// GET com AXIOS - ele usa o xhr
axios.get('https://jsonplaceholder.typicode.com/todos')
.then ((response) => {
    console.log(response.data);
})
.catch ((error) => {
    console.log(error);
});

// POST com AXIOS
const data2 = {
    title: 'Algum Título',
    content: 'Algum conteudo',
    userId: 1
}

axios.post('https://jsonplaceholder.typicode.com/posts', data2)
// headers já são padronizados