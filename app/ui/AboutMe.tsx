import Image from "next/image"
import talibeJpg from "public/talibe.jpg";

const AboutMe = () => {
  return (
    <div className="mt-10 pt-20 md:pt-30 mx-8 flex flex-col" id="about-me">
      <h3 className="text-4xl font-bold mb-10">About me</h3>
      <div className="flex-col md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-1 space-y-4 justify-center gap-2">
        <div className="">
          <Image
            src={talibeJpg}
            width={300}
            height={80}
            alt="talibe balde"
            className="rounded-3xl"
          />
        </div>
        <div className="md:col-span-2 p-4 border border-slate-100 bg-white/30 backdrop-blur-lg drop-shadow-5xl rounded-2xl">
          <h2 className="text-3xl font-semibold mb-4">Who is Talibé ?</h2>
          <p className="text-base md:text-lg">
            Hello! I&apos;m Talibé Balde, a 30-year-old web developer from France.
            I work as a freelancer and currently collaborate with the Ministry of Interior.
          </p>
          <p className="text-base md:text-lg mt-2">
            I&apos;m passionate about web development and enjoy learning new things.
            I&apos;m a curious person who loves exploring new technologies.
          </p>
          <p className="text-base md:text-lg mt-2">
            Football is another passion of mine. I enjoy watching and playing it with friends.
            My favorites teams are Liverpool and Real Madrid.
            I&apos;m a social person who enjoys meeting new people.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe