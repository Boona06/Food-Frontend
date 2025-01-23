import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navigation from "./_components/Navigation";
import Category from "./_components/Category";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <SignedOut>
        <div className="flex justify-center items-center gap-16 p-5 ">
          <div className="text-center">
            <div className="text-center bg-[#18181B] opacity-20 rounded-md text-white lg:w-[426px] lg:h-9 flex justify-center">
              <button> Let's go </button>
            </div>
            Don’t have an account?
            <span className="text-blue-700 pl-3">
              <SignInButton />
            </span>
          </div>

          <img src="login.png" className="h-screen w-full rounded-2xl " />
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex gap-6">
          <Navigation />
          <div>
            <div className="flex justify-end items-start pt-6 pb-6">
              <UserButton />
            </div>
            <Category />

            {children}
          </div>
        </div>
      </SignedIn>
    </ClerkProvider>
  );
}
