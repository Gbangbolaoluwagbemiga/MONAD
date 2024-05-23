import team from "../assets/Monad-team.jpg";
import ParticlesComponent from "./Particles";

function Team() {
  return (
    <div className="">
      <div className="hiddn h-[-10rem] md:h-auto">
        <ParticlesComponent id="tsparticles" />
      </div>
      <h1 className="mt-4 text-center text-2xl font-extrabold text-[#5246A3] md:mt-8 md:text-4xl">
        THE TEAM
      </h1>

      <img
        src={team}
        className="m-auto my-2 h-[95%] w-[99%] p-4 md:my-12 md:h-[20%] md:w-[60%] md:p-8"
        alt="#"
      />
    </div>
  );
}

export default Team;
