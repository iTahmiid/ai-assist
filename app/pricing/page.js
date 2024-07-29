import React from 'react';
import { FaCheck } from "react-icons/fa6";



function Pricing() {
    const plansData = [
        {
            "name": "Basic Plan",
            "price": "$10",
            "features": {
                "Integration": "Supports one customer support channel (e.g., website chat).",
                "Automated Responses": "Basic responses for common queries.",
                "Monthly Interactions": "Limited number of interactions.",
                "Ticketing": "Basic issue tracking and ticket creation.",
                "Reporting": "Standard reporting and analytics.",
                "Conversational Commerce Features": {
                    "Product Browsing": "Basic product browsing and FAQ support.",
                    "Payment Gateway Integration": "Enables transactions directly through chat."
                }
            }
        },
        {
            "name": "Standard Plan",
            "price": "$99",
            "features": {
                "Integration": "Multiple customer support channels (website chat, social media, messaging apps).",
                "Natural Language Processing": "Advanced capabilities for improved query understanding.",
                "Monthly Interactions": "Increased allowance for customer interactions.",
                "Multilingual Support": "Ability to support multiple languages.",
                "CRM Integration": "Integration with popular CRM and ticketing systems.",
                "Enhanced Reporting": "Insights into response times and customer satisfaction.",

            }
        },
        {
            "name": "Advanced Plan",
            "price": "$399",
            "features": {
                "Integration": "Omni-channel support (web, social, messaging, email, voice).",
                "Sentiment Analysis": "AI-powered analysis to understand customer emotions.",
                "Self-Service Options": "Comprehensive knowledge base and FAQs.",
                "Proactive Engagement": "Real-time issue resolution and customer engagement.",
                "Monthly Interactions": "Unlimited interactions.",
                "Advanced Analytics": "Predictive insights for proactive support strategies.",
                "Customizable Workflows": "Automation and customization options.",

            }
        },
        {
            "name": "Enterprise Plan",
            "price": "Contact us for pricing",
            "features": {
                "Custom Integration": "Integration with any customer communication platform.",
                "Personalized Journeys": "AI-driven customer experiences tailored to individual preferences.",
                "Advanced Sentiment Analysis": "Emotion-driven responses for enhanced customer engagement.",
                "Complex Query Handling": "AI-powered chatbot with learning capabilities.",
                "Branding and UI/UX Customization": "Customize branding and user interface to match corporate identity.",
                "Dedicated Account Manager": "Priority support and strategic guidance.",
                "Advanced Reporting": "Actionable insights for optimizing business strategies.",

            }
        }
    ];

    return (
        <main className="p-5">
            <div className="text-center mb-8">
                <h1 className="text-2xl lg:text-4xl font-bold text-[#121643]">Flexible Pricing Plans <br /> for Every Need</h1>
                <p className="mt-3">Choose the plan that fits your business requirements.</p>
            </div>
            <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plansData.map((plan, index) => (
                    <div key={index} className="card border rounded-none bg-base-100">
                        <div className="px-5 pt-6 py-20">
                            <h2 className="text-lg text-gray-400 font-bold">{plan.name}</h2>
                            <p className="text-5xl mt-2 font-bold">{plan.price}</p>
                            <ul className=" mt-9 text-sm space-y-4 list-inside">
                                {Object.entries(plan.features).map(([featureName, featureValue], i) => (
                                    typeof featureValue === 'object' ? (

                                        <li key={i}>
                                            {featureName}:
                                            <ul className="  list-none ml-4">
                                                {Object.entries(featureValue).map(([subFeatureName, subFeatureValue], j) => (
                                                    <li className='list-none' key={j}>{subFeatureName}: {subFeatureValue}</li>
                                                ))}
                                            </ul>
                                        </li>
                                    ) : (
                                        <ul key={i} className='flex gap-1'>
                                            <FaCheck className=''></FaCheck>
                                            <li >{featureName}: {featureValue}</li>
                                        </ul>
                                    )
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Pricing;
