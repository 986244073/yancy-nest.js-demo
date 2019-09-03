// Produc 模型
export class Product {
    // 可用下面写法代替
    // id: string;
    // title: string;
    // desc: string;
    // price: number;
    // constructor(id: string, title: string, desc: string, price: number) {
    //     this.id = id;
    //     this.title = title;
    //     this.desc = desc;
    //     this.price = price;
    // }
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        public price: number,
    ) { }
}
