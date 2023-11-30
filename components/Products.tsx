
import StoreFrontFunc from "@/utils/StoreFrontFunc";
import gql from "graphql-tag";
import React, { Suspense } from "react";
import ProductCard from "./ProductCard";

const query= `{
  products(first:8){
    edges{
      node{
        title
        tags
        handle
        variants(first:1){
          edges{
            node{
              compareAtPrice{
                amount
              }
              price{
                amount
              }
  
          
            }
          }
        }
        images(first:4){
          edges{
            node{
              url
            }
          }
        }
      }
      
    }
    
  }
}
 `

const NewProducts = async () => {
  const { data } = await StoreFrontFunc(query);
  // console.log(data)
  return (
    <>


    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {data.products.edges.map((item: any, index: number) => (
            <ProductCard
            key={item.node.handle}
            img={item.node.images.edges[0].node.url}
            title={item.node.title}
            desc={item.node.tags}
            rating={1}
            price={item.node.variants.edges[0].node.price.amount}
            compare={item.node.variants.edges[0].node.compareAtPrice.amount}
            handle={item.node.handle}
            
            />
            ))}
        </div>
      </div>
    </div>
          
              </>
  );
};





export default NewProducts;
