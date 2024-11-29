// Import app.js
import app from "./app.js";
// Import sequelize
import { sequelize } from "./database/database.js";
// Import relations

// Main function
async function main() {
  try {
    await sequelize
      .sync({ force: true, alter: true })
      .then(() => {
        console.log("All models were synchronized successfully.");
      })
      .catch((error) => {
        console.error("Error synchronizing models: ", error);
      });
    app.listen(3000, () => {
      console.log("Server running on port", 3000);
    });
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}
// Main function call
main();
