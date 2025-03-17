import React, { forwardRef } from "react";

const Heading = forwardRef( ( { titleParts, description, className }, ref ) => {
    return (
        <div ref={ ref } className={ `w-2/3 flex flex-col items-center justify-center text-center ${ className }` }>
            <h1 className="text-7xl font-semibold leading-[1.2]">
                { titleParts.map( ( part, index ) => (
                    <span key={ index } style={ { color: part.color } } className={ part.className }>
                        { part.text }{ " " }
                    </span>
                ) ) }
            </h1>
            { description && <p className="text-[#9c9b9d] text-lg mt-4 w-3/4">{ description }</p> }
        </div>
    );
} );

export default Heading;
