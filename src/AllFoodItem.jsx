import React from 'react'
import {FoodItem} from './FoodItem'
import { useState } from 'react'

export const AllFoodItem = () => {
    const [myCategory, setMyCategory] = useState('')

    function selectCategory(category){
        setMyCategory(category)
    }
    console.log(myCategory);
    

    const categories = [
        "Breakfast",
        "Lunch",
        "Dinner",
        "All"
    ]
    const foodItem = [
        {
            name:"Biryani",
            quantity:10,
            imageUrl:"https://www.sugarspicenmore.com/wp-content/uploads/2021/08/Sindhi-Chicken-Biryani-3.jpeg",
            category:"Dinner"
        },
        {
            name:"Korma",
            quantity:5,
            imageUrl:"https://i.ndtvimg.com/i/2016-10/chicken-korma_650x400_51475662188.jpg",
            category:"Lunch"
        },
        {
            name:"Beef Nehari",
            quantity:7,
            imageUrl:"https://t4.ftcdn.net/jpg/02/28/09/25/360_F_228092508_S3dXeA7kGNg6YKicaUBCP1nYlDXcQmcj.jpg",
            category:"Lunch"
        },
        {
            name:"Muska Bun",
            quantity:5,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaVnciILo0RPNgxbZ5TzJ2kKNvzsUVO-fQGQ&s",
            category:"Breakfast"
        },
        {
            name:"Sandwich",
            quantity:7,
            imageUrl:"https://vaya.in/recipes/wp-content/uploads/2018/06/Club-sandwich.jpg",
            category:"Breakfast"
        },
        {
            name:"Haleem",
            quantity:7,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwyOTIThjBywamP_BYleKf2z-62gjEznvVQ&s",
            category:"Lunch"
        },
        {
            name:"Beef Roll",
            quantity:0,
            imageUrl:"https://i.ytimg.com/vi/5up5GnHnU04/maxresdefault.jpg",
            category:"Lunch"
        },
        {
            name:"Pizza",
            quantity:0,
            imageUrl:"https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
            category:"Lunch"
        },
        {
            name:"Seekh Kabab",
            quantity:0,
            imageUrl:"https://c.ndtvimg.com/2020-01/a39okhfk_620_625x300_21_January_20.jpg",
            category:"Dinner"
        },
        {
            name:"Malai Boti",
            quantity:4,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR--a-wg8SSwtuACNGsDlvzIdb5yf4awHvkHw&s",
            category:"Dinner"
        },
        {
            name:"Grilled Chicken",
            quantity:4,
            imageUrl:"https://www.southernliving.com/thmb/G7iX74IV4kpYq2pzQrORZyeL9P8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/27737_SupT_spinbottl_008-1c7b541f7a9f473cb064d686546231d7.jpg",
            category:"Dinner"
        },
        {
            name:"Halwa Pori",
            quantity:3,
            imageUrl:"https://www.vouch365.com/blog/wp-content/uploads/2025/03/photo-1068x561.jpg",
            category:"Breakfast"
        },
        {
            name:"Paaye",
            quantity:0,
            imageUrl:"https://i.ytimg.com/vi/cOHbzOTWoYc/hqdefault.jpg",
            category:"Breakfast"
        },
        {
            name:"Pulao",
            quantity:10,
            imageUrl:"https://palatesdesire.com/wp-content/uploads/2022/05/Indian-chicken-pulao-recipe@palates-desire-1-500x500.jpg",
            category:"Dinner"
        },
        {
            name:"Anda Paratha",
            quantity:10,
            imageUrl:"https://i.ytimg.com/vi/pbIu7LxuAQM/maxresdefault.jpg",
            category:"Breakfast"
        },
        {
            name:"Burger",
            quantity:10,
            imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR8ktWwxGRbYhlQwUVmzvnJ-iIDm5Gubnv9g&s",
            category:"Lunch"
        }
    ]
  return (
    <>
    <h2 style={{
            textAlign:"center"
        }}>Category</h2>
    <div className="category-buttons" style={{
        display:"flex",
        justifyContent:"center",
        gap:"50px"
    }}>
        {
            categories?.map((category)=> 
                <button
            onClick={()=> selectCategory(category)}>
                {category}
            </button> )
        }
    </div>

     <div className="food-container" style={{
        display:"flex",
        flexWrap:"wrap"
     }}>
        
        {
            foodItem.filter((item)=> item.category == myCategory || myCategory == "All").map
            ((item)=>( <FoodItem quantity={item.quantity} name={item.name} imageUrl={item.imageUrl}/>

            ))} 
     </div>
    </>
  )
}

