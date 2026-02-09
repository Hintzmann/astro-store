export interface Product {
	id: number;
	title: string;
	price: number;
	image: string;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
}

async function getJson<T>(incomingReq: Request, endpoint: string): Promise<T> {
	const origin = new URL(incomingReq.url).origin;
	try {
		const response = await fetch(`${origin}${endpoint}`, {
			credentials: 'same-origin',
			headers: incomingReq.headers,
		});
		if (!response.ok) {
			throw new Error(`GET ${endpoint} failed: ${response.statusText}`);
		}
		return response.json() as Promise<T>;
	} catch (error) {
		if (error instanceof DOMException || error instanceof TypeError) {
			throw new Error(`GET ${endpoint} failed: ${error.message}`);
		}
		throw error;
	}
}

export async function getProducts(incomingReq: Request): Promise<Product[]> {
	return getJson<Product[]>(incomingReq, '/api/products');
}

export async function getProduct(incomingReq: Request, id: number): Promise<Product> {
	return getJson<Product>(incomingReq, `/api/products/${id}`);
}

