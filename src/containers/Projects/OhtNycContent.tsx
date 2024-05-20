/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const OhtNycContent = () => {
  return (
    <>
      <Image
        style={{
          userSelect: 'none',
          objectFit: 'contain',
        }}
        src="/ohtnyc.png"
        alt="88rising x OHT NYC collab"
        width={1536}
        height={1202}
        className="mb-8 rounded border border-slate-900"
      />
      <p className="">
        I designed and developed a landing page to promote the launch of
        88rising&apos;s first collection with OHT NYC, featuring an exclusive
        interview with their CEO to drive the story behind the collection.
      </p>
      <p className="mt-4">
        Collaborating closely with cross-functional teams across both
        organizations to bring their shared creative vision to life in alignment
        with their business objectives, I implemented engaging customer
        touchpoints to enhance brand identity, brand engagement, brand
        visibility, and ultimately drive sales conversions.
      </p>
      <p className="mt-4">
        To further enrich the narrative, I strategically embedded Instagram
        posts, leveraging social proof to bolster authenticity, credibility, and
        brand engagement. In addition, I designed, engineered, and integrated
        custom carousel components to showcase the collection through
        editorial-style photography, recreating the traditional print lookbook
        experience into a more immersive, mobile-friendly, digital format with
        direct links to product pages to facilitate a seamless customer journey
        from inspiration to purchase.
      </p>
    </>
  );
};

export default OhtNycContent;
