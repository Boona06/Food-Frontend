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
        <SignInButton />
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
