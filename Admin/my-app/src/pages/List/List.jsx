import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ url }) => {

    const [list, setList] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.post(`${url}/api/food/list`);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error('Error fetching data');
            }
        } catch (error) {
            toast.error('Failed to fetch data');
        }
    };

    const removeFood = async (foodId) => {
        const response = await axios.post(`${url}/api/food/remove`, { id: foodId })
        await fetchList();
        if (response.data.success) {
            toast.success(response.data.message)
        } else {
            toast.error("Error")
        }
    };

    useEffect(() => {
        fetchList();
    }, []); // Empty dependency array to run only once on component mount

    return (
        <div className='List add flex-col'>
            <p>All food List</p>
            <div className='list-table'>
                <div className='list-table-format title'>
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => (
                    <div key={index} className='list-table-format'>
                        <img src={`${url}/images/${item.image}`} />
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <p>{item.price}</p>
                        <p className='cursor' onClick={() => removeFood(item._id)}>X</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;
