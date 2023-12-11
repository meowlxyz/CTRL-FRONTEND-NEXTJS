import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/bg-vector.svg"
          layout="fill"
          objectFit="cover"
          alt="background"
        />
      </div>

      {/* Floating images */}
      <div className="absolute z-50" style={{ top: "50px", left: "100px" }}>
        <Image
          src="/assets/ellipse.svg"
          width={100}
          height={100}
          alt="floating image"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 p-8 text-white">
        <h1 className="huge-extrabold-text text-center uppercase">
          Your All-in-One Trading Terminal on Telegram
        </h1>
      </div>
    </div>
  );
}
