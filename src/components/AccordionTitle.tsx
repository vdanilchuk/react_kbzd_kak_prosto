import React from 'react';

export type AccordionTitleType ={
    title: string
}
export const AccordionTitle = (props: AccordionTitleType) => {
    return (<>
            <h3>{props.title}</h3>
        </>
    )
}
