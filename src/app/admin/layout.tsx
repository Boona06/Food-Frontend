import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navigation from "./_components/Navigation";

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

          {children}
          <div className="flex justify-end">
            <UserButton />
          </div>
        </div>
      </SignedIn>
    </ClerkProvider>
  );
}
