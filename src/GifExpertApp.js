import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGridApp } from './components/GifGridApp';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    /**const handleAdd = () => {
        const anime = 'Evangelion';
        //setCategories([...categories, anime]);
        setCategories(cats => [...categories, anime]);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                { 
                    categories.map( category => (
                        <GifGridApp 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;