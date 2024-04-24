import React from 'react'
import { Carousel, Typography } from 'antd'
const HeroSection = () => {

    return (
        <div style={{ margin: "auto", textAlign: "center" }}>
            <Typography.Title style={{ padding: 20 }}>Daraz Offers</Typography.Title>
            <Carousel autoplay autoplaySpeed={2000} style={{ width: "100%", marginBottom: 20 }}>
                <div>
                    <img src="https://picsum.photos/id/1/1300/600" alt="img1" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/2/1300/600" alt="img2" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/3/1300/600" alt="img3" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/4/1300/600" alt="img4" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/5/1300/600" alt="img5" />
                </div>
            </Carousel>
        </div>
    )
}

export default HeroSection
