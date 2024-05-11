import React from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-options'>
                <NavLink to='/add' className='sidebar-option'>
                    <img src={assets.add_icon_green} />
                    <p> Add items</p>
                </NavLink>
                <NavLink to={'/list'} className='sidebar-option'>
                    <img src={assets.bag_icon} />
                    <p> list items</p>
                </NavLink>
                <NavLink to={'/orders'} className='sidebar-option'>
                    <img src={assets.bag_icon} />
                    <p> Order</p>
                </NavLink>
            </div>

        </div>
    );
};

export default Sidebar;
