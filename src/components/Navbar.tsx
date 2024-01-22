import Link from "next/link";

import { ThemeToggle } from "./ThemeToggle";
import { LoginButton, LogoutButton } from "./AuthButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div
      className={`text-white fixed inset-x-0 top-0 z-40 h-fit py-3 bg-navbar `}
    >
      <div className="flex px-5 items-center justify-between h-full gap-2 mx-auto max-w-7xl">
        {/* Logo */}
        <Link
          href={"/"}
          className="flex items-center gap-2 transition-all hover:-translate-y-[2px] "
        >
          <p className="rounded-lg px-1 py-1 text-xl font-bold md:block dark:border-white tracking-normal font-montserrat">
            UMKMConnect.
          </p>
        </Link>
        <div className="flex items-center gap-3">
          <button className="xs:px-2.5 sm:px-4 xs:py-2 sm:py-1.5 text-white bg-transparent rounded-md hover:bg-gray-900 hover:underline dark:bg-gray-700">
            <div className="flex flex-row gap-2 items-center">
              <span className="sm:block">Toko</span>
            </div>
          </button>

          {session?.user ? (
            <div className="flex items-center gap-8">
              <LogoutButton />
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
