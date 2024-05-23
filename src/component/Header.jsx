function Header() {
  return (
    <div className="flex justify-between p-4">
      <div className="flex">
        <h2 className=" text-xl font-bold md:text-3xl">MONAD</h2>
        <img
          src="https://static.chainbroker.io/mediafiles/projects/monad/monad.jpeg"
          alt="Loader Image"
          className=" spinner ms-2 h-8 w-8 rounded-full"
        />
      </div>

      <div className="flex justify-between gap-4 text-xl font-semibold md:gap-8 md:text-2xl">
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Art</p>
        <p className="cursor-pointer">Contact</p>
      </div>
    </div>
  );
}

export default Header;
