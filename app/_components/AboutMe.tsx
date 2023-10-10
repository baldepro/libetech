import Image from "next/image"
import talibeJpg from "public/talibe.jpg";

const AboutMe = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-6">
      <div className="col-start-1 col-span-8 row-span-4 row-start-1">
        <h3 className="text-4xl font-bold mb-10">About me</h3>
        <div className="flex flex-col gap-6 p-4 border border-slate-100 bg-white/30 backdrop-blur-lg drop-shadow-5xl rounded-2xl">
          <h2 className="text-3xl font-semibold">Who is Talibé?</h2>
          <p className="text-base col-span-6">
            Hello! I'm Talibé Balde, a 30-year-old web developer from France.
            I work as a freelancer and currently collaborate with the Ministry of Interior.
            I'm passionate about web development and enjoy learning new things.
            I'm a curious person who loves exploring new technologies.
            Football is another passion of mine. I enjoy watching and playing it with friends.
            My favorites teams are Liverpool and Real Madrid.
            I'm a social person who enjoys meeting new people.
          </p>
        </div>
      </div>
      <div className="col-start-8 col-span-4 row-span-4 row-start-1 pl-20">
        <Image
          src={talibeJpg}
          width={200}
          height={80}
          alt="talibe balde"
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
export default AboutMe