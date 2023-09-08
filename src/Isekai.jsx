import React from 'react';
import array from './array';
import Card from './card';
function csm(){
    return(
        <>
    <Card 
        imgsrc={array[2].imgsrc}
        title={array[2].title}
        sname={array[2].sname}
        link={array[2].link}
    />
        </>
    )
}
export default csm;