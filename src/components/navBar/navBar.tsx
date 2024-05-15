import './navBar.css';
import React from 'react';

export default function NavBar({ active, setActive, setCategory }) {
    const menuList = [
        { id: 1, name: 'General', value: 'general' },
        { id: 2, name: 'Business', value: 'business' },
        { id: 3, name: 'Technology', value: 'technology' },
        { id: 4, name: 'Entertainment', value: 'entertainment' },
        { id: 5, name: 'Health', value: 'health' },
        { id: 6, name: 'Sports', value: 'sports' },
        { id: 7, name: 'Science', value: 'science' }
    ];

    function onClick(id, value) {
        setActive(id);
        setCategory(value)
    }


    return (
        <ul className="navListStyle">
            {menuList.map(category => (
                <li
                    key={category.id}
                    className={active === category.id ? 'activeCategory' : 'inactiveCategory'}
                    onClick={() => onClick(category.id, category.value)}
                >{category.name}</li>
            ))}
        </ul>
    )
}