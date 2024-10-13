import { NextResponse, type NextRequest } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";

// 1. Read the form data.
// 2. Instantiate a Supabase client.
// 3. 4. Sign in with the Supabase client, passing the values from step 1.
// Redirect the user to an error page if the login was not successful, or to the /tickets page
// if it was successful.
export async function POST(request: NextRequest) {
  // Step 1:
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  // Step 2:
  const supabase = getSupabaseCookiesUtilClient();
  // Step 3:
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email as string,
    password: password as string,
  });
  // Step 4:
  const userData = data?.user;
  if (error || !userData) {
    return NextResponse.redirect(
      new URL("/error?type=login-failed", request.url),
      { status: 302 }
    );
  }
  return NextResponse.redirect(new URL("/tickets", request.url), {
    status: 302,
  });
}