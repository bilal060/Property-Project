import React from 'react'
import SingleCard from './SingleCard'

export default function Cards(props) {
  return (
    <>
    <section className="properties-list featured portfolio blog">
        <div className="container">
            <div className="row">
                <SingleCard price="$9000/mo" propertiesGridImgSrc="../styles/images/img1.jpg"/>
                <SingleCard price="$9000/mo" propertiesGridImgSrc="../styles/images/img1.jpg"/>
                <SingleCard price="$9000/mo" propertiesGridImgSrc="../styles/images/img1.jpg"/>
            </div>
            <div className="row">
                <SingleCard price="$9000/mo" propertiesGridImgSrc="../styles/images/img1.jpg"/>
                <SingleCard price="$9000/mo" propertiesGridImgSrc="../styles/images/img1.jpg"/>
                <SingleCard price="$9000/mo" propertiesGridImgSrc="../styles/images/img1.jpg"/>
            </div>
            <div className="row">
                <SingleCard price="$9000/mo" propertiesGridImgSrc="../styles/images/img1.jpg"/>
                <SingleCard price="$9000/mo" propertiesGridImgSrc="../styles/images/img1.jpg"/>
                <SingleCard price="$9000/mo" propertiesGridImgSrc="../styles/images/img1.jpg"/>
            </div>
        </div>
    </section>
    </>
  )
}
