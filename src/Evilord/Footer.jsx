function Footer() {
  return (
    <div className="text-center text-xl font-bold text-white">
      <h1 className="mb-5 ">
        For further information you can check out the socials below
      </h1>

      <div className="mb-5 mt-2 flex justify-center gap-4">
        <a href="https://twitter.com/gangsterallstar">
          <i className="fa-brands fa-x-twitter me-8 text-2xl text-white md:text-3xl"></i>
        </a>
        <a href="https://discord.gg/gangsterallstar">
          <i className="fa-brands fa-discord me-8 text-2xl text-white md:text-3xl"></i>
        </a>
      </div>

      <p>All ight reserved, A dedication by Cryptic-Dev.</p>
    </div>
  );
}

export default Footer;
