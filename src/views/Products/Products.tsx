/* Global Imports */
import  { FC, useEffect, useState } from 'react';

/* Application Level Imports */
import * as UI from '@/components';
import * as Features from '@/containers';
import * as Hooks from '@/hooks';

/* Local Imports */
import './Products.style.css';
import { ProductDTO } from '@/core/dto/product.dto';
import ProductService from '@/core/services/Product.service';


interface ProductsProps {}

const Products: FC<ProductsProps> = () => {

   Hooks.useDocumentTitle('Products View');

   const [products, setProducts] = useState<ProductDTO[]>([])

   useEffect(()=>{
      ProductService.read().then( data => setProducts(data))
   },[])

   return (
   <div className="Products" data-testid="Products">
      <UI.Main>
         Products Content
         <hr />

            {JSON.stringify(products)}

      </UI.Main>
   </div>
   )
};

export default Products;
