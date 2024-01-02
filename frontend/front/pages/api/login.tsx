// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const base_url = "https://api.intra.42.fr/oauth/authorize";
const client_id =
  "u-s4t2ud-d75969a1dafe7cfdfd34d85d0d3a5834e62eac74d403fbb466d5f2f053f3905e";
const redirect_uri = `${process.env.NEXT_PUBLIC_BACKEND_URL}/login/`; // Update the redirect URL accordingly
const scope = "public";
const full_url = `${base_url}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // send full url to frontend in text format
  res.status(200).send(full_url);
}
