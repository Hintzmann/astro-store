type CacheEntry = {
    body: string;
    status: number;
    headers: Record<string, string>;
    expiresAt: number;
};

const cache = new Map<string, CacheEntry>();

export async function cachedFetch(
    key: string,
    fetcher: () => Promise<Response>,
    ttlMs = 60_000
): Promise<Response> {
    const now = Date.now();
    const entry = cache.get(key);
    if (entry && entry.expiresAt > now) {
        return new Response(entry.body, { status: entry.status, headers: entry.headers });
    }

    const res = await fetcher();
    const body = await res.text();
    const headers: Record<string, string> = {};
    const contentType = res.headers.get('content-type');
    if (contentType) headers['content-type'] = contentType;

    cache.set(key, {
        body,
        status: res.status,
        headers,
        expiresAt: now + ttlMs,
    });

    return new Response(body, { status: res.status, headers });
}

export function clearCache() {
    cache.clear();
}
