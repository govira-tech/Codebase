import React from "react";
import IndustryPageLayout from "../../../components/sections/IndustryPageLayout";

const TravelHospitalityPage: React.FC = () => {
  return (
    <IndustryPageLayout
      title="Travel & Hospitality Digital Marketing"
      description={`Boost your travel and hospitality brand with AI-powered marketing strategies. Govira helps attract travelers, increase bookings, and improve online reputation.

Key Services:
- SEO for travel & hotels
- Social media campaigns
- Paid ads & retargeting
- Booking engine optimization
- Review & reputation management`}
      highlights={[
        "Hotel & Travel Website",
        "SEO Optimization",
        "PPC & Paid Ads",
        "Social Media Marketing",
        "Booking Engine Optimization",
        "Email Campaigns",
        "Analytics & Reporting",
        "Customer Engagement Tools",
      ]}
      faqs={[
        {
          question: "How does digital marketing help travel agencies?",
          answer:
            "It improves visibility, drives bookings, and engages travelers through personalized campaigns.",
        },
        {
          question: "Do you manage online reviews and reputation?",
          answer: "Yes, we monitor and optimize online reputation across platforms.",
        },
      ]}
      ctaText="Get Your Free Website Analysis"
      ctaLink="/contact"
      imageUrl="/images/travel-hospitality.jpg"
    />
  );
};

export default TravelHospitalityPage;
