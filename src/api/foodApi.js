const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Real TheMealDB category names — no translation/mapping needed, they work as-is
export const CATEGORIES = [
  "Vegetarian",
  "Vegan",
  "Dessert",
  "Pasta",
  "Breakfast",
  "Side",
  "Starter",
  "Miscellaneous"
];
const generatePrice = (id) => {
  let hash = 0;
  const str = String(id);
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % 100000;
  }
  return 50 + (hash % 450);
};

// filter.php results only contain id/name/image — used for grid views
const normalizeFilterMeal = (raw, categoryLabel) => ({
  id: raw.idMeal,
  name: raw.strMeal,
  image: raw.strMealThumb,
  category: categoryLabel,
  description: "Tap to view full recipe and ingredients.",
  price: generatePrice(raw.idMeal),
});

// lookup.php / search.php results contain full detail — used for the item detail page
const normalizeFullMeal = (raw) => ({
  id: raw.idMeal,
  name: raw.strMeal,
  image: raw.strMealThumb,
  category: raw.strCategory || "Uncategorized",
  description: raw.strInstructions ? raw.strInstructions.slice(0, 220) + "..." : "No description available.",
  price: generatePrice(raw.idMeal),
});

export const fetchMealsByCategory = async (categoryLabel, signal) => {
  const res = await fetch(
    `${BASE_URL}/filter.php?c=${encodeURIComponent(categoryLabel)}`,
    { signal }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch ${categoryLabel}`);
  }

  const data = await res.json();

  return (data?.meals || []).map((m) =>
    normalizeFilterMeal(m, categoryLabel)
  );
};

// "All" view — TheMealDB has no bulk "list everything" endpoint on the free tier,
// so searching by a starting letter is the standard way to get a broad initial list
export const fetchAllMeals = async (letter = "a", signal) => {
  const res = await fetch(`${BASE_URL}/search.php?f=${letter}`, { signal });
  if (!res.ok) throw new Error("Failed to fetch meals");
  const data = await res.json();
  return (data?.meals || []).map(normalizeFullMeal);
};

export const fetchMealById = async (id) => {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  if (!res.ok) throw new Error("Failed to fetch meal");
  const data = await res.json();
  const meal = data?.meals?.[0];
  if (!meal) throw new Error("Meal not found");
  return normalizeFullMeal(meal);
};