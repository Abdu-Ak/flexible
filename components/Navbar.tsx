import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import { getCurrentUer } from "@/lib/session";

const Navbar = async () => {
  const session = await getCurrentUer();

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href={"/"}>
          <Image src={"/logo.svg"} width={115} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link key={link.key} href={link.href}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                height={40}
                width={40}
                className="rounded-full"
                alt={session.user.name}
              />
            )}
            <Link href={"/create-project"}>share work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
