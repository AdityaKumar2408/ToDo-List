import React from 'react';
import array from './array';
import Card from './card';
function csm(){
    return(
        <>
    <Card 
        imgsrc={array[0].imgsrc}
        title={array[0].title}
        sname={array[0].sname}
        link={array[0].link}
    />
        </>
    )
}
export default csm;