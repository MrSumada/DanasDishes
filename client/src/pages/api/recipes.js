import fs from "fs";
import path from "path";
import data from "../../recipes";

export default function handler(req, res) {
  try {
    // Handle GET requests
    if (req.method === "GET") {
      res.status(200).json(data.recipes);
    }

    // Handle POST requests
    else if (req.method === "POST") {
      const newRecipe = req.body;
      newRecipe._id = data.recipes.length; // Generate an ID
      data.recipes.push(newRecipe);
      writeRecipesData(data);
      res.status(201).json(newRecipe);
    }

    // Handle PUT requests
    else if (req.method === "PUT") {
      const { id, updatedRecipe } = req.body;
      const recipeIndex = data.recipes.findIndex((r) => r._id === id);
      if (recipeIndex === -1) return res.status(404).json({ error: "Recipe not found" });

      data.recipes[recipeIndex] = { ...data.recipes[recipeIndex], ...updatedRecipe };
      writeRecipesData(data);
      res.status(200).json(data.recipes[recipeIndex]);
    }

    // Handle DELETE requests
    else if (req.method === "DELETE") {
      const { id } = req.body;
      const recipeIndex = data.recipes.findIndex((r) => r._id === id);
      if (recipeIndex === -1) return res.status(404).json({ error: "Recipe not found" });

      data.recipes.splice(recipeIndex, 1);
      writeRecipesData(data);
      res.status(204).end();
    }

    // Handle unsupported methods
    else {
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
