import React from "react";
import { recipeData } from "../../recipeData";

let recipes = recipeData;

export default function RecipePage() {
  return (
    <>
      <div>
        <h1 className="text-5xl font-extrabold dark:text-white text-center text-rose-500 pb-10">
          {recipes[0].name}
        </h1>
      </div>
      <section>
        <div className="h-full w-[50%] float-left ">
          <img
            className="h-full max-w-lg rounded-lg hover:scale-110 pb-10 "
            src={recipes[0].image1}
            alt="Food Image"
          />
        </div>

        <div className="h-full w-[50%] float-right">
          <h3 className="prose md:prose-lg lg:prose-xl text-blue-600 font-bold">
            Ingredients:
          </h3>
          <ul className="prose lg:prose-l list-disc mt-1 ml-6 pb-5">
            {recipes[0].ingredients.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <br /> <br /> <br /> <br />
      <section>
        <div className="h-full w-[50%]  float-left">
          <img
            className="h-full max-w-lg rounded-lg hover:scale-110 pb-10"
            src={recipes[0].image2}
            alt="Food Image"
          />
        </div>

        <div className="h-full w-[50%] float-right">
          <h3 className="prose md:prose-lg lg:prose-xl text-green-600 font-bold">
            Instructions:
          </h3>
          <ul className="prose lg:prose-l list-disc mt-3 ml-6 pb-5 ">
            {recipes[0].instruction.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <div className="h-full w-[50%]  float-left">
          <img
            className="h-full max-w-lg rounded-lg hover:scale-110 pb-10"
            src={recipes[0].image3}
            alt="Food Image"
          />
        </div>
      </section>
      <br />
      <div>
        <h3 className="prose md:prose-lg lg:prose-xl text-red-600 font-bold">
          Note:
        </h3>
        <p className="prose lg:prose-l pb-20 float-right">{recipes[0].note}</p>
      </div>
    </>
  );
}
