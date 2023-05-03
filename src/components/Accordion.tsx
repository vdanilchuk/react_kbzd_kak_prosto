import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
    titleValue: string
    collapsed: boolean
}

export const Accordion = (props: AccordionType) => {
    return (<>
            <AccordionTitle title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/>}
        </>
    )
}
