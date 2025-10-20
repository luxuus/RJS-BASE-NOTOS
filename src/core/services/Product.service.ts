
import { ENDPOINTS } from "@/core/types/crud-service.type";
import { CrudAbstract } from "@/core/services/crud.abstract";
import { ProductDTO } from "../dto/product.dto";


class ProductService extends CrudAbstract<ProductDTO> {
    API: ENDPOINTS = '/products'

    // Spécialisation
    getById(id: ProductDTO['id']): Promise<ProductDTO | null>{
        return super.read(id)
    }

    override create(item: Omit<ProductDTO, "id">): Promise<ProductDTO> {

        // Spécialisation
        return super.create(item).then(result => {

            // Spécialisation
            return result
        })
    }
}