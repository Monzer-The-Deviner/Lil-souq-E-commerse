/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { getAboutSections, getTeam, urlFor } from '../sanityClient';
const AboutPage = () => {
    const [sections, setSections] = useState([]);
    const [team, setTeam] = useState([]);
    useEffect(()=>{
        getTeam().then(data=>setTeam(data))
        getAboutSections().then(data=>setSections(data))

    },[])
  return (
    <>
       { sections.map((section:any,index)=>
        <div className={`flex gap-4 my-8 h-80 ${index%2 == 0?'flex-row-reverse':''}`}>
            <div className="flex-1 space-y-5">
                <h2 className='text-3xl font-medium'>{section.title}</h2>
                <p>
                    {section.text}
                </p>

            </div>
            <div className="flex-1 overflow-hidden justify-center items-center">
                <img src={urlFor(section.image)} alt="" />
            </div>
        </div>)}
        <section className='my-8'>
            <h3 className='text-4xl font-medium my-4'> Our Team</h3>
            <p className='text-lg font-medium'>we got the best to the best out there with great potintial ad shit!!!</p>
                <div className="flex my-8 justify-center gap-2">

                    {team.map((member:any)=>
                    
                    <div className='flex h-80 w-60  bg-white shadow-md duration-150 hover:-translate-y-2 hover:shadow-lg overflow-hidden rounded-md flex-col'>
                                <div className="flex-1 bg-cover  flex-col-reverse flex rounded-md" style={{backgroundImage:`url(${urlFor(member.image)})`}}>
                                    <div className='font-medium p-2 text-white bg-gradient-to-t from-[#0f232594] to-[#011a1d1e] '>
                                        <h6 className='text-lg'>{member.name}</h6>
                                        <span className='text-sm font-normal'>{member.role}</span>
                                    </div>
                                    </div>
                                <div className="flex-1 flex flex-col p-2 gap-2 justify-center font-medium text-dark">
                                    <FaQuoteLeft className='text-primarly' />
                                    {member.quote}
                                    <FaQuoteRight className='self-end text-primarly' />
                                </div>
                            </div>
                        
                    )}`

                </div>
        </section>
    </>
  )
}

export default AboutPage