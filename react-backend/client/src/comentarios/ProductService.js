export class ProductService {
    getProducts() {
        return fetch('/comentarios').then(res => res.json()).then(d => d.data);
    }
    updateProducts(data={}){
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data.product) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
          }
          
          postData('/comentarios/edit/', data)
            .then((data) => {
              console.log(data); // JSON data parsed by `data.json()` call
            });
    }
    deleteProducts(data={}){
        async function postData(url = '', data = {}) {
            console.log(data.product);
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data.product) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
          }
          
          postData('/comentarios/delete/', data)
            .then((data) => {
              console.log(data); // JSON data parsed by `data.json()` call
            });
    }
    getTablerosRoles(data={}){
      async function postData(url = '', data = {}) {
          console.log(data);
          // Default options are marked with *
          const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
          });
          return response.json(); // parses JSON response into native JavaScript objects
        }
        
        let test = postData('/comentarios/gettablerosroles/', data)
          .then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
          });
          return test;
  }
    insertProduct(data={}){
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data.product) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
          }
          
          postData('/comentarios/insert/', data)
            .then((data) => {
              console.log(data); // JSON data parsed by `data.json()` call
            });
    }
}