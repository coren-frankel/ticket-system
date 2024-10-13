import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const email = formData.get("email");
  const supabase = getSupabaseCookiesUtilClient();
  const { data, error } = await supabase.auth.signInWithOtp({
    email: email as string,
    options: { shouldCreateUser: false }
  });
  if (error) {
    return NextResponse.redirect(
      new URL("/error?type=magiclink", request.url),
      302
    );
  }
  const thanksUrl = new URL("/magic-thanks", request.url);
  return NextResponse.redirect(thanksUrl, 302);
}