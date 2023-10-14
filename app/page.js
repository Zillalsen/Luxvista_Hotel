"use client";
import { HeroSlider, BookForm, Rooms } from "@/components";
const Home = () => {
  return (
    <>
      <HeroSlider />
      <div className="container mx-auto relative">
        <div
          className="bg-accent/20 mt-4 p-4 lg:absolute 
          lg:left-0 lg:right-0 lg:shadow-xl lg:p-0 lg:-top-12 lg:z-30"
        >
          <BookForm />
        </div>
      </div>
      <Rooms />
    </>
  );
};

export default Home;
