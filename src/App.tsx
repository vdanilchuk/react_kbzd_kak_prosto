import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";

function App() {
    return (
        <div>
            <PageTitle title={'Title 1'}/>
            <Rating value={3}/>
            <PageTitle title={'Title 2'}/>
            <Rating value={2}/>
            <PageTitle title={'Title 3'}/>
            <Rating value={1}/>
            <PageTitle title={'Title 4'}/>
            <Rating value={4}/>
            <PageTitle title={'Title 5'}/>
            <Rating value={5}/>
            <PageTitle title={'Title 6'}/>
            <Rating value={0}/>
            <Accordion/>
        </div>
    );
}

type TitleType = {
    title: string
}
const PageTitle = (props: TitleType) => {
    return <h5>{props.title}</h5>
}

export default App;
