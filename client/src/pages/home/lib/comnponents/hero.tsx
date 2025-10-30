import { Button } from "@/components/ui/button";

export default function Hero() {
  return (

        <div className="min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F9FAFE] pt-24">
                <div className="flex flex-col items-start justify-center ml-24 gap-12">
                    <h1 className="text-5xl md:text-5xl font-bold font-space-age">
                        Design your own watch
                    </h1>
                    <p className="text-lg text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lectus.
                    </p>
                    <Button className="bg-[#735CFF] rounded-md p-6 text-white cursor-pointer">
                        Design your watch
                    </Button>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="/hero-watch.png" alt="Hero" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>

  );
}