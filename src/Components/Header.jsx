import lwsLogo from "../assets/lws-logo-en.svg";

export default function Header() {
  return (
    <>
      <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex justify-between items-center gap-x-6">
          <a href="">
            <img className="h-11" src={lwsLogo} alt="" />
          </a>
        </div>
      </nav>
    </>
  );
}
