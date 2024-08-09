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
          <section className="mt-40">

               <div className="flex-none items-center lg:flex lg:flex-row-reverse gap-8">

                    <div className="lg:w-1/2">
                         <div className="mb-14">
                              <Title title={<span>Services</span>} />
                         </div>
                         <div className="grid  grid-cols-1 md:grid-cols-2 relative">
                              {productsData.map((product, index) => (
                                   <div
                                        className={`card hover:bg-[#797DFC] hover:text-white transition-all w-full rounded-none py-8 relative ${index === 2 ? 'md:col-span-2' : ''}`}
                                        key={index}

                                   >
                                        <div className="card-body">
                                             <h2 className="text-xl font-bold mb-4">{product.title}</h2>
                                             <p>{product.description}</p>
                                        </div>
                                        {index === 0 && (
                                             <div className="absolute hidden lg:block inset-y-0 right-0 border-custom-right"></div>
                                        )}
                                        {index === 2 && (
                                             <div className="absolute hidden lg:block bottom-0 left-0 border-custom-top"></div>
                                        )}
                                   </div>
                              ))}
                         </div>
                    </div>
                    <div
                         className="lg:w-1/2 mt-28 lg:mt-0"
                         initial="hidden"

                    >
                         <Image src={serviceImg} alt="" className="w-full" />
                    </div>
               </div>
          </section>
     )
}
