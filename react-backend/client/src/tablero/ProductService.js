export class ProductService {

    getProductsSmall() {
        return fetch('/tablero').then(res => res.json()).then(d => d.data);
    }
}