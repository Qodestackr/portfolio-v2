import React from 'react';

import Title from './Common/Title';

import MeIMG from '../images/me.jpeg'

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center" id="about">
            <Title num={1} title="About me" />

            <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
                <p className="mt-10 text-xl text-textDark md:w-1/2">
                    Based in Nairobi, Kenya, I enjoy coding, blogging, mechanical keyboards, and the smell of black coffee. My passion is to work on building products that impact developers and users. To pursue this goal, I participate in developer communities, open source, and technical writing. Building applications on the web has been a blast for me and I have no plans of stopping anytime soon!
                </p>

                <div className="relative mx-auto mt-20 border-2 rounded-full md:mt-0 md:ml-20 w-80 h-80 border-neon">
                    <img
                        alt='me'
                        className="rounded-full"
                        layout="fill"
                        objectFit="contain"
                        src={MeIMG}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
