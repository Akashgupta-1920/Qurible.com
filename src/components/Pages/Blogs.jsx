import React, { useState } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import bannerImg from "/src/assets/tablets/banner.jpeg";
import bloodImg from "/src/assets/tablets/outdore.webp";
import boneImg from "/src/assets/tablets/client.webp";
import tableImg from "/src/assets/tablets/women.webp";
import skinImg from "/src/assets/tablets/disabilities.webp";
import vitaminCImg from "/src/assets/tablets/blog.webp";
import newsletterBg from "/src/assets/image/b14.png";

// BlogEntry Component
const BlogEntry = ({ image, title, date, shortContent, fullContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="blog-box flex flex-col md:flex-row items-start mb-24 relative">
      <div className="blog-img w-full md:w-1/2 mr-0 md:mr-10 mb-5">
        <img src={image} alt={title} className="w-full h-72 object-cover" />
      </div>
      <div className="blog-content w-full md:w-1/2">
        <h4 className="text-lg font-semibold">{title}</h4>

        {isExpanded ? (
          <div className="text-gray-600 space-y-4">
            {fullContent.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">{shortContent}</p>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-black font-bold text-sm mt-2 transition duration-300 hover:text-teal-600"
        >
          {isExpanded ? "SHOW LESS" : "CONTINUE READING"}
        </button>
      </div>
      <h1 className="absolute top-[-80px] left-0 text-[70px] font-bold text-gray-300 z-[-1]">{date}</h1>
    </div>
  );
};

// Main Blogs Page Component
const Blogs = () => {
  return (
    <>
      <Header />

      {/* Banner Section */}
      <section
        id="shop-header"
        className="contact-header flex items-center justify-center flex-col bg-cover bg-center object-cover mt-[4.5rem] md:mt-16 py-6 sm:py-8 px-4 sm:px-8 gap-2 sm:gap-3 md:gap-4 min-h-[30vh] sm:min-h-[50vh] md:min-h-[50vh]"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black text-center"># READMORE</h2>
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-xs sm:max-w-md md:max-w-2xl">
          New studies suggest that a ketogenic diet may help with weight loss and reduce diabetes medication needs,
          though further research is needed.
        </p>
      </section>

      {/* Blog Entries Section */}
      <section id="blog" className="py-24 px-5 md:px-36">
        <BlogEntry
          image={bloodImg}
          title="1.Exercising Outdoors When Air Quality Is Poor"
          date="13/01"
          shortContent="Knowing how to exercise safely when air quality is bad is important for your overall health. The strategies presented here will help you make informed decisions that will allow you to head outdoors and stay active, even when pollution or allergens are an issue..."
          fullContent={`Knowing how to exercise safely when air quality is bad is important for your overall health, as the physiological responses and health risks associated with air pollution include increases in resting and exercise heart rate and blood pressure, ischemia, and asthma, as well as decreases in lung function and oxygen-carrying capacity. Make informed decisions about protecting your lungs while exercising outdoors with these evidence-based strategies:

- Pay attention to the air quality index.
- Be mindful of when and where you exercise.
- Wear a face mask.
- Understand the risk-reward balance between physical activity and air pollution.`}
        />

        <BlogEntry
          image={boneImg}
          title=" 2.Helping Clients Overcome Setbacks"
          date="13/04"
          shortContent="Overcoming setbacks is a key element of long-term behavior change. Learn why setbacks happen and how to help clients stay motivated and build emotional resilience as they pursue their health and fitness goals.."
          fullContent={`Overcoming setbacks is a key element of long-term behavior change. Learn why setbacks happen and how to help clients stay motivated and build emotional resilience as they pursue their health and fitness goals. Read on for tips for supporting clients as they get back on track after a short-term setback, as well as strategies to help clients anticipate and prepare for future setbacks during their long-term lifestyle-change journeys. The behavior-change strategies featured include habit stacking, SMART goal setting, mindfulness practices and focusing on non-scale victories. `}
        />

        <BlogEntry
          image={tableImg}
          title="3. A Woman’s Guide to Weightlifting"
          date="13/04"
          shortContent="This woman’s guide to weightlifting explores physical differences between the sexes and offers tips for optimizing your exercise program. Read on to better understand hormonal differences in weightlifting and training during your period..."
          fullContent={`This blog serves as a woman’s guide to weightlifting, covering hormonal differences in weightlifting, including training during your period, as well as physical differences between the sexes that may impact recovery, outcomes and injury risk. Strategies are presented to optimize exercise programming, including how to create split routines depending on how often you exercise, as well as specific areas of focus that will help women avoid injury and see strength and power benefits both now and later in life.

While some weightlifting advice is universal, other advice is not, especially when it comes to training women and men. Physiology, anatomy and hormones, for example, can vary between women and men, and this can impact on how training should be programmed for women.`}
        />

        <BlogEntry
          image={skinImg}
          title="4. Equipment and Technology: Ensuring Accessibility for Clients with Disabilities!"
          date="13/04"
          shortContent="The boot-camp trend is still going strong perhaps because it’s not really trendy at all. The workout is simple, goes back to basics, is not tied to a single piece of equipment and uses a motivating team-oriented atmosphere. Discover the fitness benefits of popular boot camp style workouts in this unique ACE study.."
          fullContent={`This is the fourth of a five-part series from Lakeshore Foundation that will move through the five domains necessary to provide a comprehensive approach to ensuring that you are offering inclusive fitness programs and that your fitness center is accessible to all individuals, including those with disabilities. Join us as we move through the five domains to ensure your fitness center is welcoming to everyone. Read Parts 1 through 3 here:
           -  The Built Environment

- Inclusive Instruction

- Inclusive Fitness Services 
Read on to discover how equipment and technology can be the keys to inclusive and equitable fitness. And, use the step-by-step process to evaluate your current setup and make improvements to create an experience that is welcoming to all individuals.`}
        />

        <BlogEntry
          image={vitaminCImg}
          title="5. 10 Fitness Trends to Look Forward to in 2025"
          date="13/04"
          shortContent="Fitness trends explored in this blog include fitness trackers, recovery tools, inclusivity and anti-obesity medications. Learn more from the ACE CEO and Scientific Advisory Panel..."
          fullContent={`This blog explores 2025 fitness trends, identified by the ACE President and CEO, along with members of the ACE Scientific Advisory Panel. These experts also offer advice on how health coaches and exercise professionals can anticipate and take advantage of these trends to better serve their clients and expand their reach. Trends include: .

- AI in fitness 

- Better integration of data from fitness trackers 

- Virtual and hybrid training 

- Power training 

- Recovery tools 

- Inclusive fitness 

- Weight-inclusive approaches 

- Anti-obesity medications 

- Food as medicine 

- More holistic approaches to fitness and wellness`}
        />
      </section>

      <Footer />
    </>
  );
};

export default Blogs;
