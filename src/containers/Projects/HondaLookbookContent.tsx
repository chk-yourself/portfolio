/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const HondaLookbookContent = () => {
  return (
    <>
      <Image
        style={{
          userSelect: 'none',
          objectFit: 'contain',
        }}
        src="/honda-lookbook.png"
        alt="Honda x 88rising lookbook preview"
        width={1536}
        height={1202}
        className="mb-8 rounded border border-slate-900"
      />
      <p className="text-sm">
        I designed and developed a digital lookbook to promote 88rising&apos;s
        latest collection in collaboration with Honda.
      </p>
      <p className="mt-4 text-sm">
        Reimagining the traditional, print fashion lookbook in the modern web, I
        created a mobile-friendly carousel component to showcase the collection
        through editorial-style photography with strategically placed,
        interactive hotspots directly linking to product pages to enhance user
        engagement, streamline site navigation, and increase sales conversions,
        ultimately delivering a contemporary, immersive shoppable catalog
        experience.
      </p>
    </>
  );
};

export default HondaLookbookContent;
