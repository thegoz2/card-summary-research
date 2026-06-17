// Cloudflare Pages Function: HTTP Basic Auth gate for the whole site.
// Set env vars in Cloudflare Pages → Settings → Environment variables:
//   AUTH_PASS = <your password>   (required to enable the gate)
//   AUTH_USER = <your username>   (optional, default "op")
// If AUTH_PASS is not set, the site is served openly (handy for first deploy).
export async function onRequest(context) {
  const { request, env, next } = context;
  if (!env.AUTH_PASS) return next();

  const user = env.AUTH_USER || 'op';
  const expected = 'Basic ' + btoa(`${user}:${env.AUTH_PASS}`);
  const got = request.headers.get('Authorization') || '';

  if (got === expected) return next();

  return new Response('🔒 ต้องเข้าสู่ระบบ', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="OP TCG Research", charset="UTF-8"' },
  });
}
