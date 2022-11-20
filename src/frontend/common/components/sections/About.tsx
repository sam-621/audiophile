/* eslint-disable @next/next/no-img-element */
export const About = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row-reverse lg:gap-32">
      <div className="mb-10 flex-grow">
        <img
          src="/img/shared/desktop/image-best-gear.jpg"
          alt="Best gear"
          className="object-cover rounded-lg flex-grow"
        />
      </div>
      <div className="lg:w-1/2">
        <h3 className="font-bold text-3xl text-center mb-8 lg:text-left">
          BRINGING YOU THE <strong className="text-primary">BEST</strong> AUDIO GEAR
        </h3>
        <p className="text-center font-medium text-subtitle lg:text-left">
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  )
}
