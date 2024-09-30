"use client";
// import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";

import { Login } from "./Login";
export default function LoginPage({ searchParams }) {
  const wantsMagicLink = searchParams.magicLink === "yes";
  return <Login isPasswordLogin={!wantsMagicLink} />;
}
