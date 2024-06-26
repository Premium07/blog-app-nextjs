"use client";
// import BlogItems from "@/components/blog-items/BlogItems";
import BlogList from "@/components/blog-list/BlogList";
// import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
     <BlogList/>
     {/* <Footer/> */}
    </main>
  );
}
