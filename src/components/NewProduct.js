import { useRef } from "react";

function NewProduct(){

    let txtName = useRef();
    let txtPrice = useRef();

    async function funInsert(event){
        let name = txtName.current.value;
        let price = txtPrice.current.value;
        console.log(name,price);
 
        let obj = {
            title : name,
            price : price,
            rating : 4
        }
        let response = await fetch('https://dummyjson.com/products/add',{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(obj)
        });
        let result = await response.json();
        console.log(result);
    }
    
    return(
        <>
            <h2>Add New Product</h2>
            <div>
                <form>
                    <div>
                        Name : <input type="text" ref={txtName}/>
                    </div>
                    <div>
                        Price : <input type="text" ref={txtPrice}/>
                    </div>
                    <div>
                        <input type="button" value="Insert" onClick={funInsert}/>
                    </div>
                </form>
            </div>
        </>
    )
}
export default NewProduct;