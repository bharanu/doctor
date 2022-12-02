import React,{useEffect,useContext} from 'react'
import { RestaurantsContext} from "../context/RestaurantsContext";
import { useNavigate } from "react-router-dom";

import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from './StarRating';

const Restaurantlist = (props) => {
   const {restaurants,setRestaurants}= useContext(RestaurantsContext)
   let navigate=useNavigate();
    useEffect( () => {
        const fetchData = async() => {

        try{
          const response = await  RestaurantFinder.get("/");
          setRestaurants(response.data.data.restaurants)

        }
        catch(err){

        }
    }
        fetchData();

    },[])

    const handleDelete = async (e,id)=>
    
    {
        e.stopPropagation();
        try{
        const response = await  RestaurantFinder.delete(id);
        setRestaurants(restaurants.filter(restaurant =>{
            return restaurant.id!==id
        }))
            //console.log(response);
        }
    
    

        
        catch(err)
        {
            console.log(err)

        }
    }

    const handleUpdate  =(e,id) => {
        e.stopPropagation();

        
        
        navigate (`/restaurant/${id}/update`);
    }

    const handleRestaurantSelect = (id)=>{
        navigate(`/restaurant/${id}`)
    }

    const renderRating = (restaurant)=>{
        if(!restaurant.count)
        return <span className='text-warning'>0 reviews</span>
        return(
        <>
        <StarRating rating={restaurant.average_rating}/>
        <span className='text-warning ml-1'>({restaurant.count})</span>
        </>
        )
    }
    
  return (
    <div class="list-group">
        <table className='table table-hover table-dark'>
            <thead>
                
                <tr className='bg-primary'>
                    <th scope="col">Restaurant</th>
                    <th scope="col">Locations</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Ratings</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                { restaurants && restaurants.map((restaurant)=>{
                    return(
                    <tr onClick={()=>handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                        <td>{restaurant.name}</td>
                        <td>{restaurant.location}</td>
                        <td>{"$".repeat(restaurant.price_range)}</td>
                        <td>{renderRating(restaurant)}</td>
                        <td> <button onClick={(e)=> handleUpdate(e,restaurant.id)} className='btn btn-warning'>Update</button></td>
                        <td> <button onClick={(e)=> handleDelete(e,restaurant.id)} className='btn btn-danger'>Delete</button></td>
                    
                        
                    </tr>
                    )

                })}


               {/* <tr>
                    <td>mcdonalds</td>
                    <td>shimla</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><button className='btn btn-warning'>Updates</button></td>
                    <td><button className='btn btn-danger'>Delete</button></td>
                </tr>
                <tr>
                    <td>mcdonalds</td>
                    <td>shimla</td>
                    <td>$$</td>
                    <td>Rating</td>
                    <td><button className='btn btn-warning'>Updates</button></td>
                    <td><button className='btn btn-danger'>Delete</button></td>
  </tr>*/}

            </tbody>
        </table>

    </div>
  )
}

export default Restaurantlist