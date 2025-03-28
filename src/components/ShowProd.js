import st from "./ShowProd.module.css";
import { useState } from "react";

function ShowProd(){
    let arr = [];
    let [list,setList]=useState([]);

    async function getAllProducts(){
        let output = await fetch('https://dummyjson.com/products?select=id,title,price,thumbnail');
        let response = await output.json();
        arr = response.products;
        setList(arr);
    }
    getAllProducts();

    let myStyle = {width:"100px", height:"100px"};
    return(
        <>
            <div className={st.cen}>
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
export default ShowProd;