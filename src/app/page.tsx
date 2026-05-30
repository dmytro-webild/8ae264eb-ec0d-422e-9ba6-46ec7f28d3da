"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { LayoutDashboard, Palette, Users, AreaChart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="mediumLarge"
      sizing="largeSmallSizeLargeTitles"
      background="blurBottom"
      cardStyle="gradient-radial"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="Socius Marketing"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=n4lxb0"
          logoAlt="premium social media agency logo"
          navItems={[
            { name: "Home", id: "#home" },
            { name: "About Us", id: "#about" },
            { name: "Services", id: "#services" },
            { name: "Portfolio", id: "#portfolio" },
            { name: "Results", id: "#results" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "Clients", id: "#clients" },
            { name: "FAQ", id: "#faq" },
            { name: "Contact", id: "#contact" }
          ]}
        />
      </div>
      <div id="home" data-section="home">
        <HeroBillboardTestimonial
          title="Elevate Your Brand's Presence on Social"
          description="We craft bespoke social media strategies that drive engagement, foster community, and deliver measurable growth for discerning clients."
          background={{ variant: "animated-grid" }}
          testimonials={[
            { name: "Sarah J.", handle: "@MarketingMaven", testimonial: "Socius Marketing transformed our online presence. Their strategic approach led to a 300% increase in engagement and a loyal community around our brand. Truly exceptional!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/business-woman-standing_1187-1543.jpg" },
            { name: "David K.", handle: "@TechInnovator", testimonial: "The team at Socius Marketing understood our vision perfectly. Their innovative campaigns significantly boosted our lead generation and brand authority in a competitive market.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/positive-excited-young-woman-showing-thumbs-up-having-fun_1262-14331.jpg" },
            { name: "Emily R.", handle: "@BrandStrategist", testimonial: "Working with Socius was a game-changer. Their data-driven insights and creative content delivered tangible ROI, exceeding all our expectations. Highly recommended!", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businessman-suit-looking-camera-meeting_1163-4654.jpg" },
            { name: "Michael B.", handle: "@LuxuryRetailer", testimonial: "Socius Marketing brings a level of sophistication and results that is unparalleled. Our luxury brand's social media now perfectly reflects our premium quality.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/modern-architect_1098-16239.jpg" },
            { name: "Jessica L.", handle: "@EcommercePro", testimonial: "From strategy to execution, Socius Marketing's expertise shone through. Our e-commerce sales directly benefited from their expertly managed social campaigns.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg" },
            { name: "Robert S.", handle: "@HospitalityExpert", testimonial: "Our hotel group needed a fresh approach to social media, and Socius delivered. Their bespoke content captured our essence, leading to increased bookings and brand awareness.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-confident-woman-startup-manager-office-posing-with-confidence-looking_1258-195341.jpg" }
          ]}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-person-taking-photo-food_23-2149304448.jpg"
          imageAlt="social media analytics dashboard elegant"
          mediaAnimation="opacity"
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/relaxing-fume-banking-adult-absence_1134-936.jpg", alt: "professional business portrait smiling woman" },
            { src: "http://img.b2bpic.net/free-photo/young-hispanic-man-smiling-confident-standing-park_839833-33955.jpg", alt: "male executive portrait smiling confidently" },
            { src: "http://img.b2bpic.net/free-photo/portrait-handsome-smiling-stylish-hipster-lambersexual-modelmodern-man-dressed-white-shirt-fashion-male-posing-street-background-near-skyscrapers-sunglasses-outdoors-sunset_158538-21190.jpg", alt: "female marketing manager portrait" },
            { src: "http://img.b2bpic.net/free-photo/close-up-smiley-friends-together_23-2148965357.jpg", alt: "senior business man portrait thoughtful" }
          ]}
          avatarText="Join 100+ satisfied brands"
        />
      </div>
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Crafting Digital Narratives That Resonate"
          description={[
            "At Socius Marketing, we believe that authentic stories build lasting connections. We are a collective of passionate social media strategists, content creators, and data analysts dedicated to elevating your brand's voice in the digital sphere.",            "Our approach is rooted in deep market understanding and bespoke strategy, ensuring every campaign is meticulously tailored to your unique objectives. We pride ourselves on transparency, innovation, and a relentless pursuit of measurable results."
          ]}
          useInvertedBackground={true}
        />
      </div>
      <div id="services" data-section="services">
        <FeatureCardTwentySix
          title="Our Tailored Social Media Solutions"
          description="From in-depth strategy to captivating content and meticulous analytics, our comprehensive services are designed to maximize your social media impact."
          features={[
            { title: "Strategic Social Planning", description: "Develop a bespoke social media roadmap aligned with your business goals, target audience, and competitive landscape.", buttonIcon: LayoutDashboard, imageSrc: "http://img.b2bpic.net/free-photo/business-team-analyzing-financial-data-with-charts_23-2152011794.jpg", imageAlt: "strategy planning roadmap digital marketing" },
            { title: "Captivating Content Creation", description: "Craft high-quality visuals, compelling copy, and engaging multimedia that resonate with your audience and amplify your brand message.", buttonIcon: Palette, imageSrc: "http://img.b2bpic.net/free-photo/artist-holding-retro-camera-copy-space_23-2148372096.jpg", imageAlt: "content creation influencer marketing flat lay" },
            { title: "Proactive Community Management", description: "Foster a vibrant and loyal community around your brand through active engagement, timely responses, and authentic interactions.", buttonIcon: Users, imageSrc: "http://img.b2bpic.net/free-photo/roommates-sharing-happy-moments-together_23-2149112062.jpg", imageAlt: "social media community engagement chat" },
            { title: "Advanced Performance Analytics", description: "Gain actionable insights with detailed reports and continuous optimization, ensuring your campaigns consistently deliver exceptional ROI.", buttonIcon: AreaChart, imageSrc: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884869.jpg", imageAlt: "data analytics chart report social media" }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Showcasing Our Impactful Campaigns"
          description="Explore a selection of our successful social media campaigns that have generated significant engagement and tangible results for our diverse clientele."
          products={[
            { id: "prod-1", name: "Luxury Lifestyle Launch", price: "Case Study", imageSrc: "http://img.b2bpic.net/free-vector/elegant-minimalist-gold-beauty-salon-social-media-post-template_23-2149633070.jpg", imageAlt: "luxury brand social media campaign" },
            { id: "prod-2", name: "Tech Innovator Spotlight", price: "Case Study", imageSrc: "http://img.b2bpic.net/free-photo/young-freelancer-examines-white-screen-smartphone_482257-102839.jpg", imageAlt: "tech startup social media launch" },
            { id: "prod-3", name: "Global Travel Experience", price: "Case Study", imageSrc: "http://img.b2bpic.net/free-photo/group-beautiful-girls-having-fun_23-2148594276.jpg", imageAlt: "travel destination social media content" },
            { id: "prod-4", name: "Gourmet Culinary Showcase", price: "Case Study", imageSrc: "http://img.b2bpic.net/free-photo/putting-tomatoes-yogurt-red-basilic-leaves-together_114579-4561.jpg", imageAlt: "food and beverage social media marketing" },
            { id: "prod-5", name: "Exclusive Real Estate", price: "Case Study", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1iknvn", imageAlt: "real estate luxury property social media" },
            { id: "prod-6", name: "Wellness Brand Expansion", price: "Case Study", imageSrc: "http://img.b2bpic.net/free-photo/woman-is-using-smartphone-holding-limequat-her-hand_169016-49882.jpg", imageAlt: "health and wellness social media campaign" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="results" data-section="results">
        <MetricCardSeven
          title="Quantifiable Success, Proven Results"
          description="Our commitment to data-driven strategies ensures that every campaign delivers measurable value, driving growth and maximizing your return on investment."
          metrics={[
            { id: "metric-1", value: "95%", title: "Client Retention", items: ["Consistently exceeding expectations", "Long-term strategic partnerships", "Building trust and loyalty"] },
            { id: "metric-2", value: "+250%", title: "Engagement Rate Growth", items: ["Captivating content strategies", "Community-first approach", "Driving meaningful interactions"] },
            { id: "metric-3", value: "7x ROI", title: "Average Campaign ROI", items: ["Optimized ad spend for maximum impact", "Conversion-focused strategies", "Delivering tangible business growth"] },
            { id: "metric-4", value: "+150%", title: "Audience Reach Expansion", items: ["Targeted content distribution", "Strategic influencer collaborations", "Expanding brand visibility"] }
          ]}
          animationType="depth-3d"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Esteemed Clients Say"
          description="Hear directly from the industry leaders and successful businesses who have partnered with Socius Marketing to elevate their social media presence and achieve remarkable results."
          testimonials={[
            { id: "test-item-1", name: "Olivia Smith", handle: "CEO, InnovateX", testimonial: "Socius Marketing's strategic guidance was pivotal in our brand's growth. Their creative campaigns and meticulous analytics have set a new benchmark for our industry.", imageSrc: "http://img.b2bpic.net/free-photo/young-happy-adult-woman-blouse-long-skirt-sitting-staircase-inside-coworking-space-smiling-camera_197531-23006.jpg" },
            { id: "test-item-2", name: "Marcus Chen", handle: "Founder, Quantum Solutions", testimonial: "The team at Socius Marketing exceeded all our expectations. Their ability to connect with our audience and drive meaningful engagement is simply outstanding.", imageSrc: "http://img.b2bpic.net/free-photo/confident-office-employers-thumbing-up-smiling-two-happy-professional-businesswomen-standing-together-posing-meeting-room-teamwork-business-cooperation-concept_74855-6924.jpg" },
            { id: "test-item-3", name: "Sophia Rodriguez", handle: "Marketing Director, Aura Brands", testimonial: "Our social media presence has been completely transformed. Socius Marketing combines innovative ideas with solid execution, delivering consistent, impressive results.", imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg" },
            { id: "test-item-4", name: "Benjamin Carter", handle: "Head of Digital, Global Dynamics", testimonial: "Partnering with Socius Marketing was one of our best decisions. Their deep understanding of social trends and data-driven approach generated significant ROI for us.", imageSrc: "http://img.b2bpic.net/free-photo/authentic-small-youthful-marketing-agency_23-2150167445.jpg" },
            { id: "test-item-5", name: "Isabella White", handle: "Owner, Luxe Boutiques", testimonial: "Socius Marketing perfectly captured the essence of our luxury brand on social media. Their elegant content and targeted campaigns resonated deeply with our audience.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-entrepreneur-with-corporate-job-looking-camera-business-office-portrait-young-man-preparing-work-planning-development-industry-with-technology-computer_482257-29387.jpg" },
            { id: "test-item-6", name: "Liam Green", handle: "Director, Culinary Concepts", testimonial: "The engagement levels we've seen since working with Socius Marketing are incredible. They truly understand how to tell a story and build a community around a brand.", imageSrc: "http://img.b2bpic.net/free-photo/proud-middle-aged-business-leader-cafe-counter_1262-1880.jpg" }
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="clients" data-section="clients">
        <SocialProofOne
          title="Trusted By Industry Leaders"
          description="Our diverse portfolio includes partnerships with leading brands across various sectors, all united by a common goal: unparalleled social media excellence."
          names={["Global Corp", "Innovate Ventures", "Luxe Living", "Digital Nexus", "Capital Connect", "Horizon Hotels", "Health Sphere"]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find quick answers to common inquiries about our services, process, and partnership opportunities. For more detailed information, feel free to contact us directly."
          faqs={[
            { id: "faq-1", title: "What types of businesses do you work with?", content: "We partner with a diverse range of premium brands and businesses, from luxury retailers and tech startups to hospitality groups and wellness brands, seeking to elevate their social media presence." },
            { id: "faq-2", title: "How do you measure campaign success?", content: "We employ a comprehensive analytical approach, tracking key metrics such as engagement rates, follower growth, conversion rates, and overall ROI, providing transparent and actionable reports." },
            { id: "faq-3", title: "Can you handle our content creation entirely?", content: "Yes, our expert team can manage all aspects of content creation, including visual assets, compelling copy, and multimedia production, ensuring a cohesive and high-quality brand narrative." },
            { id: "faq-4", title: "What is your typical onboarding process?", content: "Our onboarding begins with an in-depth discovery session to understand your brand, goals, and audience. We then develop a customized strategy, followed by a collaborative review before execution." }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/team-virtual-meeting-with-employer_482257-119541.jpg"
          imageAlt="person asking question lightbulb idea"
          mediaAnimation="opacity"
          mediaPosition="right"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Connect With Us"
          title="Ready to Transform Your Social Presence?"
          description="Let's discuss how Socius Marketing can craft a bespoke social media strategy that drives real results for your premium brand. Reach out today for a consultation."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          inputPlaceholder="Enter your email for a consultation"
          buttonText="Schedule a Call"
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Socius Marketing"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=n4lxb0"
          logoAlt="premium social media agency logo"
          columns={[
            { items: [{ label: "Home", href: "#home" }, { label: "About Us", href: "#about" }, { label: "Services", href: "#services" }] },
            { items: [{ label: "Portfolio", href: "#portfolio" }, { label: "Testimonials", href: "#testimonials" }, { label: "Clients", href: "#clients" }] },
            { items: [{ label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }] },
            { items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
