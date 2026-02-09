import type { APIContext } from 'astro';
import { cachedFetch } from '../../../lib/apiCache';

export async function GET({ params }: APIContext) {
	const id = params.id;
	const URL = import.meta.env.SECRET_FAKESTORE_API_URL || 'https://fakestoreapi.com/products';
	const EXTERNAL = `${URL}/${id}`;

	return cachedFetch(EXTERNAL, () => fetch(EXTERNAL), 60_000);
}