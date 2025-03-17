import React from 'react'
import Image from 'next/image'

const CardContainer = () => {
    return (
        <div className='h-[68vh] w-full flex  justify-center items-center'>
            {/* cards */ }
            <div className='flex w-3/4  h-full items-center gap-12 '>
                <div className=''>
                    <Image
                        src="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66acb8a44750ea29796ef727_CC.svg"
                        width={ 400 }
                        height={ 400 }
                        alt="card-img"
                        className=''
                    />
                </div>
                <div className=''>
                    <Image
                        src="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66b7b5f7ae40a0a4efb77a2f_Brokers_WhiteBackground-p-500.webp"
                        width={ 400 }
                        height={ 400 }
                        alt="card-img"
                        className=''
                    />
                </div>
                <div className=''>
                    <Image
                        src="https://cdn.prod.website-files.com/66a7527e649360728394a4ba/66acb8a44750ea29796ef6c7_Monthly%20Snapshot.svg"
                        width={ 400 }
                        height={ 400 }
                        alt="card-img"
                        className=''
                    />
                </div>
            </div>
        </div>
    )
}

export default CardContainer