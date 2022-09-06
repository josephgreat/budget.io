import React, { useEffect, useState } from 'react'

export default function MediaQuery(props) {
    let {size, type} = props;
    let width;
    let checkWindowWidth = () => {
        switch (size) {
            case 'xs':
                width = 414;
                break;
            case 'sm':
                width = 600;
                break;
            case 'md':
                width = 768;
                break;
            case 'lg':
                width = 960;
                break;
            case 'xl':
                width = 1024;
                break;
            case '2xl':
                width = 1200;
                break;
            case '3xl':
                width = 1400;
                break;
            case '4xl':
                width = 1600;
                break;
            case '5xl':
                width = 1900;
                break;
        
            default:
                width = 768;
                break;
        }
    }
    const [isRequiredSize, setIsRequiredsize] = useState(false);

    checkWindowWidth();
    let mql = window.matchMedia(`(${type ? type : "min"}-width: ${width}px)`);
    useEffect(() => {
        console.log(mql.matches)
        setIsRequiredsize(mql.matches)
    }, [mql.matches])
    mql.onchange = e => {
        if(e.matches) setIsRequiredsize(e.matches);
        else setIsRequiredsize(false);
    }
  if (isRequiredSize) return (<>{props.children}</>)
  else return (<></>);
}
