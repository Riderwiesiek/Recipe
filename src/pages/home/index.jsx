import { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item";
import food_icon from '../zdjęcia/food.jpg'

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div className="text-center max-w-2xl mx-auto">
          <p className="lg:text-4xl text-xl text-black font-extrabold mb-4">
            Welcome to FoodRecipe!
          </p>
          <div className="input shadow-lg rounded p-2 flex items-center gap-2 mb-8 lg:w-55 shadow-lg shadow-blue-200 focus:shadow-blue-300">
               <img src={food_icon} alt="" />
               <input type="food" />
            </div>
          <h1 className="text-lg lg:text-xl text-black">
            Dive into a world of culinary delights with our extensive collection of recipes from all corners of the globe. Whether you're a seasoned chef or just starting out, you'll find inspiration and guidance here. Use our search feature to explore recipes by ingredients, cuisine, or dietary preferences. From quick weeknight dinners to gourmet feasts, we've got you covered. Start your culinary adventure now and let your taste buds travel the world. Bon appétit!
          </h1>
          <p className="lg:text-4xl text-xl text-black font-extrabold mb-8">
            Find your receipt
          </p>
        </div>
      )}
    </div>
  );
}
