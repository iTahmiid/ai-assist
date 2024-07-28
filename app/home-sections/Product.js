import "./underline.css"
import productImg from "../../public/images/project2.svg"
import Image from "next/image";

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





            <div className="my-20">


                <div className="flex-none text-center lg:text-left lg:flex mb-28 justify-between items-center">
                    <h1 className="text-xl mb-5 lg:mb-0 lg:text-4xl text-[#121643] font-bold">Revolutionize your workflow <br /> with our products</h1>
                    <p>Libero tincidunt magna, leo tempus aenean. Adipiscing <br /> vestibulum vehicula vel donec pulvinar aliquam, blandit lorem.</p>
                </div>
                <div>

                    <div className="flex-none lg:flex">
                        <div className="grid lg:w-1/2 grid-cols-1  md:grid-cols-2">

                            {productsData.map((product, index) => (
                                <div className="card hover:bg-[#121643] transition-all hover:text-white bg-base-100 w-full border rounded-none" key={index}>
                                    <figure>

                                    </figure>
                                    <div className="card-body">
                                        <h2 className="text-xl font-bold mb-4 ">{product.title}</h2>
                                        <p className="text- ">{product.description}</p>

                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className="lg:w-1/2">
                            <Image src={productImg} className="w-full"></Image>

                        </div>
                    </div>


                </div>



            </div>
        </section>
    )
}


