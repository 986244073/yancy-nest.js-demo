import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
// product 控制器
@Controller('products')
export class ProductsController {
    // 创建 product 服务
    constructor(private productService: ProductsService) { }
    // 增加 product
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('desc') prodDesc: string,
        @Body('price') prodPrice: number,
    ): any {
        const generatedId = this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { id: generatedId };
    }
    // 获取 products 列表
    @Get()
    getAllProduct() {
        return this.productService.getProducts();
    }
    // 获取一个 product
    @Get(':id')
    getProduct(@Param('id') proId: string) {
        return this.productService.getProduct(proId);
    }
    // 修改一个 product
    @Patch(':id')
    updateProduct(
        @Param('id') proId: string,
        @Body('title') prodTitle: string,
        @Body('desc') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        this.productService.updateProduct(proId, prodTitle, prodDesc, prodPrice);
        return null;
    }
    // 删除一个 product
    @Delete(':id')
    deleteProduct(@Param('id') prodId: string) {
        this.productService.deleteProduct(prodId);
        return null;
    }
}
