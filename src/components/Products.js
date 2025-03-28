import st from "./Products.module.css";
import { useEffect, useState } from "react";

function Products(){
    let arr = [];
    let [list,setList]=useState([]);

    async function getAllProducts(l1,s1){
        let lm = l1;
        let sp = s1;
        let output = await fetch('https://dummyjson.com/products?limit='+lm+'&skip='+sp+'&select=id,title,price,thumbnail');
        let response = await output.json();
        arr = response.products;
        setList(arr);
    }

    function funLi(event){
        event.preventDefault();
        console.log(event.target.textContent);
        if(event.target.textContent == 1){
            getAllProducts(10,0);
        }
        else if(event.target.textContent == 2){
            getAllProducts(10,10);
        }
        else if(event.target.textContent == 3){
            getAllProducts(10,20);
        }
    }
    useEffect(()=>{
        getAllProducts(10,0);
    },[]);
  

    let myStyle = {width:"100px", height:"100px"};
    
    return(
        <>
            <div className={st.cen}>
            <ul onClick={funLi}>
                    <li><a>1</a></li>
                    <li><a>2</a></li>
                    <li><a>3</a></li>
                </ul>
                <table border="1" className={st.bgc}>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Images</th>
                        </tr>
                        {
                            list.map((x) => {
                                return <tr key={x.id}>
                                    <td>{x.id}</td>
                                    <td>{x.title}</td>
                                    <td>{x.price}</td>
                                    <td><img src={x.thumbnail} alt="img" style={myStyle} /></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Products;