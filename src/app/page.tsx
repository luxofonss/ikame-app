import AchievementRound from "@/components/AchievementRound";
import BestProductItem from "@/components/BestProductItem";
import BlurRound from "@/components/BlurRournd";
import FooterCarousel from "@/components/FooterCarousel";
import IntroduceItem from "@/components/IntroduceItem";

export default function Home() {
  return (
    <div>
      {/* QOUTE */}
      <section className="relative w-full bg-no-repeat bg-cover bg-center h-[900px] bg-home-bg overflow-hidden">
        <BlurRound className=" w-[361px] h-[361px] absolute top-[161px] left-[433px]" />
        <BlurRound className=" w-[353px] h-[353px] absolute top-[595px] left-[-63px]" />
        <BlurRound className=" w-[206px] h-[206px] absolute top-[582px] right-[-60px]" />
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="pt-[281px]">
              <h1 className="font-bold text-[60px] text-main-0">
                Think It, Dream It,
              </h1>
              <h1 className="font-bold text-[60px]">We&apos;ll Build It</h1>
              <p className="text-2xl leading-10">
                iKame Applications - a Mobile Apps Publisher. Powering your app
                with a Robust Ecosystem and Passionate Team.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SHORT INTRO */}
      <section className="w-full mx-auto bg-main-0 h-[232px] pt-10 pb-[46px]">
        <h3 className="text-center text-4xl italic font-bold">
          Led by Ambition, Creativity, and Trust
        </h3>
        <p className="text-center mt-[18px] text-2xl">
          We are a tight-knit team of around 50 app developers who always aim
          high, aspire <br /> innovation & creation with the ultimate purpose to
          turn that mindset into a success
        </p>
      </section>
      {/* ACHIEVEMENT */}
      <section className="w-full bg-no-repeat bg-contain bg-bottom h-[798px] bg-download-bg">
        <div className="container h-full mx-auto flex justify-between items-center">
          <AchievementRound
            src="/download-icon.svg"
            alt="download"
            number="Top 1"
            desc="Download in ASEA"
          />
          <AchievementRound
            src="/user-icon.svg"
            alt="user"
            number="5M+"
            desc="Daily  Active Users"
          />
          <AchievementRound
            src="/users-icon.svg"
            alt="users"
            number="1.8 B+"
            desc="Total Download"
          />
          <AchievementRound
            src="/product-icon.svg"
            alt="products"
            number="100+"
            desc="Successful Products"
          />
        </div>
      </section>
      {/* BEST PRODUCTS */}
      <section className="container mx-auto mt-[120px]">
        <div className="flex justify-between">
          <BestProductItem
            src="/secure.png"
            title="Title"
            description="desc"
            link="/"
          />
          <BestProductItem
            src="/saver.png"
            title="Saver For WA Status"
            description="Saver For WhatsApp Status - The best app for download status images and videos for whatsapp!"
            link="/"
          />
          <BestProductItem
            src="/control.png"
            title="Title"
            description="desc"
            link="/"
          />
        </div>
      </section>
      {/* MORE INTRODUCE */}
      <section className="mt-40">
        <div className="container mx-auto">
          <h2 className="text-center font-bold text-[48px]">
            Set your products up to <b>Become a New Giant!</b>
          </h2>
          <div className="mt-80 grid gap-20">
            <IntroduceItem
              textLeft
              src="/team-1.png"
              heading="9 years of application development experience"
              description="There's no over-night success. Founded in 2014, we have gone through 9 years of ups and downs, day by day learned and built up our people, technology, products, culture and systems that altogether bring unique and trusted values to the business"
            />
            <IntroduceItem
              textLeft={false}
              src="/team-2.png"
              heading="Meet our proud team
              of experts"
              description="The success of a product is not solely built on the shoulders’ of a developer, but on the expertise of different parts of the business. We are not just here to grow your app. We’re here to share best practices and a  series of keys to polish every step of the app development process. "
            />
            <IntroduceItem
              textLeft
              src="/team-3.png"
              heading="Innovative Publishing strateges"
              description="Nonstop research & development nurtured in a culture of creativity & innovation is the Lord Star of our business. We are not happy with the existing strategies, but always seek new, competitive and breakthrough ways to achieve targets."
            />
            <IntroduceItem
              textLeft={false}
              src="/team-4.png"
              heading="Extensive partnership neworks"
              description=" As part of the iKame Global Group, Begamob receives insights, analytics and Top Priority Support from the big partners and ad networks such as Google, Meta, Unity, iRonSource. They are crucial to the product growth."
            />
          </div>
        </div>
      </section>

      {/* CAREER */}
      <section className="relative w-full h-[800px] bg-no-repeat bg-cover bg-center bg-career mt-[120px]">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center">
            <h3 className="text-center text-main-0 text-[96px] font-bold mt-[165px]">
              Career
            </h3>
            <h4 className="text-center text-[48px] font-bold ">
              Be a part of a team of Innovators!
            </h4>
            <p className="text-center text-2xl mt-8">
              Turning an app to a Giant takes a team.
              <br /> We are an inspired, creative and ambitious group that loves
              to conquer challenges and growth-hacking. We have 9 years of app
              development experience and a proud product portfolio - with that
              you can learn about the app business while accumulating your
              skills to become the best version of yourself.
            </p>
            <button className="bg-white text-main-0 font-bold px-10 mt-[17px] rounded-[14px] py-[13px]">
              Join Us Now
            </button>
          </div>
        </div>
      </section>

      {/* CAROUSEL  */}
      <FooterCarousel />
    </div>
  );
}
