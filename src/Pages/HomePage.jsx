import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

const HomePage = () => {
    return (
        <MainLayout>

            <div className='bg-light p-5 mt-4 rounded-3'>
                <h1>Welcome to the simple POS for samll buiness</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum ipsum iure? Minus totam repellat quis deleniti, voluptatibus architecto atque dicta laboriosam fugiat quibusdam, unde harum id vitae, rerum nihil!</p>
                <Link to='/pos' className='btn btn-primary'>Click here to sell products</Link>


            </div>
        </MainLayout>
    )
}

export default HomePage