declare global {
  interface AstroCartItem {
    id: string | number;
    title?: string;
    price?: number;
    image?: string;
    quantity?: number;
  }

  interface HTMLAstroCartElement extends HTMLElement {
    add(item: AstroCartItem): void;
    remove(id: string | number): void;
    removeItem(id: string | number): void;
    clear(): void;
    get(): AstroCartItem[];
    count(): number;
  }

  interface HTMLElementTagNameMap {
    'astro-cart': HTMLAstroCartElement;
  }
}

export {};
