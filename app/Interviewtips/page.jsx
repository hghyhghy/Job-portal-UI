"use client";
import React from 'react'
import Nav from '../components/Nav';
import Image from 'next/image';


const page = () => {
  return (

    <>
    <main>
        <Nav/>
        <div>
            <div className=' flex items-start justify-start px-40 mt-10 rounded-lg flex-col gap-7'>
               <h1 className=' text-slate-700 text-3xl font-bold'>How to Prepare for the 10 Most Common Interview Questions ??</h1>
                <Image
                src="/interviewprep.png"
                height={505}
                width={650}
                alt='intervewprep'
                />
            </div>

            <div>
               
               <div>
                 <h1 className=' text-2xl  text-black font-bold mt-5 px-40'>10 Common Interview Questions:</h1>
                  
                  
               </div>

               <div className=' text-slate-700 flex flex-col gap-5 mt-2 px-48'>
                <h3>1.Tell me about yourself?</h3>
                <h3>2.What are your greatest strengths?
                </h3>
                <h3>3.What are your greatest weaknesses?
                </h3>
                <h3>4.Why are you leaving (or did you leave) this position?
                </h3>
                <h3>5.Why should I hire you?
                </h3>
                <h3>6.Why do you want to work at our company?
                </h3>
                <h3>7.What changes would you make if you came on board?
                </h3>
                <h3>8.Can you work under pressure?
                </h3>
                <h3>9.Tell me about your work in the last company
                </h3>
                <h3>10.Give me an example where you showed good team spirit
                </h3>
               </div>

               <div>

                  <div>
                    <h1 className='text-black font-bold text-2xl mt-5 px-40'>Be positive and confident
                    </h1>
                    <p className=' text-slate-600 px-40 mt-2'>Always be confident when appearing for interviews. An optimistic and positive attitude always helps.

                    Whenever you talk about past experiences or examples from your personal life  don't focus on the negative aspects of those experiences. Instead talk about how all your experiences, whether good or bad, <br /> were a great learning opportunity for you.</p>
                  </div>

                  <div>
                    <h1 className='text-black font-bold text-2xl mt-5 px-40'>Be honest
                    </h1>
                    <p className=' text-slate-600 px-40 mt-2'>
                    Besides, some companies invest time and resources to perform background checks of potential employees. So rather than worrying about a falsified story or claim being cross checked with a reference, be honest and keep your mind at ease.
                    </p>
                  </div>

                  <div>

                    <h1 className='text-black font-bold text-2xl mt-5 px-40'>
                    Pay attention to your body language

                    </h1>

                    <div   className=' text-slate-700 flex flex-col gap-5 mt-2 px-48'>
                      <h3>1.Dress well (Business formals for men and Formals or Indian ehtnic wear for women)</h3>
                      <h3>2.Sit upright
                      </h3>
                      <h3>3.Smile
                      </h3>
                      <h3>4.Shake hands confidently
                      </h3>
                      <h3>5.Try to maintain eye contact whenever appropriate
                      </h3>
                    </div>
                  </div>

                  <div>
                    <h1 className='text-black font-bold text-2xl mt-5 px-40'>What are your greatest strengths?</h1>
                    <div className=' text-slate-700 flex flex-col gap-5 mt-2 px-48'>

                      <h3>1.A proven track record as an achiever – especially if your achievements match</h3>
                      <h3>2.Honesty and integrity – basically a decent human being
                      </h3>
                      <h3>3.A team player who fits well in the company
                      </h3>
                      <h3>4.Positive attitude</h3>
                      <h3>5.Good communication skills</h3>
                      <h3>6.Dedication – willingness to take extra efforts to achieve excellence</h3>
                      <h3>7.Having a purpose or clear goals</h3>
                      <h3>8.Enthusiasm – high levels of motivation</h3>
                      <h3>9.Confidence, and leadership skills</h3>

                    </div>
                  </div>

                  <div>

                    <h1 className='text-black font-bold text-2xl mt-5 px-40'>Why do you want to work at our company</h1>
                    <div className=' text-slate-700 flex flex-col gap-5 mt-2 px-48'>
                         <h3>1.You are excited about the products and services that the firm is working on and you want to be a part of the effort</h3>
                         <h3>2.You are inspired by the Vision and the Mission of the firm to make an impact, and want to contribute</h3>
                         <h3>3.You are looking forward to be a part of the excellent work culture the company offers</h3>
                         <h3>4.You think this company is the best place to learn, grow and cultivate your skills etc.</h3>
                    </div>
                  </div>

                  <div>
                    <h1 className='text-black font-bold text-2xl mt-5 px-40'>What changes would you make if you came on board?</h1>
                    <div className=' text-slate-700 flex flex-col gap-5 mt-2 px-48'>
                         <h3>1.List down the top two to three items that you think will have the highest impact</h3>
                         <h3>2.List down ideas or actions on how you would go about tackling them</h3>
                         <h3>3.If possible list down costs and timelines for your actions</h3>
                         <h3>4.Give examples from your past experience or training whenever possible</h3>
                    </div>
                  </div>
               </div>

            </div>
        </div>
    </main>
    </>
  )
}

export default page