"use client";
// import Image from "next/image";
// import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
// import { useEffect } from "react";

import { Login } from "./Login";
export default function LoginPage({ searchParams }) {
  const wantsMagicLink = searchParams.magicLink === "yes";
  return <Login isPasswordLogin={!wantsMagicLink} />;
}
