import { socialNetworks } from "@/app/constants/data";

const SocialNetWork2 = () => {
  return (
    <div className="flex flex-col items-center mb-20 md:mb-32"> 
      <nav>
        <div className="flex flex-col items-center gap-8 md:gap-14 px-1 py-3 md:px-3 md:py-4 rounded-fullbackdrop-blur-xl">
          {socialNetworks.map((item) => (
            <div key={item.id}>
              <a
                href={item.src}
                target="_blank"
                className="transition-transform duration-500 ease-in-out transform hover:scale-125 hover:text-violet-500"
              >
                <div className="flex justify-center items-center">
                  {item.logo}
                </div>
              </a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SocialNetWork2;
