export class ProductService {
    getProducts() {
        return fetch('/roles').then(res => res.json()).then(d => d.data);
    }
}