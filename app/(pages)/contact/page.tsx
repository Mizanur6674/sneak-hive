import { aboutAuthorTopData } from "@/components/shared/data/data";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/wapper";
import Link from "next/link";

function Contact() {
  return (
    <Wrapper>
      <div className="my-14 lg:my-24 w-full">
        <div className="mb-10 lg:mb-14">
          <h1 className=" text-black-300 text-center text-[19px] lg:text-[27px]">
            <span className=" bg-theme-parsian-green text-lime-400 px-1 mr-3 font-thin text-[19px] lg:text-[27px]">
              Contact
            </span>
            Us
          </h1>
        </div>
        <div className=" flex flex-col lg:flex-row items-start gap-12">
          <form className="w-full lg:w-[50%] space-y-6">
            <div className=" flex items-center gap-4">
              <input
                type="text"
                className=" w-full border border-[#94D7D3] px-2 py-2 pb-4 rounded placeholder:text-[#999] p15"
                placeholder="Name"
              />
              <input
                type="text"
                className=" w-full border border-[#94D7D3] px-2 py-2 pb-4 rounded placeholder:text-[#999] p15"
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              className=" w-full border border-[#94D7D3] px-2 py-2 pb-4 rounded placeholder:text-[#999] p15"
              placeholder="Subject"
            />
            <textarea
              name=""
              id=""
              placeholder=" Type Your Message"
              className=" w-full border border-[#94D7D3] px-2 py-2 pb-10 rounded text-[#999] p15"
            >
              Type your message
            </textarea>
            <Button>Send Message</Button>
          </form>
          <div className="w-full lg:w-[30%] ">
            <p className=" p15 text-theme-gray ">
              Dynamically underwhelm integrated outsourcing via timely models.
              Rapidiously reconceptualize visionary imperatives without
            </p>

            <p className="mt-8 lg:mt-0 p15 text-theme-gray pt-2">
              blog.notebook@gmail.com
            </p>
            <p className=" p15 text-theme-gray pt-2">+88-01864009917</p>
            <p className=" p15 text-theme-gray pt-2 pb-8">
              Uttara, Dhaka, Bangladesh
            </p>

            {/* for social button */}
            <h5 className=" text-theme-black capitalize">Follow on:</h5>
            <div className=" flex items-center gap-4 mt-4">
              {aboutAuthorTopData.map((item, index) => {
                return (
                  <Link href={item.link} key={index} className="cursor-pointer">
                    <item.icon className="w-6 h-6 text-[#999] border border-theme-light-gray rounded hover:border-none hover:text-white p-1 hover:bg-orange-500" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
