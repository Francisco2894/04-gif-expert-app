import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import CategoryAdd from './CategoryAdd';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    //variables
    const [categories, setCategories] = useState(['Dragón Ball']);
    // const handlerAdd = () => {
    //     setCategories(cats => [...cats,'Naruto']);
    // }

    //retorno
    return (
        <>
            <h2>Gift Expert App</h2>
            <CategoryAdd setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(category => {
                        return <GifGrid 
                            key={category}
                            category={category}
                        />
                    })
                }
            </ol>
        </>
    );
}

// GifExpertApp.propTypes = {

// }

// GifExpertApp.defaultProp = {

// }

export default GifExpertApp;