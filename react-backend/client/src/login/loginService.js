export class LogintService {
    async getUser(data={}) {
        let tokenAD = "";
        let respuesta = {};
        async function adValidation(){
          let url = "/auth/adAuth";
          let data = {
            "usuario": "20333447658",
            "password": "Troquel1"
            };
            let options = {
              method: 'POST',
              mode:'cors',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
              },
              body: JSON.stringify(data)
            };

            try {
              /*await fetch(url, options).then(res => res.json()).then((json) => {
                tokenAD = json.token;
                console.log(tokenAD);
              });*/
              const response = await fetch(url, options);
              const data = await response.json();
              console.log({ data })
            }
            catch (e) {
              console.log(e)
            }
          
        }
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              cache: 'reload', // *default, no-cache, reload, force-cache, only-if-cached
              credentials: 'same-origin', // include, *same-origin, omit
              headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: 'follow', // manual, *follow, error
              referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(data.row) // body data type must match "Content-Type" header
            });
            respuesta = response.json(); // parses JSON response into native JavaScript objects
          }
          
          adValidation(data);
          //adValidation(data).then(postData('/auth/', data));
          //let test = postData('/auth/', data); // JSON data parsed by `data.json()` call
          return respuesta;
    }
}