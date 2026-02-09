

customElements.define(
  'astro-cart',
  class extends HTMLElement {
    #STORAGE_KEY = 'astro-cart';

    constructor() {
      super();
    }

    connectedCallback() {
      // Listen for storage events from other tabs
      window.addEventListener('storage', this);
      // Emit initial update
      this.#dispatchUpdate();
    }

    handleEvent(event) {
      if (event.key === this.#STORAGE_KEY) {
        this.#dispatchUpdate();
      }
    }

    /* Private Methods */
    #readCart() {
      try {
        const raw = localStorage.getItem(this.#STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    }

    #writeCart(cart) {
      try {
        localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(cart));
      } catch { }
    }

    #dispatchUpdate() {
      const items = this.#readCart();
      const count = items.reduce((s, it) => s + (it.quantity || 0), 0);
      window.dispatchEvent(new CustomEvent('cart:update', { detail: { count, items } }));
    }

    // Public API
    add({ id, title, price, image }) {
      const cart = this.#readCart();
      const existing = cart.find((c) => String(c.id) === String(id));
      if (existing) {
        existing.quantity = (existing.quantity || 0) + 1;
      } else {
        cart.push({ id, title, price, image, quantity: 1 });
      }
      this.#writeCart(cart);
      this.#dispatchUpdate();
      return this;
    }

    remove(id) {
      let cart = this.#readCart();
      cart = cart.filter((c) => String(c.id) !== String(id));
      this.#writeCart(cart);
      this.#dispatchUpdate();
      return this;
    }

    clear() {
      this.#writeCart([]);
      this.#dispatchUpdate();
      return this;
    }

    get() {
      return this.#readCart();
    }

    count() {
      const cart = this.#readCart();
      return cart.reduce((s, it) => s + (it.quantity || 0), 0);
    }
  }
);
