import React from 'react'


function ReviewCard({reviews}) {
    console.log(reviews)
  return (
    <div className="card glass bg-review bg-center bg-cover  object-cover mx-2 cursor-pointer">
    <div className="card-body backdrop-filter backdrop-blur-sm flex flex-col h-[350px]">
      <p className='bg-white/30 py-2 pl-2 flex-1'>
        {reviews.review}
      </p>
      <div >
      <h2 className="text-2xl font-semibold">{reviews.name}</h2>
      <p className=''>{reviews.date}</p>
      <p className=''>{reviews.location}</p>
      </div>
    </div>
  </div>
  )
}

export default ReviewCard