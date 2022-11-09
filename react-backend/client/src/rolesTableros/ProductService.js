export class ProductService {
    getProducts() {
        return fetch('/tablerosroles').then(res => res.json()).then(d => d.data);
    }
}