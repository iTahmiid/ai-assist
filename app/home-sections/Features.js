import featureImg from "../../public/images/feat.svg"
import Image from "next/image";
import { FaRobot } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


export default function Features() {

    const featureData = [
        {
            "icon": <FaRobot />,
            "title": "Intelligent Chatbots",
            "description": "Automate customer interactions with advanced AI."
        },
        {
            "icon": <FaClock />,
            "title": "24/7 Availability",
            "description": "Always there for your customers, any time of day."
        },
        {
            "icon": <FaLink />,
            "title": "Seamless Integrations",
            "description": "Effortlessly connect with your existing systems."
        }
    ]

    const headingStyle = {
        position: 'relative',
    };

    const beforeStyle = {
        content: '""',
        position: 'absolute',
        bottom: '-8px',
        left: '50px', /* Center the line horizontally */
        transform: 'translateX(-50%)',
        width: '80px', /* Adjust the width of the line */
        height: '2px', /* Adjust the height/thickness of the line */
        borderRadius: "20px",
        backgroundColor: '#28A745',
    };



    return (

        <section className=" mt-44">



            <div className="my-20">
                <div className="">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featureData.map((feature, index) => (
                            <div className="card border-opacity-20 border-gray-300 bg-base-100 border rounded-none w-full" key={index}>

                                <div className="card-body">
                                    <div>
                                        <h1 className="text-3xl mb-2 ">
                                            <span className="bg-[#121643] inline-block text-white p-5 rounded">{feature.icon}</span>
                                        </h1>
                                    </div>
                                    <h2 className="text-xl lg:text-2xl font-bold mt-2 text-[#121643]] ">{feature.title}</h2>
                                    <p className="mt-3 text-[#121643bf]">{feature.description}</p>
                                    <a href="#" className="font-bold text-sm text-[#121643]">Learn More &#8594;</a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>


            </div>
        </section>
    )
}
