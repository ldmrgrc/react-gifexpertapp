

import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import 'animate.css';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <div className='contenedor'>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </div>

        </>
    )
}
