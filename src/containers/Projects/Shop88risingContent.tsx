/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const Shop88risingContent = () => {
  return (
    <>
      <Image
        style={{
          userSelect: 'none',
          objectFit: 'contain',
        }}
        src="/88rising-shop.png"
        alt="shop.88rising.com preview"
        width={1536}
        height={1202}
        className="mb-8 rounded border border-slate-900"
      />
      <p className="">
        I spearheaded the ambitious redesign of 88rising&apos;s flagship
        e-commerce store, developing and designing a bespoke Shopify 2.0 theme
        that significantly enhanced web performance by 65%, accessibility by
        30%, and SEO by 10%, contributing to a 20% increase in sales conversion
        rates.
      </p>
      <p className="mt-4">
        Collaborating closely with Product, Creative, Marketing, and Accounts
        teams, I designed and engineered innovative, cost-effective solutions to
        enhance user engagement, lead generation, customer retention, brand
        visibility, campaign effectiveness, inventory strategy, operational
        efficiency, brand visibility, and UX, ensuring seamless, intuitive
        implementation without the need for coding knowledge.
      </p>
      <p className="mt-4">
        Leveraging advanced JavaScript, modern Web APIs, data-driven insights,
        and creative problem-solving, I navigated around challenging Shopify
        constraints to implement advanced features, including:
      </p>
      <ul className="my-4 list-disc px-6 text-xs md:px-8 lg:text-[0.85rem]">
        <li>geolocation-based content customization</li>
        <li className="mt-1">
          granular content access control based on configurable authentication
          rules
        </li>
        <li className="mt-1">product variant picker</li>
        <li className="mt-1">shoppable image hotspots</li>
        <li className="mt-1">automated scheduled content updates</li>
        <li className="mt-1">loyalty program integration</li>
        <li className="mt-1">automated email and SMS marketing flows</li>
      </ul>
      <p className="">
        In addition, I created comprehensive, supplementary user guides to
        further facilitate cross-functional collaboration and improve overall
        operational efficiency.
      </p>
    </>
  );
};

export default Shop88risingContent;
