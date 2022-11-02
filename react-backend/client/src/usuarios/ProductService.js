export class ProductService {

    getProducts() {
        return fetch('/users').then(res => res.json()).then(d => d.data);
    }
}