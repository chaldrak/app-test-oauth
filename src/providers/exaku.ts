/**
 * @module providers/exaku
 */
import type { OAuthConfig, OAuthUserConfig } from "next-auth/providers/index";

import { env } from "@/lib/env";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ExakuProfile extends Record<string, any> {
  id: string;
  email: string;
  user_name: string | null;
  first_name: string | null;
  last_name: string | null;
  role: string | null;
}

/**
 * Add Exaku login to your page.
 *
 * ### Setup
 *
 * #### Callback URL
 *
 * https://example.com/api/auth/callback/exaku
 *
 *
 * #### Configuration
 *
 * import { Auth } from "@auth/core"
 * import Exaku from "@auth/core/providers/exaku"
 *
 * const request = new Request(origin)
 * const response = await Auth(request, {
 *   providers: [
 *     Exaku({
 *       clientId: EXAKU_CLIENT_ID,
 *       clientSecret: EXAKU_CLIENT_SECRET,
 *     }),
 *   ],
 * })
 *
 */
export default function Exaku<P extends ExakuProfile>(
  options: OAuthUserConfig<P>
): OAuthConfig<P> {
  return {
    id: "exaku",
    name: "Exaku",
    type: "oauth",
    authorization: {
      url: `${env.NEXT_PUBLIC_EXAKU_URL}/api/oauth2/authorize`,
      params: { scope: "identify email" },
    },
    token: `${env.NEXT_PUBLIC_EXAKU_URL}/api/oauth2/token`,
    userinfo: `${env.NEXT_PUBLIC_EXAKU_URL}/api/v1/user/me`,
    profile(profile) {
      return {
        id: profile.id,
        email: profile.email,
        name: profile.user_name,
      };
    },
    style: { bg: "#5865F2", text: "#fff" },
    options,
  };
}
