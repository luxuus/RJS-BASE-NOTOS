/* Global Imports */
import { FC, useEffect, useState } from "react";

/* Application Level Imports */
import * as UI from "@/components";
import * as Features from "@/containers";
import * as Hooks from "@/hooks";

/* Local Imports */
import "./Products.style.css";
import productService from "@/core/services/product.service";
import { ProductDTO } from "@/core/dto/product.dto";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
  Hooks.useDocumentTitle("Products View");

  const [products, setProducts] = useState<ProductDTO[]>([]);
  useEffect(() => {
    productService.read().then((data) => setProducts(data));
  }, []);

  return (
    <div className="Products" data-testid="Products">
      <UI.Main>
        Products Content
        <hr />
        <pre>{JSON.stringify(products, null, 4)}</pre>
      </UI.Main>
    </div>
  );
};

export default Products;
