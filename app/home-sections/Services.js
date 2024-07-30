import "./underline.css"
import serviceImg from "../../public/images/service.svg"
import Image from "next/image";
import Title from "@/components/Title";

export default function Product() {
    const productsData = [
        {
            "title": "Customization",
            "description": "Train LLMs with your specific data to personalize responses and understand brand voice."
        },
        {
            "title": "Integrations",
            "description": "Integrate AI-Assist with existing CRM and support platforms for seamless data flow."
        },
        {
            "title": "Analytics & Reporting",
            "description": "Provide insights into customer interactions and chatbot performance to optimize support strategies."
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

        <section className="">



            <div className="my-20">
                <div className=" flex-row lg:flex lg:flex-row-reverse items-center gap-10">

                    <div className="w-1/2">
                        <div className="ml-4 my-12">
                            <Title title={<span>Services</span>}></Title>
                        </div>

                        <div className="grid gap-3 border-none grid-cols-1 ">
                            {productsData.map((product, index) => (
                                <div key={index} className="card rounded-none p-3 card-compact bg-base-100 w-96">
                                    <div className="card-body">
                                        <h2 className="text-xl text-[#121643] font-bold">{product.title}</h2>
                                        <p className="text-[#121643bf]">{product.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div>
                        <Image className="w-full mt-28" src={serviceImg} alt="Feature image"></Image>
                    </div>
                </div>


            </div>
        </section>
    )
}


