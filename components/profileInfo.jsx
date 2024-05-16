import { Avatar } from "flowbite-react";

export default function ProfileInfo() {
  return (
    <div className="flex items-center gap-4 m-0 mb-10">
      <img
        className="w-10 h-10 rounded-full"
        src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"
        alt=""
      />
      <div className="font-medium dark:text-white">
        <div>Mohammad Raifandi Baiqi</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
          Software Enggineer
        </div>
        {/* <p className="underline">Testing</p> */}
      </div>
    </div>
  );
}
