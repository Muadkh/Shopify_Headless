import StoreFrontFunc from "@/utils/StoreFrontFunc";
import Marquee from "react-fast-marquee";
import ScroolingProd from "./ScroolingProd";

export async function RelatedProducts(){

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
            images(first:1){
              edges{
                node{
                  url
                }
              }
            }
          }
          
        }
        
      }
    }`
      const { data } = await StoreFrontFunc(query, { cache: "no-store" });
  
    
  return(
    <>
          <h2 className="mt-8 font-bold flex items-center justify-center text-[20px]">You may also like</h2>
        
          <Marquee speed={40} pauseOnHover={true}  play={true} direction={"left"}  >
    
            
         <div className="  ">
          <div className="flex gap-x-4   ">
              {data.products.edges.map((item: any, index: number) => ( <div className="flex "> 
                < ScroolingProd
                  key={item.node.handle}
                  img={item.node.images.edges[0].node.url}
                  title={item.node.title}
                  price={item.node.variants.edges[0].node.price.amount}
                  compare={item.node.variants.edges[0].node.compareAtPrice.amount}
                  handle={item.node.handle} 
                  desc={""} 
                  rating={0}            
                    ></ScroolingProd>
                </div>))}
            </div>
          </div>
       </Marquee>
               
      
    
    </>
  )
  
  
  
  
  
  
  
  }