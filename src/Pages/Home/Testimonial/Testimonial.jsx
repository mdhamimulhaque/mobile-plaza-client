import React from 'react'
import TestimonialDetails from './TestimonialDetails';


const Testimonial = () => {
  const reviewsCollection = [
    {
      reviewText: "A well recommended seller Phone",
      name: 'Adnan',
      img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    {
      reviewText: "The products is very good. highly recommended",
      name: 'Sara',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    {
      reviewText: "The product is very good",
      name: 'Nihal',
      img: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    }
  ]

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
              reviewsCollection.map(review =>
                <TestimonialDetails review={review} />)
            }
          </ul>
        </div>


      </div>
    </div>
  )
}

export default Testimonial;
