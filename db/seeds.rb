puts 'Creating Recipes'

recipe1 = Recipe.create(title: "Jacket Potato", description: "Healthy, Easy to Make")
recipe2 = Recipe.create(title: "Pasta", description: "Tasty, Easy to Make")

puts 'Creating Ingredients'
['Potato', 'Fish', 'Tomato', 'Pasta'].each do |ing|
  recipe1.ingredients.create(name: ing)
  recipe2.ingredients.create(name: ing)
end
