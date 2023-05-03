import React from 'react';

export type StarType = {
    selected: boolean
}

export type RatingType = {
    value: number
}

export const Rating = (props: RatingType) => {
    return <>
        <Star selected={props.value > 0}/>
        <Star selected={props.value > 1}/>
        <Star selected={props.value > 2}/>
        <Star selected={props.value > 3}/>
        <Star selected={props.value > 4}/>
    </>
}

const Star = (props: StarType) => {
    if (props.selected) {
        return <span><b>star </b></span>
    }
    return <span>star </span>
}
