import React from 'react'
import Heading from './Headings'

const AppsSections = () => {
    return (
        <div className='h-[98vh] w-full flex items-center  justify-center'>





            <div className='flex flex-col w-3/4   items-center'>

                <h3 className='text-[#20715e] text-xl  '>All in one place</h3>
                <Heading
                    titleParts={ [
                        { text: "Multiple Accounts.", color: "#1e6f5c", className: "" },
                        { text: "Single View.", color: "#64f07a", className: "" },

                    ] }
                    description="One app that takes care of it all. Switch to a single view of all your transactions, bank balances, credit cards and investments."
                />
            </div>

        </div>
    )
}

export default AppsSections