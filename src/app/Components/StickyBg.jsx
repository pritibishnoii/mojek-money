import React from 'react';
import { IMAGES } from '../../utils/Data';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const StickyBg = () =>
{
    return (
        <div className="">
            { IMAGES.map( ( img, index ) => (
                <div
                    key={ img.id }
                    className={ twMerge(
                        clsx( 'absolute', {
                            'top-20 left-20': index === 0,
                            'top-40 right-20': index === 1,
                            'bottom-60 left-20': index === 2,
                            'bottom-20 right-20': index === 3,
                        } )
                    ) }
                >
                    <Image
                        src={ img.url }
                        width={ 200 }
                        height={ 200 }
                        alt={ img.id }
                        className="rounded-lg shadow-lg"
                    />
                </div>
            ) ) }
        </div>
    );
};

export default StickyBg;
