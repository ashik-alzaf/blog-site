import BlogSection from "@/components/blogSection/BlogSection";
import Demo from "@/components/demo/Demo";
import Footer from "@/components/footer/Footer";
import { NavigationMenuDemo } from "@/components/header/bottom-nav/bottom-nav";
import Material from "@/components/material/Material";
import RecentPosts from "@/components/recentPosts/RecentPosts";
import RecentVideo from "@/components/recentVideo/RecentVideo";
import Slider from "@/components/slider/Slider";
import Trending from "@/components/trending/Trending";

export default function Home() {
  return (
    <>
      <div className="relative 2xl:h-[663px]  xl:h-[446px] lg:h-[357px] lg:block hidden">
        <Slider />
      </div>
      <Demo />
      <NavigationMenuDemo />
      <div className=" lg:w-[1200px] mx-auto">
        <BlogSection />
        <Material />
      </div>
      <Trending />
      <div className="w-[1200px] mx-auto">
        <RecentPosts />
      </div>
      <RecentVideo />
      <Footer />
    </>

  );
}
