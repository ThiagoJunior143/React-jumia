const RECENT_KEY = "recently_viewed_products";
const MAX_ITEMS = 6;

export const getRecentlyViewed = () => {
  const data = localStorage.getItem(RECENT_KEY);
  return data ? JSON.parse(data) : [];
};

export const addRecentlyViewed = (product) => {
  const items = getRecentlyViewed();

  // Remove if already exists
  const filtered = items.filter((item) => item.id !== product.id);

  // Add to top
  const updated = [product, ...filtered].slice(0, MAX_ITEMS);

  localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
};
