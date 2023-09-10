import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {};
interface INavigateList {
  title: string;
  links: {
    title: string;
    path: string;
  }[];
}
const Footer: FC<Props> = ({}) => {
  return (
    <footer>
      
      <div className="w-full h-[300px] bg-footer-bg bg-no-repeat bg-cover">
        <div className="container mx-auto">
          <div className="italic text-4xl font-semibold text-center pt-[84px]">
            To become the next Top Giant
          </div>
          <div className="flex justify-center mt-4">
            <Link
              className="bg-white text-main-0 font-bold px-[50px] mt-[17px] rounded-[14px] py-[16px]"
              href={"/publish"}
            >
              Publish your App
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-40">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <Image
              src="/logo.png"
              alt="logo"
              priority
              width={168}
              height={60}
            />
            <div className="flex items-center gap-[10px] mt-4">
              <Image src="/phone.svg" alt="phone" width={18} height={18} />
              <span className="">0985369578</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image src="/mail.svg" alt="phone" width={18} height={18} />
              <span className="">info@begamob.com</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <Image src="/map.svg" alt="phone" width={18} height={18} />
              <span className="">34 Hoàng Cầu, Đống Đa, Hà Nội, Việt Nam.</span>
            </div>
          </div>
          <NavigateList
            links={[
              { path: "", title: "Our Giant" },
              { path: "", title: "Publishing" },
            ]}
            title="Products"
          />
          <NavigateList
            links={[
              { path: "", title: "Begamob lite" },
              { path: "", title: "Carrers" },
              { path: "", title: "Blogs" },
            ]}
            title="Resource"
          />
          <NavigateList
            links={[
              { path: "", title: "Company" },
              { path: "", title: "About us" },
              { path: "", title: "Contacts us" },
            ]}
            title="About"
          />

          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fikameglobal&tabs&width=332&height=158&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="332"
            height="158"
            // style="border:none;overflow:hidden"
            className="border-non overflow-hidden"
            scrolling="no"
            frameBorder="0"
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="flex justify-between items-center mt-7">
          <div className="flex gap-3">
            <Image
              src="/gg-play-download.svg"
              alt="gg-play"
              width={135}
              height={40}
            />
            <Image
              className="text-white"
              src="/apple.svg"
              alt="apple"
              width={135}
              height={40}
            />
          </div>
          <div className="flex gap-7 items-center">
            <Link className="text-[#B9B9B9]" href={"/"}>
              Privacy Policy
            </Link>
            <div className="text-[24px] text-[#B9B9B9]">|</div>
            <Link className="text-[#B9B9B9]" href={"/"}>
              Terms of Use
            </Link>
            <div className="text-[24px] text-[#B9B9B9]">|</div>
            <Link className="text-[#B9B9B9]" href={"/"}>
              Cookie Settings
            </Link>
            <div className="text-[24px] text-[#B9B9B9]">|</div>
            <Link className="text-[#B9B9B9]" href={"/"}>
              2022 Begamob
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const NavigateList = ({ title, links }: INavigateList) => {
  return (
    <div>
      <div className="font-bold">{title}</div>
      <div className="bg-main-0 w-[22px] h-[2px] mt-[11px]"></div>
      <div className="flex flex-col gap-2 mt-[27px]">
        {links.map((link) => (
          <Link key={link.path} href={link.path}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
