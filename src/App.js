import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import {
  FaSearch,
  FaSmile,
  FaInstagram,
  FaFacebookF,
  FaBasketballBall,
  FaTwitter,
} from "react-icons/fa";
import Bestdesigncomp from "./components/Bestdesigncomp";
import Smallimg from "./components/Smallimg";

const object = {
  data: [
    {
      title: "Best Design Strategy",
      subtitle: "Praire dogging drop-dead date old boys club high touch",
    },
  ],
};

const object1 = {
  data: [
    {
      title: "innovative Technology",
      subtitle: "Overcome key issues meet key milestones do i haev consent",
    },
  ],
};

const object2 = {
  data: [
    {
      title: "User Experiennce",
      subtitle: "Get six alpha pups in here for a focus group items at the end of the day",
    },
  ],
};

const object3 = {
  data: [
    {
      title: "Flolowers Trends",
      subtitle: "All hands on deck golden goose low-hanging fruit yet imagineer.",
    },
  ],
};

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section className="grid grid-cols-2 container mx-auto mt-24 mb-24">
        {object.data.map((item, idx) => (
          <Bestdesigncomp
            key={idx}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}

        {object1.data.map((item, idx) => (
          <Bestdesigncomp
            key={idx}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}

        {object2.data.map((item, idx) => (
          <Bestdesigncomp
            key={idx}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}

        {object3.data.map((item, idx) => (
          <Bestdesigncomp
            key={idx}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </section>

      <section className="mb-20">
        <div className="grid grid-cols-2">
          <div className="leftimage"></div>
          <div className="pl-16 pt-6">
            <div className="text-sm text-gray-500 mt-2 ">--our mission</div>
            <p className="font-bold text-2xl mt-2 mb-2">Who We are ?</p>
            <p className="text-sm">
              who's the goto on this job whith the way forward waste of resource
              shelfware, so closer to the metal enough to wash your face for UX
              put a record on and see who dances. Synergestic actionables
              marketing computer development html roi feedback team website.{" "}
            </p>
            <button className="border-2 font-bold px-4 py-1 mt-6">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div>
              <p className="text-gray-500 text-sm">--we in numbers</p>
              <p className="text-gray-500 text-sm pt-6">
                Teams were able to drive adoption and awareness marketing
                computers development html roi feedback team website or turn the
                ship deep but touch base.
              </p>
            </div>

            <div className="flex justify-center items-center mt-6">
              <span className="border-r-2 p-2 font-bold text-5xl pl-12 pr-6">
                924{" "}
                <p className="text-gray-500 text-xs pt-2">
                  SATISFACTION CLIENTS
                </p>{" "}
              </span>
              <span className="pl-6 p-2 font-bold text-5xl">
                35 <p className="text-gray-500 text-xs pt-2">AWARDS RECEIVED</p>{" "}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 mb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-3">
            <div className="text-gray-500 text-sm">
              --Team of professional
              <p className="font-bold text-2xl text-black pt-2">
                our team is always here to help you
              </p>
            </div>
            <div className="text-gray-500 text-sm pt-8 pl-12">
              Wheelhouse cross-pollination, nor face time turd polishing. Turn
              the ship. Drive awarness to increase keep it lean.
            </div>
            <div className="flex justify-center items-center pt-8">
              <button class="bg-transparent hover:bg-blue-500 text-black text-sm hover:text-white py-1 px-5 border border-black hover:border-transparent">
                JOIN US
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        {/* <div className="grid grid-cols-4 container mx-auto gap-2">
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png"
            className="w-24"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png"
            className="w-24"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png"
            className="w-24"
            alt=""
          />
          <div className="bg-black"></div>
        </div>
        <div className="grid grid-cols-4 container mx-auto gap-2">
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png"
            className="w-24"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png"
            className="w-24"
            alt=""
          />
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__340.png"
            className="w-24"
            alt=""
          />
          <div className="bg-black"></div>
        </div> */}

        {/* <div className = "">
        <div className = "pl-20">
          
           <div className = "grid grid-cols-2">
            <div className = "grid-grid-cols-3">
              <div className = "col-span-1 flex gap-6">
              <div className = "bg-blue-500 w-32 h-32">asdasdasd</div>
              <div className = "bg-blue-500 w-32 h-32">asdasdasd</div>
              <div className = "bg-blue-500 w-32 h-32">asdasdasd</div>
              </div>
              <div className = "col-span-1 flex gap-6 pt-6">
              <div className = "bg-blue-500 w-32 h-32">asdasdasd</div>
              <div className = "bg-blue-500 w-32 h-32">asdasdasd</div>
              <div className = "bg-blue-500 w-32 h-32">asdasdasd</div>
              </div>
              
              
            </div>
            
            
            

            <div className = "">
              
              <div className = "bg-black w-40 h-72 w-full"></div>
            </div>
           </div>
          
        </div>
      </div> */}

        <div className="container ">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <div className=" image w-24"></div>
                </div>
                <div className="col-span-1">
                  <div className=" image1"></div>
                </div>
                <div className="col-span-1">
                  <div className="image2"></div>
                </div>
                <div className="col-span-1">
                  <div className=" image3"></div>
                </div>
                <div className="col-span-1">
                  <div className=" image4"></div>
                </div>
                <div className="col-span-1">
                  <div className=" image5"></div>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-black p-12 ">
              <div className="">
                <p className=" text-gray-400">04/11</p>
                <p className=" text-gray-400 pt-8">DEVELOPER</p>
                <p className="text-gray-300 font-bold ">Jeremy Harvey</p>
                <p className="text-gray-200 pt-3">
                  i realized she was just office pretty. Products need full
                  resourcing and support from a cross-functional team in order
                  to be built.
                </p>
                <div className="text-white pt-12">
                  <FaInstagram className="inline" />
                  <FaFacebookF className="inline ml-5" />
                  <FaTwitter className="inline ml-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 ">
            <div className="col-span-1">
              <div className="text-sm5 text-gray-500 pt-8 pr-8 ">
                Locked and loaded we're all in thes together, even if our
                business function different, for i have a hard stop in an hour
                and half or fast track.
              </div>
            </div>
            <div className="col-span-1">
              <p className="text-gray-500 text-sm pl-6">--our portfolio</p>
              <p className="font-bold text-2xl pl-6">
                we create digital experiences for brands and companies
              </p>
            </div>
          </div>
          <div className="pt-8 ">
            <div className="giftbox relative">
              <div className="absolute right-0 -bottom-16">
                <div className="bg-black w-40 h-32 p-4">
                  <div className="text-gray-500 text-sm">uuux</div>
                  <div className="text-white text-sm pt-1">
                    Touch base come up with something more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" pt-60">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="font-bold text-2xl">Our clients</div>
            </div>
            <div className="col-span-1">
              <div className="font-bold text-gray-500 text-sm">
                --we worked with.
              </div>
              <p className="text-sm text-gray-500">
                get six alpha pups in here for a focus group staff big picture
                engagement, and critical mass, for we've got to manage that low
                back strategy hanging fruit.
              </p>
            </div>
          </div>

          <div className="pt-20 pl-12 pr-12">
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <div></div>
                <p className="text-gray-500 text-sm">BDB Group </p>
              </div>
              <div className="col-span-1">
                <div></div>
                <p className="text-gray-500 text-sm">MoolGreat </p>
              </div>
              <div className="col-span-1">
                <div></div>
                <p className="text-gray-500 text-sm">MMl production </p>
              </div>
              <div className="col-span-1">
                <div></div>
                <p className="text-gray-500 text-sm">stefani </p>
              </div>
            </div>
          </div>
          <div className="pt-8 pl-12 pr-12">
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <div></div>
                <p className="text-gray-500 text-sm"> </p>
              </div>
              <div className="col-span-1">
                <div></div>
                <p className="text-gray-500 text-sm">Sonami </p>
              </div>
              <div className="col-span-1">
                <div></div>
                <p className="text-black text-sm font-bold">MEDIAS </p>
              </div>
              <div className="col-span-1">
                <div></div>
                <p className="text-gray-500 text-sm"> </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-40 ">
        <div className="bg-black">
          <div className="container mx-auto">
            <div className="grid grid-cols-2">
              <div className="p-16">
                <p className="text-white">Lpardo</p>
                <p className="text-gray-500 text-sm">
                  we do care about details and stuff.
                </p>
                <ul className="pt-96">
                  <li className="text-white font-bold inline">
                    <a href="#">About</a>
                  </li>
                  <li className="text-white ml-5 inline">
                    <a href="#">Works</a>
                  </li>
                  <li className="text-white ml-5 inline">
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div>
                {" "}
                <div className="pt-12 pl-10">
                  <p className="text-white">
                    "There are no secrets to success. it is the result of
                    preparation, hard work, and ongoing learning."
                  </p>

                  <div className="grid grid-cols-2">
                    <div className="text-white col-span-1 text-xm text-gray-500 pt-12 text-sm">
                      VISIT US{" "}
                      <p className="text-gray-400 pt-4">
                        3131 chestnut Ave, Brooklyn, NY 11238, United States
                      </p>
                    </div>
                    <div className="ml-12 ">
                      <div className="text-white col-span-1 text-xm text-gray-500 pt-12 text-sm">
                        CONTACT US{" "}
                        <p className="text-gray-400 pt-4">info@lpardo.com</p>
                        <p className="text-gray-400">+1518-719-0102</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 pt-60">
                  <div className="text-white">
                    <div className="bg-yellow-400 w-34 h-16">
                      <div className="text-black text-center pt-5">
                        <FaInstagram className="inline" />
                        <FaFacebookF className="inline ml-5" />
                        <FaBasketballBall className="inline ml-5" />
                        <FaTwitter className="inline ml-5" />
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm flex justify-center items-center">
                    &copy; 2020. Copyright 42Theme
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
