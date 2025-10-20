import { ProductDTO } from "@/core/dto/product.dto";
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";

class ProductService extends CrudAbstract<ProductDTO> {
  API: ENDPOINTS = "/products";

  getById(id: ProductDTO["id"]): Promise<ProductDTO | null> {
    return super.read(id);
  }

  override async create(item: Omit<ProductDTO, "id">): Promise<ProductDTO> {
    return super.create(item).then((result) => {
      return result;
    });
  }
}

export default new ProductService();
