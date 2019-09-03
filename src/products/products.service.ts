import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.module';
// product 服务
@Injectable()
export class ProductsService {
    // 模拟 product 数据库
    private products: Product[] = [];
    // 添加 product
    insertProduct(title: string, desc: string, price: number): string {
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }
    // 获取 products 列表
    getProducts() {
        return [...this.products];
    }
    // 获取一个 product
    getProduct(productId: string) {
        const product = this.findProductById(productId)[0];
        return { ...product };
    }
    // 更新 product
    updateProduct(productId: string, title: string, desc: string, price: number) {
        const [product, index] = this.findProductById(productId);
        const undatedProduct = { ...product };
        if (title) {
            undatedProduct.title = title;
        }
        if (desc) {
            undatedProduct.desc = desc;
        }
        if (price) {
            undatedProduct.price = price;
        }
        this.products[index] = undatedProduct;
    }
    // 删除一个 product
    deleteProduct(prodId: string) {
        const index = this.findProductById(prodId)[1];
        this.products.splice(index, 1);
    }
    // 根据Id查询 product 返回 [Product, number] 对象
    private findProductById(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('未找到id');
        }
        return [product, productIndex];
    }

}
