export class ProductService {

    getProducts() {
        return fetch('/tablero').then(res => res.json()).then(d => d.data);
    }
}