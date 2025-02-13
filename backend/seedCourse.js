const mongoose = require("mongoose");
const Course = require("./models/Course");

mongoose
  .connect("mongodb+srv://Loni:cinderella@cluster0.5vtd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

  const seedCourses = async () => {
    const courses = [
        {
            courseName: "GST 111",
            description: "Communication In English",
            topics: ["Sound Patterns", "Language Skills For Effective Communication", "Writing And Reading Comprehension Strategies", "Grammar(Clauses)", "Antonyms And Synonyms"],
            category: "General",
          },
      {
        courseName: "MTH 101",
        description: "Elementary Mathematics I",
        topics: ["Sets", "Vectors", "Binomial Expansion"],
        category: "General",
      },
      {
        courseName: "PHY 101",
        description: "General Physics I",
        topics: ["Space And Time", "Units And Dimensions", "Simple Vector Arithmetic", "Conservative Force", "Kinematics"],
        category: "General",
      },
      {
        courseName: "CHM 101",
        description: "General Chemistry I",
        topics: ["Atoms,Molecules,Elements And Compounds", "Hybridization"],
        category: "General",
      },
      {
        courseName: "PHY 103",
        description: "General Physics III",
        topics: ["Gas Laws", "Heat And Temperature", "Thermodynamics"],
        category: "All",
      },
      {
        courseName: "COS 101",
        description: "Introduction to Computer Sciences",
        topics: ["Logic Gates", "History Of Computer", "Component Of Computer", "Areas Of Computer Discipline", "Information Processing"],
        category: "All",
      },
      {
        courseName: "STA 121",
        description: "Statistical Inference I",
        topics: ["Formula's Testing", "Population And Sampling", "Regression And Correlation"],
        category: "All",
      },
      {
        courseName: "BIO 101",
        description: "General Biology I",
        topics: ["Ecology", "Hereditary And Evolution", "Chromosones And Genes"],
        category: "All",
      },
      {
        courseName: "UIL-AGX",
        description: "Agricultural Studies",
        topics: ["Concept Of Livelihood", "Rural Versus Urban Development"],
        category: "All",
      },
    ];
    try {
      await Course.deleteMany(); // Clears the collection
      await Course.insertMany(courses); // Seeds the collection
      console.log("Courses added successfully!");
      process.exit();
    } catch (error) {
      console.error("Error seeding courses:", error);
      process.exit(1);
    }
  };
  
seedCourses();
