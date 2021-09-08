import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { FaSearch, FaSmile } from "react-icons/fa";
import Bestdesigncomp from "./components/Bestdesigncomp";
import Smallimg from "./components/Smallimg";

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section className="grid grid-cols-2 container mx-auto mt-24 mb-24">
        <Bestdesigncomp
          title="Best Design Strategy"
          description="Prairie dogging drop-dead date old boys high touch client."
        />
        <Bestdesigncomp
          title="Innovative Technology"
          description="overcome key issues to meet key milestones do i have consent."
        />
        <Bestdesigncomp
          title="User Experience"
          description="Get six alpha pups in here for a focus group items at the end of the day."
        />
        <Bestdesigncomp
          title="Followers Trends"
          description="All hands on deck golden goose low- hanging fruit yet imagineer."
        />
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
        </div>
      </section>

      <section className="pt-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 ">
            <div className="col-span-1">
              <div className="text-sm text-gray-500 pt-8 pr-8">
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
            <div className="giftbox "></div>
          </div>
          <div className="absolute ">
            <div className="bg-black w-40 h-32 p-4">
              <div className="text-gray-500 text-sm">uuux</div>
              <div className="text-white text-sm pt-1">
                Touch base come up with something more
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




          <div className="pt-6 pl-12 pr-12">
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
          <div className="pt-6 pl-12 pr-12">
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



      






    </div>
  );
}

export default App;
