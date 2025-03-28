import { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Category(){

    let [category,setCategory]=useState([]);

    let [catProducts,setCatProducts]=useState([]);
    let [flagChange,setFlagChange]=useState(false);

    async function getCategory(){
        let result = await fetch('https://dummyjson.com/products/category-list');
        let response = await result.json();
        setCategory(response);
    }
    function funChange(event){
        console.log(event.target.value);
        getCatProducts(event.target.value);
    }
    async function getCatProducts(op){
        let response = await fetch('https://dummyjson.com/products/category/'+op);
        let res = await response.json();
        console.log(res);
        setCatProducts(res.products);
        setFlagChange(true);
    }
    useEffect(()=>{
        getCategory();
    },[]);

    return(
        <>
            <h3>Category</h3>
            <div>
                select category : <select onChange={funChange}>
                    <option>Select</option>
                    {
                        category.map((x,index)=>{
                            return <option key={index}>{x}</option>
                        })
                    }
                </select>
            </div><br/>
            {
                flagChange && <ProductList data={catProducts}/>
            }
        </>
    )
}
export default Category;