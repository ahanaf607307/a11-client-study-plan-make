import React from 'react'


function About() {
  return (
    <div className='my-20 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center p-4'>
     
     <div className='bg-registerBg bg-center object-fill md:h-[500px] full flex flex-col justify-center items-center rounded-xl lg:col-span-5'>
      <h1 className='text-2xl  md:text-4xl lg:text-5xl text-center font-bold text-white border-2 p-4 rounded-xl bg-black/40'> About Us</h1>
     </div>
     <div className='lg:col-span-7 '>
     Welcome to STUDY TODAY GO, the ultimate platform designed to streamline the process of managing, completing, and evaluating assignments. Whether you’re a student, teacher, or part of a collaborative team, we provide the tools you need to stay organized, meet deadlines, and achieve excellence.

<h1 className='text-xl font-semibold my-2'>Our Mission</h1>
<p className='text-md font-semibold text-[#5d65b7] my-2'>Our mission is to simplify the way assignments are shared and completed. We aim to foster a supportive environment where learning and collaboration thrive, helping users focus on what truly matters—growth and achievement .</p>
<h1 className='text-xl font-semibold my-2'>What We Offer</h1>
<ul className='text-sm list-disc ml-14 my-3 text-orange-600'>
    <li>Easy Assignment Management: Create, upload, and organize assignments effortlessly.</li>
    <li>Collaborative Features: Collaborate with peers, share ideas, and review each other’s work to enhance learning.</li>
    <li>Progress Tracking: Monitor performance and deadlines with intuitive dashboards and reminders.</li>
</ul>
<h1 className='text-xl font-semibold my-2'>Who We Serve</h1>

<ul className='text-sm list-disc ml-14 my-3 text-orange-600'>
    <li>Students: Manage assignments, stay on top of deadlines, and improve through peer and mentor feedback..</li>
    <li>Teachers: Simplify the process of assigning, collecting, and grading work, freeing up time to focus on teaching.</li>
</ul>


<h1 className='text-xl font-semibold my-2'>Why Choose Us?</h1>
<ul className='text-sm list-disc ml-14 my-3 text-orange-600'>
    <li>User-Friendly Interface: Designed with simplicity in mind, making it easy for everyone to use.</li>
    <li>Flexible & Scalable: Perfect for individual users, classrooms, and large-scale organizations.</li>
    <li>Secure & Reliable: We prioritize your data’s security, ensuring a safe and seamless experience.</li>
</ul>

     </div>
    </div>
  )
}

export default About
