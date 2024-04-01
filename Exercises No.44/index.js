const sandwichOrdering = (...incredients) => {
    console.log(`You have ordered a sandwich with these incredients:\n 
${incredients.join(", ")} 🍔🥪`);
};
sandwichOrdering("Cheese", "Tomato");
sandwichOrdering("Cheese", "Tomato", "Lettuce");
sandwichOrdering("Cheese", "Tomato", "Lettuce", "Onion");
export {};
