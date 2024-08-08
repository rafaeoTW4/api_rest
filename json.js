console.log('antes do fetch')

// //Sem arrow function

// fetch('https://jsonplaceholder.typicode.com/users', console.log('executando do fetch'))
//       .then(function(response) {
//         console.log('pegando o response', response)
//         return response.json();
//       })
//       .then(function(json) {
//         console.log('pegando o json', json)
//         //return console.log(json);
//       })

//      //Com arrow function


      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


      console.log('finalizando o fetch')