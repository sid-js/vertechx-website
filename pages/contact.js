import React from "react";
import MainLayout from "@/Components/MainLayout";
import Link from "next/link";
import Image from "next/image";
const Contact = () => {
  return (
    <MainLayout>
      <section className="h-screen snap-start shrink-0 z-10 pt-20">
        <div className="flex flex-col items-start justify-center w-full mt-8"></div>
        <article className="flex items-center justify-center mt-6">
          <div className="flex flex-col justify-center w-full gap-10 bg-white bg-opacity-5 backdrop-blur-sm border h-full border-gray-700 rounded-lg p-14">
            <div className="text-left text-white text-5xl font-medium mb-9">
              <span className="absolute top-0 left-0 mt-10 ml-10 underline decoration-purple-500">
                Contact us:
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-left w-full text-xl">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
                <div className="flex flex-col items-center justify-center p-4 text-center bg-black rounded-lg">
                  <h3 className="text-xl font-medium text-white underline decoration-purple-500  top-0">Chief Co-ordinator:</h3>
                  <p className="mt-2 text-white">
                    Rodney -{" "}
                    <a href="tel:+9739482736" className="underline font-bold text-pink-500 hover:text-pink-400">
                      9739482736
                    </a>
                  </p>
                  <p className="mt-2 text-white">
                    Ashwin -{" "}
                    <a href="tel:+917337769676" className="underline font-bold text-pink-500 hover:text-pink-400">
                      7337769676
                    </a>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 text-center bg-black rounded-lg">
                  <h3 className="text-xl font-medium text-white underline decoration-purple-500 top-0">Core Team Handling:</h3>
                  <p className="mt-2 text-white">
                    Shyam -{" "}
                    <a href="tel:+919945806428" className="underline font-bold text-pink-500 hover:text-pink-400" >
                      9945806428
                    </a>
                  </p>
                  <p className="mt-2 text-white">
                    Sreeram -{" "}
                    <a href="tel:+918861658061" className="underline font-bold text-pink-500 hover:text-pink-400" >
                      8861658061
                    </a>
                  </p>
                  <p className="mt-2 text-white">
                    Sudhanwa -{" "}
                    <a href="tel:+919916767279" className="underline font-bold text-pink-500 hover:text-pink-400">
                      9916767279
                    </a>
                  </p>
                  <p className="mt-2 text-white">
                    Kannan -{" "}
                    <a href="tel:+918904901335" className="underline font-bold text-pink-500 hover:text-pink-400"
                    >
                      8904901335
                    </a>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 text-center bg-black rounded-lg">
                  <h3 className="text-xl font-medium text-white underline decoration-purple-500">Events related Query:</h3>
                  <p className="mt-2 text-white">
                    Prateek -{" "}
                    <a href="tel:+917249372899" className="underline font-bold text-pink-500 hover:text-pink-400">
                    7249372899
                    </a>
                  </p>
                  <p className="mt-2 text-white">
                    Tanisha -{" "}
                    <a
                      href="tel:+919731216858"
                      className="underline font-bold text-pink-500 hover:text-pink-400"
                    >
                      9731216858
                    </a>
                  </p>
                  <p className="mt-2 text-white">
                    Reethika -{" "}
                    <a
                      href="tel:+917795236841" className="underline font-bold text-pink-500 hover:text-pink-400" >
                      7795236841
                    </a>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 text-center bg-black rounded-lg">
                  <h3 className="text-xl font-medium text-white underline decoration-purple-500">Registration Queries:</h3>
                  <p className="mt-2 text-white">
                    Samhitha -{" "}
                    <a
                      href="tel:+919591834216"
                      className="underline font-bold text-pink-500 hover:text-pink-400"
                    >
                      9591834216
                    </a>
                  </p>
                  <p className="mt-2 text-white">
                    Rohit -{" "}
                    <a
                      href="tel:+919731021515"
                      className="underline font-bold text-pink-500 hover:text-pink-400"
                    >
                      9731021515
                    </a>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 text-center bg-black rounded-lg">
                  <h3 className="text-xl font-medium text-white underline decoration-purple-500">Hospitality:</h3>
                  <p className="mt-2 text-white">
                    Surabhi -{" "}
                    <a
                      href="tel:+917019393492"
                      className="underline font-bold text-pink-500 hover:text-pink-400"
                    >
                      7019393492
                    </a>
                  </p>
                  <p className="mt-2 text-white">
                    Abhinav -{" "}
                    <a
                      href="tel:+918017991099"
                      className="underline font-bold text-pink-500 hover:text-pink-400"
                    >
                      8017991099
                    </a>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 text-center bg-black rounded-lg">
                  <h3 className="text-xl font-medium text-white underline decoration-purple-500">Faculty Co-ordinator:</h3>
                  <p className="mt-2 text-white">
                  Hameem I Shanavas-{" "}
                    <a
                      href="tel:+919620959690"
                      className="underline font-bold text-pink-500 hover:text-pink-400"
                    >
                      9620959690
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center text-left w-full text-xl">
                <div className="flex flex-row justify-center items-center gap-6 py-3">
                  <div classname="group">
                    <Link 
                    className="flex justify-center items-center gap-4 text-white ls" 
                    href="https://www.instagram.com/vertechx/">
                      <img
                      className="w-8  group-hover:scale-105 transition duration-200"
                      alt=""
                      src="/newinsta.svg"
                      />
                        <span className="ls-2 group-hover:ls transition-all duration-300 hidden md:inline">INSTAGRAM</span>
                    </Link>
                  </div>
                  <div className="">
                    <Link 
                    className="flex justify-center items-center gap-4 text-white ls group cursor-pointer" href="https://www.youtube.com/@vertechxofficial8784">
                      <img className="w-10 group-hover:scale-105 transition duration-200 " 
                      src="/vector.svg" 
                      alt=""/>
                        <span className="ls-2 group-hover:ls-1 transition-all duration-300 hidden md:inline">YOUTUBE</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </MainLayout>
  );
};
export default Contact;
