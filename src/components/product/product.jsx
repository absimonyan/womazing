
import React from 'react';
import "./product.scss";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const Product = ({item}) => {
    return (
        <div className='product'>
            <div className="image_part">
            <img src={item.image} alt=""/>
            <div className="product__overlay"><a href=""><ArrowForwardOutlinedIcon/></a></div>
            </div>
           
            <span>{item.title}</span>
            <p>${item.price}</p>
        </div>
    );
}

export default Product;