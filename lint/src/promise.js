function makeCake(...rawIngredients) {
  gatheringIngredients(rawIngredients)
    .then(makeTheDough)
    .then(pourDough)
    .then(bakeACake)
    .then(console.log());
}
