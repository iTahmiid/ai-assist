import "./underline.css"
import productImg from "../../public/images/project2.svg"
import Image from "next/image";
import { space } from "postcss/lib/list";
import Title from "@/components/Title";

export default function Product() {
    const productsData = [
        {
            "title": "AI-powered Chatbots",
            "description": "Answer FAQs, troubleshoot basic issues, and route complex inquiries to human agents."
        },
        {
            "title": "Conversational Commerce",
            "description": "Enable customers to make purchases and manage orders through chat interfaces."
        },
        {
            "title": "Shopping Assistant",
            "description": "Provide personalized product recommendations and support for online shoppers."
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

        <section className="mt-40">






            <div className=" mb-10">
                <Title title={<span>Product</span>}></Title>

            </div>
            <div>

                <div className="flex-none lg:flex">
                    <div className="grid lg:w-1/2 grid-cols-1 gap-2  md:grid-cols-2">

                        {productsData.map((product, index) => (
                            <div className="card hover:bg-[#797DFC] transition-all hover:text-white bg-base-100 w-full border rounded-none" key={index}>

                                <div className="card-body">
                                    <h2 className="text-xl font-bold mb-4 ">{product.title}</h2>
                                    <p className="text- ">{product.description}</p>
                                </div>
                            </div>
                        ))}


                    </div>
                    <div className="lg:w-1/2 mt-28 lg:mt-0">
                        <Image src={productImg} alt="" className="w-full"></Image>

                    </div>
                </div>


            </div>




        </section >
    )
}
