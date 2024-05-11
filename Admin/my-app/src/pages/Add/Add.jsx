import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = ({ url }) => {

    const [image, setimage] = useState(false)
    const [data, setData] = useState({
        name: "",
        description: "",
        price: "",
        category: "coffe"
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(data => ({ ...data, [name]: value }))
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("description", data.description)
        formData.append("price", Number(data.price))
        formData.append("category", data.category)
        formData.append("image", image)
        const response = await axios.post(`${url}/api/food/add`, formData)
        if (response.data.success) {
            setData({
                name: "",
                description: "",
                price: "",
                category: "coffe"
            })
            setimage(false)
            toast.success(response.data.message)
        }
        else {
            toast.error(response.data.message)
        }

    }

    return (
        <div className='add'>
            <form className='flex-col' onSubmit={onSubmitHandler}>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area_png} />
                    </label>
                    <input type='file' onChange={(e) => setimage(e.target.files[0])} id='image' hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>product name</p>
                    <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='Type here' />

                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea name='description' onChange={onChangeHandler} value={data.description} rows="6" placeholder='Write content here' />
                </div>
                <div className='add-category-price'>
                    <div className='add-category-price'>
                        <p> product category</p>
                        <select className='add-category flex-col' onChange={onChangeHandler}>

                            <option value="coffee">Coffee</option>
                            <option value="tea">Tea</option>
                            <option value="juice">Juice</option>
                            {/* Add more options as needed */}
                        </select>
                    </div>

                    <div className='add-price flex-col'>
                        <p>Product price</p>
                        <input type='Number' onChange={onChangeHandler} value={data.price} name='price' placeholder='20' />
                    </div> </div>
                <button type='submit' className='add-b'>Add Product</button>

            </form>

        </div>
    );
};

export default Add;
