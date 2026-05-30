const SYNOLOGY_API_ORIGIN = "https://tsukukiku.synology.me";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (!url.pathname.startsWith("/api/")) {
      return new Response("Not Found", { status: 404 });
    }

    const targetUrl = new URL(url.pathname + url.search, SYNOLOGY_API_ORIGIN);
    const headers = new Headers(request.headers);
    headers.delete("Host");

    const proxiedRequest = new Request(targetUrl.toString(), {
      method: request.method,
      headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
      redirect: "manual",
    });

    const response = await fetch(proxiedRequest);
    const responseHeaders = new Headers(response.headers);

    responseHeaders.delete("content-security-policy");
    responseHeaders.delete("x-frame-options");
    responseHeaders.set("Cache-Control", "no-store");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  },
};
