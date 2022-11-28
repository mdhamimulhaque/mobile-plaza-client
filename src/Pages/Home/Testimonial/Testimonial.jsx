import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Loading from '../../Shared/components/Loading/Loading';
import TestimonialDetails from './TestimonialDetails';


const Testimonial = () => {

  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(`https://mobile-plaza-server.vercel.app/reviews`)
      const data = await res.json()
      return data
    }
  })

  if (isLoading) {
    return <Loading />
  }


  return (
    <div className="relative mx-auto py-6 px-4 w-full bg-gray-50 text-gray-800 mb-12">
      <div className="flex flex-col items-center">

        <div className="mb-8 mx-auto max-w-3xl flex items-center text-center">
          <span className="mr-3 w-10 sm:w-20 h-0.5 bg-gray-500" />
          <h2 className="text-xl sm:text-3xl md:text-4xl text-gray-400 font-semibold uppercase">Client testimonials</h2>
          <span className="ml-3 w-10 sm:w-20 h-0.5 bg-gray-500" />
        </div>

        <div className="mx-auto w-full">
          <ul className="grid grid-cols-3 gap-x-4">

            {
              reviews.map(review =>
                <TestimonialDetails key={review._id} review={review} />)
            }
          </ul>
        </div>


      </div>
    </div>
  )
}

export default Testimonial;
