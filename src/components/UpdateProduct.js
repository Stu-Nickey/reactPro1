import { useEffect, useState } from "react";

function UpdateProduct(props){

    let [txtId,setId]=useState();
    let [txtTitle,setTitle]=useState();
    let [txtPrice,setPrice]=useState();
    let [txtBrand,setBrand]=useState();
    let [txtRating,setRating]=useState();

    function idChange(event){
        setId(event.currentTarget.value);
    }
    function titleChange(event){
        setTitle(event.currentTarget.value);
    }
    function priceChange(event){
        setPrice(event.currentTarget.value);
    }
    function brandChange(event){
        setBrand(event.currentTarget.value);
    }
    function ratingChange(event){
        event.preventDefault();
        setRating(event.currentTarget.value);
        console.log(txtRating);
    }
    async function funUpdate(event){
        event.preventDefault();
        console.log(txtRating);
        let id = txtId;
        let obj = {
            title : txtTitle,
            price : txtPrice,
            brand : txtBrand,
            rating : txtRating
        }
        console.log(obj);
        let response = await fetch("https://dummyjson.com/products/"+id,{
            method : 'PUT',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(obj)
        });
        let result = await response.json();
        console.log(result);
    }
    async function funDelte(event){
        event.preventDefault();
        console.log(txtRating);
        let id = txtId;
        let response = await fetch("https://dummyjson.com/products/"+id,{
            method : 'DELETE'
        });
        let res = await response.json();
        console.log(res.id+"Record Deleted!!");
    }
    useEffect(()=>{
        let rowData = props.row;
        setId(rowData.id);
        setTitle(rowData.title);
        setPrice(rowData.price);
        setBrand(rowData.brand);
        setRating(rowData.rating);
    },[props]);

    return(
        <>
            <h2>Update Form</h2>
            <form>
                Id : <input type="text" onChange={idChange} value={txtId} readOnly/><br/>
                Title : <input type="text" onChange={titleChange} value={txtTitle}/><br/>
                Price : <input type="text" onChange={priceChange} value={txtPrice}/><br/>
                Brand : <input type="text" onChange={brandChange} value={txtBrand}/><br/>
                Rating : <input type="text" onChange={ratingChange} value={txtRating}/><br/>
                <input type="button" value="UpdateRecord" onClick={funUpdate}/>
                <input type="button" value="DeleteRecord" onClick={funDelte}/>
            </form>
            <br/>
        </>
    )
}
export default UpdateProduct;