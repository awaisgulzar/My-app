import Link from "next/link";
function Header() {
  return (
    <main className="flex justify-between bg-slate-400 h-16 content-center">
      <h1 className="m-4 text-3xl font-bold italic">Jazzi</h1>

      <nav className="m-5 space-x-5 ">
        <Link className="hover:bg-slate-600 hover:rounded " href={"/"}>
          Home
        </Link>
        <Link className="hover:bg-slate-600 hover:rounded " href={"/about"}>
          About
        </Link>
        <Link className="hover:bg-slate-600 hover:rounded " href={"/contact"}>
          Contact US
        </Link>
        <Link className="hover:bg-slate-600 hover:rounded " href={"/services"}>
          Services
        </Link>
        <Link
          className="hover:bg-slate-600 hover:rounded "
          href={"/gellry/image"}
        >
          Gellry
        </Link>
      </nav>
    </main>
  );
}

export default Header;
