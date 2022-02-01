import { useState } from "react";
import AddCategory from "./componentes/AddCategory";
import { GifGrid } from "./componentes/GifGrid";

const GifExpertApp = ()=>{

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = ()=>{
    //     setCategories([...categories, 'Naruto']);
    // };

    return(
      <>
        <h2>GifExpertApp</h2>
        <hr/>

        <AddCategory setCategories={ setCategories } />
       <ol>
            {
                categories.map(category=>(
                    <GifGrid 
                        key={category}    
                        category={category} />
                    ))
            }
       </ol>
      </>
    );
  }
  
  export default GifExpertApp;