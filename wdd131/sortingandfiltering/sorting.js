const hikes = [
  {
    name: "Bechler Falls",
    stub: "bechler_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
    imgAlt: "Image of Bechler Falls",
    distance: "3 miles",
    tags: ["Easy", "Yellowstone", "Waterfall"],
    description: "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
    directions: "Take Highway 20 north to Ashton...",
    trailhead: [44.14457, -110.99781]
  },
  {
    name: "Teton Canyon",
    stub: "teton_canyon",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
    imgAlt: "Image of Teton Canyon",
    distance: "3 miles",
    tags: ["Easy", "Tetons"],
    description: "Beautiful short (or long) hike through Teton Canyon.",
    directions: "Take Highway 33 East to Driggs...",
    trailhead: [43.75567, -110.91521]
  },
  {
    name: "Denanda Falls",
    stub: "denanda_falls",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
    imgAlt: "Image of Denanda Falls",
    distance: "7 miles",
    tags: ["Moderate", "Yellowstone", "Waterfall"],
    description: "Beautiful hike through Bechler meadows to Denanda Falls",
    directions: "Take Highway 20 north to Ashton...",
    trailhead: [44.14974, -111.04564]
  },
  {
    name: "Coffee Pot Rapids",
    stub: "coffee_pot",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
    imgAlt: "Image of Coffee Pot Rapids",
    distance: "2.2 miles",
    tags: ["Easy"],
    description: "Beautiful hike along the Snake River to rapids.",
    directions: "Take Highway 20 north to Island Park...",
    trailhead: [44.49035, -111.36619]
  },
  {
    name: "Menan Butte",
    stub: "menan_butte",
    imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
    imgAlt: "Image of Menan Butte",
    distance: "3.4 miles",
    tags: ["Moderate", "View"],
    description: "A steep climb to a large volcanic cone.",
    directions: "Take Highway 33 West out of Rexburg...",
    trailhead: [43.78555, -111.98996]
  }
];

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

function logOutput(title, data) {
  const output = document.getElementById("output");
  output.innerText += `\n=== ${title} ===\n` + JSON.stringify(data, null, 2) + "\n\n";
}

// Activity 1: Sort a simple list
const simpleSort = [...simpleList].sort(); // shallow copy to avoid mutating original
logOutput("Simple Sort", simpleSort);

// Custom compare function (case-insensitive, descending)
const compareFn = (a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
};
const reverseSort = [...simpleList].sort(compareFn);
logOutput("Reverse (Descending) Sort", reverseSort);

// Activity 2: Filter simple list
function searchSimpleList(list, query) {
  return list.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}
const filteredSimple = searchSimpleList(simpleList, "b");
logOutput("Filtered Simple List (query: 'b')", filteredSimple);

// Activity 3: Filter and sort hikes
function searchHikes(list, query) {
  const q = query.toLowerCase();

  const filtered = list.filter(item => 
    item.name.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q) ||
    item.tags.find(tag => tag.toLowerCase().includes(q))
  );

  const sorted = filtered.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
  return sorted;
}

// Testing hike searches
logOutput("Hikes - Search: 'yellowstone'", searchHikes(hikes, "yellowstone"));
logOutput("Hikes - Search: 'moderate'", searchHikes(hikes, "moderate"));
logOutput("Hikes - Search: 'al'", searchHikes(hikes, "al"));
