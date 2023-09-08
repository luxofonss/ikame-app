import BlurRound from "@/components/BlurRournd";
import Button from "@/components/Button";

export default function Career() {
  return (
    <div className="bg-[#131313]">
      {/* QOUTE */}
      <section className="relative w-full bg-no-repeat bg-cover bg-center h-[900px] bg-career-bg">
        <BlurRound className=" w-[361px] h-[361px] absolute top-[161px] left-[433px]" />
        <BlurRound className=" w-[353px] h-[353px] absolute top-[595px] left-[-63px]" />
        <BlurRound className=" w-[206px] h-[206px] absolute top-[582px] right-[-60px]" />
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="pt-[281px] flex flex-col gap-4">
              <h1 className="font-bold text-[60px] text-main-0">
                Career Opportunity
              </h1>
              <p className="font-medium text-[48px]">
                Reach the top of the world with
                <span className="text-main-0">iKame!</span>
              </p>
              <div>
                <Button>Apply</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
