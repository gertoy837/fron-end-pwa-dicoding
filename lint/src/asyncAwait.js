async function makeACake(...rawIngridients) {
    const ingridients = await gatheringIngridients(rawIngridients)
    const dough = await makeTheDough(ingridients)
    const pouredDough = await pouDough(dough)
    const cake = await bakeACake(pouredDough)

    console.log(cake);
}