import React, {Fragment, useState }  from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

 const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {

    //     if (!categories.includes('HunterXHunter')){
    //         //setCategories( ['HunterXHunter' ,...categories]); //esta forma es la mas simple y funciona
    //         setCategories(  categ =>  [...categ, 'HunterXHunter']); //esta forma tmb es válida
    //     }        
    // }
 
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>
            
            
            <ol>
                { 
                    categories.map( category => (
                         
                        <GifGrid 
                        key={category}
                        category={category}
                        /> 
                    ))
                }                
            </ol>        
        </Fragment>
    );
};

export default GifExpertApp;