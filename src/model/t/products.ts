export class Product {
    constructor(
        public id: number|string,
        private name: string,
        private price: number) {
    }
}

export const products: Product[] = [
    new Product(1, 'P1', 12.5),
    new Product(2, 'P2', 22.5),
    new Product(3, 'P3', 32.5),
    new Product(4, 'P4', 42.5),
    new Product(5, 'P5', 52.5),
    new Product(6, 'P6', 62.5),
    new Product(7, 'P7', 72.5),
    new Product(8, 'P8', 82.5),
    new Product(9, 'P9', 92.5),
    new Product(10, 'xxxxx', 109.5),
]