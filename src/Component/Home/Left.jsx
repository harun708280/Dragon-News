import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Left = () => {
    const [categorys,setCategorys]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await fetch(`https://openapi.programming-hero.com/api/news/categories`)
            const data= await response.json()
            setCategorys(data.data. news_category)
        }
        fetchData()

    },[])
    console.log(categorys,'jsdhdgd');
    
    return (
        <div>
            
            <div className="flex flex-col gap-4">
                {
                    categorys.map(category=>
                        <NavLink to={`/category/${category.category_id}`} className={({isActive})=>`btn ${isActive?'bg-gray-300':''}`}>{category.category_name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Left;