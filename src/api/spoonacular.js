const spoonacular = () => {
  const apiKey = '3496c5a5b6b94a23af49f2e08cd17ec7'

  const getRecipeById = async (id) => {
    const recipe = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${apiKey}&ids=${id}`)
        .then((res) => res.json())
  }

  const getSimilarRecipesIds = async (id) => {
    const ids = await fetch(` https://api.spoonacular.com/recipes/${id}/similar?apiKey=${apiKey}`)
        .then((res) => res.json())
  }
}

export default spoonacular;
