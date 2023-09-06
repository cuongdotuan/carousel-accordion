import React, { useState } from 'react'

const data = [
    {
        alt: "image1",
        url:
            "https://placehold.co/700x400/ecb0f0/b4f0b0?text=slide 1"
    },
    {
        alt: "image2",
        url:
            "https://placehold.co/700x400/00cc66/fefcaa?text=slide 2"
    },
    {
        alt: "image3",
        url: "https://placehold.co/700x400/ff5f13/13b3ff?text=slide 3"
    },
    {
        alt: "image4",
        url: "https://placehold.co/700x400/77005f/007718?text=slide 4"
    }
]

const Carousel = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onNext = () => {
        if (selectedIndex === data.length - 1) {
            setSelectedIndex(0)
            return
        }

        setSelectedIndex(selectedIndex + 1)

    }

    const onPrev = () => {
        if (selectedIndex === 0) {
            setSelectedIndex(data.length - 1)
            return
        }
        setSelectedIndex(selectedIndex - 1)
    }
    return (

        <div className="background">
            <img style={{ height: "100%", width: "100%", transition: "transform .6s ease-in-out" }} src={data[selectedIndex].url} alt="..." />
            <div className="btn-prev-next">
                <button onClick={onPrev}>{"Prev"}</button>
                <button onClick={onNext}>{"Next"}</button>
            </div>


        </div>


    )
}

export default Carousel