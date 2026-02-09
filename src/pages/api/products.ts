import { cachedFetch } from '../../lib/apiCache';

const EXTERNAL = import.meta.env.SECRET_FAKESTORE_API_URL || 'https://fakestoreapi.com/products';

export async function GET() {
	return cachedFetch(EXTERNAL, () => fetch(EXTERNAL), 60_000);
}