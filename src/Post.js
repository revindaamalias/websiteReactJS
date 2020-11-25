import React from "react";

const Post = (props) => { 
    return ( 
        <tr>
            <td className="isi-product">{props.nama}</td>
            <td className="isi-product">{props.harga}</td>
            <td className="isi-product">{props.stok}</td>
            <button className="btn btn-sm btn-warning" onClick={() => { 
                if (window.confirm('Are you sure to delete this product?')) 
                props.hapusProduk(props.id)}}> 
                Delete</button> 
        </tr>
    ) 
} 

export default Post;