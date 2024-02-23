import { downloadImage } from "@/actions/image-profile";
import { getBiography } from "@/actions/user";
import Image from "next/image"
import talibeJpg from "public/talibe.jpg";

const AboutMe = async() => {
  const biography = await getBiography();
  const imageProfile = await downloadImage();
  return (
    <div className="mt-10 pt-20 md:pt-30 mx-8 flex flex-col" id="about-me">
      <h3 className="text-4xl font-bold mb-10">About me</h3>
      <div className="flex-col md:grid md:grid-flow-row-dense md:grid-cols-3 md:grid-rows-1 space-y-4 justify-center gap-2">
        <div className="">
          <Image
            src={imageProfile.url}
            width={300}
            height={80}
            alt="photo de profile"
            className="rounded-3xl"
          />
        </div>
        <div className="md:col-span-2 p-4 border border-slate-100 bg-white/30 backdrop-blur-lg drop-shadow-5xl rounded-2xl">
          <h2 className="text-3xl font-semibold mb-4">Who is Talibé ?</h2>
          <p className="text-base md:text-xl">
            {biography}
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe