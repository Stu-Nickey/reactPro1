import { useState } from "react";
import st from "./ProductList.module.css";
import UpdateProduct from "./UpdateProduct";

function ProductList(props){

    let list = props.data;

    let [rowClick,setRowClick]=useState(false);
    let [rowData,setRowData]=useState();

    function funRowClick(obj){
        setRowData(obj);
        setRowClick(true);
    }

    let myStyle = {width:"100px", height:"100px"};

    return(
        <>
            <div className={st.cen}>
                <table border="1">
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>QRCode</th>
                            <th>Image</th>
                        </tr>
                        {
                            list.map((x)=>{
                                return <tr key={x.id} onClick={()=>{funRowClick(x)}}>
                                    <td>{x.id}</td>
                                    <td>{x.title}</td>
                                    <td>{x.brand}</td>
                                    <td>{x.price}</td>
                                    <td>{x.rating}</td>
                                    <td><img src={x.meta.qrCode} style={myStyle}></img></td>
                                    <td><img src={x.thumbnail} style={myStyle}></img></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                {
                    rowClick && <UpdateProduct row={rowData}/>
                }
            </div>
        </>
    )
}
export default ProductList;