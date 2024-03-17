import React from 'react';
import './about.css';
import img1 from '../../assessts/img1.jpg';
import img2 from '../../assessts/img2.jpg';
import img3 from '../../assessts/img3.jpg';

const About = () => {
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    return (
        <section className="about">
            <div className="aboutSec">
                <div className="aboutContainer">
                    {/* <video className='aboutVideo' controls autoPlay muted loop>
                        <source src={'/'} type='video/mp4' alt='' />
                    </video> */}
                    <div className='aboutVideo'>
                        <iframe
                            width="700"
                            height="400"
                            src="https://www.youtube.com/embed/-O5J9Y-jf1s"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>

                    <div className='aboutWrap'>
                        <div className='aboutContent'>
                            <h3>Sustainable Ways to reduce Carbon Footprint Emission</h3>
                            <p>
                                <spam>Technology based energy savings.</spam><br />
                                • Fit energy saving light bulbs - LEDs can save 90% of lighting energy costs<br />
                                • Replace your old refrigerator / freezer (if it is over 15 years old), with a new
                                one with energy efficiency rating of "A++"<br />
                                • Replace your old boiler with a new energy efficient condensing boiler.<br />
                                travel more carbon footprint friendly
                                • Car share to work or for the kid’s school run<br />
                                • Use the bus or a train rather than your car<br />
                                • For short journeys; walk or cycle<br />
                                • Try to reduce the number of flights you take<br />
                                • When staying in a hotel - turn the lights and air-conditioning off when you
                                leave your hotel room<br />
                                <br />
                                <spam>ELECTRIC VEHICLES</spam><br />
                                • Move to Full Electric Vehicles now could become a great source of
                                reducing carbon emission by your Vehicles (cars, Motorbikes etc.)<br />
                                • By using Electric Vehicles you could make a significant impact on
                                climate change.<br />
                            </p>
                        </div>
                        <div className='image1'>
                            <img src={img1} alt='' height={400} width={400} />
                        </div>
                    </div>
                    <div className='aboutWrap'>
                        <div className='image1'>
                            <img src={img2} alt='' height={300} width={400} />
                        </div>
                        <div className='aboutContent'>
                            <h3>Cost Saving Actions</h3>
                            <p>
                                1. Hang out the washing instead of tumble drying.
                                • Hanging the washing out instead of using the tumble drier will save about 153kg
                                CO2 a year - that's £52 (USD68) each year, based on 150 cycles a year. <br />
                                2. Turn down the heating by 1⁰C.
                                • Reducing your heating by 1⁰C can reduce your energy consumption by 8%. For an
                                average household gas bill of 12,500kWh this will reduce your CO2 emissions by
                                184kg - that's £42 (USD55) each year. <br />
                                3. Only fill the kettle with the amount of water you need to boil.
                                • Only boiling the amount of water for your hot drink will save 72kg CO2 a year - that's
                                £23 (USD30) per annum<br />
                                4. Spend less time in the shower
                                • Spending 1 minute less in the shower can save 23kg CO2 and £8 (USD10) a year
                                (based on one shower a day and a 9kW shower).<br />
                                5. Turn electrical equipment off when not in use
                                • Fully turning off just one LCD TV (rather than leaving it on standby) for 18 hours a
                                day will save about 5kg CO2 a year - saving £2 a year (USD2.64). Turn off all other
                                electrical equipment when not in use to multiply the savings.
                            </p>
                        </div>
                    </div>

                    <div className='aboutWrap'>
                        <div className='aboutContent'>
                            <h3>We can together bring changes to our climate</h3>
                            <p>
                                1. Use energy-saving light bulbs like LEDs and replace old appliances with energy-efficient ones.<br />
                                2. Share rides, use public transport, walk, or cycle to reduce carbon emissions from travel.<br />
                                3. Consider electric vehicles to cut down on carbon emissions from transportation.<br />
                                4.  Save costs by air-drying clothes, lowering heating by 1°C, and boiling only the needed amount of water.<br />
                                5.Shorten shower time and turn off electrical devices when not in use.6. These actions can help reduce carbon 
                                emissions and contribute to combating climate change together.<br />
                            </p>
                        </div>
                        <div className='image1'>
                            <img src={img3} alt='' height={250} width={400} />
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
}

export default About;