require("dotenv").config();
const mongoose = require("mongoose");
const Question = require("./models/Question");
const Course = require("./models/Course");

// Connect to your MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const SpaceAndTimeQuestions=[
  {
    questionText: "What is the SI unit of time?",
    options: [
      "Minute",
      "Hour",
      "Second",
      "Millisecond"
    ],
    correctAnswer: "Second"
  },
  {
    questionText: "Which of the following is a scalar quantity?",
    options: [
      "Velocity",
      "Displacement",
      "Time",
      "Force"
    ],
    correctAnswer: "Time"
  },
  {
    questionText: "What is the speed of light in vacuum?",
    options: [
      "3 × 10^6 m/s",
      "3 × 10^8 m/s",
      "3 × 10^10 m/s",
      "3 × 10^12 m/s"
    ],
    correctAnswer: "3 × 10^8 m/s"
  },
  {
    questionText: "What is a light-year?",
    options: [
      "The distance light travels in one year",
      "The time it takes light to travel a year",
      "The speed of light in one year",
      "A measure of energy"
    ],
    correctAnswer: "The distance light travels in one year"
  },
  {
    questionText: "What is one full rotation of the Earth called?",
    options: [
      "A day",
      "A year",
      "A second",
      "A month"
    ],
    correctAnswer: "A day"
  },
  {
    questionText: "Which theory explains the relationship between space and time?",
    options: [
      "Quantum Mechanics",
      "General Relativity",
      "Thermodynamics",
      "Newtonian Mechanics"
    ],
    correctAnswer: "General Relativity"
  },
  {
    questionText: "What is the approximate age of the universe?",
    options: [
      "4.5 billion years",
      "13.8 billion years",
      "1 billion years",
      "100 billion years"
    ],
    correctAnswer: "13.8 billion years"
  },
  {
    questionText: "What is the meaning of the term 'space' in astronomy?",
    options: [
      "Distance between two points",
      "Distance between two events",
      "The region beyond the earth atmosphere",
      "Distance between two phases"
    ],
    correctAnswer: "The region beyond the earth atmosphere"
  },
  {
    questionText: "What does GPS rely on for accurate positioning?",
    options: [
      "Magnetic fields",
      "Space and time synchronization",
      "Weather patterns",
      "Sound waves"
    ],
    correctAnswer: "Space and time synchronization"
  },
  {
    questionText: "Who proposed the theory of general relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Stephen Hawking"
    ],
    correctAnswer: "Albert Einstein"
  },
  {
    questionText: "What happens to time as you approach the speed of light?",
    options: [
      "Time speeds up",
      "Time slows down",
      "Time stops",
      "Time reverses"
    ],
    correctAnswer: "Time slows down"
  },
  {
    questionText: "Which equation represents Einstein’s theory of relativity?",
    options: [
      "E = mc^2",
      "F = ma",
      "v = u + at",
      "P = VI"
    ],
    correctAnswer: "E = mc^2"
  },
  {
    questionText: "What is the curvature of spacetime caused by?",
    options: [
      "Electromagnetic fields",
      "Mass and energy",
      "Speed of light",
      "Gravity waves"
    ],
    correctAnswer: "Mass and energy"
  },
  {
    questionText: "What is reference frame?",
    options: [
      "A 4-D concept that deals with the measurement of a body at a specified point",
      "Diffraction",
      "A 4-D concept that deals with the measurement of a body",
      "This is an abstract co-ordinate system and a set of physical reference point"
    ],
    correctAnswer: "This is an abstract co-ordinate system and a set of physical reference point"
  },
  {
    questionText: "What is the fourth dimension in spacetime?",
    options: [
      "Energy",
      "Time",
      "Velocity",
      "Gravity"
    ],
    correctAnswer: "Time"
  },
  {
    questionText: "What is the Schwarzschild radius of a black hole?",
    options: [
      "The radius at which light cannot escape",
      "The radius of the event horizon",
      "The distance of the black hole from Earth",
      "The distance at which time dilation is infinite"
    ],
    correctAnswer: "The radius at which light cannot escape"
  },
  {
    questionText: "What is the significance of the twin paradox in relativity?",
    options: [
      "It demonstrates time dilation",
      "It proves the existence of wormholes",
      "It shows that time is constant",
      "It explains black holes"
    ],
    correctAnswer: "It demonstrates time dilation"
  },
  {
    questionText: "What are gravitational waves?",
    options: [
      "Disturbances in spacetime caused by massive objects",
      "Waves in the electromagnetic spectrum",
      "Shockwaves from supernovae",
      "Ripples in dark matter"
    ],
    correctAnswer: "Disturbances in spacetime caused by massive objects"
  },
  {
    questionText: "What is the concept of a wormhole?",
    options: [
      "A shortcut through spacetime",
      "A collapsing star",
      "A type of black hole",
      "An unstable spacetime loop"
    ],
    correctAnswer: "A shortcut through spacetime"
  },
  {
    questionText: "How does time behave near a black hole?",
    options: [
      "Time slows down",
      "Time speeds up",
      "Time becomes constant",
      "Time reverses"
    ],
    correctAnswer: "Time slows down"
  },
  {
    questionText: "What is the shape of spacetime around a massive object?",
    options: [
      "Flat",
      "Spherical",
      "Curved",
      "Cubical"
    ],
    correctAnswer: "Curved"
  },
  {
    questionText: "Which concept explains why astronauts experience weightlessness in orbit?",
    options: [
      "Zero gravity",
      "Free fall",
      "Air resistance",
      "Gravitational shielding"
    ],
    correctAnswer: "Free fall"
  },
  {
    questionText: "What is the difference between a solar day and a sidereal day?",
    options: [
      "A solar day is shorter than a sidereal day",
      "A sidereal day is shorter than a solar day",
      "They are the same length",
      "A solar day measures lunar motion"
    ],
    correctAnswer: "A sidereal day is shorter than a solar day"
  },
  {
    questionText: "What is the geodesic path in spacetime?",
    options: [
      "The shortest path between two points in spacetime",
      "A straight line in a vacuum",
      "The trajectory of light",
      "A circular orbit of a planet"
    ],
    correctAnswer: "The shortest path between two points in spacetime"
  },
  {
    questionText: "What is the name of the region around a black hole where no light can escape?",
    options: [
      "Event horizon",
      "Singularity",
      "Wormhole",
      "Schwarzschild radius"
    ],
    correctAnswer: "Event horizon"
  },
  {
    questionText: "What causes the phenomenon of time dilation?",
    options: [
      "Speed and gravity",
      "Magnetism",
      "Temperature",
      "Air pressure"
    ],
    correctAnswer: "Speed and gravity"
  },
  {
    questionText: "What does the term 'cosmic microwave background radiation' refer to?",
    options: [
      "The heat left over from the Big Bang",
      "Light from distant galaxies",
      "Infrared radiation from stars",
      "Microwaves produced by black holes"
    ],
    correctAnswer: "The heat left over from the Big Bang"
  },
  {
    questionText: "How is spacetime affected near a massive object like a star?",
    options: [
      "It becomes curved",
      "It remains flat",
      "It speeds up",
      "It stops moving"
    ],
    correctAnswer: "It becomes curved"
  },
  {
    questionText: "What is an inertial reference frame?",
    options: [
      "A frame of reference where Newton's laws apply",
      "A frame of reference in a vacuum",
      "A stationary frame of reference",
      "A frame of reference near a black hole"
    ],
    correctAnswer: "A frame of reference where Newton's laws apply"
  },
  {
    questionText: "What is the primary evidence supporting the expansion of the universe?",
    options: [
      "Redshift of distant galaxies",
      "Blueshift of nearby galaxies",
      "Time dilation near black holes",
      "Cosmic rays from supernovae"
    ],
    correctAnswer: "Redshift of distant galaxies"
  },
  {
    questionText: "What is the difference between proper time and coordinate time?",
    options: [
      "Proper time is measured along an object's path",
      "Coordinate time is subjective",
      "They are the same",
      "Proper time is for stationary objects only"
    ],
    correctAnswer: "Proper time is measured along an object's path"
  },
  {
    questionText: "Which of this cannot be used to describe the measore of space",
    options: [
      "Light-year",
      "Buzz Light-year",
      "Meters",
      "Inches"
    ],
    correctAnswer: "Buzz Light-year"
  },
  {
    questionText: "What is the Big Bang theory?",
    options: [
      "The origin of the universe from a single point",
      "A theory about star formation",
      "The collapse of a black hole",
      "A theory of galactic collisions"
    ],
    correctAnswer: "The origin of the universe from a single point"
  },
  {
    questionText: "What causes gravitational time dilation?",
    options: [
      "Strong gravitational fields",
      "The speed of light",
      "Electromagnetic waves",
      "Rapid rotation of objects"
    ],
    correctAnswer: "Strong gravitational fields"
  },
  {
    questionText: "What is the term for the observable universe’s limit?",
    options: [
      "Cosmic horizon",
      "Event horizon",
      "Space horizon",
      "Gravitational boundary"
    ],
    correctAnswer: "Cosmic horizon"
  },
  {
    questionText: "If an object A is in direct and equal motion with an object B and an object C is in static observation. What is A velocity from B?",
    options: [
      "Cannot be gotten",
      "Constant motion",
      "0",
      "70m/s"
    ],
    correctAnswer: "0"
  },
  {
    questionText: "How does time behave in a uniformly moving spaceship?",
    options: [
      "It moves uniformly for passengers",
      "It slows down compared to Earth",
      "It speeds up compared to Earth",
      "It stops completely"
    ],
    correctAnswer: "It moves uniformly for passengers"
  },
  {
    questionText: "What happens to the frequency of light as it moves away from a gravitational source?",
    options: [
      "It decreases (redshift)",
      "It increases (blueshift)",
      "It remains the same",
      "It oscillates randomly"
    ],
    correctAnswer: "It decreases (redshift)"
  },
  {
    questionText: "What does the Lorentz transformation describe?",
    options: [
      "The relationship between space and time in special relativity",
      "The force between two masses",
      "The curvature of spacetime",
      "The energy of a photon"
    ],
    correctAnswer: "The relationship between space and time in special relativity"
  },
  {
    questionText: "What is the primary role of spacetime diagrams?",
    options: [
      "To represent the relationship between space and time",
      "To measure the speed of light",
      "To explain quantum mechanics",
      "To calculate gravitational waves"
    ],
    correctAnswer: "To represent the relationship between space and time"
  },
  {
    questionText: "What is the Einstein field equation?",
    options: [
      "A set of equations describing how matter and energy influence spacetime curvature",
      "The equation for calculating black hole radius",
      "An equation for quantum gravity",
      "A formula to calculate the speed of light"
    ],
    correctAnswer: "A set of equations describing how matter and energy influence spacetime curvature"
  },
  {
    questionText: "What does the term 'frame dragging' describe in general relativity?",
    options: [
      "The twisting of spacetime caused by a rotating massive object",
      "The slowing of time near a black hole",
      "The expansion of the universe",
      "The bending of light by gravity"
    ],
    correctAnswer: "The twisting of spacetime caused by a rotating massive object"
  },
  {
    questionText: "What is the significance of the Kerr metric?",
    options: [
      "It describes the spacetime around a rotating black hole",
      "It calculates the event horizon of any black hole",
      "It measures cosmic expansion",
      "It predicts the Big Bang"
    ],
    correctAnswer: "It describes the spacetime around a rotating black hole"
  },
  {
    questionText: "Which of the following is not a CORRECT definiton of space?",
    options: [
      "A boundless three dimensional object in which objects can occupy and events occurs",
      "A region between two points",
      "An interval between two points",
      "The region beyond the earth atmosphere"
    ],
    correctAnswer: "An interval between two points"
  },
  {
    questionText: "What is space?",
    options: [
      "A 4-D object that supports the theory of general relativity",
      "A boundless three dimensional object",
      "The formation of gravitational waves",
      "A boundless three dimensional object in which objects can occupy and events occurs"
    ],
    correctAnswer: "A boundless three dimensional object in which objects can occupy and events occurs"
  },
  {
    questionText: "What is a singularity in spacetime?",
    options: [
      "A point where density becomes infinite",
      "A region with zero gravity",
      "The event horizon of a black hole",
      "A rotating black hole"
    ],
    correctAnswer: "A point where density becomes infinite"
  },
  {
    questionText: "In what type of reference frame does the newton's law hold true?",
    options: [
      "Inertia Frame",
      "Moving Frame",
      "Direct Frame",
      "Non-Inertia Frame Of Reference"
    ],
    correctAnswer: "Inertia Frame"
  },
  {
    questionText: "What are closed universes characterized by?",
    options: [
      "Finite volume and eventual collapse",
      "Infinite expansion forever",
      "Constant size throughout time",
      "Absence of dark matter"
    ],
    correctAnswer: "Finite volume and eventual collapse"
  },
  {
    questionText: "Which of this is a type of reference frame?",
    options: [
      "Moving Frame",
      "Static Frame",
      "Inertia Frame",
      "Direct Frame"
    ],
    correctAnswer: "Inertia Frame"
  },
  {
    questionText: "What is time?",
    options: [
      "Distance between two points",
      "Interval between two events",
      "Distance between two events",
      "Seconds"
    ],
    correctAnswer: "Interval between two events"
  },
]
const UnitsAndDimensionsQuestions=[
  {
    questionText: "What is the SI unit of length?",
    options: [
      "Meter",
      "Kilogram",
      "Second",
      "Ampere"
    ],
    correctAnswer: "Meter"
  },
  {
    questionText: "What is the SI unit of time?",
    options: [
      "Second",
      "Minute",
      "Hour",
      "Day"
    ],
    correctAnswer: "Second"
  },
  {
    questionText: "Which physical quantity is measured in kilograms?",
    options: [
      "Mass",
      "Time",
      "Temperature",
      "Force"
    ],
    correctAnswer: "Mass"
  },
  {
    questionText: "What is the SI unit of temperature?",
    options: [
      "Kelvin",
      "Celsius",
      "Fahrenheit",
      "Joule"
    ],
    correctAnswer: "Kelvin"
  },
  {
    questionText: "What is the SI unit of electric current?",
    options: [
      "Ampere",
      "Volt",
      "Ohm",
      "Coulomb"
    ],
    correctAnswer: "Ampere"
  },
  {
    questionText: "What is the SI unit of luminous intensity?",
    options: [
      "Candela",
      "Lumen",
      "Lux",
      "Watt"
    ],
    correctAnswer: "Candela"
  },
  {
    questionText: "What is the SI unit of force?",
    options: [
      "Newton",
      "Joule",
      "Pascal",
      "Watt"
    ],
    correctAnswer: "Newton"
  },
  {
    questionText: "What is the SI unit of energy?",
    options: [
      "Joule",
      "Newton",
      "Watt",
      "Pascal"
    ],
    correctAnswer: "Joule"
  },
  {
    questionText: "What is the SI unit of power?",
    options: [
      "Watt",
      "Joule",
      "Newton",
      "Pascal"
    ],
    correctAnswer: "Watt"
  },
  {
    questionText: "Which of the following is a derived quantity?",
    options: [
      "Speed",
      "Length",
      "Mass",
      "Time"
    ],
    correctAnswer: "Speed"
  },
  {
    questionText: "What is the dimensional formula for velocity?",
    options: [
      "M⁰L¹T⁻¹",
      "M¹L¹T⁻²",
      "M⁰L²T⁻²",
      "M¹L⁰T⁰"
    ],
    correctAnswer: "M⁰L¹T⁻¹"
  },
  {
    questionText: "What is the dimensional formula for force?",
    options: [
      "M¹L¹T⁻²",
      "M¹L²T⁻¹",
      "M⁰L¹T⁻²",
      "M¹L⁰T⁻²"
    ],
    correctAnswer: "M¹L¹T⁻²"
  },
  {
    questionText: "Which of these quantities is dimensionless?",
    options: [
      "Refractive index",
      "Velocity",
      "Force",
      "Energy"
    ],
    correctAnswer: "Refractive index"
  },
  {
    questionText: "What is the dimensional formula of energy?",
    options: [
      "M¹L²T⁻²",
      "M¹L¹T⁻²",
      "M⁰L²T⁻¹",
      "M⁰L⁰T⁰"
    ],
    correctAnswer: "M¹L²T⁻²"
  },
  {
    questionText: "What is the unit of pressure in the SI system?",
    options: [
      "Pascal",
      "Newton",
      "Joule",
      "Watt"
    ],
    correctAnswer: "Pascal"
  },
  {
    questionText: "What is the dimensional formula for acceleration?",
    options: [
      "M⁰L¹T⁻²",
      "M¹L¹T⁻²",
      "M¹L²T⁻²",
      "M⁰L⁰T⁻²"
    ],
    correctAnswer: "M⁰L¹T⁻²"
  },
  {
    questionText: "What is the dimensional formula for momentum?",
    options: [
      "M¹L¹T⁻¹",
      "M¹L²T⁻²",
      "M⁰L¹T⁻²",
      "M¹L⁰T⁻¹"
    ],
    correctAnswer: "M¹L¹T⁻¹"
  },
  {
    questionText: "What is the dimensional formula of work?",
    options: [
      "M¹L²T⁻²",
      "M¹L¹T⁻¹",
      "M¹L⁰T⁻²",
      "M¹L²T⁰"
    ],
    correctAnswer: "M¹L²T⁻²"
  },
  {
    questionText: "Which physical quantity is measured in ohms?",
    options: [
      "Resistance",
      "Capacitance",
      "Inductance",
      "Magnetic flux"
    ],
    correctAnswer: "Resistance"
  },
  {
    questionText: "What is the SI unit of magnetic flux?",
    options: [
      "Weber",
      "Tesla",
      "Henry",
      "Farad"
    ],
    correctAnswer: "Weber"
  },
  {
    questionText: "What is the dimensional formula of power?",
    options: [
      "M¹L²T⁻³",
      "M¹L¹T⁻²",
      "M¹L⁰T⁻²",
      "M¹L²T⁻¹"
    ],
    correctAnswer: "M¹L²T⁻³"
  },
  {
    questionText: "What is the SI unit of frequency?",
    options: [
      "Hertz",
      "Joule",
      "Watt",
      "Ampere"
    ],
    correctAnswer: "Hertz"
  },
  {
    questionText: "What is the dimensional formula for torque?",
    options: [
      "M¹L²T⁻²",
      "M⁰L¹T⁻²",
      "M¹L²T⁻¹",
      "M⁰L²T⁻³"
    ],
    correctAnswer: "M¹L²T⁻²"
  },
  {
    questionText: "What is the dimensional formula for charge?",
    options: [
      "M⁰L⁰T¹I¹",
      "M¹L⁰T⁻²I¹",
      "M⁰L⁰T⁻¹I²",
      "M⁰L¹T⁻²I¹"
    ],
    correctAnswer: "M⁰L⁰T¹I¹"
  },
  {
    questionText: "What is the SI unit of magnetic field strength?",
    options: [
      "Tesla",
      "Weber",
      "Henry",
      "Farad"
    ],
    correctAnswer: "Tesla"
  },
  {
    questionText: "What is the dimensional formula of angular velocity?",
    options: [
      "M⁰L⁰T⁻¹",
      "M¹L⁰T⁰",
      "M⁰L⁰T⁻²",
      "M¹L¹T⁻¹"
    ],
    correctAnswer: "M⁰L⁰T⁻¹"
  },
  {
    questionText: "What is the SI unit of luminous flux?",
    options: [
      "Lumen",
      "Lux",
      "Candela",
      "Watt"
    ],
    correctAnswer: "Lumen"
  },
  {
    questionText: "What is the dimensional formula for gravitational constant (G)?",
    options: [
      "M⁻¹L³T⁻²",
      "M⁰L²T⁻²",
      "M⁰L⁰T²",
      "M¹L²T⁻¹"
    ],
    correctAnswer: "M⁻¹L³T⁻²"
  },
  {
    questionText: "What is the SI unit of electric capacitance?",
    options: [
      "Farad",
      "Henry",
      "Tesla",
      "Volt"
    ],
    correctAnswer: "Farad"
  },
  {
    questionText: "Which of the following physical quantities is a base quantity?",
    options: [
      "Length",
      "Velocity",
      "Force",
      "Momentum"
    ],
    correctAnswer: "Length"
  },
  {
    questionText: "Which of the following quantities is a scalar?",
    options: [
      "Mass",
      "Velocity",
      "Force",
      "Momentum"
    ],
    correctAnswer: "Mass"
  },
  {
    questionText: "What is the SI unit of electric potential?",
    options: [
      "Volt",
      "Ampere",
      "Ohm",
      "Coulomb"
    ],
    correctAnswer: "Volt"
  },
  {
    questionText: "What is the dimensional formula of density?",
    options: [
      "M¹L⁻³T⁰",
      "M⁰L³T⁰",
      "M⁰L⁻³T⁻²",
      "M¹L²T⁻³"
    ],
    correctAnswer: "M¹L⁻³T⁰"
  },
  {
    questionText: "What is the SI unit of inductance?",
    options: [
      "Henry",
      "Weber",
      "Farad",
      "Tesla"
    ],
    correctAnswer: "Henry"
  },
  {
    questionText: "What is the dimensional formula for specific heat capacity?",
    options: [
      "M⁰L²T⁻²K⁻¹",
      "M⁰L¹T⁻²K⁻¹",
      "M¹L²T⁻¹K⁰",
      "M¹L⁰T⁻²K⁻²"
    ],
    correctAnswer: "M⁰L²T⁻²K⁻¹"
  },
  {
    questionText: "What is the dimensional formula for surface tension?",
    options: [
      "M¹L⁰T⁻²",
      "M⁰L¹T⁻²",
      "M¹L⁰T⁻¹",
      "M⁰L⁰T²"
    ],
    correctAnswer: "M¹L⁰T⁻²"
  },
  {
    questionText: "Which of the following pairs has the same dimensional formula?",
    options: [
      "Work and Torque",
      "Pressure and Energy",
      "Force and Power",
      "Velocity and Acceleration"
    ],
    correctAnswer: "Work and Torque"
  },
  {
    questionText: "If the velocity of light (c), gravitational constant (G), and Planck's constant (h) are chosen as fundamental units, the dimensions of mass can be expressed as:",
    options: [
      "c⁻¹G⁻¹/²h¹/²",
      "c⁰G¹h²",
      "c⁻²G¹/²h¹/²",
      "c²G¹/²h⁰"
    ],
    correctAnswer: "c⁻¹G⁻¹/²h¹/²"
  },
  {
    questionText: "The Planck constant (h) has dimensions of:",
    options: [
      "M¹L²T⁻¹",
      "M¹L²T⁻²",
      "M¹L¹T⁻¹",
      "M¹L⁰T⁻¹"
    ],
    correctAnswer: "M¹L²T⁻¹"
  },
  {
    questionText: "Which of the following is a correct dimensional formula for angular momentum?",
    options: [
      "M¹L²T⁻¹",
      "M¹L¹T⁻¹",
      "M¹L⁰T⁰",
      "M⁰L⁰T⁰"
    ],
    correctAnswer: "M¹L²T⁻¹"
  },
  {
    questionText: "What is the dimensional formula of viscosity?",
    options: [
      "M¹L⁻¹T⁻¹",
      "M⁰L¹T⁻²",
      "M¹L¹T⁻²",
      "M⁰L⁻²T⁻¹"
    ],
    correctAnswer: "M¹L⁻¹T⁻¹"
  },
  {
    questionText: "If x = at² + bt + c, where x is measured in meters and t in seconds, what is the dimension of coefficient 'a'?",
    options: [
      "L/T²",
      "L/T",
      "L",
      "T⁻¹"
    ],
    correctAnswer: "L/T²"
  },
  {
    questionText: "The dimensional formula of magnetic permeability is:",
    options: [
      "M¹L¹T⁻²I⁻²",
      "M¹L²T⁻²I⁻²",
      "M¹L⁻³T⁻²I⁻²",
      "M¹L⁰T⁻²I⁻¹"
    ],
    correctAnswer: "M¹L¹T⁻²I⁻²"
  },
  {
    questionText: "If the equation \( v = \sqrt{\frac{T}{\mu}} \) represents the velocity of a wave, what are the dimensions of \( \mu \) (linear mass density)?",
    options: [
      "M¹L⁻¹T⁰",
      "M¹L¹T⁻²",
      "M¹L²T⁻²",
      "M¹L⁰T⁻²"
    ],
    correctAnswer: "M¹L⁻¹T⁰"
  },
  {
    questionText: "What is the dimensional formula of universal gas constant (R)?",
    options: [
      "M¹L²T⁻²K⁻¹",
      "M⁰L²T⁻²K⁻¹",
      "M¹L⁰T⁻²K⁰",
      "M⁰L⁰T²K¹"
    ],
    correctAnswer: "M¹L²T⁻²K⁻¹"
  },
  {
    questionText: "Which of the following quantities has dimensions ML²T⁻³?",
    options: [
      "Power",
      "Energy",
      "Force",
      "Pressure"
    ],
    correctAnswer: "Power"
  },
  {
    questionText: "A force F is given by \( F = at + bt² \), where t is time. What are the dimensions of b?",
    options: [
      "MLT⁻⁴",
      "ML⁰T⁻³",
      "MLT⁻³",
      "ML²T⁻⁵"
    ],
    correctAnswer: "MLT⁻³"
  },
  {
    questionText: "If the equation of motion is \( x = A\sin(\omega t) \), the dimensional formula of \( \omega \) is:",
    options: [
      "T⁻¹",
      "T",
      "T²",
      "L/T"
    ],
    correctAnswer: "T⁻¹"
  },
  {
    questionText: "Which of the following quantities is dimensionless?",
    options: [
      "Strain",
      "Stress",
      "Energy",
      "Pressure"
    ],
    correctAnswer: "Strain"
  },
  {
    questionText: "If \( E = mc² \), the dimensional formula of c² is:",
    options: [
      "L²T⁻²",
      "M¹L²T⁻²",
      "M⁰L⁰T⁰",
      "L¹T⁻¹"
    ],
    correctAnswer: "L²T⁻²"
  },
  {
    questionText: "Which physical quantity has the dimensional formula M⁰L⁰T⁰?",
    options: [
      "Angle",
      "Velocity",
      "Force",
      "Momentum"
    ],
    correctAnswer: "Angle"
  },
]
const SimpleVectorArithmeticQuestions=[
  {
    questionText: "What is the magnitude of a vector with components (3, 4)?",
    options: [
      "5",
      "7",
      "9",
      "4"
    ],
    correctAnswer: "5"
  },
  {
    questionText: "If a vector has components (6, 8), what is its direction angle (in degrees)?",
    options: [
      "53.1",
      "45",
      "60",
      "30"
    ],
    correctAnswer: "53.1"
  },
  {
    questionText: "Which of the following is a unit vector?",
    options: [
      "(1, 0)",
      "(3, 4)",
      "(2, 2)",
      "(0, 0)"
    ],
    correctAnswer: "(1, 0)"
  },
  {
    questionText: "What is the result of adding two vectors (2, 3) and (1, 4)?",
    options: [
      "(3, 7)",
      "(1, 7)",
      "(3, 4)",
      "(2, 6)"
    ],
    correctAnswer: "(3, 7)"
  },
  {
    questionText: "A vector with components (5, 12) has a magnitude of:",
    options: [
      "13",
      "17",
      "12",
      "10"
    ],
    correctAnswer: "13"
  },
  {
    questionText: "What is the scalar multiplication of the vector (2, 3) by 3?",
    options: [
      "(6, 9)",
      "(5, 8)",
      "(2, 6)",
      "(3, 9)"
    ],
    correctAnswer: "(6, 9)"
  },
  {
    questionText: "Which operation results in a vector perpendicular to a given vector?",
    options: [
      "Cross product",
      "Dot product",
      "Scalar multiplication",
      "Addition"
    ],
    correctAnswer: "Cross product"
  },
  {
    questionText: "A zero vector has a magnitude of:",
    options: [
      "0",
      "1",
      "Infinite",
      "Negative"
    ],
    correctAnswer: "0"
  },
  {
    questionText: "If two vectors are parallel, their cross product is:",
    options: [
      "0",
      "1",
      "Equal to the magnitude of the first vector",
      "Equal to the magnitude of the second vector"
    ],
    correctAnswer: "0"
  },
  {
    questionText: "Which property states that vector addition is independent of the order?",
    options: [
      "Commutative property",
      "Distributive property",
      "Associative property",
      "Scalar property"
    ],
    correctAnswer: "Commutative property"
  },
  {
    questionText: "If vector A = (3, 4) and vector B = (1, 2), what is A - B?",
    options: [
      "(2, 2)",
      "(4, 6)",
      "(1, 1)",
      "(3, 2)"
    ],
    correctAnswer: "(2, 2)"
  },
  {
    questionText: "What is the unit vector in the same direction as (6, 8)?",
    options: [
      "(3/5, 4/5)",
      "(6, 8)",
      "(1, 1)",
      "(0.6, 0.8)"
    ],
    correctAnswer: "(3/5, 4/5)"
  },
  {
    questionText: "The dot product of vectors (3, 4) and (4, 3) is:",
    options: [
      "24",
      "12",
      "7",
      "25"
    ],
    correctAnswer: "24"
  },
  {
    questionText: "If a vector has a magnitude of 5 and makes a 37° angle with the x-axis, its x-component is approximately:",
    options: [
      "4",
      "3",
      "5",
      "2"
    ],
    correctAnswer: "4"
  },
  {
    questionText: "The projection of vector A = (4, 3) on vector B = (3, 4) is proportional to:",
    options: [
      "The dot product of A and B",
      "The cross product of A and B",
      "The addition of A and B",
      "The subtraction of A and B"
    ],
    correctAnswer: "The dot product of A and B"
  },
  {
    questionText: "Two vectors are perpendicular if their dot product is:",
    options: [
      "0",
      "1",
      "-1",
      "Infinite"
    ],
    correctAnswer: "0"
  },
  {
    questionText: "What is the cross product of (2, 3, 4) and (1, 0, 0)?",
    options: [
      "(0, 4, -3)",
      "(3, -4, 2)",
      "(0, 3, -4)",
      "(4, -3, 0)"
    ],
    correctAnswer: "(0, 4, -3)"
  },
  {
    questionText: "If vector A = (3, -2) and vector B = (-3, 2), what is A + B?",
    options: [
      "(0, 0)",
      "(6, 0)",
      "(0, -4)",
      "(3, -3)"
    ],
    correctAnswer: "(0, 0)"
  },
  {
    questionText: "The angle between two equal magnitude vectors (A and B) that result in a resultant vector with magnitude equal to one of them is:",
    options: [
      "120°",
      "90°",
      "60°",
      "45°"
    ],
    correctAnswer: "120°"
  },
  {
    questionText: "The magnitude of the resultant of two vectors of equal magnitude A inclined at an angle θ is given by:",
    options: [
      "√(2A² + 2A²cosθ)",
      "√(A² + A²cosθ)",
      "√(2A² + A²cos²θ)",
      "√(A² + A²sinθ)"
    ],
    correctAnswer: "√(2A² + 2A²cosθ)"
  },
  {
    questionText: "What is the area of a parallelogram formed by vectors A = (2, 3, 4) and B = (1, 0, 0)?",
    options: [
      "√25",
      "5",
      "10",
      "2.5"
    ],
    correctAnswer: "√25"
  },
  {
    questionText: "If vector A = (2, -3, 1) and vector B = (-1, 4, 2), what is the scalar triple product of A, B, and C = (1, 2, -1)?",
    options: [
      "-21",
      "21",
      "0",
      "-10"
    ],
    correctAnswer: "-21"
  },
  {
    questionText: "The moment of force is represented by which vector operation?",
    options: [
      "Cross product",
      "Dot product",
      "Addition",
      "Scalar multiplication"
    ],
    correctAnswer: "Cross product"
  },
  {
    questionText: "What is the direction cosine of a vector with components (1, 1, 1)?",
    options: [
      "1/√3",
      "1/3",
      "1/2",
      "1"
    ],
    correctAnswer: "1/√3"
  },
  {
    questionText: "If vector A is along x-axis and vector B is along y-axis, what is the angle between A and B?",
    options: [
      "90°",
      "180°",
      "0°",
      "45°"
    ],
    correctAnswer: "90°"
  },
  {
    questionText: "If a vector A = (6, 8) is divided by its magnitude, the resulting vector is:",
    options: [
      "A unit vector",
      "A zero vector",
      "A parallel vector",
      "A perpendicular vector"
    ],
    correctAnswer: "A unit vector"
  },
  {
    questionText: "What is the result of adding (2, -3) and (3, 3)?",
    options: [
      "(5, 0)",
      "(1, 0)",
      "(6, 6)",
      "(-1, 6)"
    ],
    correctAnswer: "(5, 0)"
  },
  {
    questionText: "If two vectors A and B are collinear, then their cross product is:",
    options: [
      "Zero",
      "Equal to their dot product",
      "Equal to their sum",
      "Infinite"
    ],
    correctAnswer: "Zero"
  },
  {
    questionText: "The magnitude of the resultant of vectors A = (3, 4) and B = (1, 2) is:",
    options: [
      "7.28",
      "5.10",
      "6.08",
      "6"
    ],
    correctAnswer: "5.10"
  },
  {
    questionText: "Which of the following operations will scale a vector?",
    options: [
      "Scalar multiplication",
      "Dot product",
      "Cross product",
      "Vector addition"
    ],
    correctAnswer: "Scalar multiplication"
  },
  {
    questionText: "The unit vector perpendicular to both (2, 0, 0) and (0, 3, 0) is:",
    options: [
      "(0, 0, 1)",
      "(1, 0, 0)",
      "(0, 1, 0)",
      "(1, 1, 1)"
    ],
    correctAnswer: "(0, 0, 1)"
  },
  {
    questionText: "What is the dot product of unit vectors along x-axis and y-axis?",
    options: [
      "0",
      "1",
      "-1",
      "Undefined"
    ],
    correctAnswer: "0"
  },
  {
    questionText: "If vector A = (4, 5) and vector B = (-4, -5), their sum is:",
    options: [
      "(0, 0)",
      "(8, 10)",
      "(4, -5)",
      "(0, -10)"
    ],
    correctAnswer: "(0, 0)"
  },
  {
    questionText: "If vector A has components (x, y) and its magnitude is 1, it is called:",
    options: [
      "A unit vector",
      "A zero vector",
      "A position vector",
      "A resultant vector"
    ],
    correctAnswer: "A unit vector"
  },
  {
    questionText: "The direction cosine of a vector A with components (2, 0, 0) is:",
    options: [
      "1",
      "0",
      "√2",
      "1/2"
    ],
    correctAnswer: "1"
  },
  {
    questionText: "If vectors A = (3, 4, 5) and B = (6, 8, 10), the angle between A and B is:",
    options: [
      "0°",
      "45°",
      "90°",
      "60°"
    ],
    correctAnswer: "0°"
  },
  {
    questionText: "The volume of a parallelepiped formed by vectors A = (1, 2, 3), B = (4, 5, 6), and C = (7, 8, 9) is:",
    options: [
      "0",
      "1",
      "6",
      "10"
    ],
    correctAnswer: "0"
  },
  {
    questionText: "If vector A = (2, 3, -4) and vector B = (1, -2, 5), find A × B:",
    options: [
      "(7, -14, -7)",
      "(-7, 14, -7)",
      "(14, 7, -14)",
      "(-7, -14, 7)"
    ],
    correctAnswer: "(7, -14, -7)"
  },
  {
    questionText: "The projection of vector A = (2, 4) on vector B = (1, 1) is proportional to:",
    options: [
      "√2",
      "2",
      "4",
      "6"
    ],
    correctAnswer: "6"
  },
  {
    questionText: "If vector A = (3, 4) and its magnitude is doubled, the new vector is:",
    options: [
      "(6, 8)",
      "(3, 4)",
      "(1.5, 2)",
      "(12, 16)"
    ],
    correctAnswer: "(6, 8)"
  },
  {
    questionText: "If the resultant of vectors (a, b) and (b, -a) is a unit vector, the value of a² + b² is:",
    options: [
      "1",
      "0",
      "2",
      "√2"
    ],
    correctAnswer: "1"
  },
  {
    questionText: "If vector A = (x, x, x) and vector B = (1, 2, 3), the value of x for which A is perpendicular to B is:",
    options: [
      "0",
      "-2",
      "-3",
      "-6"
    ],
    correctAnswer: "0"
  },
  {
    questionText: "The area of a triangle formed by vectors A = (1, 0, 0) and B = (0, 1, 0) is:",
    options: [
      "0.5",
      "1",
      "0",
      "2"
    ],
    correctAnswer: "0.5"
  },
  {
    questionText: "The vector perpendicular to both A = (1, 2, 3) and B = (4, 5, 6) is proportional to:",
    options: [
      "(-3, 6, -3)",
      "(3, -6, 3)",
      "(3, 6, -3)",
      "(-3, -6, 3)"
    ],
    correctAnswer: "(-3, 6, -3)"
  },
  {
    questionText: "The resultant of two equal vectors inclined at 120° is proportional to:",
    options: [
      "The magnitude of one vector",
      "√3 times the magnitude of one vector",
      "Half the magnitude of one vector",
      "Zero"
    ],
    correctAnswer: "The magnitude of one vector"
  },
  {
    questionText: "If vector A = (3, 4, 0) and vector B = (0, 0, 5), the cross product A × B is:",
    options: [
      "(20, -15, 0)",
      "(0, 0, 15)",
      "(15, 0, -20)",
      "(0, 15, 20)"
    ],
    correctAnswer: "(20, -15, 0)"
  },
  {
    questionText: "The angle between two vectors A = (1, 1, 0) and B = (1, -1, 0) is:",
    options: [
      "90°",
      "45°",
      "135°",
      "180°"
    ],
    correctAnswer: "90°"
  },
  {
    questionText: "A vector is perpendicular to (1, 2, 3) and has the same magnitude as (3, 4, 0). The vector is:",
    options: [
      "(-4, 2, -1)",
      "(4, -2, 1)",
      "(-1, 2, -4)",
      "(1, -2, 4)"
    ],
    correctAnswer: "(4, -2, 1)"
  },
  {
    questionText: "The unit vector perpendicular to the plane of A = (1, 0, 0) and B = (0, 1, 0) is:",
    options: [
      "(0, 0, 1)",
      "(1, 0, 0)",
      "(0, 1, 0)",
      "(1, 1, 0)"
    ],
    correctAnswer: "(0, 0, 1)"
  },
  {
    questionText: "The moment of a force F = (2, -3, 4) about a point P = (1, 0, 0) is:",
    options: [
      "(0, -4, -3)",
      "(0, 3, 4)",
      "(0, -3, -4)",
      "(0, -4, 3)"
    ],
    correctAnswer: "(0, -4, -3)"
  },
]
const ConservativeForceQuestions=[
  {
    questionText: "Which of the following is a conservative force?",
    options: [
      "Gravitational force",
      "Frictional force",
      "Air resistance",
      "Tension in a rope"
    ],
    correctAnswer: "Gravitational force"
  },
  {
    questionText: "The work done by a conservative force depends only on:",
    options: [
      "The initial and final positions",
      "The path taken",
      "The time taken",
      "The speed of the object"
    ],
    correctAnswer: "The initial and final positions"
  },
  {
    questionText: "Which of the following forces is *not* conservative?",
    options: [
      "Frictional force",
      "Electrostatic force",
      "Gravitational force",
      "Spring force"
    ],
    correctAnswer: "Frictional force"
  },
  {
    questionText: "In a conservative force field, the work done in a closed path is:",
    options: [
      "Zero",
      "Positive",
      "Negative",
      "Depends on the path"
    ],
    correctAnswer: "Zero"
  },
  {
    questionText: "Potential energy can be defined for which type of forces?",
    options: [
      "Conservative forces",
      "Non-conservative forces",
      "Both conservative and non-conservative forces",
      "Only external forces"
    ],
    correctAnswer: "Conservative forces"
  },
  {
    questionText: "The potential energy of an object in a conservative field is:",
    options: [
      "Independent of the path taken",
      "Dependent on the path taken",
      "Dependent on speed",
      "Dependent on time"
    ],
    correctAnswer: "Independent of the path taken"
  },
  {
    questionText: "Which of the following is true for a conservative force?",
    options: [
      "Work done is path independent",
      "Work done depends on the velocity",
      "It always opposes motion",
      "It dissipates energy as heat"
    ],
    correctAnswer: "Work done is path independent"
  },
  {
    questionText: "The force acting on a particle in a gravitational field is:",
    options: [
      "Conservative",
      "Non-conservative",
      "Constant",
      "None of the above"
    ],
    correctAnswer: "Conservative"
  },
  {
    questionText: "Which energy is associated with conservative forces?",
    options: [
      "Potential energy",
      "Kinetic energy",
      "Thermal energy",
      "Mechanical energy"
    ],
    correctAnswer: "Potential energy"
  },
  {
    questionText: "The work done by gravity on a falling object is:",
    options: [
      "Positive",
      "Negative",
      "Zero",
      "Depends on the path"
    ],
    correctAnswer: "Positive"
  },
  {
    questionText: "If the work done by a force in moving an object around a closed loop is zero, the force is:",
    options: [
      "Conservative",
      "Non-conservative",
      "Frictional",
      "Magnetic"
    ],
    correctAnswer: "Conservative"
  },
  {
    questionText: "The relationship between force (F) and potential energy (U) in a conservative field is:",
    options: [
      "F = -dU/dx",
      "F = dU/dx",
      "F = U × x",
      "F = U/dx"
    ],
    correctAnswer: "F = -dU/dx"
  },
  {
    questionText: "Which of the following is a characteristic of a conservative force field?",
    options: [
      "The curl of the force is zero",
      "The force is always constant",
      "It dissipates energy",
      "It is independent of distance"
    ],
    correctAnswer: "The curl of the force is zero"
  },
  {
    questionText: "A particle in a conservative force field moves from A to B. The work done is:",
    options: [
      "Independent of the path",
      "Dependent on the path",
      "Zero always",
      "Infinite"
    ],
    correctAnswer: "Independent of the path"
  },
  {
    questionText: "If the potential energy of a system increases, the work done by the conservative force is:",
    options: [
      "Negative",
      "Positive",
      "Zero",
      "Infinite"
    ],
    correctAnswer: "Negative"
  },
  {
    questionText: "Which of the following forces is an example of a conservative force?",
    options: [
      "Spring force",
      "Air resistance",
      "Tension",
      "Magnetic force"
    ],
    correctAnswer: "Spring force"
  },
  {
    questionText: "For a conservative force, the total mechanical energy:",
    options: [
      "Remains constant",
      "Decreases",
      "Increases",
      "Is zero"
    ],
    correctAnswer: "Remains constant"
  },
  {
    questionText: "In an ideal spring, the potential energy is proportional to:",
    options: [
      "The square of the displacement",
      "The displacement",
      "The velocity",
      "The force applied"
    ],
    correctAnswer: "The square of the displacement"
  },
  {
    questionText: "The negative gradient of potential energy gives:",
    options: [
      "The force",
      "The acceleration",
      "The velocity",
      "The work done"
    ],
    correctAnswer: "The force"
  },
  {
    questionText: "A central force (e.g., gravitational force) is:",
    options: [
      "Always conservative",
      "Always non-conservative",
      "Sometimes conservative",
      "Depends on the object"
    ],
    correctAnswer: "Always conservative"
  },
  {
    questionText: "The gravitational potential energy between two masses m1 and m2 separated by a distance r is:",
    options: [
      "-Gm1m2/r",
      "Gm1m2/r²",
      "Gm1m2r",
      "Gm1m2/r"
    ],
    correctAnswer: "-Gm1m2/r"
  },
  {
    questionText: "In a conservative force field, work done along a closed loop is:",
    options: [
      "Zero",
      "Positive",
      "Negative",
      "Equal to the total energy"
    ],
    correctAnswer: "Zero"
  },
  {
    questionText: "The conservative force field can be represented by:",
    options: [
      "A potential function",
      "A scalar value",
      "A constant vector",
      "A time-dependent function"
    ],
    correctAnswer: "A potential function"
  },
  {
    questionText: "The work done by a spring force during compression is:",
    options: [
      "-1/2 kx²",
      "1/2 kx²",
      "kx²",
      "-kx²"
    ],
    correctAnswer: "-1/2 kx²"
  },
  {
    questionText: "For a conservative force, which of the following is true?",
    options: [
      "It has a scalar potential",
      "It increases kinetic energy",
      "It has no relation to potential energy",
      "It acts only vertically"
    ],
    correctAnswer: "It has a scalar potential"
  },
  {
    questionText: "The electric force in a uniform electric field is:",
    options: [
      "Conservative",
      "Non-conservative",
      "Constant",
      "Time-dependent"
    ],
    correctAnswer: "Conservative"
  },
  {
    questionText: "In a conservative force field, energy conservation implies that:",
    options: [
      "Total mechanical energy is conserved",
      "Potential energy is conserved",
      "Kinetic energy is constant",
      "Force is always constant"
    ],
    correctAnswer: "Total mechanical energy is conserved"
  },
  {
    questionText: "Which of the following forces can have a potential energy function associated with it?",
    options: [
      "Conservative forces",
      "Non-conservative forces",
      "Random forces",
      "Only gravitational force"
    ],
    correctAnswer: "Conservative forces"
  },
  {
    questionText: "The potential energy function U(x) is related to the force F(x) by:",
    options: [
      "F(x) = -dU/dx",
      "F(x) = dU/dt",
      "F(x) = dU/dx",
      "F(x) = U(x)"
    ],
    correctAnswer: "F(x) = -dU/dx"
  },
  {
    questionText: "Which of the following conditions must hold for a force to be conservative?",
    options: [
      "The work done is path independent",
      "The force is proportional to velocity",
      "The force opposes motion",
      "The force dissipates energy"
    ],
    correctAnswer: "The work done is path independent"
  },
  {
    questionText: "A particle is acted upon by a conservative force with a potential energy function U(x) = 5x². What is the force acting on the particle at x = 3?",
    options: [
      "-30 N",
      "30 N",
      "-15 N",
      "15 N"
    ],
    correctAnswer: "-30 N"
  },
  {
    questionText: "If the work done by a force in moving an object along a path from A to B is 15 J, and the force is conservative, what is the work done in moving the object back from B to A?",
    options: [
      "-15 J",
      "15 J",
      "0 J",
      "Depends on the path"
    ],
    correctAnswer: "-15 J"
  },
  {
    questionText: "The potential energy in a conservative force field is given by U(x, y) = 4x² + 9y². What is the x-component of the force?",
    options: [
      "-8x",
      "8x",
      "-9y",
      "9y"
    ],
    correctAnswer: "-8x"
  },
  {
    questionText: "Which of the following correctly relates conservative force and potential energy?",
    options: [
      "F = -∇U",
      "F = ∇U",
      "F = dU/dt",
      "F = U/r²"
    ],
    correctAnswer: "F = -∇U"
  },
  {
    questionText: "In a system with only conservative forces, if the kinetic energy decreases by 20 J, what happens to the potential energy?",
    options: [
      "Increases by 20 J",
      "Decreases by 20 J",
      "Remains the same",
      "Increases by 10 J"
    ],
    correctAnswer: "Increases by 20 J"
  },
  {
    questionText: "A force field F is given by F = -kx (where k is a constant). Which of the following is true?",
    options: [
      "The force is conservative, and U = 1/2 kx²",
      "The force is conservative, and U = -1/2 kx²",
      "The force is non-conservative",
      "The force is constant"
    ],
    correctAnswer: "The force is conservative, and U = 1/2 kx²"
  },
  {
    questionText: "In a gravitational field, the work done in moving a 5 kg mass from a height of 10 m to 5 m is:",
    options: [
      "-245 J",
      "245 J",
      "-490 J",
      "490 J"
    ],
    correctAnswer: "-245 J"
  },
  {
    questionText: "A particle moves in a conservative field where U(x) = 6x³. What is the force acting on the particle?",
    options: [
      "-18x²",
      "18x²",
      "6x²",
      "-6x²"
    ],
    correctAnswer: "-18x²"
  },
  {
    questionText: "The line integral of a conservative force field along a closed path is:",
    options: [
      "Always zero",
      "Equal to the potential energy",
      "Equal to the kinetic energy",
      "Dependent on the path"
    ],
    correctAnswer: "Always zero"
  },
  {
    questionText: "If a particle in a conservative force field has its potential energy halved, the total energy of the system:",
    options: [
      "Remains constant",
      "Is halved",
      "Doubles",
      "Depends on the path taken"
    ],
    correctAnswer: "Remains constant"
  },
  {
    questionText: "A particle is in a central conservative force field. Which of the following quantities is conserved?",
    options: [
      "Angular momentum and energy",
      "Only angular momentum",
      "Only energy",
      "None of the above"
    ],
    correctAnswer: "Angular momentum and energy"
  },
  {
    questionText: "In a gravitational field, the potential energy of a 1 kg object at a height of 2 m above the ground is 19.6 J. What will its potential energy be at 4 m?",
    options: [
      "39.2 J",
      "19.6 J",
      "9.8 J",
      "78.4 J"
    ],
    correctAnswer: "39.2 J"
  },
  {
    questionText: "A spring has a force constant k = 200 N/m. If compressed by 0.1 m, the potential energy stored in the spring is:",
    options: [
      "1 J",
      "2 J",
      "0.5 J",
      "4 J"
    ],
    correctAnswer: "1 J"
  },
  {
    questionText: "For a force F = -dU/dx, the potential energy function U(x) for a particle acted upon by a force F = -5x is:",
    options: [
      "U(x) = 2.5x²",
      "U(x) = -2.5x²",
      "U(x) = 5x",
      "U(x) = -5x"
    ],
    correctAnswer: "U(x) = 2.5x²"
  },
  {
    questionText: "The work-energy theorem in the presence of a conservative force states that:",
    options: [
      "The total mechanical energy remains constant",
      "Kinetic energy is always conserved",
      "Potential energy is always conserved",
      "Work done depends on the path"
    ],
    correctAnswer: "The total mechanical energy remains constant"
  },  
]
const KinematicsQuestions=[
  {
    questionText: "What is the formula for speed?",
    options: [
      "Speed = Distance / Time",
      "Speed = Time / Distance",
      "Speed = Distance × Time",
      "Speed = Velocity × Acceleration"
    ],
    correctAnswer: "Speed = Distance / Time"
  },
  {
    questionText: "If a car travels 100 meters in 10 seconds, what is its speed?",
    options: [
      "10 m/s",
      "100 m/s",
      "0.1 m/s",
      "1000 m/s"
    ],
    correctAnswer: "10 m/s"
  },
  {
    questionText: "Which of these is a scalar quantity?",
    options: [
      "Speed",
      "Velocity",
      "Acceleration",
      "Displacement"
    ],
    correctAnswer: "Speed"
  },
  {
    questionText: "What is the SI unit of acceleration?",
    options: [
      "m/s²",
      "m/s",
      "m",
      "s"
    ],
    correctAnswer: "m/s²"
  },
  {
    questionText: "An object at rest has a velocity of:",
    options: [
      "0 m/s",
      "1 m/s",
      "10 m/s",
      "Depends on the mass"
    ],
    correctAnswer: "0 m/s"
  },
  {
    questionText: "What does the slope of a distance-time graph represent?",
    options: [
      "Speed",
      "Acceleration",
      "Distance",
      "Time"
    ],
    correctAnswer: "Speed"
  },
  {
    questionText: "Which of the following graphs represents uniform motion?",
    options: [
      "A straight line in a distance-time graph",
      "A curve in a distance-time graph",
      "A parabola in a velocity-time graph",
      "A horizontal line in a distance-time graph"
    ],
    correctAnswer: "A straight line in a distance-time graph"
  },
  {
    questionText: "If an object moves in a straight line with constant speed, which of the following is true?",
    options: [
      "Acceleration is zero",
      "Velocity is zero",
      "Speed is increasing",
      "Direction is changing"
    ],
    correctAnswer: "Acceleration is zero"
  },
  {
    questionText: "Which of these quantities is a vector?",
    options: [
      "Velocity",
      "Speed",
      "Distance",
      "Time"
    ],
    correctAnswer: "Velocity"
  },
  {
    questionText: "An object covers 20 meters in 5 seconds. What is its speed?",
    options: [
      "4 m/s",
      "25 m/s",
      "5 m/s",
      "2 m/s"
    ],
    correctAnswer: "4 m/s"
  },
  {
    questionText: "What is the average speed of an object that travels 60 km in 2 hours and 40 km in 1 hour?",
    options: [
      "33.33 km/h",
      "30 km/h",
      "100 km/h",
      "20 km/h"
    ],
    correctAnswer: "33.33 km/h"
  },
  {
    questionText: "If a car accelerates uniformly from rest to a velocity of 20 m/s in 5 seconds, what is its acceleration?",
    options: [
      "4 m/s²",
      "5 m/s²",
      "20 m/s²",
      "10 m/s²"
    ],
    correctAnswer: "4 m/s²"
  },
  {
    questionText: "Which of these is an example of non-uniform motion?",
    options: [
      "A car accelerating on a highway",
      "A satellite orbiting Earth at constant speed",
      "A ball rolling on a flat surface at constant velocity",
      "A train moving at constant speed"
    ],
    correctAnswer: "A car accelerating on a highway"
  },
  {
    questionText: "What is the total displacement of a particle moving 10 m east and then 10 m west?",
    options: [
      "0 m",
      "20 m",
      "10 m",
      "Depends on the path"
    ],
    correctAnswer: "0 m"
  },
  {
    questionText: "An object is thrown upwards with an initial velocity of 20 m/s. What is its velocity at the highest point?",
    options: [
      "0 m/s",
      "20 m/s",
      "10 m/s",
      "Depends on the height"
    ],
    correctAnswer: "0 m/s"
  },
  {
    questionText: "A car moving at 20 m/s comes to a stop in 5 seconds. What is its deceleration?",
    options: [
      "4 m/s²",
      "5 m/s²",
      "-5 m/s²",
      "-4 m/s²"
    ],
    correctAnswer: "-4 m/s²"
  },
  {
    questionText: "What is the area under a velocity-time graph?",
    options: [
      "Displacement",
      "Acceleration",
      "Speed",
      "Force"
    ],
    correctAnswer: "Displacement"
  },
  {
    questionText: "A stone is dropped from a height of 45 m. How long does it take to hit the ground? (g = 10 m/s²)",
    options: [
      "3 s",
      "4.5 s",
      "2 s",
      "9 s"
    ],
    correctAnswer: "3 s"
  },
  {
    questionText: "An object is moving with a velocity of 15 m/s and has a constant acceleration of 3 m/s². What will its velocity be after 4 seconds?",
    options: [
      "27 m/s",
      "21 m/s",
      "33 m/s",
      "15 m/s"
    ],
    correctAnswer: "27 m/s"
  },
  {
    questionText: "What happens to the velocity of a particle moving in a straight line with constant acceleration?",
    options: [
      "Increases linearly",
      "Decreases exponentially",
      "Remains constant",
      "Decreases linearly"
    ],
    correctAnswer: "Increases linearly"
  },
  {
    questionText: "A projectile is launched at an angle of 30° with a velocity of 40 m/s. What is its maximum height? (g = 10 m/s²)",
    options: [
      "20 m",
      "40 m",
      "10 m",
      "80 m"
    ],
    correctAnswer: "20 m"
  },
  {
    questionText: "A car accelerates uniformly from 10 m/s to 30 m/s over a distance of 100 m. What is its acceleration?",
    options: [
      "4 m/s²",
      "2 m/s²",
      "8 m/s²",
      "16 m/s²"
    ],
    correctAnswer: "4 m/s²"
  },
  {
    questionText: "A ball is thrown horizontally at 20 m/s from a height of 80 m. How far from the base of the building will the ball hit the ground? (g = 10 m/s²)",
    options: [
      "40 m",
      "60 m",
      "20 m",
      "80 m"
    ],
    correctAnswer: "40 m"
  },
  {
    questionText: "If a particle's velocity is given by v = 5t², what is its acceleration at t = 3 seconds?",
    options: [
      "30 m/s²",
      "10 m/s²",
      "15 m/s²",
      "45 m/s²"
    ],
    correctAnswer: "30 m/s²"
  },
  {
    questionText: "A train accelerates uniformly at 2 m/s² for 5 seconds. It then moves at constant velocity for 10 seconds and decelerates uniformly to rest in 5 seconds. What is the total distance traveled?",
    options: [
      "125 m",
      "150 m",
      "200 m",
      "175 m"
    ],
    correctAnswer: "175 m"
  },
  {
    questionText: "A car travels 30 km at 40 km/h and then 60 km at 60 km/h. What is the average speed of the car for the entire journey?",
    options: [
      "52 km/h",
      "48 km/h",
      "50 km/h",
      "56 km/h"
    ],
    correctAnswer: "50 km/h"
  },
  {
    questionText: "If a ball is thrown vertically upward with a speed of 30 m/s, how long will it take to return to the same height? (g = 10 m/s²)",
    options: [
      "6 s",
      "3 s",
      "9 s",
      "12 s"
    ],
    correctAnswer: "6 s"
  },
  {
    questionText: "A cyclist covers a distance of 15 km at 10 km/h and another 20 km at 20 km/h. What is the total time taken?",
    options: [
      "2 hours",
      "2.25 hours",
      "1.75 hours",
      "3 hours"
    ],
    correctAnswer: "2.25 hours"
  },
  {
    questionText: "A car moving at 25 m/s slows down uniformly to rest over a distance of 100 m. What is its deceleration?",
    options: [
      "-3.125 m/s²",
      "-2.5 m/s²",
      "-4 m/s²",
      "-5 m/s²"
    ],
    correctAnswer: "-3.125 m/s²"
  },
  {
    questionText: "If a particle moves in a circular path with constant speed, which of the following is true?",
    options: [
      "Velocity is changing",
      "Acceleration is zero",
      "Speed is changing",
      "Displacement is zero"
    ],
    correctAnswer: "Velocity is changing"
  },
  {
    questionText: "A ball is dropped from a height of 20 m. How long does it take to reach the ground? (g = 10 m/s²)",
    options: [
      "2 s",
      "1.5 s",
      "3 s",
      "4 s"
    ],
    correctAnswer: "2 s"
  },
  {
    questionText: "If an object has an initial velocity of 10 m/s and accelerates at 2 m/s² for 3 seconds, what is its final velocity?",
    options: [
      "16 m/s",
      "10 m/s",
      "20 m/s",
      "12 m/s"
    ],
    correctAnswer: "16 m/s"
  },
  {
    questionText: "What is the displacement of a car that moves with an initial velocity of 5 m/s, accelerates at 2 m/s², and travels for 4 seconds?",
    options: [
      "36 m",
      "24 m",
      "20 m",
      "16 m"
    ],
    correctAnswer: "36 m"
  },
  {
    questionText: "A particle travels with a velocity of 15 m/s for 10 seconds, then accelerates at 2 m/s² for 5 seconds. What is the total displacement?",
    options: [
      "200 m",
      "275 m",
      "250 m",
      "300 m"
    ],
    correctAnswer: "275 m"
  },
  {
    questionText: "What is the velocity of a projectile after 3 seconds if it is thrown upward with an initial velocity of 30 m/s? (g = 10 m/s²)",
    options: [
      "0 m/s",
      "10 m/s",
      "15 m/s",
      "20 m/s"
    ],
    correctAnswer: "0 m/s"
  },
  {
    questionText: "A car moving with a speed of 15 m/s comes to rest in 3 seconds. What is the distance covered before stopping?",
    options: [
      "22.5 m",
      "30 m",
      "45 m",
      "15 m"
    ],
    correctAnswer: "22.5 m"
  },
  {
    questionText: "A body moves 40 m north and then 30 m east. What is its resultant displacement?",
    options: [
      "50 m",
      "70 m",
      "30 m",
      "60 m"
    ],
    correctAnswer: "50 m"
  },
  {
    questionText: "If a car increases its velocity from 20 m/s to 40 m/s in 10 seconds, what is its acceleration?",
    options: [
      "2 m/s²",
      "3 m/s²",
      "1 m/s²",
      "4 m/s²"
    ],
    correctAnswer: "2 m/s²"
  },
  {
    questionText: "A truck covers 60 km in 1 hour and another 120 km in 2 hours. What is its average speed?",
    options: [
      "60 km/h",
      "50 km/h",
      "40 km/h",
      "45 km/h"
    ],
    correctAnswer: "60 km/h"
  },
  {
    questionText: "An object moving with a velocity of 20 m/s slows down uniformly at 5 m/s². How long will it take to come to rest?",
    options: [
      "4 s",
      "3 s",
      "5 s",
      "6 s"
    ],
    correctAnswer: "4 s"
  },
  {
    questionText: "A projectile is launched with a velocity of 50 m/s at an angle of 45°. What is its horizontal range? (g = 10 m/s²)",
    options: [
      "250 m",
      "300 m",
      "200 m",
      "150 m"
    ],
    correctAnswer: "250 m"
  },
  {
    questionText: "A car accelerates uniformly from rest to 30 m/s in 10 seconds. It then decelerates uniformly to a stop in the next 5 seconds. What is the total distance covered?",
    options: [
      "375 m",
      "300 m",
      "450 m",
      "225 m"
    ],
    correctAnswer: "375 m"
  },
  {
    questionText: "A ball is thrown upward with a velocity of 25 m/s. How high does it go? (g = 10 m/s²)",
    options: [
      "31.25 m",
      "40 m",
      "25 m",
      "50 m"
    ],
    correctAnswer: "31.25 m"
  },
  {
    questionText: "A body moving with a velocity of 10 m/s covers a distance of 100 m while decelerating uniformly. What is the deceleration?",
    options: [
      "0.5 m/s²",
      "1 m/s²",
      "2 m/s²",
      "0.75 m/s²"
    ],
    correctAnswer: "0.5 m/s²"
  },
  {
    questionText: "A projectile is launched with an initial velocity of 20 m/s at an angle of 60°. What is its time of flight? (g = 10 m/s²)",
    options: [
      "3.46 s",
      "4.5 s",
      "2.5 s",
      "5.2 s"
    ],
    correctAnswer: "3.46 s"
  },
  {
    questionText: "A ball is thrown horizontally from a height of 80 m with a velocity of 15 m/s. How far from the base will it land? (g = 10 m/s²)",
    options: [
      "60 m",
      "75 m",
      "40 m",
      "50 m"
    ],
    correctAnswer: "60 m"
  },
  {
    questionText: "If a particle's position is given by x = 5t² + 2t, what is its acceleration?",
    options: [
      "10 m/s²",
      "2 m/s²",
      "5 m/s²",
      "0 m/s²"
    ],
    correctAnswer: "10 m/s²"
  },
  {
    questionText: "A car moving at 30 m/s decelerates uniformly to rest in 6 seconds. What is the distance covered during this time?",
    options: [
      "90 m",
      "100 m",
      "150 m",
      "120 m"
    ],
    correctAnswer: "90 m"
  },
  {
    questionText: "A train accelerates from rest at 2 m/s² for 10 seconds and then moves at constant speed for 20 seconds. What is the total distance traveled?",
    options: [
      "500 m",
      "600 m",
      "400 m",
      "450 m"
    ],
    correctAnswer: "500 m"
  },
  {
    questionText: "A stone is projected with an initial velocity of 40 m/s at an angle of 30°. What is its maximum height? (g = 10 m/s²)",
    options: [
      "20 m",
      "30 m",
      "40 m",
      "50 m"
    ],
    correctAnswer: "20 m"
  },
    
]
const PHY101questions=[
    {
      questionText: "What is the SI unit of force?",
      options: [
        "Newton",
        "Joule",
        "Pascal",
        "Watt"
      ],
      correctAnswer: "Newton"
    },
    {
      questionText: "If a car travels 120 km in 2 hours, what is its average speed?",
      options: [
        "120 km/h",
        "60 km/h",
        "100 km/h",
        "80 km/h"
      ],
      correctAnswer: "60 km/h"
    },
    {
      questionText: "Which of these is a scalar quantity?",
      options: [
        "Velocity",
        "Force",
        "Speed",
        "Displacement"
      ],
      correctAnswer: "Speed"
    },
    {
      questionText: "A ball is thrown vertically upward with a speed of 20 m/s. How long will it take to reach its highest point? (g = 10 m/s²)",
      options: [
        "4 s",
        "3 s",
        "2 s",
        "5 s"
      ],
      correctAnswer: "2 s"
    },
    {
      questionText: "What is the dimensional formula of velocity?",
      options: [
        "[M⁰ L⁰ T⁰]",
        "[M L T⁻²]",
        "[M L² T⁻¹]",
        "[M⁰ L¹ T⁻¹]"
      ],
      correctAnswer: "[M⁰ L¹ T⁻¹]"
    },
    {
      questionText: "Which of these forces is conservative?",
      options: [
        "Gravitational force",
        "Frictional force",
        "Tension force",
        "Air resistance"
      ],
      correctAnswer: "Gravitational force"
    },
    {
      questionText: "If a particle moves in a circle with constant speed, which of the following is true?",
      options: [
        "Acceleration is zero",
        "Velocity is changing",
        "Speed is changing",
        "Displacement is zero"
      ],
      correctAnswer: "Velocity is changing"
    },
    {
      questionText: "A vector has components 3i and 4j. What is its magnitude?",
      options: [
        "1",
        "7",
        "5",
        "6"
      ],
      correctAnswer: "5"
    },
    {
      questionText: "A projectile is launched with a velocity of 30 m/s at an angle of 45°. What is its horizontal range? (g = 10 m/s²)",
      options: [
        "50 m",
        "60 m",
        "45 m",
        "90 m"
      ],
      correctAnswer: "90 m"
    },
    {
      questionText: "Which quantity remains constant for a body under the influence of conservative forces?",
      options: [
        "Total mechanical energy",
        "Kinetic energy",
        "Potential energy",
        "Power"
      ],
      correctAnswer: "Total mechanical energy"
    },
    {
      questionText: "If a force of 10 N acts on an object of mass 2 kg, what is its acceleration?",
      options: [
        "10 m/s²",
        "5 m/s²",
        "20 m/s²",
        "2 m/s²"
      ],
      correctAnswer: "5 m/s²"
    },
    {
      questionText: "What is the result of the cross product of two parallel vectors?",
      options: [
        "Null scalar",
        "Unit vector",
        "Zero vector",
        "Perpendicular vector"
      ],
      correctAnswer: "Zero vector"
    },
    {
      questionText: "A car moving at 25 m/s slows down uniformly to rest in 10 seconds. What is its deceleration?",
      options: [
        "-1.5 m/s²",
        "-3 m/s²",
        "-4 m/s²",
        "-2.5 m/s²"
      ],
      correctAnswer: "-2.5 m/s²"
    },
    {
      questionText: "What is the dimensional formula of energy?",
      options: [
        "[M L² T⁻²]",
        "[M⁰ L¹ T⁻¹]",
        "[M L² T⁻¹]",
        "[M L T⁻²]"
      ],
      correctAnswer: "[M L² T⁻²]"
    },
    {
      questionText: "If two vectors have equal magnitudes but opposite directions, what is their resultant?",
      options: [
        "Twice the magnitude",
        "Zero",
        "Perpendicular",
        "Negative of one vector"
      ],
      correctAnswer: "Zero"
    },
    {
      questionText: "A block of mass 2 kg is lifted to a height of 5 m. How much work is done? (g = 10 m/s²)",
      options: [
        "200 J",
        "50 J",
        "100 J",
        "25 J"
      ],
      correctAnswer: "100 J"
    },
    {
      questionText: "What is the relationship between speed and velocity?",
      options: [
        "They are inversely proportional",
        "Velocity is the magnitude of speed",
        "They are always the same",
        "Speed is the magnitude of velocity"
      ],
      correctAnswer: "Speed is the magnitude of velocity"
    },
    {
      questionText: "A ball is dropped from a height of 20 m. How long does it take to hit the ground? (g = 10 m/s²)",
      options: [
        "2 s",
        "1.5 s",
        "3 s",
        "4 s"
      ],
      correctAnswer: "2 s"
    },
    {
      questionText: "What is the unit of the gravitational constant G?",
      options: [
        "N/kg",
        "N m²/kg²",
        "N m²",
        "J/kg²"
      ],
      correctAnswer: "N m²/kg²"
    },
    {
      questionText: "If the velocity of an object is doubled, by what factor does its kinetic energy change?",
      options: [
        "8",
        "2",
        "4",
        "1"
      ],
      correctAnswer: "4"
    },
      {
        questionText: "If a force of 15 N acts on a body for 3 seconds, what is the change in momentum?",
        options: [
          "60 kg·m/s",
          "15 kg·m/s",
          "30 kg·m/s",
          "45 kg·m/s"
        ],
        correctAnswer: "45 kg·m/s"
      },
      {
        questionText: "What is the unit of power in the SI system?",
        options: [
          "Watt",
          "Newton",
          "Joule",
          "Pascal"
        ],
        correctAnswer: "Watt"
      },
      {
        questionText: "What is the scalar product of two perpendicular vectors?",
        options: [
          "One",
          "Zero",
          "Infinity",
          "Negative"
        ],
        correctAnswer: "Zero"
      },
      {
        questionText: "A car accelerates from rest to 30 m/s in 10 seconds. What is its acceleration?",
        options: [
          "5 m/s²",
          "2 m/s²",
          "3 m/s²",
          "10 m/s²"
        ],
        correctAnswer: "3 m/s²"
      },
      {
        questionText: "Which quantity is conserved in elastic collisions?",
        options: [
          "Neither momentum nor kinetic energy",
          "Only momentum",
          "Only kinetic energy",
          "Both momentum and kinetic energy"
        ],
        correctAnswer: "Both momentum and kinetic energy"
      },
      {
        questionText: "The work done by a conservative force depends on:",
        options: [
          "The initial and final positions",
          "The path taken",
          "The time taken",
          "The velocity of the object"
        ],
        correctAnswer: "The initial and final positions"
      },
      {
        questionText: "A car moves 60 km north and then 80 km east. What is the magnitude of its displacement?",
        options: [
          "140 km",
          "100 km",
          "120 km",
          "80 km"
        ],
        correctAnswer: "100 km"
      },
      {
        questionText: "What is the dimensional formula of acceleration?",
        options: [
          "[M⁰ L T⁻²]",
          "[M L T⁻²]",
          "[M L² T⁻¹]",
          "[M⁰ L¹ T⁻¹]"
        ],
        correctAnswer: "[M⁰ L T⁻²]"
      },
      {
        questionText: "Which of these quantities is a vector?",
        options: [
          "Mass",
          "Momentum",
          "Energy",
          "Power"
        ],
        correctAnswer: "Momentum"
      },
      {
        questionText: "A body is moving in a straight line with uniform acceleration. If its initial velocity is 5 m/s and acceleration is 2 m/s², what is its velocity after 3 seconds?",
        options: [
          "10 m/s",
          "9 m/s",
          "11 m/s",
          "15 m/s"
        ],
        correctAnswer: "11 m/s"
      },
      {
        questionText: "If two vectors are added, their resultant will be maximum when:",
        options: [
          "Their magnitudes are equal",
          "They are perpendicular",
          "They are opposite",
          "They are parallel"
        ],
        correctAnswer: "They are parallel"
      },
      {
        questionText: "A ball thrown vertically upward reaches a maximum height of 20 m. What is its initial velocity? (g = 10 m/s²)",
        options: [
          "20 m/s",
          "10 m/s",
          "15 m/s",
          "25 m/s"
        ],
        correctAnswer: "20 m/s"
      },
      {
        questionText: "What is the net force acting on a body in uniform circular motion?",
        options: [
          "Zero",
          "Centripetal force",
          "Tangential force",
          "Gravitational force"
        ],
        correctAnswer: "Centripetal force"
      },
      {
        questionText: "What is the SI unit of potential energy?",
        options: [
          "Watt",
          "Newton",
          "Joule",
          "Pascal"
        ],
        correctAnswer: "Joule"
      },
      {
        questionText: "Which of these forces is non-conservative?",
        options: [
          "Electrostatic fore",
          "Gravitational force",
          "Elastic spring force",
          "Friction"
        ],
        correctAnswer: "Friction"
      },
      {
        questionText: "A block slides down a frictionless inclined plane. Which of the following is constant?",
        options: [
          "Acceleration",
          "Velocity",
          "Kinetic energy",
          "Potential energy"
        ],
        correctAnswer: "Acceleration"
      },
      {
        questionText: "The magnitude of displacement is always:",
        options: [
          "Grater than or equal to the distance traveled",
          "Less than or equal to the distance traveled",
          "Equal to the distance traveled",
          "Independent of the distance traveled"
        ],
        correctAnswer: "Less than or equal to the distance traveled"
      },
      {
        questionText: "If the velocity-time graph of a body is a straight line parallel to the time axis, the body is:",
        options: [
          "Moving with constant acceleration",
          "At rest",
          "Moving with constant velocity",
          "Slowing down"
        ],
        correctAnswer: "Moving with constant velocity"
      },
      {
        questionText: "A force of 50 N acts on a body, causing a displacement of 10 m. What is the work done if the force is perpendicular to the displacement?",
        options: [
          "100 J",
          "500 J",
          "50 J",
          "0 J"
        ],
        correctAnswer: "0 J"
      },
      {
        questionText: "A particle moves in a circular path of radius 10 m at a constant speed of 5 m/s. What is its centripetal acceleration?",
        options: [
          "2.5 m/s²",
          "5 m/s²",
          "10 m/s²",
          "0.5 m/s²"
        ],
        correctAnswer: "2.5 m/s²"
      },
      {
        questionText: "What is the dimensional formula of momentum?",
        options: [
          "[M L T⁻¹]",
          "[M L² T⁻¹]",
          "[M⁰ L T⁻¹]",
          "[M⁰ L T⁻²]"
        ],
        correctAnswer: "[M L T⁻¹]"
      },
      {
        questionText: "If two vectors have magnitudes of 5 and 12 and are perpendicular to each other, what is the magnitude of their resultant?",
        options: [
          "17",
          "13",
          "10",
          "7"
        ],
        correctAnswer: "13"
      },
      {
        questionText: "A ball is thrown horizontally at 20 m/s from a height of 25 m. How long does it take to hit the ground? (g = 10 m/s²)",
        options: [
          "1.00 s",
          "3.00 s",
          "2.24 s",
          "1.58 s"
        ],
        correctAnswer: "2.24 s"
      },
      {
        questionText: "Which of the following is not a scalar quantity?",
        options: [
          "Energy",
          "Mass",
          "Temperature",
          "Velocity"
        ],
        correctAnswer: "Velocity"
      },
      {
        questionText: "A block of mass 5 kg is lifted to a height of 10 m. What is the work done against gravity? (g = 10 m/s²)",
        options: [
          "500 J",
          "50 J",
          "100 J",
          "250 J"
        ],
        correctAnswer: "500 J"
      },
      {
        questionText: "What is the relationship between force (F), mass (m), and acceleration (a)?",
        options: [
          "F = m/a",
          "F = ma",
          "F = a/m",
          "F = ma²"
        ],
        correctAnswer: "F = ma"
      },
      {
        questionText: "The area under a velocity-time graph represents:",
        options: [
          "Force",
          "Acceleration",
          "Displacement",
          "Speed"
        ],
        correctAnswer: "Displacement"
      },
      {
        questionText: "A projectile is fired at an angle of 45° with an initial velocity of 20 m/s. What is its maximum height? (g = 10 m/s²)",
        options: [
          "5 m",
          "20 m",
          "10 m",
          "15 m"
        ],
        correctAnswer: "10 m"
      },
      {
        questionText: "What is the dot product of two vectors if one of them is zero?",
        options: [
          "Undefined",
          "Equal to the other vector",
          "Infinite",
          "Zero"
        ],
        correctAnswer: "Zero"
      },
      {
        questionText: "What is the SI unit of angular displacement?",
        options: [
          "Radian",
          "Degree",
          "Revolution",
          "Steradian"
        ],
        correctAnswer: "Radian"
      },
      {
        questionText: "A 2 kg object moving at 3 m/s collides with a stationary object and sticks to it. What is the velocity of the combined mass after collision if the second object has a mass of 4 kg?",
        options: [
          "2 m/s",
          "1 m/s",
          "3 m/s",
          "0.5 m/s"
        ],
        correctAnswer: "1 m/s"
      },
      {
        questionText: "What is the resultant of two forces, 3 N and 4 N, acting at an angle of 90° to each other?",
        options: [
          "1 N",
          "7 N",
          "5 N",
          "6 N"
        ],
        correctAnswer: "5 N"
      },
      {
        questionText: "A car travels 60 km at a speed of 30 km/h and then 40 km at a speed of 40 km/h. What is the average speed of the car?",
        options: [
          "30 km/h",
          "35 km/h",
          "36 km/h",
          "34.3 km/h"
        ],
        correctAnswer: "34.3 km/h"
      },
      {
        questionText: "What is the acceleration of an object in free fall near the Earth's surface?",
        options: [
          "8.5 m/s²",
          "10 m/s²",
          "9.8 m/s²",
          "15 m/s²"
        ],
        correctAnswer: "9.8 m/s²"
      },
      {
        questionText: "What happens to the kinetic energy of an object if its speed is doubled?",
        options: [
          "It doubles",
          "It becomes four times larger",
          "It remains the same",
          "It becomes half"
        ],
        correctAnswer: "It becomes four times larger"
      },
      {
        questionText: "What is the unit of angular velocity?",
        options: [
          "Radian per second",
          "Degree per second",
          "Revolution per minute",
          "Second"
        ],
        correctAnswer: "Radian per second"
      },
      {
        questionText: "What is the displacement of an object that moves 10 m north, then 10 m south?",
        options: [
          "5 m",
          "10 m",
          "20 m",
          "0 m"
        ],
        correctAnswer: "0 m"
      },
      {
        questionText: "A force acts on a 5 kg body, causing an acceleration of 2 m/s². What is the magnitude of the force?",
        options: [
          "15 N",
          "5 N",
          "10 N",
          "25 N"
        ],
        correctAnswer: "10 N"
      },
      {
        questionText: "A ball is thrown upwards with an initial velocity of 30 m/s. How long does it take to reach the highest point? (g = 10 m/s²)",
        options: [
          "5 s",
          "3 s",
          "2 s",
          "6 s"
        ],
        correctAnswer: "3 s"
      },
      {
        questionText: "What is the physical quantity represented by the slope of a position-time graph?",
        options: [
          "Velocity",
          "Acceleration",
          "Force",
          "Displacement"
        ],
        correctAnswer: "Velocity"
      },
      {
        questionText: "What is the physical quantity represented by the slope of a position-time graph?",
        options: ["Velocity", "Acceleration", "Force", "Displacement"],
        correctAnswer: "Velocity"
      },
      {
        questionText: "Which of the following is the SI unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        correctAnswer: "Newton"
      },
      {
        questionText: "What does the derivative of the displacement with respect to time represent?",
        options: ["Velocity", "Acceleration", "Force", "Energy"],
        correctAnswer: "Velocity"
      },
      {
        questionText: "Which of the following is a scalar quantity?",
        options: ["Speed", "Velocity", "Acceleration", "Displacement"],
        correctAnswer: "Speed"
      },
      {
        questionText: "Which of the following quantities is a vector?",
        options: ["Distance", "Speed", "Velocity", "Mass"],
        correctAnswer: "Velocity"
      },
      {
        questionText: "The rate of change of velocity with respect to time is called?",
        options: ["Acceleration", "Velocity", "Displacement", "Speed"],
        correctAnswer: "Acceleration"
      },
      {
        questionText: "Which law states that force equals mass times acceleration?",
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Universal Gravitation"],
        correctAnswer: "Newton's Second Law"
      },
      {
        questionText: "What is the SI unit of energy?",
        options: ["Joule", "Newton", "Watt", "Ampere"],
        correctAnswer: "Joule"
      },
      {
        questionText: "What is the formula for gravitational potential energy?",
        options: ["mgh", "mv^2", "1/2kx^2", "mg/v^2"],
        correctAnswer: "mgh"
      },
      {
        questionText: "In which unit is the acceleration due to gravity measured?",
        options: ["m/s^2", "m", "N", "kg"],
        correctAnswer: "m/s^2"
      },
      {
        questionText: "In the equation F = ma, what does the letter 'F' represent?",
        options: ["Force", "Mass", "Acceleration", "Velocity"],
        correctAnswer: "Force"
      },
      {
        questionText: "What is the time unit in SI?",
        options: ["Second", "Minute", "Hour", "Day"],
        correctAnswer: "Second"
      },
      {
        questionText: "What does a velocity-time graph represent?",
        options: ["Position", "Velocity", "Acceleration", "Displacement"],
        correctAnswer: "Acceleration"
      },
      {
        questionText: "Which of the following quantities is measured in meters per second squared?",
        options: ["Velocity", "Speed", "Acceleration", "Force"],
        correctAnswer: "Acceleration"
      },
      {
        questionText: "Which of the following is a conservative force?",
        options: ["Friction", "Elastic Force", "Centripetal Force", "Tension"],
        correctAnswer: "Elastic Force"
      },
      {
        questionText: "Which of the following vectors represents acceleration?",
        options: ["Change in velocity", "Change in position", "Mass", "Force"],
        correctAnswer: "Change in velocity"
      },
      {
        questionText: "The area under a velocity-time graph gives which quantity?",
        options: ["Acceleration", "Displacement", "Velocity", "Force"],
        correctAnswer: "Displacement"
      },
      {
        questionText: "What is the formula for calculating momentum?",
        options: ["mv", "mgh", "F=ma", "mv^2"],
        correctAnswer: "mv"
      },
      {
        questionText: "The rate of change of momentum is equal to what?",
        options: ["Force", "Velocity", "Acceleration", "Energy"],
        correctAnswer: "Force"
      },
      {
        questionText: "Which of the following is an example of a vector quantity?",
        options: ["Speed", "Temperature", "Velocity", "Time"],
        correctAnswer: "Velocity"
      },
      {
        questionText: "What is the dimensional formula for force?",
        options: ["[M L T^-2]", "[M L^2 T^-2]", "[M^2 L T^-1]", "[M L^3 T^-2]"],
        correctAnswer: "[M L T^-2]"
      },
      {
        questionText: "Which of the following represents a dimensionless quantity?",
        options: ["Force", "Energy", "Velocity", "Angular displacement"],
        correctAnswer: "Angular displacement"
      },
      {
        questionText: "What is the unit of pressure?",
        options: ["Pascal", "Newton", "Joule", "Ampere"],
        correctAnswer: "Pascal"
      },
      {
        questionText: "In vector notation, the cross product of two vectors results in which type of quantity?",
        options: ["Scalar", "Vector", "Tensor", "Matrix"],
        correctAnswer: "Vector"
      },
      {
        questionText: "Which of the following is the correct equation for uniform acceleration?",
        options: ["v = u + at", "v = u - at", "s = ut + 1/2 at^2", "F = ma"],
        correctAnswer: "v = u + at"
      },
      {
        questionText: "What does the term 'displacement' refer to?",
        options: ["Total distance traveled", "The change in position", "The total speed", "The average velocity"],
        correctAnswer: "The change in position"
      },
      {
        questionText: "If a car moves in a circular path with constant speed, what type of acceleration does it experience?",
        options: ["Centripetal acceleration", "Tangential acceleration", "Zero acceleration", "Uniform acceleration"],
        correctAnswer: "Centripetal acceleration"
      },
      {
        questionText: "What is the unit of velocity?",
        options: ["m/s^2", "m/s", "m", "kg/m^3"],
        correctAnswer: "m/s"
      },
      {
        questionText: "Which equation is used to calculate the time taken for an object to fall freely from a height?",
        options: ["t = √(2h/g)", "t = h/g", "t = g/h", "t = 2h/g"],
        correctAnswer: "t = √(2h/g)"
      },
      {
        questionText: "What is the formula for kinetic energy?",
        options: ["F x d", "mgh", "1/2 kx^2", "1/2 mv^2"],
        correctAnswer: "1/2 mv^2"
      },
      {
        questionText: "The work done by a force is equal to the change in what?",
        options: ["Displacement", "Velocity", "Momentum", "Energy"],
        correctAnswer: "Energy"
      },
      {
        questionText: "In kinematics, the term 'acceleration' refers to the rate of change of which quantity?",
        options: ["Energy", "Position", "Momentum", "Velocity"],
        correctAnswer: "Velocity"
      },
      {
        questionText: "In the equation F = ma, 'm' stands for which of the following?",
        options: ["Velocity", "Momentum", "Force", "Mass"],
        correctAnswer: "Mass"
      },
      {
        questionText: "What is the acceleration of an object in free fall near the Earth's surface?",
        options: ["9.8 m/s^2", "9.8 m/s", "0 m/s^2", "Zero"],
        correctAnswer: "9.8 m/s^2"
      },
      {
        questionText: "Which of the following equations represents Newton's law of gravitation?",
        options: ["F=ma", "F = G(m1 m2) / r^2", "E = mc^2", "P = mv"],
        correctAnswer: "F = G(m1 m2) / r^2"
      },
      {
        questionText: "What is the unit of angular velocity?",
        options: ["m/s", "rad/s", "kg/m^2", "m/s^2"],
        correctAnswer: "rad/s"
      },
      {
        questionText: "Which of the following is an example of uniform motion?",
        options: ["A car moving at a constant speed in a straight line", "A ball falling freely", "A car accelerating", "A car turning a corner"],
        correctAnswer: "A car moving at a constant speed in a straight line"
      },
      {
        questionText: "What is the value of the acceleration due to gravity on the Moon?",
        options: ["19.8 m/s^2", "1.6 m/s^2", "10.5 m/s^2", "3.2 m/s^2"],
        correctAnswer: "1.6 m/s^2"
      },
      {
        questionText: "The distance covered by an object in a given time interval is called?",
        options: ["Displacement", "Velocity", "Acceleration", "Speed"],
        correctAnswer: "Speed"
      },
      {
        questionText: "Which of the following is an example of a non-conservative force?",
        options: ["Friction", "Gravitational force", "Elastic force", "Electrostatic force"],
        correctAnswer: "Friction"
      }
]

  const SetsQuestions=[
    {
      questionText: "What is the union of two sets?",
      options: ["Elements common to both sets", "All elements in either set", "Elements present only in one set", "Difference of two sets"],
      correctAnswer: "All elements in either set"
  },
  {
      questionText: "Which symbol represents the intersection of sets?",
      options: ["∪", "∩", "⊆", "⊂"],
      correctAnswer: "∩"
  },
  {
      questionText: "Which of the following is a subset of {1, 2, 3}?",
      options: ["{1, 2}", "{4, 5}", "{1, 3}", "{2, 4}"],
      correctAnswer: "{1, 2}"
  },
  {
      questionText: "The set {1, 2, 3} has how many subsets?",
      options: ["3", "4", "5", "8"],
      correctAnswer: "8"
  },
  {
      questionText: "If A = {2, 4, 6} and B = {4, 6, 8}, what is A ∩ B?",
      options: ["{2, 4, 6}", "{4, 6}", "{6, 8}", "{2, 8}"],
      correctAnswer: "{4, 6}"
  },
  {
    questionText: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∆ B?",
    options: ["{1, 2, 3, 4, 5}", "{1, 2, 4, 5}", "{1, 2, 3}", "{4, 5}"],
    correctAnswer: "{1, 2, 4, 5}"
},
{
    questionText: "Which of the following sets is the result of A ∩ (B ∪ C) when A = {1, 2, 3}, B = {2, 3}, and C = {3, 4}?",
    options: ["{2, 3}", "{3}", "{1, 2}", "{2, 4}"],
    correctAnswer: "{3}"
},
{
    questionText: "What is the number of elements in the power set of the set {a, b, c, d}?",
    options: ["4", "8", "16", "32"],
    correctAnswer: "16"
},
{
    questionText: "If A = {x | x is an even number between 1 and 10} and B = {x | x is an odd number between 1 and 10}, what is A ∩ B?",
    options: ["{2, 4, 6, 8}", "{1, 3, 5, 7, 9}", "∅", "{2, 3, 4, 5, 6, 7, 8, 9}"],
    correctAnswer: "∅"
},
{
    questionText: "Which of the following is the difference between the set of integers and the set of natural numbers?",
    options: ["The set of negative numbers", "The set of odd numbers", "The set of even numbers", "The set of all real numbers"],
    correctAnswer: "The set of negative numbers"
},
{
    questionText: "If A = {2, 4, 6, 8} and B = {4, 6, 8, 10}, what is A ⊕ B?",
    options: ["{2, 10}", "{4, 6, 8}", "{2, 10, 4, 6, 8}", "{2, 4, 6, 8, 10}"],
    correctAnswer: "{2, 10}"
},
{
    questionText: "Which of the following represents the Cartesian product of sets A = {1, 2} and B = {a, b}?",
    options: ["{(1, a), (2, b)}", "{(1, b), (2, a)}", "{(1, a), (2, b), (1, b), (2, a)}", "{(a, 1), (b, 2)}"],
    correctAnswer: "{(1, a), (1, b), (2, a), (2, b)}"
},
{
    questionText: "If A = {x | x is a positive integer less than 6} and B = {x | x is a prime number less than 6}, what is A ∩ B?",
    options: ["{1, 2, 3, 4, 5}", "{2, 3, 5}", "{4, 5}", "{2, 4}"],
    correctAnswer: "{2, 3, 5}"
},
{
    questionText: "What is the number of subsets of the power set of {1, 2, 3, 4}?",
    options: ["4", "8", "16", "32"],
    correctAnswer: "256"
},
{
    questionText: "Which of the following is true for the set A = {x | x is an integer and x ≤ 10}?",
    options: ["A is finite", "A is infinite", "A is a universal set", "A is empty"],
    correctAnswer: "A is finite"
},
  {
    questionText: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∆ B?",
    options: ["{1, 2, 3, 4, 5}", "{1, 2, 4, 5}", "{1, 2, 3}", "{4, 5}"],
    correctAnswer: "{1, 2, 4, 5}"
},
{
    questionText: "Which of the following sets is the result of A ∩ (B ∪ C) when A = {1, 2, 3}, B = {2, 3}, and C = {3, 4}?",
    options: ["{2, 3}", "{3}", "{1, 2}", "{2, 4}"],
    correctAnswer: "{3}"
},
{
    questionText: "What is the number of elements in the power set of the set {a, b, c, d}?",
    options: ["4", "8", "16", "32"],
    correctAnswer: "16"
},
{
    questionText: "If A = {x | x is an even number between 1 and 10} and B = {x | x is an odd number between 1 and 10}, what is A ∩ B?",
    options: ["{2, 4, 6, 8}", "{1, 3, 5, 7, 9}", "∅", "{2, 3, 4, 5, 6, 7, 8, 9}"],
    correctAnswer: "∅"
},
{
    questionText: "Which of the following is the difference between the set of integers and the set of natural numbers?",
    options: ["The set of negative numbers", "The set of odd numbers", "The set of even numbers", "The set of all real numbers"],
    correctAnswer: "The set of negative numbers"
},
{
    questionText: "If A = {2, 4, 6, 8} and B = {4, 6, 8, 10}, what is A ⊕ B?",
    options: ["{2, 10}", "{4, 6, 8}", "{2, 10, 4, 6, 8}", "{2, 4, 6, 8, 10}"],
    correctAnswer: "{2, 10}"
},
{
    questionText: "Which of the following represents the Cartesian product of sets A = {1, 2} and B = {a, b}?",
    options: ["{(1, a), (2, b)}", "{(1, b), (2, a)}", "{(1, a), (2, b), (1, b), (2, a)}", "{(a, 1), (b, 2)}"],
    correctAnswer: "{(1, a), (1, b), (2, a), (2, b)}"
},
{
    questionText: "If A = {x | x is a positive integer less than 6} and B = {x | x is a prime number less than 6}, what is A ∩ B?",
    options: ["{1, 2, 3, 4, 5}", "{2, 3, 5}", "{4, 5}", "{2, 4}"],
    correctAnswer: "{2, 3, 5}"
},
{
    questionText: "What is the number of subsets of the power set of {1, 2, 3, 4}?",
    options: ["4", "8", "16", "32"],
    correctAnswer: "256"
},
{
    questionText: "Which of the following is true for the set A = {x | x is an integer and x ≤ 10}?",
    options: ["A is finite", "A is infinite", "A is a universal set", "A is empty"],
    correctAnswer: "A is finite"
},
{
  questionText: "Which of the following is the power set of {a, b}?",
  options: ["{a, b}", "{a, b, ∅}", "{a, b, {a, b}}", "{a, b, ∅, {a, b}}"],
  correctAnswer: "{a, b, ∅, {a, b}}"
},
{
  questionText: "What is the complement of the set {1, 2, 3} in the universal set {1, 2, 3, 4, 5}?",
  options: ["{1, 2, 3}", "{4, 5}", "{1, 2}", "{2, 3}"],
  correctAnswer: "{4, 5}"
},
{
  questionText: "If A = {2, 4, 6} and B = {4, 6, 8}, what is A ∪ B?",
  options: ["{2, 4, 6}", "{2, 4, 6, 8}", "{4, 6}", "{2, 8}"],
  correctAnswer: "{2, 4, 6, 8}"
},
{
  questionText: "Which of the following is the result of A - B when A = {1, 2, 3} and B = {2, 3, 4}?",
  options: ["{1, 2, 3}", "{2, 3}", "{1}", "{4}"],
  correctAnswer: "{1}"
},
{
  questionText: "Which operation results in a set containing only the elements that belong to both sets?",
  options: ["Union", "Intersection", "Difference", "Complement"],
  correctAnswer: "Intersection"
},
{
  questionText: "The number of subsets of a set with 4 elements is:",
  options: ["4", "8", "16", "32"],
  correctAnswer: "16"
},
{
  questionText: "If A = {x | x is an even number less than 10}, what is A?",
  options: ["{2, 4, 6, 8}", "{1, 3, 5, 7, 9}", "{2, 3, 4, 5, 6, 7, 8, 9}", "{1, 4, 6, 9}"],
  correctAnswer: "{2, 4, 6, 8}"
},
{
  questionText: "What is the intersection of the set of natural numbers and the set of even numbers?",
  options: ["The set of natural numbers", "The set of even numbers", "The set of prime numbers", "The set of odd numbers"],
  correctAnswer: "The set of even numbers"
},
{
  questionText: "Which of the following is a proper subset of {1, 2, 3}?",
  options: ["{1, 2}", "{1, 2, 3}", "{4, 5}", "None of the above"],
  correctAnswer: "{1, 2}"
},
{
  questionText: "Which of the following sets is infinite?",
  options: ["{1, 2, 3, 4}", "{x | x is a positive integer}", "{2, 4, 6, 8, 10}", "{a, b, c}"],
  correctAnswer: "{x | x is a positive integer}"
},
{
    questionText: "Which of the following is a proper subset of {1, 2, 3}?",
    options: ["{1, 2, 3}", "{2, 3}", "{1, 2, 3, 4}", "{4}"],
    correctAnswer: "{2, 3}"
},
{
    questionText: "What is the union of the sets {a, b} and {b, c}?",
    options: ["{a, b, c}", "{a, b}", "{b, c}", "{a, b, c, d}"],
    correctAnswer: "{a, b, c}"
},
{
    questionText: "What is the set of all natural numbers less than 5?",
    options: ["{1, 2, 3, 4}", "{0, 1, 2, 3, 4}", "{1, 3, 5}", "{1, 2, 4, 5}"],
    correctAnswer: "{1, 2, 3, 4}"
},
{
    questionText: "Which of the following is a set of vowels in the word 'computer'?",
    options: ["{a, e, i, o, u}", "{o, u, e}", "{c, o, m, p}", "{e, i, o}"],
    correctAnswer: "{o, u, e}"
},
{
    questionText: "The difference between the sets {1, 2, 3} and {2, 3, 4} is:",
    options: ["{1, 4}", "{2, 3}", "{1}", "{4}"],
    correctAnswer: "{1}"
},
{
  questionText: "What is the symmetric difference of the sets {1, 2, 3} and {3, 4, 5}?",
  options: ["{1, 2, 4, 5}", "{2, 3, 4, 5}", "{1, 4, 5}", "{1, 2, 3}"],
  correctAnswer: "{1, 2, 4, 5}"
},
{
  questionText: "Which of the following is the union of {a, b, c} and {b, c, d}?",
  options: ["{a, b, c, d}", "{b, c}", "{a, b}", "{a, b, c}"],
  correctAnswer: "{a, b, c, d}"
},
{
  questionText: "What is the intersection of the sets {1, 2, 3, 4} and {3, 4, 5, 6}?",
  options: ["{1, 2}", "{3, 4}", "{1, 2, 3, 4}", "{4, 5}"],
  correctAnswer: "{3, 4}"
},
{
  questionText: "Which set is the complement of {2, 4, 6} in the universal set {1, 2, 3, 4, 5, 6}?",
  options: ["{1, 3, 5}", "{2, 4, 6}", "{1, 3, 5, 7}", "{2, 4, 5}"],
  correctAnswer: "{1, 3, 5}"
},
{
  questionText: "The Cartesian product of {1, 2} and {a, b} is:",
  options: ["{(1, a), (1, b), (2, a), (2, b)}", "{(1, a), (1, b)}", "{(2, a), (2, b)}", "{(1, b), (2, a)}"],
  correctAnswer: "{(1, a), (1, b), (2, a), (2, b)}"
},
{
  questionText: "What is the complement of the set {x | x is a multiple of 3} in the set of integers?",
  options: ["The set of all multiples of 3", "The set of non-multiples of 3", "The set of odd integers", "The set of prime numbers"],
  correctAnswer: "The set of non-multiples of 3"
},
{
  questionText: "Which of the following is the set difference of {a, b, c} and {b, c, d}?",
  options: ["{a}", "{a, b}", "{a, b, c}", "{b, c, d}"],
  correctAnswer: "{a}"
},
{
  questionText: "What is the result of A ∪ B when A = {x | x is a prime number less than 10} and B = {x | x is a natural number less than 10}?",
  options: ["{1, 2, 3, 4, 5, 7, 9}", "{1, 2, 3, 5, 7, 9}", "{2, 3, 5, 7}", "{2, 3, 5, 7, 10}"],
  correctAnswer: "{1, 2, 3, 5, 7, 9}"
},
{
  questionText: "What is the intersection of the sets {a, b, c} and {b, c, d}?",
  options: ["{a, b}", "{b, c, d}", "{b, c}", "{c, d}"],
  correctAnswer: "{b, c}"
},
{
  questionText: "If A = {1, 2, 3} and B = {3, 4, 5}, what is A ∩ B?",
  options: ["{3}", "{1, 2, 3, 4, 5}", "{1, 2}", "{4, 5}"],
  correctAnswer: "{3}"
},
{
  questionText: "What is the complement of the set {2, 4, 6} in the universal set {1, 2, 3, 4, 5, 6, 7, 8}?",
  options: ["{1, 3, 5, 7, 8}", "{2, 4, 6}", "{1, 2, 3}", "{5, 6, 7}"],
  correctAnswer: "{1, 3, 5, 7, 8}"
},
{
  questionText: "Which of the following is a subset of the set of all positive integers?",
  options: ["The set of negative integers", "The set of even integers", "The set of prime numbers", "The set of zero"],
  correctAnswer: "The set of prime numbers"
},
{
  questionText: "What is the result of the intersection of {1, 2, 3} and {3, 4, 5}?",
  options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2}", "{4, 5}"],
  correctAnswer: "{3}"
},
{
  questionText: "If A = {a, b, c, d} and B = {b, c, d, e}, what is A ∪ B?",
  options: ["{a, b, c, d, e}", "{a, b, c, d}", "{b, c, d}", "{a, e}"],
  correctAnswer: "{a, b, c, d, e}"
},
{
  questionText: "Which of the following is the Cartesian product of {1, 2} and {a, b, c}?",
  options: ["{(1, a), (2, b), (1, c)}", "{(1, a), (1, b), (1, c), (2, a), (2, b), (2, c)}", "{(1, a), (2, b)}", "{(1, a), (2, a)}"],
  correctAnswer: "{(1, a), (1, b), (1, c), (2, a), (2, b), (2, c)}"
},
{
  questionText: "What is the result of the symmetric difference between {1, 2, 3, 4} and {3, 4, 5, 6}?",
  options: ["{1, 2, 5, 6}", "{1, 2, 3, 4, 5, 6}", "{3, 4}", "{2, 5}"],
  correctAnswer: "{1, 2, 5, 6}"
},
{
  questionText: "If A = {x | x is a prime number less than 10} and B = {x | x is an even number greater than 0}, what is A ∩ B?",
  options: ["{2, 3, 5, 7}", "{2, 3, 5}", "{2}", "{3, 5, 7}"],
  correctAnswer: "{2}"
},
{
  questionText: "What is the Cartesian product of {a, b} and {1, 2, 3}?",
  options: ["{(a, 1), (a, 2), (b, 3)}", "{(a, 1), (b, 2)}", "{(a, 1), (a, 2), (b, 1), (b, 2), (a, 3)}", "{(a, 1), (b, 2), (a, 3), (b, 1)}"],
  correctAnswer: "{(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)}"
},
{
  questionText: "Which of the following represents the complement of the set {1, 2, 3, 4} in the set of integers?",
  options: ["The set of integers greater than 4", "The set of integers less than 1", "The set of all integers except 1, 2, 3, and 4", "The set of even integers"],
  correctAnswer: "The set of all integers except 1, 2, 3, and 4"
},
{
  questionText: "If A = {x | x is an integer and 1 ≤ x ≤ 10} and B = {x | x is an even integer less than 10}, what is A ∆ B?",
  options: ["{1, 3, 5, 7, 9}", "{2, 4, 6, 8}", "{1, 3, 5, 7, 9, 10}", "{3, 5, 7, 9}"],
  correctAnswer: "{1, 3, 5, 7, 9}"
}
  ]
  const VectorQuestions=[
    {
      questionText: "What is the magnitude of the vector \( \mathbf{v} = 3\hat{i} + 4\hat{j} \)?",
      options: ["5", "7", "1", "6"],
      correctAnswer: "5"
  },
  {
      questionText: "Find the dot product of \( \mathbf{a} = 2\hat{i} + 3\hat{j} \) and \( \mathbf{b} = 4\hat{i} + \hat{j} \).",
      options: ["11", "14", "7", "10"],
      correctAnswer: "11"
  },
  {
      questionText: "What is the angle between the vectors \( \mathbf{a} = \hat{i} + 2\hat{j} \) and \( \mathbf{b} = 3\hat{i} - 4\hat{j} \)?",
      options: ["90°", "60°", "45°", "30°"],
      correctAnswer: "90°"
  },
  {
      questionText: "Find the magnitude of the vector \( \mathbf{v} = 5\hat{i} - 12\hat{j} \).",
      options: ["13", "15", "17", "11"],
      correctAnswer: "13"
  },
  {
      questionText: "What is the cross product of the vectors \( \mathbf{a} = 2\hat{i} + 3\hat{j} \) and \( \mathbf{b} = \hat{i} - \hat{j} \)?",
      options: ["-5\hat{k}", "5\hat{k}", "7\hat{k}", "3\hat{k}"],
      correctAnswer: "5\hat{k}"
  },
  {
      questionText: "If \( \mathbf{a} = 4\hat{i} - \hat{j} \) and \( \mathbf{b} = 2\hat{i} + 5\hat{j} \), find the angle between them.",
      options: ["90°", "60°", "30°", "120°"],
      correctAnswer: "90°"
  },
  {
      questionText: "What is the magnitude of the vector \( \mathbf{v} = 7\hat{i} + 24\hat{j} \)?",
      options: ["25", "26", "24", "28"],
      correctAnswer: "25"
  },
  {
      questionText: "Find the cross product of \( \mathbf{a} = 3\hat{i} + 2\hat{j} + \hat{k} \) and \( \mathbf{b} = 4\hat{i} - \hat{j} + 2\hat{k} \).",
      options: ["-4\hat{i} + 14\hat{j} - 10\hat{k}", "14\hat{i} + 4\hat{j} + 10\hat{k}", "-14\hat{i} + 4\hat{j} + 10\hat{k}", "4\hat{i} - 10\hat{j} + 14\hat{k}"],
      correctAnswer: "-14\hat{i} + 4\hat{j} + 10\hat{k}"
  },
  {
      questionText: "Find the dot product of \( \mathbf{a} = 1\hat{i} + 2\hat{j} + 3\hat{k} \) and \( \mathbf{b} = 4\hat{i} + 5\hat{j} + 6\hat{k} \).",
      options: ["32", "14", "20", "24"],
      correctAnswer: "32"
  },
  {
      questionText: "What is the magnitude of the vector \( \mathbf{v} = 6\hat{i} - 8\hat{j} + 10\hat{k} \)?",
      options: ["12", "14", "15", "18"],
      correctAnswer: "14"
  },
  {
      questionText: "If \( \mathbf{a} = 5\hat{i} + 2\hat{j} \) and \( \mathbf{b} = -3\hat{i} + 4\hat{j} \), find the angle between them.",
      options: ["60°", "45°", "90°", "120°"],
      correctAnswer: "90°"
  },
  {
      questionText: "Find the cross product of \( \mathbf{a} = \hat{i} + 2\hat{j} + 3\hat{k} \) and \( \mathbf{b} = 4\hat{i} + 5\hat{j} + 6\hat{k} \).",
      options: ["-3\hat{i} + 6\hat{j} - 3\hat{k}", "3\hat{i} - 6\hat{j} + 3\hat{k}", "3\hat{i} + 6\hat{j} - 3\hat{k}", "-3\hat{i} - 6\hat{j} + 3\hat{k}"],
      correctAnswer: "-3\hat{i} + 6\hat{j} - 3\hat{k}"
  },
  {
      questionText: "What is the magnitude of the vector \( \mathbf{v} = 3\hat{i} + 4\hat{j} - 12\hat{k} \)?",
      options: ["13", "14", "15", "12"],
      correctAnswer: "13"
  },
  {
      questionText: "Find the angle between the vectors \( \mathbf{a} = 2\hat{i} + 5\hat{j} \) and \( \mathbf{b} = 3\hat{i} + 4\hat{j} \).",
      options: ["30°", "45°", "60°", "90°"],
      correctAnswer: "45°"
  },
  {
      questionText: "What is the dot product of the vectors \( \mathbf{a} = 3\hat{i} - \hat{j} \) and \( \mathbf{b} = 2\hat{i} + 4\hat{j} \)?",
      options: ["4", "6", "7", "10"],
      correctAnswer: "6"
  },
  {
      questionText: "Find the magnitude of the vector \( \mathbf{v} = -5\hat{i} + 5\hat{j} \).",
      options: ["7.07", "6.24", "7.5", "8"],
      correctAnswer: "7.07"
  },
  {
      questionText: "What is the result of the cross product of \( \mathbf{a} = \hat{i} + 2\hat{j} \) and \( \mathbf{b} = 2\hat{i} + \hat{j} \)?",
      options: ["0", "2\hat{k}", "3\hat{k}", "-\hat{k}"],
      correctAnswer: "0"
  },
  {
      questionText: "Find the dot product of the vectors \( \mathbf{a} = 3\hat{i} + 2\hat{j} + \hat{k} \) and \( \mathbf{b} = 1\hat{i} - \hat{j} + 2\hat{k} \).",
      options: ["7", "8", "9", "6"],
      correctAnswer: "7"
  },
  {
      questionText: "Find the angle between the vectors \( \mathbf{a} = 5\hat{i} + 4\hat{j} \) and \( \mathbf{b} = 3\hat{i} + 2\hat{j} \).",
      options: ["45°", "30°", "60°", "90°"],
      correctAnswer: "45°"
  },
  {
      questionText: "What is the magnitude of the vector \( \mathbf{v} = -2\hat{i} - 2\hat{j} \)?",
      options: ["2√2", "4", "2", "2√3"],
      correctAnswer: "2√2"
  },
  {
      questionText: "If \( \mathbf{a} = \hat{i} + 2\hat{j} + 3\hat{k} \) and \( \mathbf{b} = 2\hat{i} - 3\hat{j} + 4\hat{k} \), find the cross product.",
      options: ["11\hat{i} + 2\hat{j} - 7\hat{k}", "-7\hat{i} + 11\hat{j} + 2\hat{k}", "11\hat{i} - 7\hat{j} + 2\hat{k}", "2\hat{i} - 7\hat{j} + 11\hat{k}"],
      correctAnswer: "-7\hat{i} + 11\hat{j} + 2\hat{k}"
  },
  {
      questionText: "What is the dot product of \( \mathbf{a} = 2\hat{i} + 3\hat{j} \) and \( \mathbf{b} = 4\hat{i} + 2\hat{j} \)?",
      options: ["14", "18", "20", "16"],
      correctAnswer: "14"
  },
  {
      questionText: "Find the cross product of \( \mathbf{a} = 2\hat{i} - \hat{j} + 4\hat{k} \) and \( \mathbf{b} = 3\hat{i} + 2\hat{j} - 2\hat{k} \).",
      options: ["14\hat{i} - 2\hat{j} - 7\hat{k}", "16\hat{i} + 3\hat{j} + 7\hat{k}", "14\hat{i} + 3\hat{j} - 7\hat{k}", "-14\hat{i} + 3\hat{j} + 7\hat{k}"],
      correctAnswer: "14\hat{i} - 2\hat{j} - 7\hat{k}"
  },
  {
      questionText: "What is the magnitude of the vector \( \mathbf{v} = -8\hat{i} + 6\hat{j} \)?",
      options: ["10", "9", "12", "11"],
      correctAnswer: "10"
  },
  {
      questionText: "What is the cross product of \( \mathbf{a} = 1\hat{i} - 2\hat{j} + 3\hat{k} \) and \( \mathbf{b} = 4\hat{i} + \hat{j} - 2\hat{k} \)?",
      options: ["-7\hat{i} - 14\hat{j} + 9\hat{k}", "7\hat{i} + 14\hat{j} - 9\hat{k}", "-7\hat{i} + 14\hat{j} - 9\hat{k}", "7\hat{i} - 14\hat{j} + 9\hat{k}"],
      correctAnswer: "-7\hat{i} + 14\hat{j} - 9\hat{k}"
  },
  {
      questionText: "Find the dot product of \( \mathbf{a} = 5\hat{i} + 2\hat{j} + 4\hat{k} \) and \( \mathbf{b} = 2\hat{i} + 3\hat{j} + 1\hat{k} \).",
      options: ["24", "22", "26", "20"],
      correctAnswer: "24"
  },
  {
      questionText: "Find the magnitude of the vector \( \mathbf{v} = 10\hat{i} - 24\hat{j} + 7\hat{k} \).",
      options: ["26", "27", "25", "30"],
      correctAnswer: "26"
  },
  {
      questionText: "What is the cross product of \( \mathbf{a} = \hat{i} + 2\hat{j} \) and \( \mathbf{b} = 3\hat{i} + \hat{j} \)?",
      options: ["-5\hat{k}", "5\hat{k}", "7\hat{k}", "2\hat{k}"],
      correctAnswer: "5\hat{k}"
  },
  {
      questionText: "Find the angle between the vectors \( \mathbf{a} = \hat{i} + 3\hat{j} \) and \( \mathbf{b} = 2\hat{i} - \hat{j} \).",
      options: ["90°", "60°", "45°", "30°"],
      correctAnswer: "60°"
  },
  {
      questionText: "Find the dot product of \( \mathbf{a} = \hat{i} + 4\hat{j} + 2\hat{k} \) and \( \mathbf{b} = 3\hat{i} + 2\hat{j} + \hat{k} \).",
      options: ["14", "16", "18", "20"],
      correctAnswer: "14"
  },
  {
      questionText: "What is the magnitude of the vector \( \mathbf{v} = -3\hat{i} + 4\hat{j} \)?",
      options: ["5", "6", "4", "7"],
      correctAnswer: "5"
  },
  {
      questionText: "Find the cross product of \( \mathbf{a} = \hat{i} + \hat{j} + 2\hat{k} \) and \( \mathbf{b} = \hat{i} - \hat{j} + \hat{k} \).",
      options: ["-3\hat{i} + 3\hat{j} - 2\hat{k}", "3\hat{i} - 3\hat{j} + 2\hat{k}", "3\hat{i} + 3\hat{j} - 2\hat{k}", "-3\hat{i} - 3\hat{j} + 2\hat{k}"],
      correctAnswer: "3\hat{i} - 3\hat{j} + 2\hat{k}"
  },
  {
    questionText: "What is the magnitude of the vector \( \mathbf{v} = 3\hat{i} + 4\hat{j} \)?",
    options: ["5", "6", "4", "7"],
    correctAnswer: "5"
},
{
    questionText: "Find the dot product of \( \mathbf{a} = 1\hat{i} + 2\hat{j} \) and \( \mathbf{b} = 2\hat{i} + 3\hat{j} \).",
    options: ["8", "7", "5", "6"],
    correctAnswer: "8"
},
{
    questionText: "Find the cross product of \( \mathbf{a} = \hat{i} + \hat{j} \) and \( \mathbf{b} = \hat{i} - \hat{j} \).",
    options: ["2\hat{k}", "0", "-2\hat{k}", "4\hat{k}"],
    correctAnswer: "2\hat{k}"
},
{
    questionText: "What is the angle between the vectors \( \mathbf{a} = 2\hat{i} + 3\hat{j} \) and \( \mathbf{b} = 3\hat{i} + 4\hat{j} \)?",
    options: ["0°", "30°", "45°", "60°"],
    correctAnswer: "0°"
},
{
    questionText: "What is the magnitude of the vector \( \mathbf{v} = 4\hat{i} + 3\hat{j} \)?",
    options: ["5", "6", "7", "4"],
    correctAnswer: "5"
},
{
    questionText: "Find the dot product of \( \mathbf{a} = 3\hat{i} - 2\hat{j} \) and \( \mathbf{b} = 1\hat{i} + \hat{j} \).",
    options: ["3", "5", "2", "4"],
    correctAnswer: "3"
},
{
    questionText: "Find the cross product of \( \mathbf{a} = 2\hat{i} + \hat{j} \) and \( \mathbf{b} = \hat{i} + 3\hat{j} \).",
    options: ["-5\hat{k}", "5\hat{k}", "2\hat{k}", "0"],
    correctAnswer: "5\hat{k}"
},
{
    questionText: "What is the magnitude of the vector \( \mathbf{v} = -3\hat{i} + 4\hat{j} \)?",
    options: ["5", "4", "3", "6"],
    correctAnswer: "5"
},
{
    questionText: "What is the dot product of \( \mathbf{a} = 2\hat{i} + 3\hat{j} \) and \( \mathbf{b} = \hat{i} - \hat{j} \)?",
    options: ["1", "5", "3", "2"],
    correctAnswer: "1"
},
{
    questionText: "Find the angle between the vectors \( \mathbf{a} = \hat{i} \) and \( \mathbf{b} = 2\hat{i} \).",
    options: ["0°", "90°", "45°", "180°"],
    correctAnswer: "0°"
},
{
    questionText: "What is the magnitude of the vector \( \mathbf{v} = -7\hat{i} + 24\hat{j} \)?",
    options: ["25", "24", "26", "27"],
    correctAnswer: "25"
},
{
    questionText: "What is the cross product of \( \mathbf{a} = \hat{i} + 2\hat{j} \) and \( \mathbf{b} = 3\hat{i} + 4\hat{j} \)?",
    options: ["-5\hat{k}", "5\hat{k}", "3\hat{k}", "0"],
    correctAnswer: "0"
},
{
    questionText: "Find the dot product of \( \mathbf{a} = 5\hat{i} + 2\hat{j} \) and \( \mathbf{b} = -3\hat{i} + 4\hat{j} \).",
    options: ["1", "7", "5", "9"],
    correctAnswer: "1"
},
{
    questionText: "Find the magnitude of the vector \( \mathbf{v} = 4\hat{i} - 3\hat{j} \).",
    options: ["5", "6", "4", "3"],
    correctAnswer: "5"
},
{
    questionText: "What is the angle between the vectors \( \mathbf{a} = \hat{i} + 2\hat{j} \) and \( \mathbf{b} = 2\hat{i} + \hat{j} \)?",
    options: ["0°", "90°", "45°", "30°"],
    correctAnswer: "45°"
},
{
    questionText: "What is the magnitude of the vector \( \mathbf{v} = -2\hat{i} - 2\hat{j} \)?",
    options: ["2", "2√2", "3", "4"],
    correctAnswer: "2√2"
},
{
    questionText: "Find the dot product of \( \mathbf{a} = 2\hat{i} + \hat{j} \) and \( \mathbf{b} = \hat{i} - 2\hat{j} \).",
    options: ["1", "2", "4", "3"],
    correctAnswer: "0"
},
{
    questionText: "What is the cross product of \( \mathbf{a} = \hat{i} + 2\hat{j} \) and \( \mathbf{b} = 3\hat{i} - 4\hat{j} \)?",
    options: ["0", "-5\hat{k}", "5\hat{k}", "2\hat{k}"],
    correctAnswer: "5\hat{k}"
}
  ]
  const BinomialQuestions=[
    {
      questionText: "What is the binomial expansion of \( (x + 2)^2 \)?",
      options: ["\( x^2 + 4x + 4 \)", "\( x^2 + 2x + 2 \)", "\( x^2 + 2x + 4 \)", "\( x^2 + 4x + 2 \)"],
      correctAnswer: "x^2 + 4x + 4"
  },
  {
      questionText: "What is the expansion of \( (x - 3)^2 \)?",
      options: ["\( x^2 - 6x + 9 \)", "\( x^2 - 3x - 9 \)", "\( x^2 - 9x + 9 \)", "\( x^2 + 6x + 9 \)"],
      correctAnswer: "x^2 - 6x + 9"
  },
  {
      questionText: "Expand \( (x + 1)^3 \).",
      options: ["\( x^3 + 3x^2 + 3x + 1 \)", "\( x^3 + 2x^2 + x + 1 \)", "\( x^3 + 3x + 1 \)", "\( x^3 + 2x + 1 \)"],
      correctAnswer: "x^3 + 3x^2 + 3x + 1"
  },
  {
      questionText: "What is the binomial expansion of \( (2x + 1)^2 \)?",
      options: ["\( 4x^2 + 4x + 1 \)", "\( 4x^2 + 2x + 1 \)", "\( 4x^2 + 1 \)", "\( 2x^2 + 1 \)"],
      correctAnswer: "4x^2 + 4x + 1"
  },
  {
      questionText: "Find the binomial expansion of \( (x + 2)^3 \).",
      options: ["\( x^3 + 6x^2 + 12x + 8 \)", "\( x^3 + 6x^2 + 8x + 12 \)", "\( x^3 + 4x^2 + 6x + 8 \)", "\( x^3 + 6x^2 + 4x + 8 \)"],
      correctAnswer: "x^3 + 6x^2 + 12x + 8"
  },
  {
      questionText: "What is the expansion of \( (a + b)^2 \)?",
      options: ["\( a^2 + 2ab + b^2 \)", "\( a^2 + ab + b^2 \)", "\( a^2 + 2ab - b^2 \)", "\( a^2 + b^2 \)"],
      correctAnswer: "a^2 + 2ab + b^2"
  },
  {
      questionText: "Find the binomial expansion of \( (x + 5)^2 \).",
      options: ["\( x^2 + 10x + 25 \)", "\( x^2 + 5x + 25 \)", "\( x^2 + 10x + 20 \)", "\( x^2 + 15x + 25 \)"],
      correctAnswer: "x^2 + 10x + 25"
  },
  {
      questionText: "Expand \( (x - 4)^3 \).",
      options: ["\( x^3 - 12x^2 + 48x - 64 \)", "\( x^3 - 12x^2 + 16x - 64 \)", "\( x^3 - 8x^2 + 32x - 64 \)", "\( x^3 - 4x^2 + 16x - 64 \)"],
      correctAnswer: "x^3 - 12x^2 + 48x - 64"
  },
  {
      questionText: "What is the expansion of \( (3x + 1)^2 \)?",
      options: ["\( 9x^2 + 6x + 1 \)", "\( 9x^2 + 3x + 1 \)", "\( 9x^2 + 3x + 3 \)", "\( 6x^2 + 6x + 1 \)"],
      correctAnswer: "9x^2 + 6x + 1"
  },
  {
      questionText: "What is the expansion of \( (x - 1)^3 \)?",
      options: ["\( x^3 - 3x^2 + 3x - 1 \)", "\( x^3 - 3x^2 - 3x - 1 \)", "\( x^3 + 3x^2 - 3x + 1 \)", "\( x^3 - x^2 + x - 1 \)"],
      correctAnswer: "x^3 - 3x^2 + 3x - 1"
  },
  {
      questionText: "Expand \( (x + 3)^2 \).",
      options: ["\( x^2 + 6x + 9 \)", "\( x^2 + 3x + 9 \)", "\( x^2 + 9x + 6 \)", "\( x^2 + 5x + 6 \)"],
      correctAnswer: "x^2 + 6x + 9"
  },
  {
      questionText: "What is the binomial expansion of \( (x - 2)^3 \)?",
      options: ["\( x^3 - 6x^2 + 12x - 8 \)", "\( x^3 - 4x^2 + 6x - 8 \)", "\( x^3 - 6x^2 + 6x - 8 \)", "\( x^3 - 4x^2 + 12x - 8 \)"],
      correctAnswer: "x^3 - 6x^2 + 12x - 8"
  },
  {
      questionText: "Find the binomial expansion of \( (2x - 1)^3 \).",
      options: ["\( 8x^3 - 12x^2 + 6x - 1 \)", "\( 8x^3 - 6x^2 + 6x - 1 \)", "\( 6x^3 - 12x^2 + 6x - 1 \)", "\( 8x^3 + 6x^2 + 6x - 1 \)"],
      correctAnswer: "8x^3 - 12x^2 + 6x - 1"
  },
  {
      questionText: "What is the expansion of \( (x + 1)^4 \)?",
      options: ["\( x^4 + 4x^3 + 6x^2 + 4x + 1 \)", "\( x^4 + 4x^3 + 6x^2 + 3x + 1 \)", "\( x^4 + 3x^3 + 6x^2 + 4x + 1 \)", "\( x^4 + 5x^3 + 6x^2 + 4x + 1 \)"],
      correctAnswer: "x^4 + 4x^3 + 6x^2 + 4x + 1"
  },
  {
      questionText: "Find the binomial expansion of \( (x + 4)^2 \).",
      options: ["\( x^2 + 8x + 16 \)", "\( x^2 + 4x + 16 \)", "\( x^2 + 4x + 8 \)", "\( x^2 + 8x + 8 \)"],
      correctAnswer: "x^2 + 8x + 16"
  },
  {
      questionText: "What is the expansion of \( (x - 5)^2 \)?",
      options: ["\( x^2 - 10x + 25 \)", "\( x^2 + 5x + 25 \)", "\( x^2 - 5x - 25 \)", "\( x^2 + 10x + 25 \)"],
      correctAnswer: "x^2 - 10x + 25"
  },
  {
      questionText: "Expand \( (x + 3)^3 \).",
      options: ["\( x^3 + 9x^2 + 27x + 27 \)", "\( x^3 + 6x^2 + 9x + 27 \)", "\( x^3 + 6x^2 + 9x + 18 \)", "\( x^3 + 9x^2 + 18x + 27 \)"],
      correctAnswer: "x^3 + 9x^2 + 27x + 27"
  },
  {
      questionText: "What is the expansion of \( (2x - 1)^2 \)?",
      options: ["\( 4x^2 - 4x + 1 \)", "\( 4x^2 - 2x + 1 \)", "\( 2x^2 - 4x + 1 \)", "\( 2x^2 + 4x + 1 \)"],
      correctAnswer: "4x^2 - 4x + 1"
  },
  {
      questionText: "Find the binomial expansion of \( (x - 1)^4 \).",
      options: ["\( x^4 - 4x^3 + 6x^2 - 4x + 1 \)", "\( x^4 - 4x^3 + 6x^2 + 4x + 1 \)", "\( x^4 + 4x^3 + 6x^2 + 4x + 1 \)", "\( x^4 + 4x^3 - 6x^2 - 4x + 1 \)"],
      correctAnswer: "x^4 - 4x^3 + 6x^2 - 4x + 1"
  },
  {
      questionText: "Expand \( (x + 2)^4 \).",
      options: ["\( x^4 + 8x^3 + 24x^2 + 32x + 16 \)", "\( x^4 + 8x^3 + 16x^2 + 32x + 16 \)", "\( x^4 + 8x^3 + 24x^2 + 32x + 8 \)", "\( x^4 + 8x^3 + 16x^2 + 32x + 8 \)"],
      correctAnswer: "x^4 + 8x^3 + 24x^2 + 32x + 16"
  },
  {
      questionText: "What is the expansion of \( (x - 1)^3 \)?",
      options: ["\( x^3 - 3x^2 + 3x - 1 \)", "\( x^3 + 3x^2 - 3x - 1 \)", "\( x^3 - x^2 + x - 1 \)", "\( x^3 + 2x^2 - 3x + 1 \)"],
      correctAnswer: "x^3 - 3x^2 + 3x - 1"
  },
  {
      questionText: "Expand \( (x + 5)^3 \).",
      options: ["\( x^3 + 15x^2 + 75x + 125 \)", "\( x^3 + 15x^2 + 25x + 125 \)", "\( x^3 + 5x^2 + 25x + 125 \)", "\( x^3 + 15x^2 + 25x + 75 \)"],
      correctAnswer: "x^3 + 15x^2 + 75x + 125"
  },
  {
    questionText: "What is the binomial expansion of \( (x + 2)^2 \)?",
    options: ["\( x^2 + 4x + 4 \)", "\( x^2 + 2x + 4 \)", "\( x^2 + 4x + 2 \)", "\( x^2 + 2x + 2 \)"],
    correctAnswer: "x^2 + 4x + 4"
},
{
    questionText: "Expand \( (x - 2)^3 \).",
    options: ["\( x^3 - 6x^2 + 12x - 8 \)", "\( x^3 - 4x^2 + 6x - 8 \)", "\( x^3 - 6x^2 + 6x - 8 \)", "\( x^3 - 4x^2 + 12x - 8 \)"],
    correctAnswer: "x^3 - 6x^2 + 12x - 8"
},
{
    questionText: "What is the expansion of \( (x + 1)^5 \)?",
    options: ["\( x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1 \)", "\( x^5 + 5x^4 + 10x^3 + 5x^2 + 5x + 1 \)", "\( x^5 + 4x^4 + 10x^3 + 10x^2 + 5x + 1 \)", "\( x^5 + 6x^4 + 9x^3 + 10x^2 + 5x + 1 \)"],
    correctAnswer: "x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1"
},
{
    questionText: "Find the binomial expansion of \( (x - 3)^3 \).",
    options: ["\( x^3 - 9x^2 + 27x - 27 \)", "\( x^3 - 6x^2 + 18x - 27 \)", "\( x^3 - 9x^2 + 18x - 27 \)", "\( x^3 - 6x^2 + 27x - 27 \)"],
    correctAnswer: "x^3 - 9x^2 + 27x - 27"
},
{
    questionText: "What is the expansion of \( (a + b)^3 \)?",
    options: ["\( a^3 + 3a^2b + 3ab^2 + b^3 \)", "\( a^3 + 2a^2b + 2ab^2 + b^3 \)", "\( a^3 + 3ab^2 + b^3 \)", "\( a^3 + 2ab^2 + b^3 \)"],
    correctAnswer: "a^3 + 3a^2b + 3ab^2 + b^3"
},
{
    questionText: "Expand \( (x + 4)^2 \).",
    options: ["\( x^2 + 8x + 16 \)", "\( x^2 + 16x + 16 \)", "\( x^2 + 8x + 8 \)", "\( x^2 + 4x + 16 \)"],
    correctAnswer: "x^2 + 8x + 16"
},
{
    questionText: "What is the expansion of \( (x + 1)^6 \)?",
    options: ["\( x^6 + 6x^5 + 15x^4 + 20x^3 + 15x^2 + 6x + 1 \)", "\( x^6 + 5x^5 + 10x^4 + 15x^3 + 15x^2 + 6x + 1 \)", "\( x^6 + 6x^5 + 14x^4 + 20x^3 + 14x^2 + 6x + 1 \)", "\( x^6 + 5x^5 + 12x^4 + 15x^3 + 20x^2 + 6x + 1 \)"],
    correctAnswer: "x^6 + 6x^5 + 15x^4 + 20x^3 + 15x^2 + 6x + 1"
},
{
    questionText: "Find the binomial expansion of \( (x + 3)^3 \).",
    options: ["\( x^3 + 9x^2 + 27x + 27 \)", "\( x^3 + 6x^2 + 9x + 27 \)", "\( x^3 + 9x^2 + 18x + 27 \)", "\( x^3 + 6x^2 + 18x + 27 \)"],
    correctAnswer: "x^3 + 9x^2 + 27x + 27"
},
{
    questionText: "What is the expansion of \( (x - 1)^5 \)?",
    options: ["\( x^5 - 5x^4 + 10x^3 - 10x^2 + 5x - 1 \)", "\( x^5 - 5x^4 + 10x^3 - 5x^2 + 5x - 1 \)", "\( x^5 - 4x^4 + 10x^3 - 10x^2 + 5x - 1 \)", "\( x^5 - 4x^4 + 6x^3 - 5x^2 + 5x - 1 \)"],
    correctAnswer: "x^5 - 5x^4 + 10x^3 - 10x^2 + 5x - 1"
},
{
    questionText: "Expand \( (x + 6)^2 \).",
    options: ["\( x^2 + 12x + 36 \)", "\( x^2 + 6x + 36 \)", "\( x^2 + 12x + 6 \)", "\( x^2 + 6x + 6 \)"],
    correctAnswer: "x^2 + 12x + 36"
},
{
    questionText: "What is the binomial expansion of \( (x + 5)^3 \)?",
    options: ["\( x^3 + 15x^2 + 75x + 125 \)", "\( x^3 + 10x^2 + 25x + 125 \)", "\( x^3 + 10x^2 + 50x + 125 \)", "\( x^3 + 15x^2 + 50x + 125 \)"],
    correctAnswer: "x^3 + 15x^2 + 75x + 125"
},
{
    questionText: "Find the binomial expansion of \( (x - 2)^4 \).",
    options: ["\( x^4 - 8x^3 + 24x^2 - 32x + 16 \)", "\( x^4 - 8x^3 + 20x^2 - 32x + 16 \)", "\( x^4 - 10x^3 + 30x^2 - 32x + 16 \)", "\( x^4 - 8x^3 + 16x^2 - 32x + 16 \)"],
    correctAnswer: "x^4 - 8x^3 + 24x^2 - 32x + 16"
},
{
    questionText: "What is the expansion of \( (x + 3)^4 \)?",
    options: ["\( x^4 + 12x^3 + 54x^2 + 108x + 81 \)", "\( x^4 + 12x^3 + 36x^2 + 54x + 81 \)", "\( x^4 + 9x^3 + 54x^2 + 81x + 81 \)", "\( x^4 + 12x^3 + 36x^2 + 72x + 81 \)"],
    correctAnswer: "x^4 + 12x^3 + 54x^2 + 108x + 81"
},
{
    questionText: "Expand \( (2x + 1)^2 \).",
    options: ["\( 4x^2 + 4x + 1 \)", "\( 4x^2 + 2x + 1 \)", "\( 2x^2 + 4x + 1 \)", "\( 2x^2 + 4x + 2 \)"],
    correctAnswer: "4x^2 + 4x + 1"
},
{
    questionText: "Find the binomial expansion of \( (x + 1)^7 \).",
    options: ["\( x^7 + 7x^6 + 21x^5 + 35x^4 + 35x^3 + 21x^2 + 7x + 1 \)", "\( x^7 + 7x^6 + 21x^5 + 28x^4 + 35x^3 + 21x^2 + 7x + 1 \)", "\( x^7 + 7x^6 + 28x^5 + 35x^4 + 35x^3 + 21x^2 + 7x + 1 \)", "\( x^7 + 6x^6 + 21x^5 + 35x^4 + 28x^3 + 21x^2 + 7x + 1 \)"],
    correctAnswer: "x^7 + 7x^6 + 21x^5 + 35x^4 + 35x^3 + 21x^2 + 7x + 1"
},
{
    questionText: "What is the expansion of \( (x + 7)^3 \)?",
    options: ["\( x^3 + 21x^2 + 147x + 343 \)", "\( x^3 + 7x^2 + 49x + 343 \)", "\( x^3 + 7x^2 + 49x + 147 \)", "\( x^3 + 21x^2 + 49x + 343 \)"],
    correctAnswer: "x^3 + 21x^2 + 147x + 343"
},
{
    questionText: "What is the binomial expansion of \( (x - 2)^2 \)?",
    options: ["\( x^2 - 4x + 4 \)", "\( x^2 + 4x + 4 \)", "\( x^2 - 2x + 4 \)", "\( x^2 - 4x + 2 \)"],
    correctAnswer: "x^2 - 4x + 4"
},
{
    questionText: "Expand \( (2x - 3)^3 \).",
    options: ["\( 8x^3 - 36x^2 + 54x - 27 \)", "\( 8x^3 - 24x^2 + 36x - 27 \)", "\( 8x^3 - 36x^2 + 36x - 27 \)", "\( 8x^3 - 24x^2 + 54x - 27 \)"],
    correctAnswer: "8x^3 - 36x^2 + 54x - 27"
},
{
    questionText: "What is the expansion of \( (x + 5)^4 \)?",
    options: ["\( x^4 + 20x^3 + 150x^2 + 500x + 625 \)", "\( x^4 + 20x^3 + 150x^2 + 500x + 625 \)", "\( x^4 + 15x^3 + 100x^2 + 250x + 625 \)", "\( x^4 + 15x^3 + 100x^2 + 500x + 625 \)"],
    correctAnswer: "x^4 + 20x^3 + 150x^2 + 500x + 625"
},
{
    questionText: "Find the binomial expansion of \( (x + 2)^4 \).",
    options: ["\( x^4 + 8x^3 + 24x^2 + 32x + 16 \)", "\( x^4 + 8x^3 + 16x^2 + 32x + 16 \)", "\( x^4 + 8x^3 + 24x^2 + 16x + 16 \)", "\( x^4 + 6x^3 + 24x^2 + 32x + 16 \)"],
    correctAnswer: "x^4 + 8x^3 + 24x^2 + 32x + 16"
},
{
    questionText: "What is the expansion of \( (x + 3)^2 \)?",
    options: ["\( x^2 + 6x + 9 \)", "\( x^2 + 3x + 9 \)", "\( x^2 + 6x + 6 \)", "\( x^2 + 3x + 6 \)"],
    correctAnswer: "x^2 + 6x + 9"
}
 
  ]
  const mth101Questions=[
    // Binomial Expansion

{
  questionText: "What is the binomial expansion of \( (x + 2)^3 \)?",
  options: ["\( x^3 + 6x^2 + 12x + 8 \)", "\( x^3 + 5x^2 + 10x + 8 \)", "\( x^3 + 4x^2 + 8x + 8 \)", "\( x^3 + 6x^2 + 10x + 8 \)"],
  correctAnswer: "x^3 + 6x^2 + 12x + 8"
},
{
  questionText: "Find the binomial expansion of \( (x - 3)^2 \).",
  options: ["\( x^2 - 6x + 9 \)", "\( x^2 - 5x + 9 \)", "\( x^2 - 6x + 7 \)", "\( x^2 - 4x + 9 \)"],
  correctAnswer: "x^2 - 6x + 9"
},
{
  questionText: "What is the expansion of \( (x + 1)^4 \)?",
  options: ["\( x^4 + 4x^3 + 6x^2 + 4x + 1 \)", "\( x^4 + 3x^3 + 6x^2 + 4x + 1 \)", "\( x^4 + 4x^3 + 8x^2 + 4x + 1 \)", "\( x^4 + 4x^3 + 10x^2 + 4x + 1 \)"],
  correctAnswer: "x^4 + 4x^3 + 6x^2 + 4x + 1"
},
{
  questionText: "What is the binomial expansion of \( (x + 2)^3 \)?",
  options: ["\( x^3 + 6x^2 + 12x + 8 \)", "\( x^3 + 5x^2 + 10x + 8 \)", "\( x^3 + 4x^2 + 8x + 8 \)", "\( x^3 + 6x^2 + 10x + 8 \)"],
  correctAnswer: "x^3 + 6x^2 + 12x + 8"
},
{
  questionText: "What is the expansion of \( (x + 3)^2 \)?",
  options: ["\( x^2 + 6x + 9 \)", "\( x^2 + 3x + 9 \)", "\( x^2 + 6x + 6 \)", "\( x^2 + 3x + 6 \)"],
  correctAnswer: "x^2 + 6x + 9"
},

// Sets

{
  questionText: "What is the union of the sets \( A = \{1, 2, 3\} \) and \( B = \{3, 4, 5\} \)?",
  options: ["\( \{1, 2, 3, 4, 5\} \)", "\( \{3, 4\} \)", "\( \{1, 2, 3\} \)", "\( \{1, 2, 3, 5\} \)"],
  correctAnswer: "{1, 2, 3, 4, 5}"
},
{
  questionText: "Which of the following sets is the complement of \( A = \{1, 2, 3\} \) in the universal set \( U = \{1, 2, 3, 4, 5\} \)?",
  options: ["\( \{4, 5\} \)", "\( \{1, 2\} \)", "\( \{1, 3\} \)", "\( \{1, 2, 3\} \)"],
  correctAnswer: "{4, 5}"
},
{
  questionText: "What is the intersection of the sets \( A = \{2, 3, 4\} \) and \( B = \{4, 5, 6\} \)?",
  options: ["\( \{4\} \)", "\( \{2, 3\} \)", "\( \{4, 5\} \)", "\( \{1, 2, 3\} \)"],
  correctAnswer: "{4}"
},
{
  questionText: "What is the difference between sets \( A = \{1, 2, 3\} \) and \( B = \{2, 3, 4\} \)?",
  options: ["\( \{1\} \)", "\( \{4\} \)", "\( \{1, 2\} \)", "\( \{3\} \)"],
  correctAnswer: "{1}"
},
{
  questionText: "If  A = {x, y, z}  and  B = {x, y, w}, what is ( A \cup B )?",
  options: ["\( \{x, y, z, w\} \)", "\( \{x, y\} \)", "\( \{z, w\} \)", "\( \{x, y, w\} \)"],
  correctAnswer: "{x, y, z, w}"
},

// Vectors

{
  questionText: "What is the dot product of the vectors \( \mathbf{A} = (2, 3) \) and \( \mathbf{B} = (4, 1) \)?",
  options: ["\( 11 \)", "\( 10 \)", "\( 7 \)", "\( 5 \)"],
  correctAnswer: "11"
},
{
  questionText: "The vector \( \mathbf{A} = (3, 4) \) has a magnitude of:",
  options: ["\( 5 \)", "\( 7 \)", "\( 4 \)", "\( 2 \)"],
  correctAnswer: "5"
},
{
  questionText: "What is the cross product of the vectors \( \mathbf{A} = (2, 3, 4) \) and \( \mathbf{B} = (5, 6, 7) \)?",
  options: ["\( (-3, 6, -3) \)", "\( (1, 2, 3) \)", "\( (-3, 2, 3) \)", "\( (4, 5, 6) \)"],
  correctAnswer: "(-3, 6, -3)"
},
{
  questionText: "What is the unit vector of \( \mathbf{A} = (3, 4) \)?",
  options: ["\( (0.6, 0.8) \)", "\( (0.5, 0.5) \)", "\( (3, 4) \)", "\( (0.3, 0.4) \)"],
  correctAnswer: "(0.6, 0.8)"
},
{
  questionText: "The vector sum of \( \mathbf{A} = (1, 2) \) and \( \mathbf{B} = (3, 4) \) is:",
  options: ["\( (4, 6) \)", "\( (1, 2, 3) \)", "\( (2, 4) \)", "\( (3, 4) \)"],
  correctAnswer: "(4, 6)"
},
{
  questionText: "What is the angle between the vectors \( \mathbf{A} = (1, 0) \) and \( \mathbf{B} = (0, 1) \)?",
  options: ["\( 90^\circ \)", "\( 45^\circ \)", "\( 180^\circ \)", "\( 60^\circ \)"],
  correctAnswer: "90°"
},
{
  questionText: "The component of vector \( \mathbf{A} = (4, 3) \) along the x-axis is:",
  options: ["4", "3", "7", "5"],
  correctAnswer: "4"
},
{
  questionText: "If \( \mathbf{A} = (3, 4) \) and \( \mathbf{B} = (1, 2) \), the result of \( \mathbf{A} - \mathbf{B} \) is:",
  options: ["\( (2, 2) \)", "\( (4, 6) \)", "\( (3, 2) \)", "\( (2, 3) \)"],
  correctAnswer: "(2, 2)"
},
{
  questionText: "What is the magnitude of the vector \( \mathbf{A} = (6, 8) \)?",
  options: ["\( 10 \)", "\( 12 \)", "\( 14 \)", "\( 8 \)"],
  correctAnswer: "10"
},
{
  questionText: "What is the cross product of \( \mathbf{A} = (1, 2) \) and \( \mathbf{B} = (3, 4) \)?",
  options: ["\( -2 \)", "\( 2 \)", "\( 1 \)", "\( 0 \)"],
  correctAnswer: "2"
},
// Binomial Expansion

{
  questionText: "Find the binomial expansion of \( (x - 1)^4 \).",
  options: ["\( x^4 - 4x^3 + 6x^2 - 4x + 1 \)", "\( x^4 + 4x^3 + 6x^2 + 4x + 1 \)", "\( x^4 - 3x^3 + 6x^2 + 4x + 1 \)", "\( x^4 - 4x^3 + 6x^2 + 3x + 1 \)"],
  correctAnswer: "x^4 - 4x^3 + 6x^2 - 4x + 1"
},
{
  questionText: "What is the binomial expansion of \( (2x - 3)^3 \)?",
  options: ["\( 8x^3 - 36x^2 + 54x - 27 \)", "\( 6x^3 - 30x^2 + 45x - 27 \)", "\( 8x^3 - 30x^2 + 36x - 27 \)", "\( 6x^3 - 24x^2 + 36x - 27 \)"],
  correctAnswer: "8x^3 - 36x^2 + 54x - 27"
},
{
  questionText: "Expand \( (3x + 2)^2 \).",
  options: ["\( 9x^2 + 12x + 4 \)", "\( 9x^2 - 12x + 4 \)", "\( 6x^2 + 12x + 4 \)", "\( 6x^2 + 8x + 4 \)"],
  correctAnswer: "9x^2 + 12x + 4"
},
{
  questionText: "What is the expansion of \( (x + 1)^5 \)?",
  options: ["\( x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1 \)", "\( x^5 + 4x^4 + 8x^3 + 10x^2 + 5x + 1 \)", "\( x^5 + 5x^4 + 8x^3 + 6x^2 + 4x + 1 \)", "\( x^5 + 5x^4 + 10x^3 + 12x^2 + 4x + 1 \)"],
  correctAnswer: "x^5 + 5x^4 + 10x^3 + 10x^2 + 5x + 1"
},
{
  questionText: "What is the binomial expansion of \( (x - 4)^3 \)?",
  options: ["\( x^3 - 12x^2 + 48x - 64 \)", "\( x^3 - 8x^2 + 48x - 64 \)", "\( x^3 - 12x^2 + 36x - 64 \)", "\( x^3 - 4x^2 + 16x - 64 \)"],
  correctAnswer: "x^3 - 12x^2 + 48x - 64"
},

// Sets

{
  questionText: "If \( A = \{3, 4, 5\} \) and \( B = \{1, 2, 3\} \), what is \( A \cap B \)?",
  options: ["\( \{3\} \)", "\( \{4, 5\} \)", "\( \{1, 2, 3\} \)", "\( \{3, 4\} \)"],
  correctAnswer: "{3}"
},
{
  questionText: "What is the union of the sets \( A = \{1, 2, 5\} \) and \( B = \{3, 4, 5\} \)?",
  options: ["\( \{1, 2, 3, 4, 5\} \)", "\( \{5, 6\} \)", "\( \{1, 2\} \)", "\( \{3, 4, 5\} \)"],
  correctAnswer: "{1, 2, 3, 4, 5}"
},
{
  questionText: "Which of the following sets represents the complement of set \( A = \{1, 3, 5\} \) in the universal set \( U = \{1, 2, 3, 4, 5, 6\} \)?",
  options: ["\( \{2, 4, 6\} \)", "\( \{1, 3, 5\} \)", "\( \{2, 3, 4\} \)", "\( \{4, 6\} \)"],
  correctAnswer: "{2, 4, 6}"
},
{
  questionText: "What is the difference between sets \( A = \{a, b, c\} \) and \( B = \{b, c, d\} \)?",
  options: ["\( \{a\} \)", "\( \{d\} \)", "\( \{a, b, c\} \)", "\( \{b, c\} \)"],
  correctAnswer: "{a}"
},
{
  questionText: "If \( A = \{x, y, z\} \) and \( B = \{a, y, z\} \), what is \( A \cup B \)?",
  options: ["\( \{x, y, z, a\} \)", "\( \{x, y\} \)", "\( \{x, z\} \)", "\( \{a, b, y, z\} \)"],
  correctAnswer: "{x, y, z, a}"
},

// Vectors

{
  questionText: "What is the magnitude of the vector \( \mathbf{A} = (4, 5, 6) \)?",
  options: ["\( 7 \)", "\( 8 \)", "\( 9 \)", "\( 10 \)"],
  correctAnswer: "9"
},
{
  questionText: "The dot product of vectors \( \mathbf{A} = (3, 2) \) and \( \mathbf{B} = (1, 4) \) is:",
  options: ["\( 11 \)", "\( 10 \)", "\( 7 \)", "\( 5 \)"],
  correctAnswer: "11"
},
{
  questionText: "What is the cross product of \( \mathbf{A} = (1, 0, 0) \) and \( \mathbf{B} = (0, 1, 0) \)?",
  options: ["\( (0, 0, 1) \)", "\( (1, 1, 0) \)", "\( (0, 1, 0) \)", "\( (0, 0, 0) \)"],
  correctAnswer: "(0, 0, 1)"
},
{
  questionText: "Find the dot product of \( \mathbf{A} = (2, 3) \) and \( \mathbf{B} = (4, 5) \).",
  options: ["\( 23 \)", "\( 22 \)", "\( 19 \)", "\( 14 \)"],
  correctAnswer: "23"
},
{
  questionText: "What is the angle between the vectors \( \mathbf{A} = (1, 1) \) and \( \mathbf{B} = (-1, 1) \)?",
  options: ["\( 45^\circ \)", "\( 60^\circ \)", "\( 90^\circ \)", "\( 120^\circ \)"],
  correctAnswer: "45°"
},
{
  questionText: "What is the magnitude of the vector \( \mathbf{A} = (2, 3, 6) \)?",
  options: ["\( 7 \)", "\( 8 \)", "\( 9 \)", "\( 10 \)"],
  correctAnswer: "7"
},
{
  questionText: "Find the vector sum of \( \mathbf{A} = (1, 2) \) and \( \mathbf{B} = (3, 4) \).",
  options: ["\( (4, 6) \)", "\( (5, 6) \)", "\( (3, 5) \)", "\( (4, 5) \)"],
  correctAnswer: "(4, 6)"
},
{
  questionText: "The cross product of vectors \( \mathbf{A} = (1, 0, 0) \) and \( \mathbf{B} = (0, 1, 0) \) is:",
  options: ["\( (0, 0, 1) \)", "\( (0, 0, -1) \)", "\( (1, 0, 0) \)", "\( (0, 1, 0) \)"],
  correctAnswer: "(0, 0, 1)"
},
{
  questionText: "If the vectors \( \mathbf{A} = (1, 2) \) and \( \mathbf{B} = (3, 4) \) are given, the result of \( \mathbf{A} \cdot \mathbf{B} \) is:",
  options: ["\( 11 \)", "\( 10 \)", "\( 12 \)", "\( 14 \)"],
  correctAnswer: "11"
},
{
  questionText: "What is the unit vector of \( \mathbf{A} = (4, 3) \)?",
  options: ["\( (0.8, 0.6) \)", "\( (0.6, 0.8) \)", "\( (0.7, 0.7) \)", "\( (0.5, 0.5) \)"],
  correctAnswer: "(0.8, 0.6)"
},
// Binomial Expansion

{
  questionText: "Expand \( (x + 2)^4 \).",
  options: ["\( x^4 + 8x^3 + 24x^2 + 32x + 16 \)", "\( x^4 + 6x^3 + 12x^2 + 16x + 8 \)", "\( x^4 + 10x^3 + 20x^2 + 40x + 25 \)", "\( x^4 + 4x^3 + 6x^2 + 8x + 12 \)"],
  correctAnswer: "x^4 + 8x^3 + 24x^2 + 32x + 16"
},
{
  questionText: "What is the binomial expansion of \( (2x + 1)^3 \)?",
  options: ["\( 8x^3 + 12x^2 + 6x + 1 \)", "\( 6x^3 + 12x^2 + 6x + 1 \)", "\( 8x^3 + 4x^2 + 4x + 1 \)", "\( 10x^3 + 12x^2 + 6x + 3 \)"],
  correctAnswer: "8x^3 + 12x^2 + 6x + 1"
},
{
  questionText: "What is the binomial expansion of \( (x - 3)^3 \)?",
  options: ["\( x^3 - 9x^2 + 27x - 27 \)", "\( x^3 - 6x^2 + 9x - 27 \)", "\( x^3 - 9x^2 + 12x - 27 \)", "\( x^3 - 6x^2 + 12x - 27 \)"],
  correctAnswer: "x^3 - 9x^2 + 27x - 27"
},
{
  questionText: "Find the expansion of \( (3x + 2)^2 \).",
  options: ["\( 9x^2 + 12x + 4 \)", "\( 6x^2 + 8x + 4 \)", "\( 9x^2 - 12x + 4 \)", "\( 6x^2 + 12x + 4 \)"],
  correctAnswer: "9x^2 + 12x + 4"
},
{
  questionText: "What is the expansion of \( (x - 1)^5 \)?",
  options: ["\( x^5 - 5x^4 + 10x^3 - 10x^2 + 5x - 1 \)", "\( x^5 - 4x^4 + 8x^3 - 8x^2 + 4x - 1 \)", "\( x^5 - 4x^4 + 6x^3 - 6x^2 + 4x - 1 \)", "\( x^5 - 5x^4 + 9x^3 - 6x^2 + 3x - 1 \)"],
  correctAnswer: "x^5 - 5x^4 + 10x^3 - 10x^2 + 5x - 1"
},

// Sets

{
  questionText: "What is the intersection of the sets \( A = \{a, b, c\} \) and \( B = \{b, c, d\} \)?",
  options: ["\( \{b, c\} \)", "\( \{a, b\} \)", "\( \{a, c\} \)", "\( \{b\} \)"],
  correctAnswer: "{b, c}"
},
{
  questionText: "If \( A = \{1, 2, 3\} \), \( B = \{2, 3, 4\} \), and \( C = \{1, 4\} \), what is \( A \cup B \)?",
  options: ["\( \{1, 2, 3, 4\} \)", "\( \{2, 3\} \)", "\( \{1, 3, 4\} \)", "\( \{1, 2, 3\} \)"],
  correctAnswer: "{1, 2, 3, 4}"
},
{
  questionText: "Which of the following sets is equivalent to the set \( \{1, 3, 5\} \)?",
  options: ["\( \{1, 2, 3, 4, 5\} \)", "\( \{2, 3, 4\} \)", "\( \{3, 5\} \)", "\( \{1, 3, 5\} \)"],
  correctAnswer: "{1, 3, 5}"
},
{
  questionText: "If \( A = \{x, y\} \) and \( B = \{x, z\} \), what is \( A \setminus B \)?",
  options: ["\( \{y\} \)", "\( \{z\} \)", "\( \{x, y\} \)", "\( \{x, z\} \)"],
  correctAnswer: "{y}"
},
{
  questionText: "What is the universal set in the context of set operations for the sets \( A = \{1, 2\} \) and \( B = \{2, 3\} \)?",
  options: ["\( \{1, 2, 3\} \)", "\( \{1, 2, 3, 4\} \)", "\( \{1, 2\} \)", "\( \{3, 4\} \)"],
  correctAnswer: "{1, 2, 3}"
},

// Vectors

{
  questionText: "Find the cross product of \( \mathbf{A} = (1, 0, 0) \) and \( \mathbf{B} = (0, 1, 0) \).",
  options: ["\( (0, 0, 1) \)", "\( (1, 0, 0) \)", "\( (0, 1, 0) \)", "\( (1, 1, 0) \)"],
  correctAnswer: "(0, 0, 1)"
},
{
  questionText: "Find the dot product of \( \mathbf{A} = (1, 2) \) and \( \mathbf{B} = (3, 4) \).",
  options: ["\( 11 \)", "\( 9 \)", "\( 10 \)", "\( 14 \)"],
  correctAnswer: "11"
},
{
  questionText: "The magnitude of the vector \( \mathbf{A} = (2, 2) \) is:",
  options: ["\( \sqrt{8} \)", "\( \sqrt{10} \)", "\( \sqrt{4} \)", "\( \sqrt{2} \)"],
  correctAnswer: "√8"
},
{
  questionText: "The dot product of vectors \( \mathbf{A} = (2, 4) \) and \( \mathbf{B} = (1, 3) \) is:",
  options: ["\( 14 \)", "\( 8 \)", "\( 10 \)", "\( 12 \)"],
  correctAnswer: "14"
},
{
  questionText: "Find the angle between vectors \( \mathbf{A} = (3, 4) \) and \( \mathbf{B} = (5, 12) \).",
  options: ["\( 90^\circ \)", "\( 45^\circ \)", "\( 60^\circ \)", "\( 30^\circ \)"],
  correctAnswer: "90°"
},
{
  questionText: "What is the vector sum of \( \mathbf{A} = (2, 3, 4) \) and \( \mathbf{B} = (1, 0, -1) \)?",
  options: ["\( (3, 3, 3) \)", "\( (1, 3, 3) \)", "\( (2, 3, 5) \)", "\( (3, 3, 4) \)"],
  correctAnswer: "(3, 3, 3)"
},
{
  questionText: "What is the cross product of vectors \( \mathbf{A} = (2, 1, 0) \) and \( \mathbf{B} = (0, 1, 2) \)?",
  options: ["\( (2, -4, 2) \)", "\( (0, 2, 2) \)", "\( (1, 2, 3) \)", "\( (2, 1, 0) \)"],
  correctAnswer: "(2, -4, 2)"
},
{
  questionText: "Find the magnitude of vector \( \mathbf{A} = (5, 5) \).",
  options: ["\( \sqrt{50} \)", "\( \sqrt{25} \)", "\( \sqrt{20} \)", "\( \sqrt{10} \)"],
  correctAnswer: "√50"
},
{
  questionText: "What is the dot product of \( \mathbf{A} = (0, 1) \) and \( \mathbf{B} = (1, 0) \)?",
  options: ["\( 0 \)", "\( 1 \)", "\( -1 \)", "\( 2 \)"],
  correctAnswer: "0"
},
{
  questionText: "If \( \mathbf{A} = (1, 2, 3) \), what is \( 2\mathbf{A} \)?",
  options: ["\( (2, 4, 6) \)", "\( (1, 2, 3) \)", "\( (3, 6, 9) \)", "\( (2, 6, 3) \)"],
  correctAnswer: "(2, 4, 6)"
},
// Binomial Expansion

{
  questionText: "What is the binomial expansion of \( (x - 5)^4 \)?",
  options: ["\( x^4 - 20x^3 + 150x^2 - 500x + 625 \)", "\( x^4 - 15x^3 + 30x^2 - 10x + 5 \)", "\( x^4 - 10x^3 + 25x^2 - 50x + 125 \)", "\( x^4 - 25x^3 + 40x^2 - 100x + 625 \)"],
  correctAnswer: "x^4 - 20x^3 + 150x^2 - 500x + 625"
},
{
  questionText: "Expand \( (3x - 2)^3 \).",
  options: ["\( 27x^3 - 54x^2 + 36x - 8 \)", "\( 27x^3 - 12x^2 + 24x - 8 \)", "\( 27x^3 - 18x^2 + 12x - 8 \)", "\( 9x^3 - 12x^2 + 24x - 8 \)"],
  correctAnswer: "27x^3 - 54x^2 + 36x - 8"
},
{
  questionText: "What is the binomial expansion of \( (x + 1)^4 \)?",
  options: ["\( x^4 + 4x^3 + 6x^2 + 4x + 1 \)", "\( x^4 + 3x^3 + 6x^2 + 4x + 1 \)", "\( x^4 + 5x^3 + 7x^2 + 4x + 1 \)", "\( x^4 + 6x^3 + 3x^2 + 4x + 1 \)"],
  correctAnswer: "x^4 + 4x^3 + 6x^2 + 4x + 1"
},
{
  questionText: "Expand \( (2x + 3)^3 \).",
  options: ["\( 8x^3 + 36x^2 + 54x + 27 \)", "\( 8x^3 + 24x^2 + 18x + 27 \)", "\( 6x^3 + 36x^2 + 48x + 27 \)", "\( 8x^3 + 12x^2 + 36x + 27 \)"],
  correctAnswer: "8x^3 + 36x^2 + 54x + 27"
},
{
  questionText: "What is the binomial expansion of \( (x + 2)^3 \)?",
  options: ["\( x^3 + 6x^2 + 12x + 8 \)", "\( x^3 + 6x^2 + 9x + 8 \)", "\( x^3 + 8x^2 + 12x + 8 \)", "\( x^3 + 4x^2 + 12x + 8 \)"],
  correctAnswer: "x^3 + 6x^2 + 12x + 8"
},

// Sets

{
  questionText: "What is the union of sets \( A = \{1, 3, 5\} \) and \( B = \{2, 4, 5\} \)?",
  options: ["\( \{1, 3, 5, 2, 4\} \)", "\( \{1, 3, 5\} \)", "\( \{5\} \)", "\( \{1, 3, 4\} \)"],
  correctAnswer: "{1, 3, 5, 2, 4}"
},
{
  questionText: "If \( A = \{x, y\} \) and \( B = \{y, z\} \), what is \( A \cup B \)?",
  options: ["\( \{x, y, z\} \)", "\( \{y, z\} \)", "\( \{x, y\} \)", "\( \{x\} \)"],
  correctAnswer: "{x, y, z}"
},
{
  questionText: "What is the difference of sets \( A = \{2, 4, 6\} \) and \( B = \{4, 6\} \)?",
  options: ["\( \{2\} \)", "\( \{6\} \)", "\( \{2, 4\} \)", "\( \{4\} \)"],
  correctAnswer: "{2}"
},
{
  questionText: "If \( A = \{1, 2, 3, 4\} \) and \( B = \{3, 4, 5, 6\} \), what is \( A \cap B \)?",
  options: ["\( \{3, 4\} \)", "\( \{1, 2\} \)", "\( \{5, 6\} \)", "\( \{1, 2, 3, 4\} \)"],
  correctAnswer: "{3, 4}"
},
{
  questionText: "Which of the following sets is equivalent to the set \( \{1, 2, 3, 4\} \)?",
  options: ["\( \{1, 2, 3\} \)", "\( \{1, 2, 3, 4, 5\} \)", "\( \{2, 3\} \)", "\( \{1, 2, 4\} \)"],
  correctAnswer: "{1, 2, 3, 4}"
},

// Vectors

{
  questionText: "Find the magnitude of vector \( \mathbf{A} = (3, 4) \).",
  options: ["\( \sqrt{7} \)", "\( \sqrt{12} \)", "\( \sqrt{9} \)", "\( \sqrt{25} \)"],
  correctAnswer: "√25"
},
{
  questionText: "What is the result of adding the vectors \( \mathbf{A} = (2, 3) \) and \( \mathbf{B} = (1, -1) \)?",
  options: ["\( (3, 2) \)", "\( (1, 2) \)", "\( (3, 1) \)", "\( (2, 2) \)"],
  correctAnswer: "(3, 2)"
},
{
  questionText: "Find the cross product of vectors \( \mathbf{A} = (1, 2) \) and \( \mathbf{B} = (3, 4) \).",
  options: ["\( (0, 0, -2) \)", "\( (0, 0, 2) \)", "\( (0, 0, 5) \)", "\( (0, 0, -4) \)"],
  correctAnswer: "(0, 0, -2)"
},
{
  questionText: "What is the magnitude of vector \( \mathbf{A} = (-1, -2, -3) \)?",
  options: ["\( \sqrt{14} \)", "\( \sqrt{9} \)", "\( \sqrt{10} \)", "\( \sqrt{15} \)"],
  correctAnswer: "√14"
},
{
  questionText: "What is the dot product of \( \mathbf{A} = (1, 2, 3) \) and \( \mathbf{B} = (4, 5, 6) \)?",
  options: ["\( 32 \)", "\( 14 \)", "\( 23 \)", "\( 24 \)"],
  correctAnswer: "32"
},

{
  questionText: "What is the dot product of \( \mathbf{A} = (1, 1) \) and \( \mathbf{B} = (1, -1) \)?",
  options: ["\( 0 \)", "\( 1 \)", "\( -1 \)", "\( 2 \)"],
  correctAnswer: "0"
},
{
  questionText: "Find the cross product of \( \mathbf{A} = (2, 3, 1) \) and \( \mathbf{B} = (4, 5, 2) \).",
  options: ["\( (1, -2, -1) \)", "\( (-1, 2, 1) \)", "\( (2, -3, 2) \)", "\( (-2, 3, -1) \)"],
  correctAnswer: "(1, -2, -1)"
},
{
  questionText: "Find the magnitude of the vector \( \mathbf{A} = (4, 3, 0) \).",
  options: ["\( 4 \)", "\( \sqrt{16} \)", "\( 7 \)", "\( \ 5 \)"],
  correctAnswer: "5"
},
{
  questionText: "What is the angle between the vectors \( \mathbf{A} = (1, 0) \) and \( \mathbf{B} = (0, 1) \)?",
  options: ["\( 0^\circ \)", "\( 10^\circ \)", "\( 90^\circ \)", "\( 180^\circ \)"],
  correctAnswer: "90°"
},

{
  questionText: "What is the result of adding the vectors \( \mathbf{A} = (1, 2, 3) \) and \( \mathbf{B} = (4, -5, 6) \)?",
  options: ["\( (3, -3, 5) \)", "\( (5, -3, 9) \)", "\( (1, -3, 7) \)", "\( (5, -2, 6) \)"],
  correctAnswer: "(5, -3, 9)"
}
  ]

  const GrammarQuestions=[

    {
      questionText: "What is a clause in grammar?",
      options: [
        "A group of words that contains a subject and a predicate",
        "A single word that stands alone",
        "A sentence fragment without a verb",
        "A punctuation mark in a sentence"
      ],
      correctAnswer: "A group of words that contains a subject and a predicate"
    },
    {
      questionText: "Which of the following is an independent clause?",
      options: [
        "Although she was tired",
        "He finished his homework",
        "While they were running",
        "Because it was raining"
      ],
      correctAnswer: "He finished his homework"
    },
    {
      questionText: "What is a dependent clause?",
      options: [
        "A clause that cannot stand alone as a complete sentence",
        "A clause that can function as a full sentence",
        "A clause with no subject",
        "A clause with no predicate"
      ],
      correctAnswer: "A clause that cannot stand alone as a complete sentence"
    },
    {
      questionText: "Identify the type of clause in this sentence: 'Although he was late, he finished the task on time.'",
      options: [
        "Dependent clause",
        "Independent clause",
        "Noun clause",
        "Relative clause"
      ],
      correctAnswer: "Dependent clause"
    },
    {
      questionText: "Which type of clause is introduced by words such as 'who,' 'whom,' 'that,' or 'which'?",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "What is the function of an adverbial clause?",
      options: [
        "To provide additional information about the verb",
        "To modify nouns",
        "To act as the subject of the sentence",
        "To replace the predicate"
      ],
      correctAnswer: "To provide additional information about the verb"
    },
    {
      questionText: "Identify the independent clause in the sentence: 'If you study hard, you will pass the exam.'",
      options: [
        "If you study hard",
        "You will pass the exam",
        "The entire sentence",
        "None of the above"
      ],
      correctAnswer: "You will pass the exam"
    },
    {
      questionText: "What is a noun clause?",
      options: [
        "A dependent clause that acts as a noun",
        "A clause that modifies nouns",
        "A clause that functions as an adjective",
        "A clause that provides additional verb information"
      ],
      correctAnswer: "A dependent clause that acts as a noun"
    },
    {
      questionText: "In the sentence 'He asked what time it was,' what type of clause is 'what time it was'?",
      options: [
        "Noun clause",
        "Adjective clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "Which of these is an example of a relative clause?",
      options: [
        "The book that I borrowed",
        "While the sun was shining",
        "To understand the concept",
        "What she said surprised everyone"
      ],
      correctAnswer: "The book that I borrowed"
    },
    {
      questionText: "What introduces an adverbial clause?",
      options: [
        "Subordinating conjunctions like 'because,' 'if,' 'although'",
        "Relative pronouns like 'who' or 'which'",
        "Coordinating conjunctions like 'and' or 'but'",
        "Prepositions like 'in' or 'on'"
      ],
      correctAnswer: "Subordinating conjunctions like 'because,' 'if,' 'although'"
    },
    {
      questionText: "Which clause type is found in the sentence 'The player who scored the goal was injured'?",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "What is the main feature of an independent clause?",
      options: [
        "It expresses a complete thought and can stand alone",
        "It needs a subordinating conjunction to make sense",
        "It modifies the subject of another clause",
        "It cannot contain a verb"
      ],
      correctAnswer: "It expresses a complete thought and can stand alone"
    },
    {
      questionText: "Identify the adverbial clause in the sentence: 'She left because it was getting late.'",
      options: [
        "Because it was getting late",
        "She left",
        "It was getting late",
        "The entire sentence"
      ],
      correctAnswer: "Because it was getting late"
    },
    {
      questionText: "Which type of clause typically answers 'when,' 'where,' 'why,' or 'how'?",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "In the sentence 'I know that he is right,' what is the function of 'that he is right'?",
      options: [
        "Noun clause",
        "Relative clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "Which of these clauses is independent?",
      options: [
        "She is running fast",
        "If the weather permits",
        "Because they arrived early",
        "While the music played"
      ],
      correctAnswer: "She is running fast"
    },
    {
      questionText: "What type of clause modifies a noun in the main clause?",
      options: [
        "Relative clause",
        "Adverbial clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "What does a subordinating conjunction do?",
      options: [
        "Connects a dependent clause to an independent clause",
        "Joins two independent clauses",
        "Replaces a noun in the sentence",
        "Acts as the subject of a clause"
      ],
      correctAnswer: "Connects a dependent clause to an independent clause"
    },
    {
      questionText: "What type of clause begins with 'whoever,' 'whichever,' or 'whatsoever'?",
      options: [
        "Noun clause",
        "Relative clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "Identify the dependent clause in the sentence: 'I will call you when I arrive.'",
      options: [
        "When I arrive",
        "I will call you",
        "The entire sentence",
        "None of the above"
      ],
      correctAnswer: "When I arrive"
    },
    {
      questionText: "Which sentence contains an adverbial clause?",
      options: [
        "She sings while she works.",
        "The book on the table is mine.",
        "Whoever arrives first wins.",
        "He wanted to know why it happened."
      ],
      correctAnswer: "She sings while she works."
    },
    {
      questionText: "Which type of clause completes the meaning of verbs like 'believe,' 'know,' or 'think'?",
      options: [
        "Noun clause",
        "Relative clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "What is a compound sentence composed of?",
      options: [
        "Two or more independent clauses joined by a coordinating conjunction",
        "An independent clause and a dependent clause",
        "A single clause",
        "Two dependent clauses joined together"
      ],
      correctAnswer: "Two or more independent clauses joined by a coordinating conjunction"
    },
    {
      questionText: "What is the purpose of a relative clause?",
      options: [
        "To describe or define a noun",
        "To express time or cause",
        "To complete the meaning of a verb",
        "To act as the main subject of a sentence"
      ],
      correctAnswer: "To describe or define a noun"
    },
    {
      questionText: "Identify the type of clause in the sentence: 'She sang while she cleaned the house.'",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What type of clause is 'that he could win' in the sentence 'He was confident that he could win'?",
      options: [
        "Noun clause",
        "Adverbial clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "In the sentence 'The book that she borrowed is on the table,' what type of clause is 'that she borrowed'?",
      options: [
        "Relative clause",
        "Adverbial clause",
        "Independent clause",
        "Noun clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "Identify the clause in the sentence: 'Although it was raining, we went hiking.'",
      options: [
        "Adverbial clause",
        "Relative clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What type of clause is 'because she was late' in the sentence 'She missed the train because she was late'?",
      options: [
        "Adverbial clause",
        "Relative clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "In the sentence 'Whoever finishes first will get a prize,' identify the type of clause 'Whoever finishes first.'",
      options: [
        "Noun clause",
        "Adverbial clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "Identify the clause in the sentence: 'When the bell rings, the students leave the classroom.'",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What type of clause is 'that he passed the test' in the sentence 'I am happy that he passed the test'?",
      options: [
        "Noun clause",
        "Relative clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "In the sentence 'He left before I could ask him a question,' identify the type of clause 'before I could ask him a question.'",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What type of clause is 'which she wrote last year' in the sentence 'The book which she wrote last year is a bestseller'?",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "Identify the clause in the sentence: 'Unless you try harder, you will not succeed.'",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What type of clause is 'that she was honest' in the sentence 'He believed that she was honest'?",
      options: [
        "Noun clause",
        "Adverbial clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "In the sentence 'She acted as if she had seen a ghost,' identify the type of clause 'as if she had seen a ghost.'",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What type of clause is 'where the treasure is hidden' in the sentence 'Do you know where the treasure is hidden?'",
      options: [
        "Noun clause",
        "Relative clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "Identify the type of clause in the sentence: 'If you work hard, you will achieve your goals.'",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "In the sentence 'I wonder whether he will come,' what type of clause is 'whether he will come'?",
      options: [
        "Noun clause",
        "Adverbial clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "What type of clause is 'who is wearing a red hat' in the sentence 'The girl who is wearing a red hat is my sister'?",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "Identify the clause in the sentence: 'After the rain stopped, we continued our journey.'",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What type of clause is 'because it was too cold' in the sentence 'She stayed indoors because it was too cold'?",
      options: [
        "Adverbial clause",
        "Relative clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "In the sentence 'What she said was surprising,' identify the type of clause 'What she said.'",
      options: [
        "Noun clause",
        "Adverbial clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "What type of clause is 'so that he could succeed' in the sentence 'He worked hard so that he could succeed'?",
      options: [
        "Adverbial clause",
        "Relative clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "Identify the type of clause in the sentence: 'While the teacher explained, the students took notes.'",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What type of clause is 'that he made a mistake' in the sentence 'It is clear that he made a mistake'?",
      options: [
        "Noun clause",
        "Adverbial clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "In the sentence 'Wherever you go, I will follow you,' identify the type of clause 'Wherever you go.'",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What type of clause is 'whoever calls first' in the sentence 'Whoever calls first will win the prize'?",
      options: [
        "Noun clause",
        "Adverbial clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    }
  ]
  const LSFECQuestions=[
  
    {
      questionText: "What is active listening?",
      options: [
        "Paying attention and responding to the speaker",
        "Thinking of what to say next while someone speaks",
        "Interrupting frequently during a conversation",
        "Only focusing on your own ideas"
      ],
      correctAnswer: "Paying attention and responding to the speaker"
    },
    {
      questionText: "Which of the following is an example of nonverbal communication?",
      options: [
        "Speaking clearly",
        "Maintaining eye contact",
        "Writing an email",
        "Asking questions"
      ],
      correctAnswer: "Maintaining eye contact"
    },
    {
      questionText: "Why is feedback important in communication?",
      options: [
        "It ensures the message was understood",
        "It replaces verbal communication",
        "It prevents misunderstandings",
        "It allows the speaker to ignore the listener"
      ],
      correctAnswer: "It ensures the message was understood"
    },
    {
      questionText: "What is a key characteristic of effective communication?",
      options: [
        "Using clear and concise language",
        "Speaking in long, complicated sentences",
        "Avoiding nonverbal cues",
        "Ignoring the audience’s response"
      ],
      correctAnswer: "Using clear and concise language"
    },
    {
      questionText: "What does it mean to paraphrase in communication?",
      options: [
        "Repeat the exact words spoken",
        "Restate the message in your own words",
        "Ignore what was said",
        "Ask unrelated questions"
      ],
      correctAnswer: "Restate the message in your own words"
    },
    {
      questionText: "What is the purpose of using tone variation in verbal communication?",
      options: [
        "To maintain the listener’s attention",
        "To confuse the audience",
        "To make the message longer",
        "To avoid expressing emotions"
      ],
      correctAnswer: "To maintain the listener’s attention"
    },
    {
      questionText: "Which of these is an example of a communication barrier?",
      options: [
        "Cultural differences",
        "Clear pronunciation",
        "Active listening",
        "Empathy"
      ],
      correctAnswer: "Cultural differences"
    },
    {
      questionText: "What does 'body language' refer to in communication?",
      options: [
        "Using gestures, posture, and facial expressions",
        "The volume of your voice",
        "How you write emails",
        "The choice of vocabulary"
      ],
      correctAnswer: "Using gestures, posture, and facial expressions"
    },
    {
      questionText: "Why is it important to consider your audience when communicating?",
      options: [
        "To tailor your message to their needs and understanding",
        "To make your message more complicated",
        "To focus only on your perspective",
        "To avoid feedback"
      ],
      correctAnswer: "To tailor your message to their needs and understanding"
    },
    {
      questionText: "What is a closed-ended question?",
      options: [
        "A question that requires a yes/no or simple answer",
        "A question that encourages detailed responses",
        "A rhetorical question",
        "A question that is not answered"
      ],
      correctAnswer: "A question that requires a yes/no or simple answer"
    },
    {
      questionText: "What is the role of empathy in effective communication?",
      options: [
        "To understand and connect with others’ feelings",
        "To ignore the other person’s emotions",
        "To provide solutions without listening",
        "To dominate the conversation"
      ],
      correctAnswer: "To understand and connect with others’ feelings"
    },
    {
      questionText: "What is the purpose of summarizing during communication?",
      options: [
        "To recap key points and clarify understanding",
        "To provide feedback",
        "To introduce new topics",
        "To end the conversation abruptly"
      ],
      correctAnswer: "To recap key points and clarify understanding"
    },
    {
      questionText: "How can you demonstrate respect in communication?",
      options: [
        "By listening without interrupting",
        "By criticizing the other person",
        "By using sarcastic language",
        "By avoiding eye contact"
      ],
      correctAnswer: "By listening without interrupting"
    },
    {
      questionText: "What does assertive communication involve?",
      options: [
        "Expressing your thoughts confidently and respectfully",
        "Ignoring others’ opinions",
        "Using aggressive language",
        "Avoiding conflict at all costs"
      ],
      correctAnswer: "Expressing your thoughts confidently and respectfully"
    },
    {
      questionText: "Which of the following is a good way to clarify a misunderstanding?",
      options: [
        "Ask for more details or examples",
        "Change the topic quickly",
        "Ignore the confusion",
        "Assume you understood correctly"
      ],
      correctAnswer: "Ask for more details or examples"
    },
    {
      questionText: "What is an open-ended question?",
      options: [
        "A question that requires a detailed response",
        "A question that is not answered",
        "A yes/no question",
        "A rhetorical question"
      ],
      correctAnswer: "A question that requires a detailed response"
    },
    {
      questionText: "What is one benefit of maintaining eye contact during communication?",
      options: [
        "It shows confidence and attentiveness",
        "It intimidates the speaker",
        "It distracts from the message",
        "It avoids nonverbal cues"
      ],
      correctAnswer: "It shows confidence and attentiveness"
    },
    {
      questionText: "What is an example of a nonverbal communication barrier?",
      options: [
        "Crossed arms indicating defensiveness",
        "Using simple language",
        "Speaking slowly and clearly",
        "Making eye contact"
      ],
      correctAnswer: "Crossed arms indicating defensiveness"
    },
    {
      questionText: "What is the purpose of tone in communication?",
      options: [
        "To convey emotion and intent",
        "To replace body language",
        "To summarize the message",
        "To ask questions"
      ],
      correctAnswer: "To convey emotion and intent"
    },
    {
      questionText: "Which of these is a communication skill for resolving conflicts?",
      options: [
        "Active listening and staying calm",
        "Raising your voice to dominate the conversation",
        "Avoiding the discussion entirely",
        "Using aggressive body language"
      ],
      correctAnswer: "Active listening and staying calm"
    },
    {
      questionText: "What is one way to show interest in a conversation?",
      options: [
        "Ask relevant follow-up questions",
        "Interrupt frequently",
        "Avoid making eye contact",
        "Change the topic"
      ],
      correctAnswer: "Ask relevant follow-up questions"
    },
    {
      questionText: "Why is clarity important in written communication?",
      options: [
        "To ensure the message is easily understood",
        "To make the writing look complex",
        "To confuse the reader",
        "To avoid being concise"
      ],
      correctAnswer: "To ensure the message is easily understood"
    },
    {
      questionText: "How does using visual aids enhance communication?",
      options: [
        "By simplifying complex ideas",
        "By replacing verbal explanations",
        "By making the presentation longer",
        "By distracting the audience"
      ],
      correctAnswer: "By simplifying complex ideas"
    },
    {
      questionText: "What does the term 'jargon' mean in communication?",
      options: [
        "Specialized language understood by a specific group",
        "Simple and clear language",
        "Everyday conversational language",
        "Unrelated or random words"
      ],
      correctAnswer: "Specialized language understood by a specific group"
    },
  
    {
      questionText: "What is one way to avoid miscommunication in verbal interactions?",
      options: [
        "Repeat key points during the conversation",
        "Speak quickly without pauses",
        "Use complicated words unnecessarily",
        "Avoid asking for clarification"
      ],
      correctAnswer: "Repeat key points during the conversation"
    },
    {
      questionText: "Why is cultural awareness important in communication?",
      options: [
        "It helps avoid misunderstandings across different cultures",
        "It ensures everyone speaks the same language",
        "It eliminates the need for active listening",
        "It discourages open communication"
      ],
      correctAnswer: "It helps avoid misunderstandings across different cultures"
    },
    {
      questionText: "What is the purpose of rhetorical questions in communication?",
      options: [
        "To provoke thought or emphasize a point",
        "To receive detailed responses",
        "To create confusion",
        "To avoid engaging the audience"
      ],
      correctAnswer: "To provoke thought or emphasize a point"
    },
    {
      questionText: "Which of these is an example of effective verbal communication?",
      options: [
        "Speaking clearly and confidently",
        "Interrupting frequently",
        "Using monotone delivery",
        "Avoiding pauses for questions"
      ],
      correctAnswer: "Speaking clearly and confidently"
    },
    {
      questionText: "How does emotional intelligence impact communication?",
      options: [
        "It helps recognize and respond to emotions appropriately",
        "It reduces the need for listening",
        "It encourages overreaction to emotional cues",
        "It eliminates the use of nonverbal communication"
      ],
      correctAnswer: "It helps recognize and respond to emotions appropriately"
    },
    {
      questionText: "What is one way to improve communication in a group setting?",
      options: [
        "Encourage everyone to contribute",
        "Let one person dominate the discussion",
        "Ignore feedback from the group",
        "Avoid discussing goals or objectives"
      ],
      correctAnswer: "Encourage everyone to contribute"
    },
    {
      questionText: "What is the role of 'pauses' in verbal communication?",
      options: [
        "To emphasize key points and allow time for reflection",
        "To disrupt the flow of conversation",
        "To create awkward silences",
        "To reduce engagement with the audience"
      ],
      correctAnswer: "To emphasize key points and allow time for reflection"
    },
    {
      questionText: "What does 'context' refer to in communication?",
      options: [
        "The background, setting, or situation of the communication",
        "The literal meaning of words",
        "The grammar of the language used",
        "The tone of voice"
      ],
      correctAnswer: "The background, setting, or situation of the communication"
    },
    {
      questionText: "Why is adaptability important in communication?",
      options: [
        "It allows you to adjust your style based on the situation or audience",
        "It prevents you from listening to others",
        "It makes communication predictable",
        "It eliminates the need for feedback"
      ],
      correctAnswer: "It allows you to adjust your style based on the situation or audience"
    },
    {
      questionText: "Which of the following is an example of ineffective communication?",
      options: [
        "Avoiding eye contact and speaking in a monotone",
        "Listening attentively to others",
        "Providing clear and concise feedback",
        "Using nonverbal cues to reinforce your message"
      ],
      correctAnswer: "Avoiding eye contact and speaking in a monotone"
    },
    {
      questionText: "What is one purpose of using stories or examples in communication?",
      options: [
        "To make the message more relatable and memorable",
        "To confuse the audience",
        "To make the presentation longer",
        "To avoid addressing the main point"
      ],
      correctAnswer: "To make the message more relatable and memorable"
    },
    {
      questionText: "What is one benefit of avoiding filler words (e.g., 'um', 'like') in communication?",
      options: [
        "It makes your speech more confident and professional",
        "It makes you appear overly casual",
        "It allows you to interrupt others",
        "It reduces clarity in your message"
      ],
      correctAnswer: "It makes your speech more confident and professional"
    },
    {
      questionText: "What is one sign of effective communication in a team?",
      options: [
        "Members actively listen and provide constructive feedback",
        "One person dominates all discussions",
        "Confusion and misunderstandings are common",
        "Members avoid providing feedback"
      ],
      correctAnswer: "Members actively listen and provide constructive feedback"
    },
    {
      questionText: "What is one strategy to overcome communication barriers?",
      options: [
        "Clarify and simplify your message",
        "Speak faster to save time",
        "Use complex technical terms",
        "Avoid addressing misunderstandings"
      ],
      correctAnswer: "Clarify and simplify your message"
    },
    {
      questionText: "What is the role of questioning in communication?",
      options: [
        "To gather information and encourage interaction",
        "To end the conversation",
        "To confuse the listener",
        "To avoid engagement"
      ],
      correctAnswer: "To gather information and encourage interaction"
    },
    {
      questionText: "Which of these is a good practice for written communication?",
      options: [
        "Organize your content logically and clearly",
        "Use ambiguous language",
        "Avoid proofreading",
        "Include irrelevant details"
      ],
      correctAnswer: "Organize your content logically and clearly"
    },
    {
      questionText: "What does 'feedback loop' mean in communication?",
      options: [
        "The process of giving and receiving responses to messages",
        "Repeating the same information multiple times",
        "Ignoring the listener’s reactions",
        "Avoiding interaction after sharing information"
      ],
      correctAnswer: "The process of giving and receiving responses to messages"
    },
    {
      questionText: "What is one way to enhance credibility in communication?",
      options: [
        "Provide accurate and relevant information",
        "Avoid eye contact",
        "Ignore the audience’s feedback",
        "Use overly complex jargon"
      ],
      correctAnswer: "Provide accurate and relevant information"
    },
    {
      questionText: "What is the role of gestures in communication?",
      options: [
        "To reinforce the spoken message",
        "To replace verbal communication completely",
        "To create distractions",
        "To confuse the listener"
      ],
      correctAnswer: "To reinforce the spoken message"
    },
    {
      questionText: "Why is patience important in communication?",
      options: [
        "It allows for thoughtful responses and understanding",
        "It reduces the need for active listening",
        "It encourages interruptions",
        "It prevents the speaker from finishing"
      ],
      correctAnswer: "It allows for thoughtful responses and understanding"
    },
    {
      questionText: "What is one way to ensure your message is understood?",
      options: [
        "Ask for feedback or confirmation",
        "Speak quickly without pauses",
        "Avoid asking questions",
        "Use vague terms"
      ],
      correctAnswer: "Ask for feedback or confirmation"
    },
    {
      questionText: "Why is concise communication effective?",
      options: [
        "It prevents unnecessary information overload",
        "It avoids clear messaging",
        "It reduces the need for active listening",
        "It creates confusion"
      ],
      correctAnswer: "It prevents unnecessary information overload"
    },
    {
      questionText: "What is the purpose of summarizing key points in a meeting?",
      options: [
        "To ensure alignment and shared understanding",
        "To confuse participants",
        "To make the meeting last longer",
        "To avoid addressing important topics"
      ],
      correctAnswer: "To ensure alignment and shared understanding"
    },
    {
      questionText: "What does 'tone of voice' convey in communication?",
      options: [
        "The speaker’s emotions and intent",
        "The exact words being said",
        "The grammar used",
        "The listener’s reaction"
      ],
      correctAnswer: "The speaker’s emotions and intent"
    },
    {
      questionText: "Which of these is an example of empathetic communication?",
      options: [
        "Acknowledging and validating others’ feelings",
        "Ignoring emotional cues",
        "Interrupting frequently",
        "Dominating the conversation"
      ],
      correctAnswer: "Acknowledging and validating others’ feelings"
    }
  ]
  const WRCSQuestions=[
          {
            questionText: "What is the main purpose of a thesis statement in an essay?",
            options: [
              "To summarize the entire essay",
              "To provide the main idea or argument",
              "To list the points in the conclusion",
              "To introduce background information"
            ],
            correctAnswer: "To provide the main idea or argument"
          },
          {
            questionText: "Which of the following is a strategy for active reading?",
            options: [
              "Reading as quickly as possible",
              "Highlighting key points and taking notes",
              "Skipping difficult words and phrases",
              "Reading only the first and last paragraphs"
            ],
            correctAnswer: "Highlighting key points and taking notes"
          },
          {
            questionText: "What is the best way to structure a persuasive essay?",
            options: [
              "Introduction, body paragraphs with arguments, conclusion",
              "Body paragraphs first, then introduction, conclusion",
              "A list of arguments with no introduction",
              "Multiple conclusions and one main argument"
            ],
            correctAnswer: "Introduction, body paragraphs with arguments, conclusion"
          },
          {
            questionText: "What is the goal of a topic sentence in a paragraph?",
            options: [
              "To summarize the entire essay",
              "To introduce the main idea of the paragraph",
              "To ask a question for the reader",
              "To conclude the paragraph"
            ],
            correctAnswer: "To introduce the main idea of the paragraph"
          },
          {
            questionText: "How can context clues help in understanding difficult words?",
            options: [
              "By ignoring the words entirely",
              "By analyzing surrounding words and sentences",
              "By guessing randomly",
              "By reading the word backward"
            ],
            correctAnswer: "By analyzing surrounding words and sentences"
          },
          {
            questionText: "What should you avoid when writing an introduction?",
            options: [
              "Providing a hook to grab attention",
              "Clearly stating the thesis",
              "Adding too much detailed evidence",
              "Briefly introducing the topic"
            ],
            correctAnswer: "Adding too much detailed evidence"
          },
          {
            questionText: "Which of the following is a strategy for improving coherence in writing?",
            options: [
              "Using random examples",
              "Adding transitions between paragraphs",
              "Avoiding a clear structure",
              "Using unrelated sentences"
            ],
            correctAnswer: "Adding transitions between paragraphs"
          },
          {
            questionText: "What is skimming in reading comprehension?",
            options: [
              "Reading every word carefully",
              "Quickly glancing through a text for the main idea",
              "Rewriting the text in your own words",
              "Skipping parts of the text"
            ],
            correctAnswer: "Quickly glancing through a text for the main idea"
          },
          {
            questionText: "Which of the following is a common proofreading strategy?",
            options: [
              "Reading the text backward",
              "Skipping over punctuation marks",
              "Changing the entire text",
              "Ignoring grammar mistakes"
            ],
            correctAnswer: "Reading the text backward"
          },
          {
            questionText: "What is the purpose of a conclusion in an essay?",
            options: [
              "To introduce new evidence",
              "To restate the thesis and summarize key points",
              "To provide detailed citations",
              "To write unrelated thoughts"
            ],
            correctAnswer: "To restate the thesis and summarize key points"
          },
          {
            questionText: "How can annotating a text improve reading comprehension?",
            options: [
              "By highlighting and adding notes to important details",
              "By skipping over difficult words",
              "By only reading the first sentence of each paragraph",
              "By summarizing unrelated texts"
            ],
            correctAnswer: "By highlighting and adding notes to important details"
          },
          {
            questionText: "Which of these is a prewriting strategy?",
            options: [
              "Editing grammar mistakes",
              "Creating an outline of ideas",
              "Reading the essay aloud",
              "Skipping the planning process"
            ],
            correctAnswer: "Creating an outline of ideas"
          },
          {
            questionText: "What is paraphrasing in reading comprehension?",
            options: [
              "Copying a text word for word",
              "Restating a text in your own words",
              "Ignoring the text completely",
              "Adding your personal opinion to the text"
            ],
            correctAnswer: "Restating a text in your own words"
          },
          {
            questionText: "How does summarizing a text help with comprehension?",
            options: [
              "By condensing the main points into a brief overview",
              "By rewriting every word",
              "By ignoring key ideas",
              "By focusing only on minor details"
            ],
            correctAnswer: "By condensing the main points into a brief overview"
          },
          {
            questionText: "What is brainstorming in the context of writing?",
            options: [
              "Skipping the writing process",
              "Generating and organizing ideas before writing",
              "Copying another person's work",
              "Editing grammar errors"
            ],
            correctAnswer: "Generating and organizing ideas before writing"
          },
          {
            questionText: "Which strategy helps avoid plagiarism in academic writing?",
            options: [
              "Using direct quotes without citation",
              "Rewriting information in your own words with proper citation",
              "Copying entire paragraphs from sources",
              "Leaving out citations for known facts"
            ],
            correctAnswer: "Rewriting information in your own words with proper citation"
          },
          {
            questionText: "What does scanning involve in reading comprehension?",
            options: [
              "Reading the entire text in detail",
              "Looking for specific information in the text",
              "Skipping sections of the text",
              "Summarizing the text"
            ],
            correctAnswer: "Looking for specific information in the text"
          },
          {
            questionText: "Which of these is a key characteristic of a strong thesis statement?",
            options: [
              "It is broad and vague",
              "It is specific and debatable",
              "It contains multiple unrelated ideas",
              "It restates the conclusion"
            ],
            correctAnswer: "It is specific and debatable"
          },
          {
            questionText: "What is the purpose of peer review in the writing process?",
            options: [
              "To write the essay for the author",
              "To provide feedback and suggest improvements",
              "To ignore mistakes in the draft",
              "To rewrite the draft entirely"
            ],
            correctAnswer: "To provide feedback and suggest improvements"
          },
          {
            questionText: "What does inference mean in reading comprehension?",
            options: [
              "Ignoring implied meanings",
              "Drawing conclusions based on evidence in the text",
              "Summarizing the entire text",
              "Reading only the main headings"
            ],
            correctAnswer: "Drawing conclusions based on evidence in the text"
          },
          {
            questionText: "How can using transition words improve writing?",
            options: [
              "By making sentences flow more smoothly",
              "By creating unrelated ideas",
              "By eliminating the need for paragraphs",
              "By adding random words"
            ],
            correctAnswer: "By making sentences flow more smoothly"
          },
          {
            questionText: "What is the purpose of a graphic organizer in reading and writing?",
            options: [
              "To confuse the reader",
              "To visually organize and clarify ideas",
              "To replace the need for an essay",
              "To skip planning steps"
            ],
            correctAnswer: "To visually organize and clarify ideas"
          }, 
              {
                questionText: "What is the role of supporting evidence in a paragraph?",
                options: [
                  "To distract from the main point",
                  "To back up the main idea with facts or examples",
                  "To conclude the paragraph",
                  "To rewrite the topic sentence"
                ],
                correctAnswer: "To back up the main idea with facts or examples"
              },
              {
                questionText: "Which of the following is an effective way to identify the main idea of a passage?",
                options: [
                  "Focus on the first and last sentences",
                  "Look for repeated ideas or themes",
                  "Ignore the supporting details",
                  "Only read the headings"
                ],
                correctAnswer: "Look for repeated ideas or themes"
              },
              {
                questionText: "Why is it important to use formal language in academic writing?",
                options: [
                  "To impress the audience with complex words",
                  "To maintain a professional and objective tone",
                  "To make the writing sound casual",
                  "To confuse the reader"
                ],
                correctAnswer: "To maintain a professional and objective tone"
              },
              {
                questionText: "What is the main purpose of a conclusion paragraph?",
                options: [
                  "To summarize the essay and restate the thesis",
                  "To introduce new arguments",
                  "To provide citations",
                  "To change the main idea"
                ],
                correctAnswer: "To summarize the essay and restate the thesis"
              },
              {
                questionText: "Which of these is a good strategy for managing time during a CBT writing task?",
                options: [
                  "Spending all the time on the introduction",
                  "Creating an outline and sticking to it",
                  "Ignoring the time limit",
                  "Rewriting every sentence repeatedly"
                ],
                correctAnswer: "Creating an outline and sticking to it"
              },
              {
                questionText: "How can previewing a text improve reading comprehension?",
                options: [
                  "By guessing the content without reading",
                  "By quickly scanning headings, subheadings, and summaries",
                  "By ignoring the introduction",
                  "By focusing only on images"
                ],
                correctAnswer: "By quickly scanning headings, subheadings, and summaries"
              },
              {
                questionText: "What does it mean to evaluate a source’s credibility?",
                options: [
                  "Check if the source is entertaining",
                  "Determine if the information is accurate, reliable, and unbiased",
                  "Focus on how many pages the source has",
                  "Ignore the author’s credentials"
                ],
                correctAnswer: "Determine if the information is accurate, reliable, and unbiased"
              },
              {
                questionText: "What is a writing draft?",
                options: [
                  "The final version of an essay",
                  "An initial version of a written piece for revision",
                  "A brainstorming session",
                  "A collection of unrelated ideas"
                ],
                correctAnswer: "An initial version of a written piece for revision"
              },
              {
                questionText: "What is the benefit of using synonyms in writing?",
                options: [
                  "To add variety and avoid repetition",
                  "To confuse the reader with complex words",
                  "To make the text longer",
                  "To replace the need for explanations"
                ],
                correctAnswer: "To add variety and avoid repetition"
              },
              {
                questionText: "What is one way to determine the author’s tone in a text?",
                options: [
                  "Analyze the choice of words and phrasing",
                  "Ignore the context of the passage",
                  "Focus only on the first sentence",
                  "Look at the punctuation"
                ],
                correctAnswer: "Analyze the choice of words and phrasing"
              },
              {
                questionText: "What is the role of a counterargument in persuasive writing?",
                options: [
                  "To refute opposing viewpoints with evidence",
                  "To agree with the opposing side",
                  "To remove the need for a conclusion",
                  "To confuse the reader"
                ],
                correctAnswer: "To refute opposing viewpoints with evidence"
              },
              {
                questionText: "Why is it important to have a clear thesis statement?",
                options: [
                  "It sets the focus and direction of the essay",
                  "It replaces the need for supporting evidence",
                  "It serves as the conclusion",
                  "It introduces unrelated ideas"
                ],
                correctAnswer: "It sets the focus and direction of the essay"
              },
              {
                questionText: "What is a synonym for 'paraphrase'?",
                options: [
                  "Summarize",
                  "Rewrite in your own words",
                  "Copy exactly",
                  "Ignore"
                ],
                correctAnswer: "Rewrite in your own words"
              },
              {
                questionText: "What is the purpose of textual evidence in an essay?",
                options: [
                  "To support claims with examples from the text",
                  "To summarize the main idea",
                  "To replace the topic sentence",
                  "To write the conclusion"
                ],
                correctAnswer: "To support claims with examples from the text"
              },
              {
                questionText: "How can headings and subheadings improve reading comprehension?",
                options: [
                  "By providing a visual structure to the text",
                  "By eliminating the need to read the text",
                  "By distracting from the main content",
                  "By repeating the entire passage"
                ],
                correctAnswer: "By providing a visual structure to the text"
              },
              {
                questionText: "What is the benefit of peer editing in writing?",
                options: [
                  "Receiving constructive feedback to improve the draft",
                  "Replacing the need for personal editing",
                  "Eliminating the need for a conclusion",
                  "Ignoring grammar mistakes"
                ],
                correctAnswer: "Receiving constructive feedback to improve the draft"
              },
              {
                questionText: "What does 'tone' refer to in a text?",
                options: [
                  "The author's attitude or approach to the subject",
                  "The number of words used",
                  "The structure of paragraphs",
                  "The length of sentences"
                ],
                correctAnswer: "The author's attitude or approach to the subject"
              },
              {
                questionText: "What is an example of a reading comprehension strategy?",
                options: [
                  "Skipping the conclusion",
                  "Making predictions based on the text",
                  "Ignoring context clues",
                  "Reading only the introduction"
                ],
                correctAnswer: "Making predictions based on the text"
              },
              {
                questionText: "What is an effective post-reading strategy?",
                options: [
                  "Creating a summary of key points",
                  "Ignoring the text",
                  "Memorizing every word",
                  "Avoiding any questions about the passage"
                ],
                correctAnswer: "Creating a summary of key points"
              },
              {
                questionText: "What does the term 'coherence' mean in writing?",
                options: [
                  "Logical flow and connection of ideas",
                  "Random arrangement of paragraphs",
                  "Using difficult words",
                  "Ignoring transitions"
                ],
                correctAnswer: "Logical flow and connection of ideas"
              },
              {
                questionText: "How does reading aloud help with editing?",
                options: [
                  "It helps identify awkward phrasing and errors",
                  "It eliminates the need for revisions",
                  "It replaces proofreading",
                  "It distracts from the content"
                ],
                correctAnswer: "It helps identify awkward phrasing and errors"
              },
              {
                questionText: "What is the purpose of an outline in the writing process?",
                options: [
                  "To organize ideas and structure the content",
                  "To replace the first draft",
                  "To write the conclusion first",
                  "To add unrelated thoughts"
                ],
                correctAnswer: "To organize ideas and structure the content"
              },
              {
                questionText: "What is the benefit of identifying the author’s purpose in a text?",
                options: [
                  "To understand why the text was written",
                  "To ignore the main ideas",
                  "To summarize unrelated points",
                  "To rewrite the text"
                ],
                correctAnswer: "To understand why the text was written"
              },
              {
                questionText: "What is the importance of revising a draft?",
                options: [
                  "To refine ideas and improve clarity",
                  "To replace the draft with random content",
                  "To avoid adding details",
                  "To make the draft longer"
                ],
                correctAnswer: "To refine ideas and improve clarity"
              }               
  ]
  const SoundPatternQuestions=[
      {
      questionText:'Which word has the silent "k"?',
      options:['Knot','Know','Knife','All of the above'],
      correctAnswer: 'All of the above'
      },
      {
      questionText:'Identify the word with the same ending sound as "book"',
      options:['Look','Buck','Took','Cook'],
      correctAnswer: 'Look'
      },
      {
      questionText:'What is the syllable count of "responsibility"?',
      options:['5','6','7','4'],
      correctAnswer:  '5'
      },
      {
          questionText: "Which word rhymes with 'heart'?",
          options: ["Cart", "Hurt", "Tart", "Start"],
          correctAnswer: "Tart",
          },
        {
          questionText: "The word 'tear' can be a homograph. Which meanings does it have?",
          options: [
            "To rip, or liquid from the eye",
            "To fall, or a fabric",
            "To cut, or a place",
            "To see, or to fold",
          ],
          correctAnswer: "To rip, or liquid from the eye",
        },
        {
          questionText: "What is the stress pattern for 'photography'?",
          options: ["PHO-to-gra-phy", "pho-TO-gra-phy", "pho-to-GRA-phy", "pho-to-gra-PHY"],
          correctAnswer: "pho-TO-gra-phy",
        },
        {
          questionText: "Which word contains the same vowel sound as 'heat'?",
          options: ["Meet", "Hit", "Hat", "Hot"],
          correctAnswer: "Meet",
        },
        {
          questionText: "Identify the silent letter in 'wrist':",
          options: ["W", "R", "S", "T"],
          correctAnswer: "W",
        },
        {
          questionText: "Which word rhymes with 'clear'?",
          options: ["Near", "Bear", "Fear", "Both a and c"],
          correctAnswer: "Both a and c",
        },
        {
          questionText: "What is the phonetic transcription of 'dog'?",
          options: ["/dog/", "/dɒg/", "/dag/", "/dug/"],
          correctAnswer: "/dɒg/",
        },
        {
          questionText: "Which of these words has a silent 't'?",
          options: ["Listen", "Fasten", "Castle", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          questionText: "Identify the minimal pair:",
          options: ["Pat - Pet", "Big - Pig", "Night - Light", "Cut - Coat"],
          correctAnswer: "Pat - Pet",
        },
        {
          questionText: "Which word rhymes with 'breeze'?",
          options: ["Freeze", "Tease", "Please", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          questionText: "What is the syllable count for 'difficulty'?",
          options: ["4", "3", "5", "6"],
          correctAnswer: "4",
        },
        {
          questionText: "Which of these words contains a diphthong?",
          options: ["Coin", "Tap", "Bed", "Stop"],
          correctAnswer: "Coin",
        },
        {
          questionText: "Identify the stress pattern of 'application':",
          options: ["AP-pli-ca-tion", "ap-PLI-ca-tion", "ap-pli-CA-tion", "ap-pli-ca-TION"],
          correctAnswer: "ap-pli-ca-TION",
        },
        {
          questionText: "Which word has a silent 'h'?",
          options: ["Hour", "Honest", "Heir", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          questionText: "Which word contains a long vowel sound?",
          options: ["Bit", "Bite", "Hat", "Sit"],
          correctAnswer: "Bite",
        },
        {
          questionText: "Which of these words is a homophone for 'plane'?",
          options: ["Plain", "Plan", "Play", "Pane"],
          correctAnswer: "Plain",
        },
        {
          questionText: "What is the syllable count for 'transportation'?",
          options: ["3", "4", "5", "6"],
          correctAnswer: "5",
        },
        {
          questionText: "Identify the silent letter in 'debt':",
          options: ["D", "E", "B", "T"],
          correctAnswer: "B",
        },
        {
          questionText: "Which word rhymes with 'play'?",
          options: ["Day", "May", "Stay", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          questionText: "Which of these demonstrates assonance?",
          options: [
            '"Bright light in the night"',
            '"Big brown bear"',
            '"Silent sight"',
            '"Red and ready"',
          ],
          correctAnswer: '"Bright light in the night"',
        },
        {
          questionText: "What is the stress pattern for 'economic'?",
          options: ["EC-o-nom-ic", "ec-O-nom-ic", "ec-o-NOM-ic", "ec-o-nom-IC"],
          correctAnswer: "ec-o-NOM-ic",
        },
        {
          questionText: "Which word contains the same final sound as 'sing'?",
          options: ["Thing", "Ring", "Bring", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          questionText: "Which word rhymes with 'cold'?",
          options: ["Bold", "Called", "Old", "Hold"],
          correctAnswer: "Hold",
        },
        {
          questionText: "What is the silent letter in 'gnome'?",
          options: ["G", "N", "M", "E"],
          correctAnswer: "G",
        },
        {
          questionText: "How many syllables are in the word 'education'?",
          options: ["3", "4", "5", "6"],
          correctAnswer: "4",
        },
        {
          questionText: "Which word has the same vowel sound as 'name'?",
          options: ["Same", "Near", "Nap", "Net"],
          correctAnswer: "Same",
        },
        {
          questionText: "Which of these is a homophone for 'flower'?",
          options: ["Flare", "Flour", "Flow", "Power"],
          correctAnswer: "Flour",
        },
        {
          questionText: "What is the stress pattern of 'development'?",
          options: ["DE-vel-op-ment", "de-VEL-op-ment", "de-vel-OP-ment", "de-vel-op-MENT"],
          correctAnswer: "de-VEL-op-ment",
        },
        {
          questionText: "Identify the word with a silent letter:",
          options: ["Listen", "Actor", "Rate", "Summer"],
          correctAnswer: "Listen",
        },
        {
          questionText: "Which word has the same ending sound as 'cough'?",
          options: ["Tough", "Off", "Laugh", "Stuff"],
          correctAnswer: "Off",
        },
        {
          questionText: "What is the syllable count of 'extraordinary'?",
          options: ["5", "6", "7", "4"],
          correctAnswer: "5",
        },
        {
          questionText: "Which pair of words demonstrates alliteration?",
          options: ["Big bear", "Red apple", "Hot tea", "Cold day"],
          correctAnswer: "Big bear",
        },
        {
          questionText: "The word 'hear' is a homophone for:",
          options: ["Hair", "Here", "Heart", "Heir"],
          correctAnswer: "Here",
        },
        {
          questionText: "Which word starts with the same sound as 'giant'?",
          options: ["Glass", "Gym", "Guard", "Glow"],
          correctAnswer: "Gym",
        },
        {
          questionText: "Identify the minimal pair:",
          options: ["Bat - Bet", "Cat - Cap", "Tie - Try", "Hat - Hot"],
          correctAnswer: "Bat - Bet",
        },
        {
          questionText: "What is the stress pattern for 'discovery'?",
          options: ["DIS-co-ver-y", "dis-COV-er-y", "dis-co-VER-y", "dis-co-ver-Y"],
          correctAnswer: "dis-COV-er-y",
        },
        {
          questionText: "Which word has a silent 'p'?",
          options: ["Pause", "Psychology", "Spring", "Protect"],
          correctAnswer: "Psychology",
        },
        {
          questionText: "Which word rhymes with 'tight'?",
          options: ["Kite", "Hit", "Thought", "Right"],
          correctAnswer: "Kite",
        },
        {
          questionText: "What is the syllable count of 'imagination'?",
          options: ["5", "4", "6", "7"],
          correctAnswer: "5",
        },
        {
          questionText: "What is the phonetic transcription of 'cat'?",
          options: ["/kat/", "/kæt/", "/ket/", "/kɒt/"],
          correctAnswer: "/kæt/",
        },
        {
          questionText: "Which word has the same initial sound as 'ship'?",
          options: ["Shop", "Sip", "Sheep", "Snap"],
          correctAnswer: "Shop",
        },
        {
          questionText: "Identify the silent letter in 'castle':",
          options: ["C", "S", "T", "E"],
          correctAnswer: "T",
        },
        {
          questionText: "Which word has the same vowel sound as 'good'?",
          options: ["Food", "Hood", "Mood", "Blood"],
          correctAnswer: "Hood",
        },
        {
          questionText: "Which word rhymes with 'moon'?",
          options: ["Noon", "Soon", "Tune", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          questionText: "Identify the word with a silent 'b':",
          options: ["Comb", "Bomb", "Thumb", "All of the above"],
          correctAnswer: "All of the above",
        },
        {
          questionText: "What is the stress pattern for 'engineer'?",
          options: ["EN-gineer", "en-GI-neer", "en-gi-NEER", "eng-i-neer"],
          correctAnswer: "en-gi-NEER",
        },
        {
          questionText: "Which pair of words shows assonance?",
          options: ["Rain - Pain", "Big - Bag", "Sit - Sat", "Hot - Hit"],
          correctAnswer: "Rain - Pain",
        },
  ]
  // --------------------------------------------
  // Vocabulary Questions for STQ Quiz (50 questions)
  // --------------------------------------------
  const AntonymsandSynonymsQuestions = [
    {
      questionText: "What is the synonym of Adhere?",
      options: ["Detach", "Stick", "Loosen", "Avoid"],
      correctAnswer: "Stick",
    },
    {
      questionText: "What is the antonym of Fragile?",
      options: ["Delicate", "Brittle", "Durable", "Breakable"],
      correctAnswer: "Durable",
    },
    {
      questionText: "What is the synonym of Eager?",
      options: ["Anxious", "Reluctant", "Indifferent", "Lazy"],
      correctAnswer: "Anxious",
    },
    {
      questionText: "What is the antonym of Genuine?",
      options: ["Authentic", "Real", "Fake", "Honest"],
      correctAnswer: "Fake",
    },
    {
      questionText: "What is the synonym of Prompt?",
      options: ["Delay", "Late", "Punctual", "Hesitate"],
      correctAnswer: "Punctual",
    },
    {
      questionText: "What is the antonym of Ancient?",
      options: ["Old", "Modern", "Historical", "Primitive"],
      correctAnswer: "Modern",
    },
    {
      questionText: "What is the synonym of Amicable?",
      options: ["Friendly", "Hostile", "Aggressive", "Rude"],
      correctAnswer: "Friendly",
    },
    {
      questionText: "What is the antonym of Mature?",
      options: ["Wise", "Young", "Immature", "Developed"],
      correctAnswer: "Immature",
    },
    {
      questionText: "What is the synonym of Courageous?",
      options: ["Brave", "Cowardly", "Afraid", "Nervous"],
      correctAnswer: "Brave",
    },
    {
      questionText: "What is the antonym of Expand?",
      options: ["Grow", "Increase", "Shrink", "Enlarge"],
      correctAnswer: "Shrink",
    },
    {
      questionText: "What is the synonym of Notorious?",
      options: ["Famous", "Infamous", "Unknown", "Celebrated"],
      correctAnswer: "Infamous",
    },
    {
      questionText: "What is the antonym of Harsh?",
      options: ["Gentle", "Rough", "Severe", "Cruel"],
      correctAnswer: "Gentle",
    },
    {
      questionText: "What is the synonym of Illuminate?",
      options: ["Brighten", "Darken", "Extinguish", "Hide"],
      correctAnswer: "Brighten",
    },
    {
      questionText: "What is the antonym of Ambiguous?",
      options: ["Clear", "Vague", "Uncertain", "Confusing"],
      correctAnswer: "Clear",
    },
    {
      questionText: "What is the synonym of Diminish?",
      options: ["Reduce", "Enlarge", "Expand", "Increase"],
      correctAnswer: "Reduce",
    },
    {
      questionText: "What is the antonym of Timid?",
      options: ["Shy", "Bold", "Nervous", "Anxious"],
      correctAnswer: "Bold",
    },
    {
      questionText: "What is the synonym of Content?",
      options: ["Satisfied", "Angry", "Empty", "Upset"],
      correctAnswer: "Satisfied",
    },
    {
      questionText: "What is the antonym of Enormous?",
      options: ["Huge", "Large", "Tiny", "Gigantic"],
      correctAnswer: "Tiny",
    },
    {
      questionText: "What is the synonym of Vivid?",
      options: ["Dull", "Bright", "Faint", "Cloudy"],
      correctAnswer: "Bright",
    },
    {
      questionText: "What is the antonym of Optimistic?",
      options: ["Hopeful", "Pessimistic", "Confident", "Cheerful"],
      correctAnswer: "Pessimistic",
    },
    {
      questionText: "What is the synonym of Futile?",
      options: ["Worthless", "Effective", "Useless", "Productive"],
      correctAnswer: "Useless",
    },
    {
      questionText: "What is the antonym of Humble?",
      options: ["Arrogant", "Modest", "Polite", "Kind"],
      correctAnswer: "Arrogant",
    },
    {
      questionText: "What is the synonym of Dispute?",
      options: ["Argument", "Agreement", "Compromise", "Resolution"],
      correctAnswer: "Argument",
    },
    {
      questionText: "What is the antonym of Accumulate?",
      options: ["Gather", "Hoard", "Disperse", "Collect"],
      correctAnswer: "Disperse",
    },
    {
      questionText: "What is the synonym of Pacify?",
      options: ["Calm", "Agitate", "Worry", "Annoy"],
      correctAnswer: "Calm",
    },
    {
      questionText: "What is the antonym of Blunt?",
      options: ["Sharp", "Dull", "Abrupt", "Direct"],
      correctAnswer: "Sharp",
    },
    {
      questionText: "What is the synonym of Melancholy?",
      options: ["Happy", "Sad", "Joyful", "Excited"],
      correctAnswer: "Sad",
    },
    {
      questionText: "What is the antonym of Artificial?",
      options: ["Man-made", "Natural", "Synthetic", "Fake"],
      correctAnswer: "Natural",
    },
    {
      questionText: "What is the synonym of Conceal?",
      options: ["Hide", "Reveal", "Expose", "Show"],
      correctAnswer: "Hide",
    },
    {
      questionText: "What is the antonym of Stagnant?",
      options: ["Moving", "Still", "Active", "Lifeless"],
      correctAnswer: "Active",
    },
    {
      questionText: "What is the synonym of Impartial?",
      options: ["Biased", "Fair", "Partial", "Prejudiced"],
      correctAnswer: "Fair",
    },
    {
      questionText: "What is the antonym of Superior?",
      options: ["Inferior", "Better", "Greater", "Excellent"],
      correctAnswer: "Inferior",
    },
    {
      questionText: "What is the synonym of Reluctant?",
      options: ["Willing", "Hesitant", "Eager", "Confident"],
      correctAnswer: "Hesitant",
    },
    {
      questionText: "What is the antonym of Adversity?",
      options: ["Struggle", "Hardship", "Success", "Problem"],
      correctAnswer: "Success",
    },
    {
      questionText: "What is the synonym of Mandatory?",
      options: ["Optional", "Compulsory", "Voluntary", "Irrelevant"],
      correctAnswer: "Compulsory",
    },
    {
      questionText: "What is the antonym of Innocent?",
      options: ["Guilty", "Naive", "Honest", "Pure"],
      correctAnswer: "Guilty",
    },
    {
      questionText: "What is the synonym of Grateful?",
      options: ["Thankful", "Rude", "Indifferent", "Hostile"],
      correctAnswer: "Thankful",
    },
    {
      questionText: "What is the antonym of Complex?",
      options: ["Simple", "Intricate", "Difficult", "Complicated"],
      correctAnswer: "Simple",
    },
    {
      questionText: "What is the synonym of Conventional?",
      options: ["Unusual", "Traditional", "Strange", "Radical"],
      correctAnswer: "Traditional",
    },
    {
      questionText: "What is the antonym of Hostile?",
      options: ["Friendly", "Aggressive", "Harsh", "Rude"],
      correctAnswer: "Friendly",
    },
    {
      questionText: "What is the synonym of Resilient?",
      options: ["Strong", "Weak", "Fragile", "Brittle"],
      correctAnswer: "Strong",
    },
    {
      questionText: "What is the antonym of Benevolent?",
      options: ["Kind", "Selfish", "Cruel", "Generous"],
      correctAnswer: "Cruel",
    },
    {
      questionText: "What is the synonym of Exquisite?",
      options: ["Beautiful", "Ugly", "Ordinary", "Dull"],
      correctAnswer: "Beautiful",
    },
    {
      questionText: "What is the antonym of Transparent?",
      options: ["Opaque", "Clear", "Open", "Translucent"],
      correctAnswer: "Opaque",
    },
    {
      questionText: "What is the synonym of Significant?",
      options: ["Important", "Minor", "Insignificant", "Negligible"],
      correctAnswer: "Important",
    },
    {
      questionText: "What is the antonym of Permanent?",
      options: ["Temporary", "Lasting", "Durable", "Stable"],
      correctAnswer: "Temporary",
    },
    {
      questionText: "What is the synonym of Genuine?",
      options: ["Fake", "Authentic", "False", "Counterfeit"],
      correctAnswer: "Authentic",
    },
    {
      questionText: "What is the antonym of Deliberate?",
      options: ["Intentional", "Accidental", "Purposeful", "Careful"],
      correctAnswer: "Accidental",
    },
    {
      questionText: "What is the synonym of Expand?",
      options: ["Grow", "Reduce", "Shrink", "Diminish"],
      correctAnswer: "Grow",
    },
    {
      questionText: "What is the antonym of Dull?",
      options: ["Bright", "Boring", "Sharp", "Blunt"],
      correctAnswer: "Sharp",
    },
  ];
  
  // --------------------------------------------
  // Seed Process
  // --------------------------------------------
  
  /*Mixed questions*/
      const GST111questions = [
  
    {
      questionText: "What is the primary function of a conjunction in a clause?",
      options: [
        "To express strong emotion",
        "To describe a noun",
        "To replace a noun",
        "To link words or groups of words"
      ],
      correctAnswer: "To link words or groups of words"
    },
    {
      questionText: "In phonetics, what is the term for the smallest unit of sound that distinguishes one word from another?",
      options: [
        "Morpheme",
        "Phoneme",
        "Syllable",
        "Grapheme"
      ],
      correctAnswer: "Phoneme"
    },
    {
      questionText: "Which of the following is a key strategy for improving reading comprehension?",
      options: [
        "Memorizing the entire text",
        "Skimming for main ideas and rereading complex sections",
        "Reading without pausing",
        "Avoiding taking notes"
      ],
      correctAnswer: "Skimming for main ideas and rereading complex sections"
    },
    {
      questionText: "Identify the type of clause in the sentence: 'After she arrived, we started the meeting.'",
      options: [
        "Independent clause",
        "Noun clause",
        "Relative clause",
        "Adverbial clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "Which of the following is an example of ICT used in modern language learning?",
      options: [
        "Lecture notes",
        "Textbooks",
        "Printed dictionaries",
        "Language learning apps like Duolingo"
      ],
      correctAnswer: "Language learning apps like Duolingo"
    },
    {
      questionText: "In the word 'cats,' how many phonemes are present?",
      options: [
        "2",
        "3",
        "4",
        "5"
      ],
      correctAnswer: "3"
    },
    {
      questionText: "What type of sentence is most effective for expressing opinions in writing?",
      options: [
        "Interrogative",
        "Declarative",
        "Exclamatory",
        "Imperative"
      ],
      correctAnswer: "Declarative"
    },
    {
      questionText: "What type of clause is 'where she works' in the sentence 'I know where she works'?",
      options: [
        "Independent clause",
        "Adverbial clause",
        "Relative clause",
        "Noun clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "Which of the following is an important ICT tool for virtual communication in language learning?",
      options: [
        "Posters",
        "Flashcards",
        "Whiteboards",
        "Zoom or Microsoft Teams"
      ],
      correctAnswer: "Zoom or Microsoft Teams"
    },
    {
      questionText: "The word 'ship' and 'chip' differ by which type of sound pattern?",
      options: [
        "Consonant cluster",
        "Minimal pair",
        "Diphthong",
        "Aspiration"
      ],
      correctAnswer: "Minimal pair"
    },
    {
      questionText: "What is the purpose of an expository essay?",
      options: [
        "To entertain the reader",
        "To provide instructions",
        "To explain or inform",
        "To argue a point"
      ],
      correctAnswer: "To explain or inform"
    },
    {
      questionText: "In the sentence 'He failed because he didn’t study,' identify the type of clause 'because he didn’t study.'",
      options: [
        "Independent clause",
        "Noun clause",
        "Relative clause",
        "Adverbial clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "Which tool is commonly used to improve vocabulary in ICT-assisted language learning?",
      options: [
        "Writing notebooks",
        "Grammar textbooks",
        "Printed dictionaries",
        "Flashcard apps"
      ],
      correctAnswer: "Flashcard apps"
    },
    {
      questionText: "What is the difference between voiced and voiceless sounds?",
      options: [
        "Voiced sounds vibrate the vocal cords, while voiceless sounds do not.",
        "Voiced sounds are longer, while voiceless sounds are shorter.",
        "Voiced sounds occur at the end of words, while voiceless sounds do not.",
        "Voiced sounds require breath, while voiceless sounds do not."
      ],
      correctAnswer: "Voiced sounds vibrate the vocal cords, while voiceless sounds do not."
    },
    {
      questionText: "Which reading strategy involves highlighting or marking key ideas in a text?",
      options: [
        "Scanning",
        "Annotating",
        "Summarizing",
        "Previewing"
      ],
      correctAnswer: "Annotating"
    },
    {
      questionText: "Identify the clause in the sentence: 'The teacher, who is kind, gave us extra time for the assignment.'",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "What does the acronym 'ICT' stand for in modern education?",
      options: [
        "Information and Communication Technology",
        "Internet and Computer Tools",
        "Interactive Computer Training",
        "Instructional Communication Theory"
      ],
      correctAnswer: "Information and Communication Technology"
    },
    {
      questionText: "In phonology, what is the term for a combination of two vowel sounds within the same syllable?",
      options: [
        "Monophthong",
        "Diphthong",
        "Consonant cluster",
        "Syllabic consonant"
      ],
      correctAnswer: "Diphthong"
    },
    {
      questionText: "What is the main goal of a persuasive essay?",
      options: [
        "To entertain the reader",
        "To provide instructions",
        "To convince the reader to accept a particular viewpoint",
        "To list facts and information"
      ],
      correctAnswer: "To convince the reader to accept a particular viewpoint"
    },
    {
      questionText: "In the sentence 'She left before the movie ended,' what type of clause is 'before the movie ended'?",
      options: [
        "Adverbial clause",
        "Relative clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "Which of the following is an example of a homophone?",
      options: [
        "Their and there",
        "Cat and bat",
        "Run and running",
        "Quick and quickly"
      ],
      correctAnswer: "Their and there"
    },
    {
      questionText: "Identify the type of clause in the sentence: 'I believe that he is honest.'",
      options: [
        "Independent clause",
        "Adverbial clause",
        "Relative clause",
        "Noun clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "What is the process of guessing the meaning of unfamiliar words using context clues in a text?",
      options: [
        "Scoring",
        "Analyzing",
        "Inferring",
        "Explaining"
      ],
      correctAnswer: "Inferring"
    },
    {
      questionText: "Which of the following is an ICT tool for collaborative writing?",
      options: [
        "PowerPoint",
        "Google Docs",
        "Facebook",
        "Twitter"
      ],
      correctAnswer: "Google Docs"
    },
    {
      questionText: "What is the sound produced when the vocal cords are held tightly together and released suddenly?",
      options: [
        "Glottal stop",
        "Aspirated sound",
        "Diphthong",
        "Fricative"
      ],
      correctAnswer: "Glottal stop"
    },
    {
      questionText: "In writing, what is the purpose of a topic sentence?",
      options: [
        "To summarize the paragraph",
        "To state the main idea of the paragraph",
        "To conclude the essay",
        "To introduce a new idea in the essay"
      ],
      correctAnswer: "To state the main idea of the paragraph"
    },
    {
      questionText: "What type of clause is 'if it rains tomorrow' in the sentence 'We will cancel the picnic if it rains tomorrow'?",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "Which ICT tool is best for creating interactive language lessons?",
      options: [
        "Microsoft paint",
        "Excel",
        "Notepad",
        "Kahoot!"
      ],
      correctAnswer: "Kahoot!"
    },
    {
      questionText: "In the word 'through,' how many phonemes are present?",
      options: [
        "5",
        "4",
        "3",
        "6"
      ],
      correctAnswer: "3"
    },
    {
      questionText: "What is the function of a concluding sentence in a paragraph?",
      options: [
        "To introduce new evidence",
        "To summarize the main points",
        "To provide background information",
        "To ask a question"
      ],
      correctAnswer: "To summarize the main points"
    },
    {
      questionText: "Identify the type of clause in the sentence: 'The man who helped us is my uncle.'",
      options: [
        "Relative clause",
        "Adverbial clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "Which of the following is an example of ICT facilitating asynchronous learning?",
      options: [
        "Watching recorded lectures",
        "Attending live webinars",
        "Real-time chat discussions",
        "Face-to-face classroom teaching"
      ],
      correctAnswer: "Watching recorded lectures"
    },
    {
      questionText: "What is the term for the repetition of similar vowel sounds in nearby words?",
      options: [
        "Onomatopoeia",
        "Consonance",
        "Alliteration",
        "Assonance"
      ],
      correctAnswer: "Assonance"
    },
    {
      questionText: "What is the main goal of skimming in reading?",
      options: [
        "To memorize the content",
        "To understand every detail",
        "To quickly identify the main ideas",
        "To write a summary"
      ],
      correctAnswer: "To quickly identify the main ideas"
    },
    {
      "questionText": "What type of clause is 'what she said' in the sentence 'I didn’t understand what she said'?",
      options: [
        "Adverbial clause",
        "Noun clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "What is the main advantage of using ICT in language learning?",
      options: [
        "Increased access to diverse resources",
        "Reduced need for teachers",
        "Higher cost of learning",
        "Fewer learning options"
      ],
      correctAnswer: "Increased access to diverse resources"
    },
    {
      questionText: "Which sound pattern involves the substitution of one sound for another in a word?",
      options: [
        "Constant cluster",
        "Alliteration",
        "Rhyme",
        "Minimal pair"
      ],
      correctAnswer: "Minimal pair"
    },
    {
      questionText: "What type of sentence is used to persuade the reader in argumentative writing?",
      options: [
        "Imperative sentence",
        "Interrogative sentence",
        "Declarative sentence",
        "Exclamatory sentence"
      ],
      correctAnswer: "Declarative sentence"
    },
    {
      questionText: "In the sentence 'Although it was raining, we went outside,' what type of clause is 'Although it was raining'?",
      options: [
        "Relative clause",
        "Adverbial clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "Which ICT tool can be used for creating audio recordings to improve pronunciation in language learning?",
      options: [
        "Audacity",
        "Excel",
        "Word Processor",
        "PowerPoint"
      ],
      correctAnswer: "Audacity"
    },
    {
      questionText: "Which of these is an example of a diphthong?",
      options: [
        "Stop",
        "Top",
        "Bed",
        "Coin"
      ],
      correctAnswer: "Coin"
    },
    {
      questionText: "Identify the type of clause: 'Because he was late, he missed the train.'",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "Which strategy improves reading comprehension?",
      options: [
        "Skipping difficult parts",
        "Summarizing after reading",
        "Reading once quickly",
        "Ignoring unfamiliar words"
      ],
      correctAnswer: "Summarizing after reading"
    },
    {
      questionText: "What does ICT stand for in modern language learning?",
      options: [
        "Information and Communication Technology",
        "International Communication Techniques",
        "Instructional Classroom Tools",
        "Interactive Cultural Training"
      ],
      correctAnswer: "Information and Communication Technology"
    },
    {
      questionText: "Which sentence contains a noun clause?",
      options: [
        "We went to the park.",
        "She runs faster than him.",
        "If I go, I will call you.",
        "I know that she will come."
      ],
      correctAnswer: "I know that she will come."
    },
    {
      questionText: "What is an example of an assonance?",
      options: [
        "Peter Piper picked a peck of pickled peppers.",
        "She sells seashells by the seashore.",
        "The light of the fire is a sight.",
        "Bright stars in the sky."
      ],
      correctAnswer: "The light of the fire is a sight."
    },
    {
      questionText: "Which of these is a reading comprehension strategy?",
      options: [
        "Reading without stopping",
        "Scanning the text for specific details",
        "Skipping parts that seem unimportant",
        "Memorizing random sentences"
      ],
      correctAnswer: "Scanning the text for specific details"
    },
    {
      questionText: "Identify the type of clause in this sentence: 'The man who won the lottery is here.'",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "Which word rhymes with 'moon'?",
      options: [
        "Run",
        "Tone",
        "Done",
        "Soon"
      ],
      correctAnswer: "Soon"
    },
    {
      questionText: "What does ICT help with in language learning?",
      options: [
        "Reducing reading time",
        "Eliminating grammar lessons",
        "Improving communication tools",
        "Avoiding vocabulary practice"
      ],
      correctAnswer: "Improving communication tools"
    },
    {
      questionText: "Identify the type of clause: 'Although she was tired, she finished the work.'",
      options: [
        "Relaive clause",
        "Adverbial clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "Which strategy is useful for writing effectively?",
      options: [
        "Creating an outline before writing",
        "Writing without planning",
        "Using only simple sentences",
        "Avoiding revisions"
      ],
      correctAnswer: "Creating an outline before writing"
    },
    {
      questionText: "What is the stress pattern for 'communication'?",
      options: [
        "COM-mu-ni-ca-tion",
        "com-MU-ni-ca-tion",
        "com-mu-ni-CA-tion",
        "com-mu-ni-ca-TION"
      ],
      correctAnswer: "com-mu-ni-ca-TION"
    },
    {
      questionText: "Which of the following is a function of ICT in modern language learning?",
      options: [
        "Enhancing interactive learning",
        "Removing the need for teachers",
        "Focusing only on grammar rules",
        "Replacing books entirely"
      ],
      correctAnswer: "Enhancing interactive learning"
    },
    {
      questionText: "What is the silent letter in 'knock'?",
      options: [
        "C",
        "N",
        "O",
        "K"
      ],
      correctAnswer: "K"
    },
    {
      questionText: "Which of these is a key feature of adverbial clauses?",
      options: [
        "Theyalways start with a relative pronoun.",
        "They replace nouns in a sentence.",
        "They describe how, when, where, or why something happens.",
        "They stand alone as independent clauses."
      ],
      correctAnswer: "They describe how, when, where, or why something happens."
    },
    {
      questionText: "What is an effective reading comprehension strategy?",
      options: [
        "Reading without pause",
        "Predicting the content based on the title",
        "Skipping unfamiliar sections",
        "Focusing only on the last paragraph"
      ],
      correctAnswer: "Predicting the content based on the title"
    },
    {
      questionText: "Identify the type of clause: 'The book that I borrowed is on the table.'",
      options: [
        "Relative clause",
        "Adverbial clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "Which sentence demonstrates alliteration?",
      options: [
        "The quick brown fox umps over the lazy dog",
        "The light of the fire is a sight.",
        "Bright stars in the sky.",
        "She sells seashells by the seashore."
      ],
      correctAnswer: "She sells seashells by the seashore."
    },
    {
      questionText: "Which tool is an example of ICT in language learning?",
      options: [
        "Chalkboards",
        "Paper dictionaries",
        "Language learning apps",
        "Printed books"
      ],
      correctAnswer: "Language learning apps"
    },
    {
      questionText: "Identify the type of clause: 'If you study hard, you will succeed.'",
      options: [
        "Relative clause",
        "Adverbial clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What is the silent letter in 'write'?",
      options: [
        "W",
        "R",
        "T",
        "E"
      ],
      correctAnswer: "W"
    },
    {
      questionText: "Which strategy is useful for improving writing skills?",
      options: [
        "Revising and editing drafts",
        "Writing without planning",
        "Avoiding feedback",
        "Ignoring grammar rules"
      ],
      correctAnswer: "Revising and editing drafts"
    },
    {
      questionText: "What is the rhyme for 'breeze'?",
      options: [
        "Please",
        "Freeze",
        "Tease",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    },
    {
      questionText: "Which of these demonstrates an assonance?",
      options: [
        "Bright night in the sky",
        "Peter Piper picked a peck",
        "The boy bought big boots",
        "She sells seashells by the seashore"
      ],
      correctAnswer: "Bright night in the sky"
    },
    {
      questionText: "Which is an example of a homophone?",
      options: [
        "Run and sun",
        "Dog and bog",
        "Cat and hat",
        "Flower and flour"
      ],
      correctAnswer: "Flower and flour"
    },
    {
      questionText: "What is the role of ICT in modern language learning?",
      options: [
        "Focusing on traditional books",
        "Eliminating grammar studies",
        "Facilitating multimedia interaction",
        "Skipping speaking practices"
      ],
      correctAnswer: "Facilitating multimedia interaction"
    },
    {
      questionText: "Identify the type of clause: 'What she said was surprising.'",
      options: [
        "Relative clause",
        "Adverbial clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "Which of these is a silent letter in 'debt'?",
      options: [
        "B",
        "D",
        "E",
        "T"
      ],
      correctAnswer: "B"
    },
    {
      questionText: "Which vowel sound matches 'heat'?",
      options: [
        "Bit",
        "Hat",
        "Hot",
        "Meet"
      ],
      correctAnswer: "Meet"
    },
    {
      questionText: "What is the main function of a relative clause?",
      options: [
        "To provide additional information about a verb",
        "To describe an action",
        "To modify a noun",
        "To act as an independent clause"
      ],
      correctAnswer: "To modify a noun"
    },
    {
      questionText: "Which is an effective strategy for improving reading comprehension?",
      options: [
        "Skipping sections with difficult vocalbulary",
        "Highlighting key points while reading",
        "Reading only the introduction and conclusion",
        "Avoiding note-taking"
      ],
      correctAnswer: "Highlighting key points while reading"
    },
    {
      questionText: "What is the stress pattern of 'information'?",
      options: [
        "IN-for-ma-tion",
        "in-FOR-ma-tion",
        "in-for-MA-tion",
        "in-for-ma-TION"
      ],
      correctAnswer: "in-for-ma-TION"
    },
    {
      questionText: "What is the silent letter in 'honest'?",
      options: [
        "E",
        "O",
        "N",
        "H"
      ],
      correctAnswer: "H"
    },
    {
      questionText: "Identify the type of clause: 'Because he was late, he missed the train.'",
      options: [
        "Relative clause",
        "Noun clause",
        "Adverbial clause",
        "Independent clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "Which ICT tool helps in collaborative language learning?",
      options: [
        "Printed textbooks",
        "Online discussion forums",
        "Paper dictionaries",
        "Lecture halls"
      ],
      correctAnswer: "Online discussion forums"
    },
    {
      questionText: "Which of these is a homophone?",
      options: [
        "To, too, two",
        "Write, right",
        "There, their, they're",
        "All of the above"
      ],
      correctAnswer: "All of the above"
    },
    {
      questionText: "Which strategy helps in effective writing?",
      options: [
        "Ignoring audience expectations",
        "Writing without proofreading",
        "Organizing ideas before starting",
        "Using only one type of sentence structure"
      ],
      correctAnswer: "Organizing ideas before starting"
    },
    {
      questionText: "What is the primary goal of reading comprehension strategies?",
      options: [
        "To read as fast as possible",
        "To understand and retain information",
        "To skip difficult sections",
        "To memorize the text"
      ],
      correctAnswer: "To understand and retain information"
    },
    {
      questionText: "Identify the type of clause: 'The man who lives next door is a doctor.'",
      options: [
        "Independent clause",
        "Adverbial clause",
        "Noun clause",
        "Relative clause"
      ],
      correctAnswer: "Relative clause"
    },
    {
      questionText: "What is the role of ICT in language learning?",
      options: [
        "Replacing all traditional methods",
        "Eliminating the need for teachers",
        "Facilitating access to diverse resources",
        "Limiting interaction to face-to-face"
      ],
      correctAnswer: "Facilitating access to diverse resources"
    },
    {
      questionText: "What is the silent letter in 'knife'?",
      options: [
        "N",
        "K",
        "I",
        "F"
      ],
      correctAnswer: "K"
    },
    {
      questionText: "Which reading strategy involves forming an overall understanding of the text?",
      options: [
        "Annotating",
        "Scanning",
        "Highlighting",
        "Skimming"
      ],
      correctAnswer: "Skimming"
    },
    {
      questionText: "What type of clause is this: 'Whatever you decide is fine with me.'?",
      options: [
        "Relative clause",
        "Adverbial clause",
        "Noun clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "Which of the following is an example of ICT in modern education?",
      options: [
        "Whiteboards",
        "Virtual classrooms",
        "Printed books",
        "Lecture notes"
      ],
      correctAnswer: "Virtual classrooms"
    },
    {
      questionText: "What is the silent letter in 'psychology'?",
      options: [
        "Y",
        "S",
        "C",
        "P"
      ],
      correctAnswer: "P"
    },
    {
      questionText: "What is an effective strategy for summarizing a text?",
      options: [
        "Memorizing word for word",
        "Copying full sentences",
        "Skipping complex ideas",
        "Focusing on key points"
      ],
      correctAnswer: "Focusing on key points"
    },
    {
      questionText: "Identify the type of clause: 'She stayed home because she was feeling sick.'",
      options: [
        "Independent Clause",
        "Noun clause",
        "Relative clause",
        "Adverbial clause"
      ],
      correctAnswer: "Adverbial clause"
    },
    {
      questionText: "What does ICT stand for?",
      options: [
        "Integrated Computer Training",
        "Information and Communication Technology",
        "International Communication Tools",
        "Internet Connection Technology"
      ],
      correctAnswer: "Information and Communication Technology"
    },
    {
      questionText: "Which is an example of assonance?",
      options: [
        "She sells seashells at the seashore",
        "Peter Piper picked a peck of pickled peppers.",
        "She sells seashells by the seashore.",
        "Bright stars shine in the night."
      ],
      correctAnswer: "The light of the fire is a sight."
    },
    {
      questionText: "Identify the type of clause: 'It is important that you finish your homework.'",
      options: [
        "Noun clause",
        "Adverbial clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "What is the silent letter in 'half'?",
      options: [
        "L",
        "H",
        "A",
        "F"
      ],
      correctAnswer: "L"
    },
    {
      questionText: "Which tool is widely used in ICT for learning languages?",
      options: [
        "Language learning apps",
        "Typewriters",
        "Handwritten notes",
        "Bulletin boards"
      ],
      correctAnswer: "Language learning apps"
    },
    {
      questionText: "What is a key purpose of grammar in communication?",
      options: [
        "Ensuring clarity and precision",
        "Making sentences longer",
        "Focusing only on vocabulary",
        "Avoiding punctuation"
      ],
      correctAnswer: "Ensuring clarity and precision"
    },
    {
      questionText: "Which reading strategy helps locate specific information quickly?",
      options: [
        "Scanning",
        "Skimming",
        "Annotating",
        "Highlighting"
      ],
      correctAnswer: "Scanning"
    },
    {
      questionText: "Identify the type of clause: 'The fact that he apologized made her forgive him.'",
      options: [
        "Noun clause",
        "Adverbial clause",
        "Relative clause",
        "Independent clause"
      ],
      correctAnswer: "Noun clause"
    },
    {
      questionText: "What is the stress pattern of 'education'?",
      options: [
        "ED-u-ca-tion",
        "ed-U-CA-tion",
        "ed-u-CA-tion",
        "ed-u-ca-TION"
      ],
      correctAnswer: "ed-u-ca-TION"
    },
    {
      questionText: "What is the silent letter in 'plumber'?",
      options: [
        "B",
        "P",
        "L",
        "E"
      ],
      correctAnswer: "B"
    },
    {
      questionText: "What is the main function of an adverbial clause?",
      options: [
        "To modify a verb or provide context",
        "To act as the subject of a sentence",
        "To define a noun",
        "To provide a standalone idea"
      ],
      correctAnswer: "To modify a verb or provide context"
    },
    {
      questionText: "Which ICT tool is useful for practicing pronunciation?",
      options: [
        "Speech recognition software",
        "Traditional textbooks",
        "Printed dictionaries",
        "Handwritten notes"
      ],
      correctAnswer: "Speech recognition software"
    }
      ];

  const LGQuestions=[
      {
        questionText: "What is a logic gate?",
        options: [
          "A component that performs a mathematical operation",
          "A device that performs a logical operation",
          "A device that stores data",
          "A component that connects two circuits"
        ],
        correctAnswer: "A device that performs a logical operation"
      },
      {
        questionText: "Which of the following is NOT a basic logic gate?",
        options: [
          "AND",
          "OR",
          "NOT",
          "ADD"
        ],
        correctAnswer: "ADD"
      },
      {
        questionText: "What is an AND gate?",
        options: [
          "A gate that outputs true if at least one input is true",
          "A gate that outputs true only if both inputs are true",
          "A gate that outputs false if at least one input is true",
          "A gate that reverses the input signal"
        ],
        correctAnswer: "A gate that outputs true only if both inputs are true"
      },
      {
        questionText: "What is an OR gate?",
        options: [
          "A gate that outputs true only if both inputs are false",
          "A gate that outputs true if at least one input is true",
          "A gate that outputs true if both inputs are true",
          "A gate that reverses the input signal"
        ],
        correctAnswer: "A gate that outputs true if at least one input is true"
      },
      {
        questionText: "What is a NOT gate?",
        options: [
          "A gate that outputs the same value as the input",
          "A gate that inverts the input signal",
          "A gate that performs a binary addition",
          "A gate that multiplies binary numbers"
        ],
        correctAnswer: "A gate that inverts the input signal"
      },
      {
        questionText: "What is a NAND gate?",
        options: [
          "A gate that is the opposite of AND",
          "A gate that performs a NOT operation on the output of an AND gate",
          "A gate that is the same as an OR gate",
          "A gate that outputs true only when all inputs are true"
        ],
        correctAnswer: "A gate that is the opposite of AND"
      },
      {
        questionText: "What is a NOR gate?",
        options: [
          "A gate that is the opposite of OR",
          "A gate that is the same as an AND gate",
          "A gate that outputs false if both inputs are false",
          "A gate that outputs true only when all inputs are true"
        ],
        correctAnswer: "A gate that is the opposite of OR"
      },
      {
        questionText: "What is an XOR gate?",
        options: [
          "A gate that outputs true if exactly one input is true",
          "A gate that outputs true only when both inputs are true",
          "A gate that outputs false if both inputs are true",
          "A gate that reverses the input signal"
        ],
        correctAnswer: "A gate that outputs true if exactly one input is true"
      },
      {
        questionText: "What is an XNOR gate?",
        options: [
          "A gate that outputs true if the inputs are the same",
          "A gate that outputs false if both inputs are true",
          "A gate that outputs true if both inputs are false",
          "A gate that inverts the input signal"
        ],
        correctAnswer: "A gate that outputs true if the inputs are the same"
      },
      {
        questionText: "What is the truth table for an AND gate?",
        options: [
          "0, 0, 0",
          "1, 1, 0",
          "0, 1, 1",
          "1, 1, 1"
        ],
        correctAnswer: "1, 1, 1"
      },
      {
        questionText: "What is the truth table for an OR gate?",
        options: [
          "0, 0, 0",
          "1, 1, 1",
          "1, 0, 1",
          "0, 0, 1"
        ],
        correctAnswer: "1, 0, 1"
      },
      {
        questionText: "What is the truth table for a NOT gate?",
        options: [
          "1, 0",
          "0, 1",
          "1, 1",
          "0, 0"
        ],
        correctAnswer: "1, 0"
      },
      {
        questionText: "What is the truth table for a NAND gate?",
        options: [
          "1, 0",
          "0, 1",
          "0, 0",
          "1, 1"
        ],
        correctAnswer: "1, 0"
      },
      {
        questionText: "What is the truth table for a NOR gate?",
        options: [
          "1, 0",
          "0, 1",
          "0, 0",
          "1, 1"
        ],
        correctAnswer: "0, 1"
      },
      {
        questionText: "What is the truth table for an XOR gate?",
        options: [
          "0, 0, 0",
          "1, 0, 1",
          "0, 1, 1",
          "1, 1, 0"
        ],
        correctAnswer: "1, 0, 1"
      },
      {
        questionText: "What is the truth table for an XNOR gate?",
        options: [
          "1, 1, 1",
          "0, 0, 0",
          "1, 1, 0",
          "1, 0, 1"
        ],
        correctAnswer: "1, 1, 1"
      },
      {
        questionText: "Which gate is considered a universal gate?",
        options: [
          "AND",
          "OR",
          "NAND",
          "XOR"
        ],
        correctAnswer: "NAND"
      },
      {
        questionText: "How can you implement an OR gate using only NAND gates?",
        options: [
          "By connecting two NAND gates in parallel",
          "By inverting the inputs of the NAND gate",
          "By connecting the output of a NAND gate to the input of another",
          "By connecting inputs to a single NAND gate"
        ],
        correctAnswer: "By inverting the inputs of the NAND gate"
      },
      {
        questionText: "How can you implement a NOT gate using only NAND gates?",
        options: [
          "By using a single NAND gate with both inputs connected together",
          "By connecting two NAND gates in series",
          "By connecting the output of an AND gate to a NOT gate",
          "By using a series of XOR gates"
        ],
        correctAnswer: "By using a single NAND gate with both inputs connected together"
      },
      {
        questionText: "What is the symbol for an AND gate in a circuit diagram?",
        options: [
          "A circle with a flat edge",
          "A D-shaped symbol",
          "A triangle with a line at the output",
          "A rectangle with a curved line"
        ],
        correctAnswer: "A D-shaped symbol"
      },
      {
        questionText: "What is the symbol for an OR gate in a circuit diagram?",
        options: [
          "A triangle with a line at the output",
          "A D-shaped symbol",
          "A circle with a flat edge",
          "A rectangle with a curved line"
        ],
        correctAnswer: "A rectangle with a curved line"
      },
      {
        questionText: "What is the symbol for a NOT gate in a circuit diagram?",
        options: [
          "A triangle with a small circle at the output",
          "A D-shaped symbol",
          "A rectangle with a curved line",
          "A circle with a flat edge"
        ],
        correctAnswer: "A triangle with a small circle at the output"
      },
      {
        questionText: "What is the symbol for a NAND gate in a circuit diagram?",
        options: [
          "A rectangle with a curved line",
          "A circle with a small circle at the output",
          "A D-shaped symbol with a small circle at the output",
          "A triangle with a small circle at the output"
        ],
        correctAnswer: "A D-shaped symbol with a small circle at the output"
      },
      {
        questionText: "What is the symbol for a NOR gate in a circuit diagram?",
        options: [
          "A circle with a small circle at the output",
          "A rectangle with a curved line",
          "A triangle with a small circle at the output",
          "A D-shaped symbol with a small circle at the output"
        ],
        correctAnswer: "A circle with a small circle at the output"
      },
      {
        questionText: "What is the symbol for an XOR gate in a circuit diagram?",
        options: [
          "A D-shaped symbol with an additional curve on the input side",
          "A triangle with a small circle at the output",
          "A rectangle with a curved line",
          "A circle with a flat edge"
        ],
        correctAnswer: "A D-shaped symbol with an additional curve on the input side"
      },
      {
        questionText: "What is the symbol for an XNOR gate in a circuit diagram?",
        options: [
          "A D-shaped symbol with an additional curve on the input side and a small circle at the output",
          "A rectangle with a curved line",
          "A circle with a flat edge",
          "A triangle with a small circle at the output"
        ],
        correctAnswer: "A D-shaped symbol with an additional curve on the input side and a small circle at the output"
      },
      {
        questionText: "What is a half-adder using logic gates?",
        options: [
          "A circuit that adds two binary digits, producing a sum and a carry",
          "A circuit that performs binary subtraction",
          "A circuit that multiplies binary numbers",
          "A circuit that outputs the XOR of two inputs"
        ],
        correctAnswer: "A circuit that adds two binary digits, producing a sum and a carry"
      },
      {
        questionText: "What are the inputs and outputs of a full adder?",
        options: [
          "Two inputs, a sum, and a carry",
          "Three inputs, a sum, and a carry",
          "Two inputs, two sums, and a carry",
          "One input and a sum"
        ],
        correctAnswer: "Three inputs, a sum, and a carry"
      },
      {
        questionText: "How do logic gates perform binary arithmetic?",
        options: [
          "By performing logical operations like AND, OR, and NOT",
          "By performing multiplication and addition",
          "By reversing binary digits",
          "By adding carry values only"
        ],
        correctAnswer: "By performing logical operations like AND, OR, and NOT"
      },
      {
        questionText: "What is a truth table?",
        options: [
          "A table that describes the binary operations of a circuit",
          "A list of all possible inputs and outputs for a circuit",
          "A table of all available gates",
          "A circuit diagram"
        ],
        correctAnswer: "A list of all possible inputs and outputs for a circuit"
      },
      {
        questionText: "How can you simplify a logic gate circuit using Boolean algebra?",
        options: [
          "By reducing the number of gates needed",
          "By removing redundant gates",
          "By combining similar gates",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        questionText: "How does the output of an AND gate change if one input is false?",
        options: [
          "The output becomes false",
          "The output stays true",
          "The output becomes undefined",
          "The output inverts"
        ],
        correctAnswer: "The output becomes false"
      },
      {
        questionText: "How does the output of an OR gate change if one input is true?",
        options: [
          "The output becomes true",
          "The output stays false",
          "The output becomes undefined",
          "The output inverts"
        ],
        correctAnswer: "The output becomes true"
      },
        {
          questionText: "What does a NOT gate output when the input is true?",
          options: [
            "True",
            "False",
            "Null",
            "Inverted true"
          ],
          correctAnswer: "False"
        },
        {
          questionText: "Which gate produces an output of 1 when both inputs are different?",
          options: [
            "AND",
            "OR",
            "XOR",
            "NAND"
          ],
          correctAnswer: "XOR"
        },
        {
          questionText: "Which gate is known as the 'invertor' gate?",
          options: [
            "AND",
            "OR",
            "NOT",
            "NAND"
          ],
          correctAnswer: "NOT"
        },
        {
          questionText: "How can you create a full adder using basic gates?",
          options: [
            "By combining AND, OR, and XOR gates",
            "By using only OR gates",
            "By using only AND gates",
            "By using XOR gates only"
          ],
          correctAnswer: "By combining AND, OR, and XOR gates"
        },
        {
          questionText: "Which gate is used to combine the outputs of two inputs for a logical decision?",
          options: [
            "OR",
            "AND",
            "NOT",
            "XOR"
          ],
          correctAnswer: "OR"
        },
        {
          questionText: "What is the result of an AND gate with inputs 1 and 0?",
          options: [
            "1",
            "0",
            "True",
            "False"
          ],
          correctAnswer: "0"
        },
        {
          questionText: "What is the result of an OR gate with inputs 0 and 0?",
          options: [
            "1",
            "0",
            "True",
            "False"
          ],
          correctAnswer: "0"
        },
        {
          questionText: "How can you implement an AND gate using only NOR gates?",
          options: [
            "By connecting inputs to NOR gates and inverting outputs",
            "By using a single NOR gate",
            "By using two OR gates",
            "By using an XOR gate"
          ],
          correctAnswer: "By connecting inputs to NOR gates and inverting outputs"
        },
        {
          questionText: "What is the effect of applying the NOT operation twice?",
          options: [
            "It inverts the output",
            "It reverses the input signal",
            "It results in the original input",
            "It produces a new result"
          ],
          correctAnswer: "It results in the original input"
        },
        {
          questionText: "Which gate can be used to create a flip-flop?",
          options: [
            "AND",
            "OR",
            "NAND",
            "NOT"
          ],
          correctAnswer: "NAND"
        }      
  ]
  const HistoryOCQuestions=[
      {
        questionText: "Who is known as the 'father of computers'?",
        options: [
          "Charles Babbage",
          "Alan Turing",
          "John von Neumann",
          "Bill Gates"
        ],
        correctAnswer: "Charles Babbage"
      },
      {
        questionText: "What is the name of the first mechanical computer designed by Charles Babbage?",
        options: [
          "The Analytical Engine",
          "The Turing Machine",
          "The Difference Engine",
          "The ENIAC"
        ],
        correctAnswer: "The Difference Engine"
      },
      {
        questionText: "What did the abacus, developed in ancient times, help humans with?",
        options: [
          "Mechanical calculations",
          "Programming",
          "Arithmetic",
          "Sorting data"
        ],
        correctAnswer: "Arithmetic"
      },
      {
        questionText: "In which century was the first digital computer, the ENIAC, created?",
        options: [
          "19th century",
          "20th century",
          "18th century",
          "21st century"
        ],
        correctAnswer: "20th century"
      },
      {
        questionText: "Who is credited with the development of the Turing Machine?",
        options: [
          "Alan Turing",
          "Charles Babbage",
          "John von Neumann",
          "Tim Berners-Lee"
        ],
        correctAnswer: "Alan Turing"
      },
      {
        questionText: "What was the primary function of the ENIAC?",
        options: [
          "To perform complex calculations",
          "To store large amounts of data",
          "To develop graphics",
          "To control machines"
        ],
        correctAnswer: "To perform complex calculations"
      },
      {
        questionText: "What does the acronym 'ENIAC' stand for?",
        options: [
          "Electronic Numerical Integrator and Computer",
          "Electronic Networked Integrated Arithmetic Computation",
          "Electric Numerical Intelligence and Computational",
          "Engineered Numerical Integrated Computing"
        ],
        correctAnswer: "Electronic Numerical Integrator and Computer"
      },
      {
        questionText: "Which computer is regarded as the first programmable computer?",
        options: [
          "The Analytical Engine",
          "The Turing Machine",
          "The ENIAC",
          "The UNIVAC"
        ],
        correctAnswer: "The Analytical Engine"
      },
      {
        questionText: "When was the first computer virus created?",
        options: [
          "In the 1950s",
          "In the 1970s",
          "In the 1990s",
          "In the 1980s"
        ],
        correctAnswer: "In the 1980s"
      },
      {
        questionText: "What year was the World Wide Web (WWW) invented?",
        options: [
          "1980",
          "1991",
          "1995",
          "2000"
        ],
        correctAnswer: "1991"
      },
      {
        questionText: "Who invented the World Wide Web?",
        options: [
          "Bill Gates",
          "Alan Turing",
          "Tim Berners-Lee",
          "Vint Cerf"
        ],
        correctAnswer: "Tim Berners-Lee"
      },
      {
        questionText: "In which decade was the first personal computer introduced?",
        options: [
          "1960s",
          "1970s",
          "1980s",
          "1990s"
        ],
        correctAnswer: "1970s"
      },
      {
        questionText: "What was the name of the first personal computer?",
        options: [
          "Apple I",
          "IBM PC",
          "Commodore 64",
          "Altair 8800"
        ],
        correctAnswer: "Altair 8800"
      },
      {
        questionText: "Which company introduced the first successful personal computer?",
        options: [
          "IBM",
          "Microsoft",
          "Apple",
          "Compaq"
        ],
        correctAnswer: "Apple"
      },
      {
        questionText: "Which generation of computers introduced integrated circuits?",
        options: [
          "First generation",
          "Second generation",
          "Third generation",
          "Fourth generation"
        ],
        correctAnswer: "Third generation"
      },
      {
        questionText: "When was the first version of Microsoft Windows released?",
        options: [
          "1983",
          "1985",
          "1990",
          "1995"
        ],
        correctAnswer: "1985"
      },
      {
        questionText: "What is the primary function of an operating system?",
        options: [
          "To connect to the internet",
          "To perform calculations",
          "To manage computer hardware and software resources",
          "To run specific applications"
        ],
        correctAnswer: "To manage computer hardware and software resources"
      },
      {
        questionText: "What does the acronym 'CPU' stand for?",
        options: [
          "Central Processing Unit",
          "Central Program Unit",
          "Computer Power Unit",
          "Control Processing Unit"
        ],
        correctAnswer: "Central Processing Unit"
      },
      {
        questionText: "Who invented the first computer mouse?",
        options: [
          "Tim Berners-Lee",
          "Douglas Engelbart",
          "Alan Turing",
          "Steve Jobs"
        ],
        correctAnswer: "Douglas Engelbart"
      },
      {
        questionText: "What year did Apple release the first Macintosh computer?",
        options: [
          "1981",
          "1984",
          "1990",
          "1995"
        ],
        correctAnswer: "1984"
      },
      {
        questionText: "What was the first commercially successful computer language?",
        options: [
          "Fortran",
          "C",
          "Basic",
          "Python"
        ],
        correctAnswer: "Fortran"
      },
      {
        questionText: "What does the term 'microprocessor' refer to?",
        options: [
          "A type of memory chip",
          "The primary storage device",
          "The central unit of a computer that performs instructions",
          "The software that runs the computer"
        ],
        correctAnswer: "The central unit of a computer that performs instructions"
      },
      {
        questionText: "Which company introduced the first laptop computer?",
        options: [
          "Apple",
          "IBM",
          "Compaq",
          "Microsoft"
        ],
        correctAnswer: "Compaq"
      },
      {
        questionText: "What was the first electronic computer ever built?",
        options: [
          "The ENIAC",
          "The UNIVAC",
          "The Turing Machine",
          "The Colossus"
        ],
        correctAnswer: "The Colossus"
      },
      {
        questionText: "In what year was the first successful email sent?",
        options: [
          "1970",
          "1980",
          "1990",
          "2000"
        ],
        correctAnswer: "1970"
      },
      {
        questionText: "What was the name of the first computer bug?",
        options: [
          "The First Glitch",
          "The Dead Loop",
          "The 404 Error",
          "The Computer Moth"
        ],
        correctAnswer: "The Computer Moth"
      },
      {
        questionText: "What was the first widely used web browser?",
        options: [
          "Mosaic",
          "Netscape Navigator",
          "Internet Explorer",
          "Safari"
        ],
        correctAnswer: "Mosaic"
      },
      {
        questionText: "What year was the first iPhone released?",
        options: [
          "2005",
          "2007",
          "2010",
          "2012"
        ],
        correctAnswer: "2007"
      },
      {
        questionText: "What was the name of the first widely used computer operating system?",
        options: [
          "Windows",
          "UNIX",
          "MS-DOS",
          "Apple OS"
        ],
        correctAnswer: "MS-DOS"
      },
      {
        questionText: "What is the significance of the year 1945 in computing?",
        options: [
          "The first computer virus was created",
          "The ENIAC was completed",
          "The first personal computer was sold",
          "The Turing machine was invented"
        ],
        correctAnswer: "The ENIAC was completed"
      },
      {
        questionText: "Who developed the first successful spreadsheet software, VisiCalc?",
        options: [
          "Bill Gates",
          "Dan Bricklin",
          "Steve Jobs",
          "John McCarthy"
        ],
        correctAnswer: "Dan Bricklin"
      },
      {
        questionText: "Which was the first fully electronic computer?",
        options: [
          "The Colossus",
          "The ENIAC",
          "The Turing Machine",
          "The UNIVAC"
        ],
        correctAnswer: "The ENIAC"
      },
      {
        questionText: "What was the main use of the UNIVAC computer?",
        options: [
          "Calculating complex mathematical problems",
          "Commercial business applications",
          "Running scientific experiments",
          "Entertainment"
        ],
        correctAnswer: "Commercial business applications"
      },
      {
        questionText: "When did the first computer mouse become widely used?",
        options: [
          "1950s",
          "1960s",
          "1970s",
          "1980s"
        ],
        correctAnswer: "1970s"
      },
      {
        questionText: "What is the purpose of the 'Motherboard' in a computer?",
        options: [
          "To store all data",
          "To power the computer",
          "To connect all components",
          "To handle all inputs"
        ],
        correctAnswer: "To connect all components"
      },
      {
        questionText: "Which was the first computer programming language?",
        options: [
          "Fortran",
          "C",
          "Assembly",
          "Lisp"
        ],
        correctAnswer: "Assembly"
      },
      {
        questionText: "Which company created the first commercially successful operating system?",
        options: [
          "Microsoft",
          "Apple",
          "IBM",
          "Sun Microsystems"
        ],
        correctAnswer: "Microsoft"
      },
      {
        questionText: "What was the first internet search engine?",
        options: [
          "Yahoo!",
          "Google",
          "AltaVista",
          "Bing"
        ],
        correctAnswer: "AltaVista"
      },
      {
        questionText: "Which was the first personal computer to use a graphical user interface (GUI)?",
        options: [
          "Apple Macintosh",
          "IBM PC",
          "Compaq",
          "Atari ST"
        ],
        correctAnswer: "Apple Macintosh"
      },
      {
        questionText: "Which year did the first version of Windows 95 release?",
        options: [
          "1993",
          "1995",
          "1997",
          "2000"
        ],
        correctAnswer: "1995"
      }    
  ]
  const ComponentOCQuestions=[
      {
        questionText: "What is the primary function of the CPU in a computer?",
        options: [
          "To perform calculations",
          "To store data",
          "To provide power",
          "To display graphics"
        ],
        correctAnswer: "To perform calculations"
      },
      {
        questionText: "Which component is known as the 'brain' of the computer?",
        options: [
          "Motherboard",
          "CPU",
          "RAM",
          "Hard drive"
        ],
        correctAnswer: "CPU"
      },
      {
        questionText: "What does RAM stand for?",
        options: [
          "Random Access Memory",
          "Read Access Memory",
          "Read-Only Memory",
          "Rapid Access Memory"
        ],
        correctAnswer: "Random Access Memory"
      },
      {
        questionText: "What is the function of the motherboard in a computer?",
        options: [
          "To store data",
          "To control the power supply",
          "To connect all components together",
          "To perform calculations"
        ],
        correctAnswer: "To connect all components together"
      },
      {
        questionText: "Which of the following is a type of storage device?",
        options: [
          "CPU",
          "Motherboard",
          "RAM",
          "Hard Drive"
        ],
        correctAnswer: "Hard Drive"
      },
      {
        questionText: "What is the primary function of the power supply unit (PSU)?",
        options: [
          "To provide power to all components",
          "To store data",
          "To process data",
          "To manage input devices"
        ],
        correctAnswer: "To provide power to all components"
      },
      {
        questionText: "Which of these is an example of a peripheral device?",
        options: [
          "CPU",
          "RAM",
          "Keyboard",
          "Motherboard"
        ],
        correctAnswer: "Keyboard"
      },
      {
        questionText: "Which component of a computer is responsible for displaying graphics?",
        options: [
          "Motherboard",
          "Graphics card",
          "RAM",
          "Power supply"
        ],
        correctAnswer: "Graphics card"
      },
      {
        questionText: "What type of device is a printer?",
        options: [
          "Input device",
          "Output device",
          "Storage device",
          "Processing device"
        ],
        correctAnswer: "Output device"
      },
      {
        questionText: "What does BIOS stand for?",
        options: [
          "Basic Integrated Operating System",
          "Basic Input Output System",
          "Basic Internal Operating System",
          "Binary Integrated Operating System"
        ],
        correctAnswer: "Basic Input Output System"
      },
      {
        questionText: "What is the role of a heat sink in a computer?",
        options: [
          "To increase power",
          "To manage data storage",
          "To cool down the CPU or GPU",
          "To store data"
        ],
        correctAnswer: "To cool down the CPU or GPU"
      },
      {
        questionText: "Which type of memory is volatile?",
        options: [
          "Hard Drive",
          "RAM",
          "ROM",
          "CD-ROM"
        ],
        correctAnswer: "RAM"
      },
      {
        questionText: "Which of the following is used to connect a computer to the internet?",
        options: [
          "Sound card",
          "Graphics card",
          "Network card",
          "Motherboard"
        ],
        correctAnswer: "Network card"
      },
      {
        questionText: "What is the function of the power supply unit (PSU)?",
        options: [
          "To control the fan speed",
          "To provide power to components",
          "To process data",
          "To store data"
        ],
        correctAnswer: "To provide power to components"
      },
      {
        questionText: "What does a hard drive do?",
        options: [
          "Stores data permanently",
          "Displays images",
          "Provides power",
          "Manages input devices"
        ],
        correctAnswer: "Stores data permanently"
      },
      {
        questionText: "What is the function of the video card (GPU)?",
        options: [
          "To process graphics and display them on the screen",
          "To store large amounts of data",
          "To connect to the internet",
          "To manage user input"
        ],
        correctAnswer: "To process graphics and display them on the screen"
      },
      {
        questionText: "What type of device is a scanner?",
        options: [
          "Input device",
          "Output device",
          "Storage device",
          "Processing device"
        ],
        correctAnswer: "Input device"
      },
      {
        questionText: "What does a motherboard do?",
        options: [
          "Stores data",
          "Controls the airflow",
          "Connects and communicates between all components",
          "Displays graphics"
        ],
        correctAnswer: "Connects and communicates between all components"
      },
      {
        questionText: "What is the primary purpose of a CPU fan?",
        options: [
          "To cool down the CPU",
          "To increase the clock speed",
          "To control the power supply",
          "To process data"
        ],
        correctAnswer: "To cool down the CPU"
      },
      {
        questionText: "What is the function of a sound card?",
        options: [
          "To display graphics",
          "To store data",
          "To process sound signals",
          "To manage input devices"
        ],
        correctAnswer: "To process sound signals"
      },
      {
        questionText: "Which of the following is NOT a common input device?",
        options: [
          "Keyboard",
          "Mouse",
          "Printer",
          "Scanner"
        ],
        correctAnswer: "Printer"
      },
      {
        questionText: "What is the primary function of RAM?",
        options: [
          "To store data permanently",
          "To process data",
          "To store temporary data for fast access",
          "To provide power"
        ],
        correctAnswer: "To store temporary data for fast access"
      },
      {
        questionText: "Which of the following is a storage device?",
        options: [
          "Mouse",
          "Keyboard",
          "Monitor",
          "Hard Drive"
        ],
        correctAnswer: "Hard Drive"
      },
      {
        questionText: "Which type of computer memory is non-volatile?",
        options: [
          "RAM",
          "ROM",
          "Cache",
          "Registers"
        ],
        correctAnswer: "ROM"
      },
      {
        questionText: "Which port is commonly used to connect printers to a computer?",
        options: [
          "USB",
          "HDMI",
          "VGA",
          "Audio jack"
        ],
        correctAnswer: "USB"
      },
      {
        questionText: "Which of the following is an example of an external storage device?",
        options: [
          "RAM",
          "SSD",
          "Hard drive",
          "USB flash drive"
        ],
        correctAnswer: "USB flash drive"
      },
      {
        questionText: "What does the GPU stand for?",
        options: [
          "Graphics Processing Unit",
          "General Purpose Unit",
          "General Processing Unit",
          "Graphics Power Unit"
        ],
        correctAnswer: "Graphics Processing Unit"
      },
      {
        questionText: "What type of memory is used in USB flash drives?",
        options: [
          "RAM",
          "ROM",
          "Flash memory",
          "Cache memory"
        ],
        correctAnswer: "Flash memory"
      },
      {
        questionText: "Which of these is a type of output device?",
        options: [
          "Keyboard",
          "Monitor",
          "Scanner",
          "Microphone"
        ],
        correctAnswer: "Monitor"
      },
      {
        questionText: "Which component of the computer is responsible for temporary data storage?",
        options: [
          "Hard drive",
          "RAM",
          "Graphics card",
          "Power supply"
        ],
        correctAnswer: "RAM"
      },
      {
        questionText: "What does the acronym 'USB' stand for?",
        options: [
          "Universal Serial Bus",
          "Universal System Bus",
          "Unified Service Bus",
          "United Serial Bus"
        ],
        correctAnswer: "Universal Serial Bus"
      },
      {
        questionText: "What is the purpose of a network interface card (NIC)?",
        options: [
          "To connect a computer to the internet",
          "To manage input devices",
          "To process graphics",
          "To store data"
        ],
        correctAnswer: "To connect a computer to the internet"
      },
      {
        questionText: "What is the purpose of a monitor?",
        options: [
          "To input data",
          "To output data",
          "To store data",
          "To process data"
        ],
        correctAnswer: "To output data"
      },
      {
        questionText: "What is the function of an optical drive?",
        options: [
          "To input data",
          "To process data",
          "To read and write CDs, DVDs, and Blu-ray disks",
          "To store data"
        ],
        correctAnswer: "To read and write CDs, DVDs, and Blu-ray disks"
      },
      {
        questionText: "What is the purpose of the power supply unit?",
        options: [
          "To convert AC power to DC power",
          "To process input signals",
          "To display data",
          "To control fan speed"
        ],
        correctAnswer: "To convert AC power to DC power"
      },
      {
        questionText: "Which device is commonly used for external backup storage?",
        options: [
          "CD-ROM",
          "External hard drive",
          "Scanner",
          "Keyboard"
        ],
        correctAnswer: "External hard drive"
      },
      {
        questionText: "Which device is used to control the movement of the cursor on the screen?",
        options: [
          "Keyboard",
          "Scanner",
          "Mouse",
          "Printer"
        ],
        correctAnswer: "Mouse"
      },
      {
        questionText: "What is the role of the fan in a computer?",
        options: [
          "To increase power",
          "To store data",
          "To cool down the components",
          "To process data"
        ],
        correctAnswer: "To cool down the components"
      },
      {
        questionText: "What is the function of the sound card?",
        options: [
          "To store data",
          "To manage input devices",
          "To process audio signals",
          "To process video signals"
        ],
        correctAnswer: "To process audio signals"
      },
      {
        questionText: "What is an example of a storage device?",
        options: [
          "CPU",
          "RAM",
          "USB Flash drive",
          "Motherboard"
        ],
        correctAnswer: "USB Flash drive"
      }    
  ]
  const AOCDQuestions=[
      {
        questionText: "Which field of computer science focuses on the study of algorithms and data structures?",
        options: [
          "Artificial Intelligence",
          "Software Engineering",
          "Computer Systems",
          "Theoretical Computer Science"
        ],
        correctAnswer: "Theoretical Computer Science"
      },
      {
        questionText: "What does the field of artificial intelligence primarily deal with?",
        options: [
          "Data management",
          "Building human-like intelligence in machines",
          "Operating systems",
          "Computer networks"
        ],
        correctAnswer: "Building human-like intelligence in machines"
      },
      {
        questionText: "Which area of computer science focuses on building and maintaining software applications?",
        options: [
          "Software Engineering",
          "Computer Networks",
          "Computer Graphics",
          "Theoretical Computer Science"
        ],
        correctAnswer: "Software Engineering"
      },
      {
        questionText: "Which branch of computer science deals with the development of hardware and systems?",
        options: [
          "Software Engineering",
          "Computer Systems",
          "Artificial Intelligence",
          "Cybersecurity"
        ],
        correctAnswer: "Computer Systems"
      },
      {
        questionText: "Which area of computer science is concerned with the study of data flow and communication between devices?",
        options: [
          "Computer Networks",
          "Machine Learning",
          "Operating Systems",
          "Database Management"
        ],
        correctAnswer: "Computer Networks"
      },
      {
        questionText: "What is the focus of the field of machine learning?",
        options: [
          "Creating graphics for video games",
          "Developing algorithms to make computers learn from data",
          "Managing hardware resources",
          "Designing computer interfaces"
        ],
        correctAnswer: "Developing algorithms to make computers learn from data"
      },
      {
        questionText: "What does the field of database management focus on?",
        options: [
          "Creating artificial intelligence systems",
          "Storing, managing, and organizing data",
          "Building hardware components",
          "Designing graphics for video games"
        ],
        correctAnswer: "Storing, managing, and organizing data"
      },
      {
        questionText: "What is the focus of the cybersecurity discipline?",
        options: [
          "Building new programming languages",
          "Protecting systems and networks from digital attacks",
          "Designing operating systems",
          "Managing databases"
        ],
        correctAnswer: "Protecting systems and networks from digital attacks"
      },
      {
        questionText: "Which area of computer science focuses on human-computer interaction?",
        options: [
          "Cybersecurity",
          "Software Engineering",
          "Human-Computer Interaction (HCI)",
          "Artificial Intelligence"
        ],
        correctAnswer: "Human-Computer Interaction (HCI)"
      },
      {
        questionText: "Which area of computer science is responsible for studying the design and analysis of algorithms?",
        options: [
          "Theoretical Computer Science",
          "Software Engineering",
          "Machine Learning",
          "Cybersecurity"
        ],
        correctAnswer: "Theoretical Computer Science"
      },
      {
        questionText: "Which field of computer science is concerned with designing and managing operating systems?",
        options: [
          "Artificial Intelligence",
          "Operating Systems",
          "Computer Systems",
          "Human-Computer Interaction"
        ],
        correctAnswer: "Operating Systems"
      },
      {
        questionText: "What is the focus of the field of computer graphics?",
        options: [
          "Creating artificial intelligence algorithms",
          "Designing digital representations of images and visual content",
          "Building software applications",
          "Managing computer networks"
        ],
        correctAnswer: "Designing digital representations of images and visual content"
      },
      {
        questionText: "Which area of computer science focuses on the study of computational theory?",
        options: [
          "Cybersecurity",
          "Software Engineering",
          "Theoretical Computer Science",
          "Human-Computer Interaction"
        ],
        correctAnswer: "Theoretical Computer Science"
      },
      {
        questionText: "Which branch of computer science deals with the creation and maintenance of websites and web applications?",
        options: [
          "Web Development",
          "Cybersecurity",
          "Software Engineering",
          "Artificial Intelligence"
        ],
        correctAnswer: "Web Development"
      },
      {
        questionText: "Which discipline focuses on the study of computing systems and their applications in the real world?",
        options: [
          "Computer Systems",
          "Cybersecurity",
          "Data Science",
          "Machine Learning"
        ],
        correctAnswer: "Computer Systems"
      },
      {
        questionText: "What is the focus of the field of data science?",
        options: [
          "Building robots",
          "Storing and managing large amounts of data",
          "Extracting knowledge and insights from large data sets",
          "Designing video games"
        ],
        correctAnswer: "Extracting knowledge and insights from large data sets"
      },
      {
        questionText: "What is the main concern of the field of cloud computing?",
        options: [
          "Providing remote storage and computing resources",
          "Developing AI models",
          "Protecting networks from digital threats",
          "Building hardware components"
        ],
        correctAnswer: "Providing remote storage and computing resources"
      },
      {
        questionText: "Which area of computer science is responsible for the development of digital circuits and hardware components?",
        options: [
          "Computer Architecture",
          "Operating Systems",
          "Database Management",
          "Artificial Intelligence"
        ],
        correctAnswer: "Computer Architecture"
      },
      {
        questionText: "Which discipline focuses on the study and development of software programs and applications?",
        options: [
          "Software Engineering",
          "Web Development",
          "Cybersecurity",
          "Data Science"
        ],
        correctAnswer: "Software Engineering"
      },
      {
        questionText: "Which area of computer science focuses on building and designing intelligent systems?",
        options: [
          "Artificial Intelligence",
          "Cybersecurity",
          "Database Management",
          "Human-Computer Interaction"
        ],
        correctAnswer: "Artificial Intelligence"
      },
      {
        questionText: "What does the field of bioinformatics primarily focus on?",
        options: [
          "Studying biological data using computational tools",
          "Building software applications for healthcare",
          "Managing hospital databases",
          "Designing artificial organs"
        ],
        correctAnswer: "Studying biological data using computational tools"
      },
      {
        questionText: "Which field of computer science deals with network design and management?",
        options: [
          "Networking",
          "Artificial Intelligence",
          "Cybersecurity",
          "Database Management"
        ],
        correctAnswer: "Networking"
      },
      {
        questionText: "Which area of computer science focuses on developing methods to help computers understand human language?",
        options: [
          "Natural Language Processing",
          "Artificial Intelligence",
          "Cybersecurity",
          "Human-Computer Interaction"
        ],
        correctAnswer: "Natural Language Processing"
      },
      {
        questionText: "What is the primary focus of the field of robotics?",
        options: [
          "Designing and building robots",
          "Storing large amounts of data",
          "Developing machine learning algorithms",
          "Designing human-computer interfaces"
        ],
        correctAnswer: "Designing and building robots"
      },
      {
        questionText: "Which field of computer science is concerned with the development and analysis of programming languages?",
        options: [
          "Software Engineering",
          "Computer Languages",
          "Data Science",
          "Artificial Intelligence"
        ],
        correctAnswer: "Computer Languages"
      },
      {
        questionText: "What is the focus of the field of computational biology?",
        options: [
          "Using algorithms and computational models to solve biological problems",
          "Designing computer hardware for medical purposes",
          "Building robots for medical applications",
          "Managing healthcare databases"
        ],
        correctAnswer: "Using algorithms and computational models to solve biological problems"
      },
      {
        questionText: "Which area of computer science is responsible for studying the development and testing of software applications?",
        options: [
          "Software Engineering",
          "Machine Learning",
          "Cybersecurity",
          "Theoretical Computer Science"
        ],
        correctAnswer: "Software Engineering"
      },
      {
        questionText: "What does the field of cryptography focus on?",
        options: [
          "Data encryption and security",
          "Building algorithms for sorting data",
          "Designing operating systems",
          "Building human-computer interfaces"
        ],
        correctAnswer: "Data encryption and security"
      },
      {
        questionText: "Which area of computer science focuses on the development of video games?",
        options: [
          "Game Development",
          "Web Development",
          "Artificial Intelligence",
          "Cybersecurity"
        ],
        correctAnswer: "Game Development"
      },
      {
        questionText: "Which field of computer science focuses on the study of digital signal processing?",
        options: [
          "Cybersecurity",
          "Data Science",
          "Computer Systems",
          "Signal Processing"
        ],
        correctAnswer: "Signal Processing"
      },
      {
        questionText: "What does the field of quantum computing explore?",
        options: [
          "Using quantum mechanics for computation",
          "Developing AI algorithms",
          "Building operating systems",
          "Analyzing big data"
        ],
        correctAnswer: "Using quantum mechanics for computation"
      },
      {
        questionText: "Which area of computer science is concerned with designing secure systems and preventing unauthorized access?",
        options: [
          "Cybersecurity",
          "Database Management",
          "Networking",
          "Artificial Intelligence"
        ],
        correctAnswer: "Cybersecurity"
      },
      {
        questionText: "Which area of computer science focuses on the study and design of digital and multimedia content?",
        options: [
          "Multimedia Design",
          "Data Science",
          "Game Development",
          "Computer Graphics"
        ],
        correctAnswer: "Computer Graphics"
      },
      {
        questionText: "Which area of computer science focuses on the design and creation of mobile applications?",
        options: [
          "Mobile App Development",
          "Cybersecurity",
          "Artificial Intelligence",
          "Networking"
        ],
        correctAnswer: "Mobile App Development"
      },
      {
        questionText: "What is the focus of the field of virtual reality?",
        options: [
          "Creating immersive simulated environments",
          "Building operating systems",
          "Designing computer networks",
          "Studying biological data"
        ],
        correctAnswer: "Creating immersive simulated environments"
      },
      {
        questionText: "Which area of computer science is responsible for the study and management of large data sets?",
        options: [
          "Data Science",
          "Machine Learning",
          "Software Engineering",
          "Cybersecurity"
        ],
        correctAnswer: "Data Science"
      }    
  ]
  const IPQuestions=[
      {
        questionText: "What does information processing refer to?",
        options: [
          "The act of collecting, storing, and analyzing data",
          "The creation of new software applications",
          "The design of computer hardware",
          "The development of computer networks"
        ],
        correctAnswer: "The act of collecting, storing, and analyzing data"
      },
      {
        questionText: "Which of the following is NOT a stage in the information processing cycle?",
        options: [
          "Input",
          "Processing",
          "Storage",
          "Manufacturing"
        ],
        correctAnswer: "Manufacturing"
      },
      {
        questionText: "In information processing, what is 'input'?",
        options: [
          "The stage where data is analyzed",
          "The stage where data is stored",
          "The stage where data is entered into a system",
          "The stage where data is output to the user"
        ],
        correctAnswer: "The stage where data is entered into a system"
      },
      {
        questionText: "What happens during the 'processing' stage of information processing?",
        options: [
          "Data is collected and stored",
          "Data is outputted to the user",
          "Data is analyzed and manipulated",
          "Data is discarded"
        ],
        correctAnswer: "Data is analyzed and manipulated"
      },
      {
        questionText: "Which of the following is an example of an information processing system?",
        options: [
          "A smartphone",
          "A calculator",
          "A spreadsheet program",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        questionText: "What is the purpose of 'output' in the information processing cycle?",
        options: [
          "To store data for future use",
          "To present the processed data to the user",
          "To analyze data",
          "To input data into the system"
        ],
        correctAnswer: "To present the processed data to the user"
      },
      {
        questionText: "Which of the following is an example of data storage?",
        options: [
          "A hard drive",
          "A printer",
          "A monitor",
          "A keyboard"
        ],
        correctAnswer: "A hard drive"
      },
      {
        questionText: "Which of the following is a type of data processing?",
        options: [
          "Batch processing",
          "Real-time processing",
          "Interactive processing",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        questionText: "In which stage of information processing is data typically stored?",
        options: [
          "Input",
          "Processing",
          "Storage",
          "Output"
        ],
        correctAnswer: "Storage"
      },
      {
        questionText: "What is the role of software in information processing?",
        options: [
          "To input data into the system",
          "To analyze and process data",
          "To display output to the user",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        questionText: "What is an example of an input device?",
        options: [
          "Monitor",
          "Keyboard",
          "Printer",
          "Speaker"
        ],
        correctAnswer: "Keyboard"
      },
      {
        questionText: "Which of the following best describes 'data manipulation' in information processing?",
        options: [
          "Storing data in a database",
          "Transferring data from one device to another",
          "Changing or transforming data based on certain rules",
          "Displaying data to the user"
        ],
        correctAnswer: "Changing or transforming data based on certain rules"
      },
      {
        questionText: "What is the purpose of data compression in information processing?",
        options: [
          "To encrypt the data",
          "To reduce the size of data for storage or transmission",
          "To increase the size of data for faster transmission",
          "To process the data more effectively"
        ],
        correctAnswer: "To reduce the size of data for storage or transmission"
      },
      {
        questionText: "Which of the following describes a computer's central processing unit (CPU)?",
        options: [
          "The unit responsible for storing data",
          "The unit responsible for processing instructions and performing calculations",
          "The unit that displays output to the user",
          "The unit that collects data"
        ],
        correctAnswer: "The unit responsible for processing instructions and performing calculations"
      },
      {
        questionText: "What is 'real-time processing' in information processing?",
        options: [
          "Data is processed in batches",
          "Data is processed as it is inputted into the system",
          "Data is processed at regular intervals",
          "Data is processed after a delay"
        ],
        correctAnswer: "Data is processed as it is inputted into the system"
      },
      {
        questionText: "Which of the following is an example of batch processing?",
        options: [
          "Paying bills through an online system",
          "Processing payroll at the end of the month",
          "Monitoring online transactions in real-time",
          "Sending a message through an app"
        ],
        correctAnswer: "Processing payroll at the end of the month"
      },
      {
        questionText: "Which of the following is the primary goal of information processing?",
        options: [
          "To store data securely",
          "To analyze and make decisions based on data",
          "To display data to the user",
          "To input data into the system"
        ],
        correctAnswer: "To analyze and make decisions based on data"
      },
      {
        questionText: "What type of data is often used for information processing in a business context?",
        options: [
          "Financial data",
          "Customer data",
          "Employee data",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        questionText: "Which of the following describes 'interactive processing'?",
        options: [
          "Data is processed after the user enters it",
          "Data is processed in real-time without user interaction",
          "Data is processed in batches",
          "Data is displayed to the user for feedback"
        ],
        correctAnswer: "Data is processed after the user enters it"
      },
      {
        questionText: "What is the first step in the information processing cycle?",
        options: [
          "Processing",
          "Output",
          "Input",
          "Storage"
        ],
        correctAnswer: "Input"
      },
      {
        questionText: "Which of the following is an example of output in information processing?",
        options: [
          "A user entering data into a form",
          "The computer running an algorithm",
          "A report displayed on a monitor",
          "Data being stored on a hard drive"
        ],
        correctAnswer: "A report displayed on a monitor"
      },
      {
        questionText: "What does the term 'data flow' refer to in information processing?",
        options: [
          "The movement of data between different stages of processing",
          "The storage of data in a database",
          "The process of converting data into a usable form",
          "The display of processed data to the user"
        ],
        correctAnswer: "The movement of data between different stages of processing"
      },
      {
        questionText: "Which of the following best describes the 'output' stage in information processing?",
        options: [
          "The transformation of data into a format that can be used by the system",
          "The presentation of processed data to the user or another system",
          "The collection of data from input devices",
          "The storage of processed data for future use"
        ],
        correctAnswer: "The presentation of processed data to the user or another system"
      },
      {
        questionText: "What is the purpose of a processor in information processing?",
        options: [
          "To store data",
          "To retrieve data from memory",
          "To process and execute instructions",
          "To display data on a screen"
        ],
        correctAnswer: "To process and execute instructions"
      },
      {
        questionText: "Which of the following is an example of an output device?",
        options: [
          "Mouse",
          "Keyboard",
          "Monitor",
          "Scanner"
        ],
        correctAnswer: "Monitor"
      },
      {
        questionText: "Which of the following is NOT part of the information processing cycle?",
        options: [
          "Input",
          "Processing",
          "Transmission",
          "Output"
        ],
        correctAnswer: "Transmission"
      },
      {
        questionText: "In information processing, what is 'data encoding'?",
        options: [
          "Converting data into a specific format for storage or transmission",
          "Storing data in memory",
          "Displaying data to the user",
          "Analyzing data for trends"
        ],
        correctAnswer: "Converting data into a specific format for storage or transmission"
      },
      {
        questionText: "What does 'data analysis' in information processing involve?",
        options: [
          "The storage of data in a database",
          "The process of transforming raw data into useful information",
          "The collection of data from various sources",
          "The display of results to users"
        ],
        correctAnswer: "The process of transforming raw data into useful information"
      },
      {
        questionText: "What is the purpose of the 'storage' stage in information processing?",
        options: [
          "To input new data into the system",
          "To store processed data for future use",
          "To display data to the user",
          "To process data in real-time"
        ],
        correctAnswer: "To store processed data for future use"
      },
      {
        questionText: "Which of the following is an example of a storage device?",
        options: [
          "Printer",
          "Scanner",
          "Hard drive",
          "Monitor"
        ],
        correctAnswer: "Hard drive"
      },
      {
        questionText: "What is the role of 'data interpretation' in information processing?",
        options: [
          "To convert data into a machine-readable format",
          "To extract meaning and insights from data",
          "To store data in a secure location",
          "To input data into the system"
        ],
        correctAnswer: "To extract meaning and insights from data"
      },
      {
        questionText: "Which of the following is an example of data processing?",
        options: [
          "Entering customer details into a system",
          "Generating a sales report from a database",
          "Storing customer information on a server",
          "Printing a receipt"
        ],
        correctAnswer: "Generating a sales report from a database"
      },
      {
        questionText: "What is the purpose of a 'data pipeline' in information processing?",
        options: [
          "To securely store data",
          "To transform and move data between systems",
          "To input data into the system",
          "To analyze data in real-time"
        ],
        correctAnswer: "To transform and move data between systems"
      }    
  ]
  const cos101Questions=[
      {
        questionText: "What is the output of an AND gate when both inputs are 1?",
        options: ["0", "1", "Indeterminate", "None of the above"],
        correctAnswer: "1"
      },
      {
        questionText: "What does a NOT gate do to an input signal?",
        options: ["Inverts the signal", "Passes the signal through unchanged", "Doubles the signal", "None of the above"],
        correctAnswer: "Inverts the signal"
      },
      {
        questionText: "Which logic gate produces an output of 1 only when both inputs are 0?",
        options: ["AND", "OR", "NAND", "NOR"],
        correctAnswer: "NOR"
      },
      {
        questionText: "Which of the following is a universal gate?",
        options: ["AND", "OR", "NAND", "XOR"],
        correctAnswer: "NAND"
      },
      {
        questionText: "What is the output of an OR gate when both inputs are 0?",
        options: ["0", "1", "Indeterminate", "None of the above"],
        correctAnswer: "0"
      },
      {
        questionText: "Which gate has an output of 0 when both inputs are the same?",
        options: ["AND", "XOR", "NAND", "OR"],
        correctAnswer: "XOR"
      },
      {
        questionText: "Which of the following gates is used to combine two or more signals to produce an output based on both inputs?",
        options: ["AND", "NOT", "XOR", "OR"],
        correctAnswer: "AND"
      },
      {
        questionText: "What is the output of a NAND gate when both inputs are 1?",
        options: ["1", "0", "Indeterminate", "None of the above"],
        correctAnswer: "0"
      },
      {
        questionText: "What is the basic building block for any digital circuit?",
        options: ["Switch", "Resistor", "Transistor", "Logic Gate"],
        correctAnswer: "Logic Gate"
      },
      {
        questionText: "Which of the following is NOT a characteristic of a logic gate?",
        options: ["Boolean operation", "Mathematical computation", "Two input signals", "Electrical operation"],
        correctAnswer: "Mathematical computation"
      },
      {
        questionText: "Who is considered the father of the computer?",
        options: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
        correctAnswer: "Charles Babbage"
      },
      {
        questionText: "What year was the first mechanical computer, the Analytical Engine, designed?",
        options: ["1837", "1870", "1920", "1945"],
        correctAnswer: "1837"
      },
      {
        questionText: "What was the first successful electronic computer?",
        options: ["ENIAC", "UNIVAC", "Colossus", "Z3"],
        correctAnswer: "ENIAC"
      },
      {
        questionText: "Which decade saw the advent of the first personal computer?",
        options: ["1950s", "1960s", "1970s", "1980s"],
        correctAnswer: "1970s"
      },
      {
        questionText: "What is considered the first digital computer?",
        options: ["ENIAC", "Colossus", "Z3", "UNIVAC"],
        correctAnswer: "Z3"
      },
      {
        questionText: "Who invented the first mechanical calculator?",
        options: ["Blaise Pascal", "Charles Babbage", "John Atanasoff", "Konrad Zuse"],
        correctAnswer: "Blaise Pascal"
      },
      {
        questionText: "What was the name of the first computer virus?",
        options: ["Creeper", "Elk Cloner", "Brain", "Sasser"],
        correctAnswer: "Creeper"
      },
      {
        questionText: "Which company created the first commercial microprocessor, the Intel 4004?",
        options: ["Intel", "IBM", "Microsoft", "Apple"],
        correctAnswer: "Intel"
      },
      {
        questionText: "In what year was the World Wide Web made publicly available?",
        options: ["1989", "1991", "1995", "2000"],
        correctAnswer: "1991"
      },
      {
        questionText: "What was the main purpose of the first generation computers?",
        options: ["Scientific calculations", "Business calculations", "Military communications", "Weather forecasting"],
        correctAnswer: "Scientific calculations"
      },
      {
        questionText: "Which component of the computer is responsible for executing instructions?",
        options: ["Central Processing Unit (CPU)", "Motherboard", "Hard Drive", "Graphics Processing Unit (GPU)"],
        correctAnswer: "Central Processing Unit (CPU)"
      },
      {
        questionText: "What is the function of the RAM in a computer?",
        options: ["Store data permanently", "Provide high-speed processing", "Hold data temporarily during active use", "Control input/output operations"],
        correctAnswer: "Hold data temporarily during active use"
      },
      {
        questionText: "Which of the following is an example of an input device?",
        options: ["Monitor", "Keyboard", "Printer", "Speakers"],
        correctAnswer: "Keyboard"
      },
      {
        questionText: "What type of memory is used to store the operating system, applications, and data currently in use?",
        options: ["ROM", "RAM", "Cache memory", "Hard drive"],
        correctAnswer: "RAM"
      },
      {
        questionText: "Which part of the computer is responsible for generating the display output?",
        options: ["Motherboard", "Monitor", "Graphics Card", "Power Supply"],
        correctAnswer: "Graphics Card"
      },
      {
        questionText: "Which device is used to store data permanently in a computer?",
        options: ["RAM", "Hard Drive", "CPU", "Cache Memory"],
        correctAnswer: "Hard Drive"
      },
      {
        questionText: "Which device is an example of a storage peripheral?",
        options: ["Monitor", "Printer", "External hard drive", "Mouse"],
        correctAnswer: "External hard drive"
      },
      {
        questionText: "What is the function of the motherboard in a computer?",
        options: ["Store data", "Control the power supply", "Connect all the components together", "Provide audio output"],
        correctAnswer: "Connect all the components together"
      },
      {
        questionText: "What is the purpose of a power supply unit in a computer?",
        options: ["Provide electrical power to the computer", "Store data", "Connect the CPU to the memory", "Generate display output"],
        correctAnswer: "Provide electrical power to the computer"
      },
      {
        questionText: "Which of the following is an example of an output device?",
        options: ["Scanner", "Keyboard", "Monitor", "Microphone"],
        correctAnswer: "Monitor"
      },
      {
        questionText: "Which field of computer science is focused on creating and managing databases?",
        options: ["Software engineering", "Artificial intelligence", "Database management", "Cybersecurity"],
        correctAnswer: "Database management"
      },
      {
        questionText: "Which of the following is a subfield of artificial intelligence?",
        options: ["Data science", "Cloud computing", "Machine learning", "Web development"],
        correctAnswer: "Machine learning"
      },
      {
        questionText: "Which field of computer science involves the design and implementation of software applications?",
        options: ["Cybersecurity", "Networking", "Software engineering", "Computer hardware"],
        correctAnswer: "Software engineering"
      },
      {
        questionText: "Which branch of computer science deals with the development of secure computer systems?",
        options: ["Machine learning", "Software engineering", "Cybersecurity", "Network administration"],
        correctAnswer: "Cybersecurity"
      },
      {
        questionText: "Which of the following is a key aspect of computer networking?",
        options: ["Designing websites", "Establishing data connections", "Writing software applications", "Creating digital art"],
        correctAnswer: "Establishing data connections"
      },
      {
        questionText: "Which field is concerned with the study and design of intelligent systems that can mimic human behavior?",
        options: ["Artificial intelligence", "Software development", "Cloud computing", "Database management"],
        correctAnswer: "Artificial intelligence"
      },
      {
        questionText: "What is the main goal of data science?",
        options: ["Designing user interfaces", "Analyzing and interpreting complex data", "Building network infrastructures", "Developing mobile applications"],
        correctAnswer: "Analyzing and interpreting complex data"
      },
      {
        questionText: "Which field of computer science is focused on the creation of websites and web applications?",
        options: ["Software engineering", "Cybersecurity", "Data science", "Web development"],
        correctAnswer: "Web development"
      },
      {
        questionText: "Which area of computer science involves designing hardware components and systems?",
        options: ["Artificial intelligence", "Software engineering", "Data science", "Computer hardware"],
        correctAnswer: "Computer hardware"
      },
      {
        questionText: "Which field of computer science focuses on developing algorithms for problem-solving?",
        options: ["Software development", "Machine learning", "Network administration", "Algorithms and complexity"],
        correctAnswer: "Algorithms and complexity"
      },
      {
        questionText: "Which of the following is the first stage of information processing?",
        options: ["Input", "Output", "Processing", "Storage"],
        correctAnswer: "Input"
      },
      {
        questionText: "What does the term 'data manipulation' refer to in the information processing cycle?",
        options: ["Inputting data into the system", "Transforming and organizing data", "Displaying results to the user", "Storing data for future use"],
        correctAnswer: "Transforming and organizing data"
      },
      {
        questionText: "Which stage of information processing involves analyzing and performing calculations on data?",
        options: ["Processing", "Input", "Output", "Storage"],
        correctAnswer: "Processing"
      },
      {
        questionText: "What is the purpose of 'storage' in information processing?",
        options: ["To input new data", "To store data for future use", "To process data", "To display results to the user"],
        correctAnswer: "To store data for future use"
      },
      {
        questionText: "What does the 'output' stage of information processing involve?",
        options: ["Entering data into the system", "Storing data in a database", "Displaying processed results", "Analyzing the data"],
        correctAnswer: "Displaying processed results"
      },
      {
        questionText: "What does data analysis in information processing help to achieve?",
        options: ["Organizing the data", "Changing the format of data", "Extracting meaningful insights", "Storing the data securely"],
        correctAnswer: "Extracting meaningful insights"
      },
      {
        questionText: "Which of the following is an example of output in information processing?",
        options: ["A received email", "A keyboard input", "A stored file", "A printed report"],
        correctAnswer: "A printed report"
      },
      {
        questionText: "Which memory type is used to store temporary data during processing?",
        options: ["ROM", "Cache memory", "Hard Drive", "RAM"],
        correctAnswer: "RAM"
      },
      {
        questionText: "What is the purpose of a processor in information processing?",
        options: ["To input data", "To store data", "To display results", "To execute instructions"],
        correctAnswer: "To execute instructions"
      },
      {
        questionText: "Which of the following is NOT part of the information processing cycle?",
        options: ["Input", "Output", "Processing", "Transmission"],
        correctAnswer: "Transmission"
      },    
        {
          questionText: "Which term refers to the process of organizing data into meaningful patterns?",
          options: ["Interpretation", "Storage", "Analysis", "Processing"],
          correctAnswer: "Processing"
        },
        {
          questionText: "What is the role of a computer's central processing unit (CPU) in information processing?",
          options: ["To store data", "To transmit data", "To display results", "To process instructions"],
          correctAnswer: "To process instructions"
        },
        {
          questionText: "Which of the following describes the term 'data encoding'?",
          options: ["Converting data into a readable format", "Storing data in memory", "Converting data into binary", "Sorting data for analysis"],
          correctAnswer: "Converting data into binary"
        },
        {
          questionText: "What happens during the output phase of the information processing cycle?",
          options: ["Data is received", "Data is processed", "Results are displayed or printed", "Data is stored"],
          correctAnswer: "Results are displayed or printed"
        },
        {
          questionText: "What is the primary purpose of storage in the information processing cycle?",
          options: ["To store input data", "To store output data", "To store intermediate results", "To store final output"],
          correctAnswer: "To store intermediate results"
        },
        {
          questionText: "Which gate is equivalent to an OR gate followed by a NOT gate?",
          options: ["NAND", "NOT", "XOR", "NOR"],
          correctAnswer: "NOR"
        },
        {
          questionText: "Which gate performs the same function as an AND gate followed by a NOT gate?",
          options: ["XOR", "OR", "NOR", "NAND"],
          correctAnswer: "NAND"
        },
        {
          questionText: "Which gate produces a 1 output if exactly one of the inputs is 1?",
          options: ["AND", "OR", "XOR", "NAND"],
          correctAnswer: "XOR"
        },
        {
          questionText: "What is the output of a NAND gate when both inputs are 1?",
          options: ["1", "0", "Indeterminate", "Undefined"],
          correctAnswer: "0"
        },
        {
          questionText: "Which gate produces the opposite output of an AND gate?",
          options: ["NAND", "NOR", "XOR", "NOT"],
          correctAnswer: "NAND"
        },
        {
          questionText: "What was the first computer designed to be programmable?",
          options: ["ENIAC", "UNIVAC", "Z3", "Colossus"],
          correctAnswer: "Z3"
        },
        {
          questionText: "Which inventor is credited with creating the first mechanical computer?",
          options: ["Alan Turing", "Charles Babbage", "John von Neumann", "Konrad Zuse"],
          correctAnswer: "Charles Babbage"
        },
        {
          questionText: "Which company released the first personal computer with a keyboard and screen?",
          options: ["Apple", "IBM", "Compaq", "Xerox"],
          correctAnswer: "Apple"
        },
        {
          questionText: "In what year did the first successful use of punched cards take place?",
          options: ["1801", "1901", "1940", "1960"],
          correctAnswer: "1801"
        },
        {
          questionText: "Who is considered the father of the modern computer?",
          options: ["Charles Babbage", "John von Neumann", "Alan Turing", "Konrad Zuse"],
          correctAnswer: "John von Neumann"
        },
        {
          questionText: "Which part of the computer is responsible for the user interface?",
          options: ["CPU", "Monitor", "Keyboard", "Motherboard"],
          correctAnswer: "Monitor"
        },
        {
          questionText: "What is the primary role of a power supply unit (PSU) in a computer?",
          options: ["To store data", "To supply power to components", "To cool the system", "To input data"],
          correctAnswer: "To supply power to components"
        },
        {
          questionText: "What does the motherboard in a computer do?",
          options: ["Provides power", "Interconnects all components", "Handles input/output operations", "Stores data"],
          correctAnswer: "Interconnects all components"
        },
        {
          questionText: "Which device is primarily responsible for transforming electrical signals into sound?",
          options: ["Monitor", "Speakers", "Motherboard", "Sound Card"],
          correctAnswer: "Speakers"
        },
        {
          questionText: "What component is responsible for generating the graphical display on a computer screen?",
          options: ["Motherboard", "RAM", "CPU", "Graphics Card"],
          correctAnswer: "Graphics Card"
        },
        {
          questionText: "Which field of computer science focuses on creating programs that can learn from data?",
          options: ["Artificial Intelligence", "Networking", "Cybersecurity", "Software Engineering"],
          correctAnswer: "Artificial Intelligence"
        },
        {
          questionText: "Which subfield of computer science focuses on optimizing algorithms?",
          options: ["Cybersecurity", "Data Structures", "Algorithms and Complexity", "Software Engineering"],
          correctAnswer: "Algorithms and Complexity"
        },
        {
          questionText: "What does the field of computer networking focus on?",
          options: ["Designing algorithms", "Building hardware", "Managing the communication between devices", "Creating operating systems"],
          correctAnswer: "Managing the communication between devices"
        },
        {
          questionText: "Which discipline in computer science focuses on human-computer interactions?",
          options: ["Networking", "Human-Computer Interaction", "Data Science", "Artificial Intelligence"],
          correctAnswer: "Human-Computer Interaction"
        },
        {
          questionText: "Which branch of computer science involves designing and developing video games?",
          options: ["Game Development", "Software Engineering", "Web Development", "Mobile Development"],
          correctAnswer: "Game Development"
        },
        {
          questionText: "What is the main function of the processing unit in information processing?",
          options: ["To convert data into output", "To store input", "To process and analyze data", "To provide feedback"],
          correctAnswer: "To process and analyze data"
        },
        {
          questionText: "What is the output phase of the information processing cycle responsible for?",
          options: ["Inputting data", "Processing data", "Displaying results to users", "Storing data"],
          correctAnswer: "Displaying results to users"
        },
        {
          questionText: "Which of the following is a key characteristic of a good information processing system?",
          options: ["Speed", "Accuracy", "Efficiency", "All of the above"],
          correctAnswer: "All of the above"
        },
        {
          questionText: "Which of the following is true about data storage in information processing?",
          options: ["Data storage happens before processing", "Data storage is used for input only", "Data storage is used for long-term preservation", "Data storage has no relation to processing"],
          correctAnswer: "Data storage is used for long-term preservation"
        },
        {
          questionText: "In information processing, what happens after data is input?",
          options: ["It is processed", "It is displayed", "It is stored", "It is encoded"],
          correctAnswer: "It is processed"
        },   
          {
            questionText: "Which of the following gates produces a 1 output only if both inputs are 1?",
            options: ["XOR", "OR", "NAND", "AND"],
            correctAnswer: "AND"
          },
          {
            questionText: "Which gate produces a 1 output when at least one of the inputs is 1?",
            options: ["XOR", "AND", "OR", "NOR"],
            correctAnswer: "OR"
          },
          {
            questionText: "What is the primary characteristic of a NOR gate?",
            options: ["It outputs 1 when both inputs are 1", "It outputs 0 when both inputs are 0", "It outputs 0 unless both inputs are 0", "It outputs 1 unless both inputs are 0"],
            correctAnswer: "It outputs 0 unless both inputs are 0"
          },
          {
            questionText: "Which of the following gates is called a universal gate?",
            options: ["NAND", "NOR", "XOR", "AND"],
            correctAnswer: "NAND"
          },
          {
            questionText: "Which gate is the complement of the AND gate?",
            options: ["XOR", "OR", "NOR", "NAND"],
            correctAnswer: "NAND"
          },
          {
            questionText: "Who is known for developing the first mechanical calculator in the 17th century?",
            options: ["Charles Babbage", "Gottfried Wilhelm Leibniz", "Blaise Pascal", "Alan Turing"],
            correctAnswer: "Blaise Pascal"
          },
          {
            questionText: "In which year was the first successful use of a mechanical calculator developed by Charles Babbage?",
            options: ["1845", "18430", "1820", "1870"],
            correctAnswer: "1830"
          },
          {
            questionText: "Which of the following is considered the first programmable computer?",
            options: ["Z3", "ENIAC", "UNIVAC", "IBM 360"],
            correctAnswer: "Z3"
          },
          {
            questionText: "In what year was the personal computer IBM PC introduced?",
            options: ["1980", "1975", "1981", "1990"],
            correctAnswer: "1981"
          },
          {
            questionText: "What was the first commercially available computer?",
            options: ["Colossus", "ENIAC", "UNIVAC", "Altair 8800"],
            correctAnswer: "UNIVAC"
          },
          {
            questionText: "Which of the following components is responsible for temporarily storing data and instructions while they are being processed?",
            options: ["Hard drive", "RAM", "CPU", "Motherboard"],
            correctAnswer: "RAM"
          },
          {
            questionText: "Which peripheral device allows a user to input text into a computer?",
            options: ["Keyboard", "Mouse", "Scanner", "Monitor"],
            correctAnswer: "Keyboard"
          },
          {
            questionText: "What type of storage device is known for using flash memory and has no moving parts?",
            options: ["HDD", "SSD", "CD-ROM", "DVD"],
            correctAnswer: "SSD"
          },
          {
            questionText: "Which of the following is an example of an input device?",
            options: ["Printer", "Monitor", "Scanner", "Speaker"],
            correctAnswer: "Scanner"
          },
          {
            questionText: "Which of the following is NOT considered a storage device?",
            options: ["Hard drive", "RAM", "Flash Drive", "Motherboard"],
            correctAnswer: "Motherboard"
          },
          {
            questionText: "Which branch of computer science focuses on the development of software systems for computers?",
            options: ["Software Engineering", "Artificial Intelligence", "Networking", "Cybersecurity"],
            correctAnswer: "Software Engineering"
          },
          {
            questionText: "Which area of computer science is concerned with ensuring the security of data and networks?",
            options: ["cDtabase management", "Data Science", "Web Development", "Cybersecurity"],
            correctAnswer: "Cybersecurity"
          },
          {
            questionText: "Which of the following is part of the field of Data Science?",
            options: ["Networking", "Web Design", "Machine Learning", "Operating Systems"],
            correctAnswer: "Machine Learning"
          },
          {
            questionText: "Which discipline in computer science focuses on the study and development of algorithms for solving problems?",
            options: ["Software development", "Algorithms", "Data Structures", "Networking"],
            correctAnswer: "Algorithms"
          },
          {
            questionText: "Which branch of computer science focuses on creating user-friendly designs for software applications?",
            options: ["Human-Computer Interaction", "Artificial Intelligence", "Web Development", "Mobile Development"],
            correctAnswer: "Human-Computer Interaction"
          }           
  ]
  
  const FormulaQuestions=[
    {
      questionText: "Which formula calculates the population mean?",
      options: ["ΣX / N", "Σ(X - μ)² / N", "Σ(x - x̄)(y - ȳ)", "Σ(X)² / N"],
      correctAnswer: "ΣX / N"
    },
    {
      questionText: "Which formula is used to calculate the sample variance?",
      options: ["Σ(X - x̄)² / (n - 1)", "ΣX / N", "Σ(x - x̄)(y - ȳ)", "Σ(x) / Σ(y)"],
      correctAnswer: "Σ(X - x̄)² / (n - 1)"
    },
    {
      questionText: "What is the formula for the regression line in simple linear regression?",
      options: ["y = β₀ + β₁x", "y = x̄ + xβ₁", "y = Σ(x - x̄)", "y = β₀ / β₁x"],
      correctAnswer: "y = β₀ + β₁x"
    },
    {
      questionText: "How do you calculate the correlation coefficient (r)?",
      options: ["Σ(x - x̄)(y - ȳ) / √Σ(x - x̄)²√Σ(y - ȳ)²", "Σx / Σy", "Σ(xy) / Σ(x²)", "Σ(y - ȳ)² / Σ(x - x̄)²"],
      correctAnswer: "Σ(x - x̄)(y - ȳ) / √Σ(x - x̄)²√Σ(y - ȳ)²"
    },
    {
      questionText: "Which formula calculates the standard error of the mean (SEM)?",
      options: ["σ / √n", "Σ(x - x̄) / n", "Σ(x² - μ)² / n", "σ²n"],
      correctAnswer: "σ / √n"
    },
    {
      questionText: "What is the formula for calculating the sample mean?",
      options: ["x̄ = ΣX / n", "x̄ = ΣX / N", "x̄ = Σ(X - x̄)² / n", "x̄ = ΣX² / N"],
      correctAnswer: "x̄ = ΣX / n"
    },
    {
      questionText: "Which formula is used to calculate the population variance?",
      options: ["σ² = Σ(X - μ)² / N", "σ² = Σ(X - μ) / N", "σ² = ΣX / N", "σ² = ΣX² / n"],
      correctAnswer: "σ² = Σ(X - μ)² / N"
    },
    {
      questionText: "How do you calculate the covariance between two variables X and Y?",
      options: ["Σ(x - x̄)(y - ȳ) / N", "Σ(X - μ)² / N", "Σ(x - x̄) / Σ(y - ȳ)", "Σ(xy) / Σ(x²)"],
      correctAnswer: "Σ(x - x̄)(y - ȳ) / N"
    },
    {
      questionText: "Which formula represents the coefficient of determination (R²)?",
      options: ["R² = SSR / SST", "R² = SSE / SST", "R² = Σ(X - μ)² / N", "R² = Σ(y - ȳ)² / Σ(x - x̄)²"],
      correctAnswer: "R² = SSR / SST"
    },
    {
      questionText: "What is the formula for calculating the standard deviation of a population?",
      options: ["σ = √(Σ(X - μ)² / N)", "σ = Σ(X - μ)² / N", "σ = ΣX / ΣN", "σ = √(ΣX² / N)"],
      correctAnswer: "σ = √(Σ(X - μ)² / N)"
    },
    {
      questionText: "Which formula is used to calculate the z-score in a population?",
      options: ["z = (X - μ) / σ", "z = (X - x̄) / σ", "z = (X - μ)² / N", "z = ΣX / ΣN"],
      correctAnswer: "z = (X - μ) / σ"
    },
    {
      questionText: "How do you calculate the regression sum of squares (SSR)?",
      options: ["SSR = Σ(Ŷ - ȳ)²", "SSR = Σ(Y - Ŷ)²", "SSR = Σ(Y - ȳ)²", "SSR = Σ(X - μ)² / N"],
      correctAnswer: "SSR = Σ(Ŷ - ȳ)²"
    },
    {
      questionText: "What is the formula for the standard error of a proportion?",
      options: ["SE = √[p(1-p)/n]", "SE = p / √n", "SE = Σ(X - x̄) / N", "SE = Σ(p)² / n"],
      correctAnswer: "SE = √[p(1-p)/n]"
    },
    {
      questionText: "Which formula calculates the residual sum of squares (RSS)?",
      options: ["RSS = Σ(Y - Ŷ)²", "RSS = Σ(X - μ)² / N", "RSS = Σ(Y - ȳ)²", "RSS = Σ(X - x̄) / N"],
      correctAnswer: "RSS = Σ(Y - Ŷ)²"
    },
    {
      questionText: "How do you calculate the total sum of squares (SST)?",
      options: ["SST = Σ(Y - ȳ)²", "SST = Σ(Ŷ - ȳ)²", "SST = Σ(Y - Ŷ)²", "SST = Σ(X - μ)² / N"],
      correctAnswer: "SST = Σ(Y - ȳ)²"
    },
    {
      questionText: "What is the formula for the weighted mean?",
      options: ["x̄w = Σ(wx) / Σw", "x̄w = Σx / Σw", "x̄w = Σw / Σx", "x̄w = Σwx² / Σw"],
      correctAnswer: "x̄w = Σ(wx) / Σw"
    },
    {
      questionText: "Which formula is used for estimating the population proportion from a sample?",
      options: ["p̂ = x / n", "p̂ = Σx / Σn", "p̂ = Σ(x - x̄)² / N", "p̂ = ΣX / N"],
      correctAnswer: "p̂ = x / n"
    },
    {
      questionText: "How do you calculate the margin of error for a sample mean?",
      options: ["ME = Z * (σ / √n)", "ME = σ / √n", "ME = ΣX / ΣN", "ME = Σ(X - x̄)² / n"],
      correctAnswer: "ME = Z * (σ / √n)"
    },
    {
      questionText: "What is the formula for the predicted value in linear regression?",
      options: ["Ŷ = β₀ + β₁x", "Ŷ = Σx / Σy", "Ŷ = β₀ - β₁x", "Ŷ = Σ(xy) / Σ(x²)"],
      correctAnswer: "Ŷ = β₀ + β₁x"
    },
    {
      questionText: "Which formula represents the sample correlation coefficient (r)?",
      options: ["r = Σ(x - x̄)(y - ȳ) / √Σ(x - x̄)²√Σ(y - ȳ)²", "r = Σ(x - x̄)(y - ȳ)² / N", "r = Σ(x - x̄) / Σ(y - ȳ)", "r = ΣX / ΣN"],
      correctAnswer: "r = Σ(x - x̄)(y - ȳ) / √Σ(x - x̄)²√Σ(y - ȳ)²"
    },
    {
      questionText: "How do you calculate the coefficient of variation (CV)?",
      options: ["CV = (σ / μ) * 100", "CV = σ / μ", "CV = (ΣX - μ) / N", "CV = Σ(X - μ)² / N"],
      correctAnswer: "CV = (σ / μ) * 100"
    },
    {
      questionText: "What is the formula for calculating the pooled variance in a two-sample t-test?",
      options: ["Sp² = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁ + n₂ - 2)", "Sp² = Σ(X - μ)² / N", "Sp² = Σ(x - x̄)² / (n - 1)", "Sp² = Σ(xy) / Σ(x²)"],
      correctAnswer: "Sp² = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁ + n₂ - 2)"
    },
    {
      questionText: "Which formula is used to calculate the standard error of the difference between two sample means?",
      options: ["SE = √[(s₁²/n₁) + (s₂²/n₂)]", "SE = σ / √n", "SE = Σ(X - x̄)² / n", "SE = √(ΣX / ΣN)"],
      correctAnswer: "SE = √[(s₁²/n₁) + (s₂²/n₂)]"
    },
    {
      questionText: "What is the formula for calculating the F-statistic in ANOVA?",
      options: ["F = MSB / MSW", "F = ΣX / N", "F = Σ(Y - Ŷ)² / N", "F = Σ(X - μ)² / N"],
      correctAnswer: "F = MSB / MSW"
    },
    {
      questionText: "How is the probability of a single event calculated in sampling?",
      options: ["P = favorable outcomes / total outcomes", "P = ΣX / ΣN", "P = Σ(X - x̄) / ΣN", "P = Σ(xy) / Σ(x²)"],
      correctAnswer: "P = favorable outcomes / total outcomes"
    },
    {
      questionText: "What is the formula for calculating the t-statistic in a one-sample t-test?",
      options: ["t = (x̄ - μ) / (s / √n)", "t = (x̄ - μ)² / n", "t = Σ(x - x̄) / Σ(y - ȳ)", "t = Σ(xy) / Σ(x²)"],
      correctAnswer: "t = (x̄ - μ) / (s / √n)"
    },
    {
      questionText: "How do you calculate the chi-square statistic?",
      options: ["χ² = Σ((O - E)² / E)", "χ² = Σ(O - E) / E", "χ² = Σ(x - x̄)² / (n - 1)", "χ² = Σ(X - μ) / N"],
      correctAnswer: "χ² = Σ((O - E)² / E)"
    },
    {
      questionText: "What is the formula for calculating the regression slope (β₁)?",
      options: ["β₁ = Σ(x - x̄)(y - ȳ) / Σ(x - x̄)²", "β₁ = Σ(Y - Ŷ)² / Σ(X - μ)", "β₁ = Σ(x) / Σ(y)", "β₁ = Σ(X - x̄)² / Σ(y - ȳ)"],
      correctAnswer: "β₁ = Σ(x - x̄)(y - ȳ) / Σ(x - x̄)²"
    },
    {
      questionText: "Which formula calculates the regression intercept (β₀)?",
      options: ["β₀ = ȳ - β₁x̄", "β₀ = ȳ + β₁x̄", "β₀ = Σ(X - x̄)² / N", "β₀ = Σ(Y - Ŷ) / Σ(X)"],
      correctAnswer: "β₀ = ȳ - β₁x̄"
    },
    {
      questionText: "How do you calculate the weighted variance?",
      options: ["σw² = Σw(x - x̄w)² / Σw", "σw² = Σ(x - x̄)² / n", "σw² = Σ(x - x̄) / N", "σw² = Σw(x)² / Σw"],
      correctAnswer: "σw² = Σw(x - x̄w)² / Σw"
    },
    {
      questionText: "What is the formula for the expected value of a random variable X?",
      options: ["E(X) = Σ[x * P(x)]", "E(X) = Σx / ΣP(x)", "E(X) = Σ(x - x̄) / Σ(x²)", "E(X) = Σ(X - μ)² / N"],
      correctAnswer: "E(X) = Σ[x * P(x)]"
    },
    {
      questionText: "How do you calculate the binomial probability of x successes in n trials?",
      options: ["P(X = x) = nCx * p^x * (1-p)^(n-x)", "P(X = x) = Σx / ΣN", "P(X = x) = Σ(x - x̄) / Σ(p)", "P(X = x) = Σ(x) / Σ(x²)"],
      correctAnswer: "P(X = x) = nCx * p^x * (1-p)^(n-x)"
    },
    {
      questionText: "Which formula calculates the mean square error (MSE)?",
      options: ["MSE = Σ(Y - Ŷ)² / n", "MSE = Σ(X - μ)² / N", "MSE = Σ(Y - ȳ)² / N", "MSE = Σ(X - x̄) / N"],
      correctAnswer: "MSE = Σ(Y - Ŷ)² / n"
    },
    {
      questionText: "What is the formula for calculating the total probability rule?",
      options: ["P(A) = ΣP(A | Bi)P(Bi)", "P(A) = Σ(A | B) / ΣP(B)", "P(A) = Σ(X - x̄) / ΣN", "P(A) = Σ(X)² / N"],
      correctAnswer: "P(A) = ΣP(A | Bi)P(Bi)"
    },
    {
      questionText: "How do you calculate the adjusted R² in regression analysis?",
      options: ["R²adj = 1 - [(1 - R²)(n-1) / (n-k-1)]", "R²adj = SSR / SST", "R²adj = Σ(Y - Ŷ)² / n", "R²adj = Σ(X - μ)² / N"],
      correctAnswer: "R²adj = 1 - [(1 - R²)(n-1) / (n-k-1)]"
    },
    {
      questionText: "What is the formula for the likelihood ratio in hypothesis testing?",
      options: ["LR = P(data | H₀) / P(data | H₁)", "LR = Σ(X - μ)² / Σ(x - x̄)", "LR = Σ(x) / Σ(p)", "LR = Σ(X)² / N"],
      correctAnswer: "LR = P(data | H₀) / P(data | H₁)"
    },
    {
      questionText: "How do you calculate the odds ratio in a 2x2 contingency table?",
      options: ["OR = (a/b) / (c/d)", "OR = Σx / Σy", "OR = Σ(x - x̄)² / Σ(x)", "OR = Σ(X - μ) / Σ(x)"],
      correctAnswer: "OR = (a/b) / (c/d)"
    },
    {
      questionText: "Which formula is used to calculate the mean of a population?",
      options: ["μ = ΣX / N", "μ = Σ(X - μ) / N", "μ = Σx² / Σx", "μ = Σ(x - x̄)² / n"],
      correctAnswer: "μ = ΣX / N"
    },
    {
      questionText: "What is the formula to find the sample mean?",
      options: ["x̄ = Σx / n", "x̄ = ΣX / N", "x̄ = Σ(x - μ) / ΣN", "x̄ = Σ(x)² / Σ(x)"],
      correctAnswer: "x̄ = Σx / n"
    },
    {
      questionText: "How is the range of a dataset calculated?",
      options: ["Range = Maximum - Minimum", "Range = Σ(X - x̄) / N", "Range = Σ(x - x̄)² / (n-1)", "Range = Σ(x) / Σ(N)"],
      correctAnswer: "Range = Maximum - Minimum"
    },
    {
      questionText: "What does the symbol 'σ²' represent in statistics?",
      options: ["Variance", "Standard Deviation", "Mean", "Correlation"],
      correctAnswer: "Variance"
    },
    {
      questionText: "What is the formula for variance in a population?",
      options: ["σ² = Σ(X - μ)² / N", "σ² = Σ(x - x̄)² / n", "σ² = Σ(X) / Σ(x²)", "σ² = Σx / ΣX"],
      correctAnswer: "σ² = Σ(X - μ)² / N"
    },
    {
      questionText: "How is the standard deviation of a population calculated?",
      options: ["σ = √(Σ(X - μ)² / N)", "σ = Σ(x - x̄) / n", "σ = Σx / Σn", "σ = Σ(x)² / Σ(x̄)"],
      correctAnswer: "σ = √(Σ(X - μ)² / N)"
    },
    {
      questionText: "What is the formula for the correlation coefficient (r)?",
      options: ["r = Σ(x - x̄)(y - ȳ) / √[Σ(x - x̄)² * Σ(y - ȳ)²]", "r = Σx / Σy", "r = Σ(X)² / Σ(x)", "r = Σ(x - μ)² / N"],
      correctAnswer: "r = Σ(x - x̄)(y - ȳ) / √[Σ(x - x̄)² * Σ(y - ȳ)²]"
    },
    {
      questionText: "Which formula is used to calculate the sample variance?",
      options: ["s² = Σ(x - x̄)² / (n - 1)", "s² = Σ(X - μ)² / N", "s² = Σ(x) / Σ(x²)", "s² = Σ(x - x̄)² / n"],
      correctAnswer: "s² = Σ(x - x̄)² / (n - 1)"
    },
    {
      questionText: "How is a proportion represented in a dataset?",
      options: ["p = x / n", "p = ΣX / ΣN", "p = Σ(x - μ) / ΣN", "p = Σ(x²) / Σ(x)"],
      correctAnswer: "p = x / n"
    },
    {
      questionText: "What is the formula to calculate the probability of an event?",
      options: ["P = favorable outcomes / total outcomes", "P = Σx / Σn", "P = Σ(x - x̄) / ΣN", "P = Σ(X)² / N"],
      correctAnswer: "P = favorable outcomes / total outcomes"
    },
    {
      questionText: "Which formula is used to calculate the z-score of a value?",
      options: ["z = (X - μ) / σ", "z = Σ(x - x̄)² / n", "z = Σx / Σn", "z = Σ(x) / Σ(x̄)"],
      correctAnswer: "z = (X - μ) / σ"
    },
    {
      questionText: "What does the symbol 'n' represent in sampling?",
      options: ["Sample size", "Population size", "Mean", "Variance"],
      correctAnswer: "Sample size"
    },
    {
      questionText: "What is the formula for the coefficient of determination (R²)?",
      options: ["R² = SSR / SST", "R² = Σ(x - x̄) / Σ(y - ȳ)", "R² = ΣX / ΣY", "R² = Σ(X - μ) / N"],
      correctAnswer: "R² = SSR / SST"
    },
    {
      questionText: "Which formula is used to calculate the slope of a regression line?",
      options: ["b₁ = Σ(x - x̄)(y - ȳ) / Σ(x - x̄)²", "b₁ = Σ(X) / Σ(Y)", "b₁ = Σ(x) / Σ(x²)", "b₁ = Σ(X - μ)² / N"],
      correctAnswer: "b₁ = Σ(x - x̄)(y - ȳ) / Σ(x - x̄)²"
    },
    {
      questionText: "What is the formula for the residual value in regression?",
      options: ["Residual = Y - Ŷ", "Residual = Σ(X - μ) / N", "Residual = Σ(Y) / Σ(X)", "Residual = Σ(x - x̄)² / n"],
      correctAnswer: "Residual = Y - Ŷ"
    }        
  ]
  const PASQuestions=[
    {
      questionText: "What does the term 'population' refer to in statistics?",
      options: ["The entire group being studied", "A small group selected for analysis", "A random subset of data", "A formula for calculations"],
      correctAnswer: "The entire group being studied"
    },
    {
      questionText: "Which term refers to a smaller group selected from the population for analysis?",
      options: ["Sample", "Census", "Statistic", "Parameter"],
      correctAnswer: "Sample"
    },
    {
      questionText: "What is the main difference between a census and a sample?",
      options: ["A census studies the entire population, while a sample studies part of it", "A census is always random, while a sample is not", "A census is based on formulas, while a sample uses data", "A census is only used for small populations"],
      correctAnswer: "A census studies the entire population, while a sample studies part of it"
    },
    {
      questionText: "What is the purpose of sampling in statistics?",
      options: ["To study a subset of the population when studying the whole population is not feasible", "To calculate probabilities directly", "To replace the need for statistical formulas", "To avoid studying the population"],
      correctAnswer: "To study a subset of the population when studying the whole population is not feasible"
    },
    {
      questionText: "Which of the following is an example of random sampling?",
      options: ["Selecting names from a hat", "Choosing the first 10 students in a classroom", "Asking volunteers to participate", "Picking every third person in a list"],
      correctAnswer: "Selecting names from a hat"
    },
    {
      questionText: "In which type of sampling is the population divided into groups, and a sample is randomly selected from each group?",
      options: ["Stratified sampling", "Cluster sampling", "Systematic sampling", "Convenience sampling"],
      correctAnswer: "Stratified sampling"
    },
    {
      questionText: "Which formula is used to calculate the sample proportion?",
      options: ["p = x / n", "p = ΣX / ΣN", "p = Σ(x - μ) / ΣN", "p = Σ(x) / Σn"],
      correctAnswer: "p = x / n"
    },
    {
      questionText: "What is the main goal of using a stratified sample?",
      options: ["To ensure representation from specific subgroups in the population", "To save time by studying a smaller group", "To randomly select individuals without bias", "To avoid the need for statistical analysis"],
      correctAnswer: "To ensure representation from specific subgroups in the population"
    },
    {
      questionText: "What does a parameter represent in a population?",
      options: ["A fixed value that describes a characteristic of the population", "A changing value that depends on the sample size", "The total size of the population", "A random value calculated from the sample"],
      correctAnswer: "A fixed value that describes a characteristic of the population"
    },
    {
      questionText: "What does the term 'sampling error' refer to?",
      options: ["The difference between a sample statistic and a population parameter", "An error in collecting data from the population", "An error caused by incorrect formulas", "An error in choosing the sample size"],
      correctAnswer: "The difference between a sample statistic and a population parameter"
    },
    {
      questionText: "Which type of sampling involves selecting every nth individual from a list?",
      options: ["Systematic sampling", "Random sampling", "Stratified sampling", "Cluster sampling"],
      correctAnswer: "Systematic sampling"
    },
    {
      questionText: "What is the population size if a census is conducted?",
      options: ["The entire population", "A random sample", "A specific subgroup", "Only 10% of the population"],
      correctAnswer: "The entire population"
    },
    {
      questionText: "What is a biased sample?",
      options: ["A sample that does not represent the population accurately", "A sample selected using random methods", "A sample that includes the entire population", "A sample that is free of error"],
      correctAnswer: "A sample that does not represent the population accurately"
    },
    {
      questionText: "Which type of sampling uses participants who are easiest to access?",
      options: ["Convenience sampling", "Systematic sampling", "Cluster sampling", "Random sampling"],
      correctAnswer: "Convenience sampling"
    },
    {
      questionText: "What is the term for dividing a population into clusters and then randomly selecting entire clusters to study?",
      options: ["Cluster sampling", "Stratified sampling", "Systematic sampling", "Quota sampling"],
      correctAnswer: "Cluster sampling"
    },
    {
      questionText: "If a population has 1,000 individuals and 100 are sampled, what is the sampling fraction?",
      options: ["10%", "1%", "20%", "100%"],
      correctAnswer: "10%"
    },
    {
      questionText: "What is the main purpose of random sampling?",
      options: ["To reduce bias", "To increase sample size", "To avoid using formulas", "To study the entire population"],
      correctAnswer: "To reduce bias"
    },
    {
      questionText: "What does the term 'representative sample' mean?",
      options: ["A sample that accurately reflects the characteristics of the population", "A sample chosen randomly without bias", "A sample that includes all subgroups equally", "A sample with an equal number of participants"],
      correctAnswer: "A sample that accurately reflects the characteristics of the population"
    },
    {
      questionText: "What does the term 'sampling frame' refer to?",
      options: ["A list of individuals from which the sample is selected", "The total number of samples used", "The method used to collect data", "The size of the population"],
      correctAnswer: "A list of individuals from which the sample is selected"
    },
    {
      questionText: "Which method ensures each member of the population has an equal chance of being selected?",
      options: ["Simple random sampling", "Systematic sampling", "Quota sampling", "Judgmental sampling"],
      correctAnswer: "Simple random sampling"
    },
    {
      questionText: "What is a non-sampling error?",
      options: ["An error caused by data collection mistakes", "An error in calculating probabilities", "An error due to selecting a small sample size", "An error in the sampling frame"],
      correctAnswer: "An error caused by data collection mistakes"
    },
    {
      questionText: "What does 'finite population' mean?",
      options: ["A population with a fixed, countable number of elements", "A population with an infinite number of elements", "A population that changes over time", "A population studied using random sampling"],
      correctAnswer: "A population with a fixed, countable number of elements"
    },
    {
      questionText: "What is the formula to calculate the population proportion?",
      options: ["P = X / N", "P = Σ(x) / n", "P = Σ(X - μ)² / N", "P = Σ(X) / Σ(n)"],
      correctAnswer: "P = X / N"
    },
    {
      questionText: "What is the main disadvantage of a census?",
      options: ["It is time-consuming and expensive", "It always contains sampling errors", "It is only used for small populations", "It does not include random sampling"],
      correctAnswer: "It is time-consuming and expensive"
    },
    {
      questionText: "What does the term 'sampling variability' refer to?",
      options: ["The natural differences in results between samples", "Errors made during data collection", "Using different sampling frames", "Differences between population and sample means"],
      correctAnswer: "The natural differences in results between samples"
    },
    {
      questionText: "Which sampling method is most appropriate for studying a large, geographically spread population?",
      options: ["Cluster sampling", "Stratified sampling", "Simple random sampling", "Quota sampling"],
      correctAnswer: "Cluster sampling"
    },
    {
      questionText: "What is a key feature of stratified sampling?",
      options: ["The population is divided into subgroups, and random samples are taken from each subgroup", "Only one subgroup is studied", "The first individual is selected randomly, and the rest follow a pattern", "Every member of the population is included"],
      correctAnswer: "The population is divided into subgroups, and random samples are taken from each subgroup"
    },
    {
      questionText: "If the population mean is 50 and the sample mean is 48, what is the sampling error?",
      options: ["2", "50", "48", "98"],
      correctAnswer: "2"
    },
    {
      questionText: "Which term describes a sample chosen by the researcher based on their judgment?",
      options: ["Judgmental sampling", "Random sampling", "Quota sampling", "Stratified sampling"],
      correctAnswer: "Judgmental sampling"
    },
    {
      questionText: "What is the formula for calculating the sample size?",
      options: ["n = Z² * p * (1 - p) / E²", "n = Σ(x - x̄)² / N", "n = X / N", "n = Σ(x) / Σ(X)"],
      correctAnswer: "n = Z² * p * (1 - p) / E²"
    },
    {
      questionText: "What is the primary advantage of sampling over a census?",
      options: ["It is less expensive and quicker", "It includes every member of the population", "It eliminates the need for data collection", "It avoids sampling errors"],
      correctAnswer: "It is less expensive and quicker"
    },
    {
      questionText: "Which term describes data collected from an entire population?",
      options: ["Census", "Sample", "Cluster", "Strata"],
      correctAnswer: "Census"
    },
    {
      questionText: "In statistics, what is 'precision' related to sampling?",
      options: ["The closeness of a sample estimate to the true population value", "The accuracy of data collection", "The size of the sample used", "The variability within the population"],
      correctAnswer: "The closeness of a sample estimate to the true population value"
    },
    {
      questionText: "What does the symbol 'N' typically represent in population studies?",
      options: ["Population size", "Sample size", "Standard deviation", "Proportion"],
      correctAnswer: "Population size"
    },
    {
      questionText: "What is 'oversampling' in research?",
      options: ["Including more participants from specific groups to ensure representation", "Taking a larger sample than the population size", "Randomly selecting participants multiple times", "Avoiding certain groups in sampling"],
      correctAnswer: "Including more participants from specific groups to ensure representation"
    },
    {
      questionText: "Which type of sampling is prone to high levels of bias?",
      options: ["Convenience sampling", "Stratified sampling", "Random sampling", "Cluster sampling"],
      correctAnswer: "Convenience sampling"
    },
    {
      questionText: "What does 'random sampling' help achieve?",
      options: ["Unbiased representation of the population", "Selection of specific subgroups", "Collection of all data in clusters", "Avoidance of sampling errors"],
      correctAnswer: "Unbiased representation of the population"
    },
    {
      questionText: "If 60% of a population prefers a product, what is the proportion?",
      options: ["0.6", "6", "60", "600"],
      correctAnswer: "0.6"
    },
    {
      questionText: "What is a key disadvantage of convenience sampling?",
      options: ["It may not represent the population accurately", "It is very time-consuming", "It includes every member of the population", "It is difficult to conduct"],
      correctAnswer: "It may not represent the population accurately"
    },
    {  
      questionText: "What does the term 'population' refer to in statistics?",  
      options: ["The entire group being studied", "A subset of the group being studied", "Only people in a survey", "The total number of surveys conducted"],  
      correctAnswer: "The entire group being studied"  
  },  
  {  
      questionText: "What is the main difference between population and sample?",  
      options: ["Population includes everyone, while sample is a smaller group", "Population is for surveys only, while sample is for experiments", "Population uses random selection, sample does not", "Population is always larger than the sample"],  
      correctAnswer: "Population includes everyone, while sample is a smaller group"  
  },  
  {  
      questionText: "Which sampling method divides a population into groups and samples some groups entirely?",  
      options: ["Cluster sampling", "Systematic sampling", "Simple random sampling", "Quota sampling"],  
      correctAnswer: "Cluster sampling"  
  },  
  {  
      questionText: "In random sampling, what ensures unbiased results?",  
      options: ["Each member of the population has an equal chance of being selected", "Samples are selected based on convenience", "Only specific groups are chosen", "Participants are selected by researchers' judgment"],  
      correctAnswer: "Each member of the population has an equal chance of being selected"  
  },  
  {  
      questionText: "If a researcher surveys every 10th person on a list, which method is used?",  
      options: ["Systematic sampling", "Random sampling", "Cluster sampling", "Quota sampling"],  
      correctAnswer: "Systematic sampling"  
  },  
  {  
      questionText: "What is a census?",  
      options: ["Data collection from the entire population", "Data collection from a sample", "Data collection from a specific group", "Data collection using random selection"],  
      correctAnswer: "Data collection from the entire population"  
  },  
  {  
      questionText: "Why is sampling used instead of a census in large populations?",  
      options: ["It is faster and less expensive", "It avoids sampling errors", "It includes everyone in the population", "It provides more accurate results"],  
      correctAnswer: "It is faster and less expensive"  
  },  
  {  
      questionText: "What is the main purpose of stratified sampling?",  
      options: ["To ensure subgroups are represented proportionally", "To sample entire clusters of a population", "To select participants based on convenience", "To avoid the use of sampling frames"],  
      correctAnswer: "To ensure subgroups are represented proportionally"  
  },  
  {  
      questionText: "In a sample size of 100 out of a population of 1,000, what is the sampling fraction?",  
      options: ["10%", "20%", "5%", "50%"],  
      correctAnswer: "10%"  
  },  
  {  
      questionText: "What does the term 'non-response bias' mean?",  
      options: ["Bias caused by participants not responding to a survey", "Bias caused by using a small sample size", "Bias caused by random selection", "Bias caused by errors in calculations"],  
      correctAnswer: "Bias caused by participants not responding to a survey"  
  },  
  {  
      questionText: "Which sampling method focuses on dividing a population into similar groups based on characteristics?",  
      options: ["Stratified sampling", "Convenience sampling", "Cluster sampling", "Random sampling"],  
      correctAnswer: "Stratified sampling"  
  }        
  ]
  const RACQuestions=[
    {  
      questionText: "What does correlation measure in statistics?",  
      options: ["The strength and direction of a relationship between two variables", "The mean of two variables", "The difference between two variables", "The causation between two variables"],  
      correctAnswer: "The strength and direction of a relationship between two variables"  
  },  
  {  
      questionText: "Which of the following indicates a perfect positive correlation?",  
      options: ["+1", "0", "-1", "0.5"],  
      correctAnswer: "+1"  
  },  
  {  
      questionText: "If the correlation coefficient is -0.9, what type of relationship exists between two variables?",  
      options: ["Strong negative correlation", "Weak negative correlation", "No correlation", "Positive correlation"],  
      correctAnswer: "Strong negative correlation"  
  },  
  {  
      questionText: "What does a correlation coefficient of 0 imply?",  
      options: ["No relationship between the variables", "Perfect positive relationship", "Perfect negative relationship", "A strong linear relationship"],  
      correctAnswer: "No relationship between the variables"  
  },  
  {  
      questionText: "What is the range of the Pearson correlation coefficient?",  
      options: ["-1 to +1", "0 to 1", "-1 to 0", "-2 to +2"],  
      correctAnswer: "-1 to +1"  
  },  
  {  
      questionText: "What is the formula to calculate the slope (b) in linear regression?",  
      options: ["b = Σ(x - x̄)(y - ȳ) / Σ(x - x̄)^2", "b = Σ(x + y) / Σ(x + y)^2", "b = Σ(x - y) / Σ(x + y)^2", "b = Σ(x * y) / Σx"],  
      correctAnswer: "b = Σ(x - x̄)(y - ȳ) / Σ(x - x̄)^2"  
  },  
  {  
      questionText: "In the regression equation y = mx + c, what does 'm' represent?",  
      options: ["The slope of the line", "The y-intercept", "The independent variable", "The dependent variable"],  
      correctAnswer: "The slope of the line"  
  },  
  {  
      questionText: "In regression analysis, the variable we are trying to predict is called?",  
      options: ["Dependent variable", "Independent variable", "Regression coefficient", "Correlation coefficient"],  
      correctAnswer: "Dependent variable"  
  },  
  {  
      questionText: "Which graph is typically used to visualize correlation?",  
      options: ["Scatter plot", "Bar chart", "Pie chart", "Histogram"],  
      correctAnswer: "Scatter plot"  
  },  
  {  
      questionText: "What does it mean if points on a scatter plot are close to a straight line?",  
      options: ["There is a strong linear relationship", "There is no relationship", "The variables are unrelated", "The data is skewed"],  
      correctAnswer: "There is a strong linear relationship"  
  },  
  {  
      questionText: "What is the correlation coefficient of a perfect negative relationship?",  
      options: ["-1", "+1", "0", "-0.5"],  
      correctAnswer: "-1"  
  },  
  {  
      questionText: "If a scatter plot shows no apparent pattern, what can we conclude?",  
      options: ["There is no correlation between the variables", "There is a strong positive correlation", "There is a strong negative correlation", "There is a linear relationship"],  
      correctAnswer: "There is no correlation between the variables"  
  },  
  {  
      questionText: "What does the y-intercept in a regression equation represent?",  
      options: ["The value of y when x is 0", "The value of x when y is 0", "The correlation coefficient", "The slope of the line"],  
      correctAnswer: "The value of y when x is 0"  
  },  
  {  
      questionText: "What does a coefficient of determination (R²) measure?",  
      options: ["The proportion of variance explained by the regression model", "The strength of the correlation", "The slope of the regression line", "The intercept of the regression line"],  
      correctAnswer: "The proportion of variance explained by the regression model"  
  },  
  {  
      questionText: "Which of the following is an example of a dependent variable in regression?",  
      options: ["Exam scores when predicting performance based on study hours", "Number of study hours", "Average age of students", "Class size"],  
      correctAnswer: "Exam scores when predicting performance based on study hours"  
  },  
  {  
      questionText: "If the slope in a regression equation is 0, what does this imply?",  
      options: ["There is no relationship between the variables", "There is a perfect positive correlation", "The y-intercept is undefined", "The variables are inversely related"],  
      correctAnswer: "There is no relationship between the variables"  
  },  
  {  
      questionText: "What is the primary purpose of regression analysis?",  
      options: ["To predict the value of one variable based on another", "To calculate means", "To identify outliers", "To create histograms"],  
      correctAnswer: "To predict the value of one variable based on another"  
  },  
  {  
      questionText: "Which of the following is NOT a type of regression analysis?",  
      options: ["Cluster regression", "Linear regression", "Logistic regression", "Polynomial regression"],  
      correctAnswer: "Cluster regression"  
  },  
  {  
      questionText: "What does a residual represent in regression?",  
      options: ["The difference between observed and predicted values", "The slope of the regression line", "The y-intercept", "The correlation coefficient"],  
      correctAnswer: "The difference between observed and predicted values"  
  },  
  {  
      questionText: "If the correlation between two variables is 0.8, what can we say about the relationship?",  
      options: ["There is a strong positive correlation", "There is no correlation", "There is a strong negative correlation", "There is a weak positive correlation"],  
      correctAnswer: "There is a strong positive correlation"  
  }, 
  {  
    questionText: "Which variable in regression analysis is also known as the predictor?",  
    options: ["Independent variable", "Dependent variable", "Residual", "Correlation coefficient"],  
    correctAnswer: "Independent variable"  
},  
{  
    questionText: "If the points on a scatter plot form a downward slope, what type of correlation is this?",  
    options: ["Negative correlation", "Positive correlation", "No correlation", "Perfect correlation"],  
    correctAnswer: "Negative correlation"  
},  
{  
    questionText: "What does a correlation coefficient close to 0 indicate?",  
    options: ["Weak or no relationship between variables", "Strong positive correlation", "Strong negative correlation", "Perfect linear relationship"],  
    correctAnswer: "Weak or no relationship between variables"  
},  
{  
    questionText: "What does a positive slope in a regression line indicate?",  
    options: ["As one variable increases, the other also increases", "As one variable increases, the other decreases", "The variables are unrelated", "The line is horizontal"],  
    correctAnswer: "As one variable increases, the other also increases"  
},  
{  
    questionText: "Which formula calculates the Pearson correlation coefficient?",  
    options: ["r = Σ(x - x̄)(y - ȳ) / √Σ(x - x̄)²Σ(y - ȳ)²", "r = Σx + y / Σx²", "r = Σ(x + y)² / Σx", "r = Σ(x - y)² / Σy"],  
    correctAnswer: "r = Σ(x - x̄)(y - ȳ) / √Σ(x - x̄)²Σ(y - ȳ)²"  
},  
{  
    questionText: "In regression, what is the term for the predicted value of the dependent variable?",  
    options: ["Fitted value", "Residual", "Intercept", "Independent variable"],  
    correctAnswer: "Fitted value"  
},  
{  
    questionText: "What type of regression is used for binary outcomes?",  
    options: ["Logistic regression", "Linear regression", "Polynomial regression", "Multiple regression"],  
    correctAnswer: "Logistic regression"  
},  
{  
    questionText: "Which value of correlation coefficient indicates no relationship between variables?",  
    options: ["0", "1", "-1", "0.5"],  
    correctAnswer: "0"  
},  
{  
    questionText: "What does the regression line minimize in linear regression?",  
    options: ["The sum of squared residuals", "The slope of the line", "The y-intercept", "The correlation coefficient"],  
    correctAnswer: "The sum of squared residuals"  
},  
{  
    questionText: "If a regression model has multiple independent variables, what is it called?",  
    options: ["Multiple regression", "Simple regression", "Logistic regression", "Polynomial regression"],  
    correctAnswer: "Multiple regression"  
},  
{  
    questionText: "What is the primary assumption of linear regression?",  
    options: ["A linear relationship exists between variables", "Variables are normally distributed", "Variables are uncorrelated", "Variables have no outliers"],  
    correctAnswer: "A linear relationship exists between variables"  
},  
{  
    questionText: "If two variables have a correlation of +0.3, how strong is the relationship?",  
    options: ["Weak positive", "Strong positive", "No correlation", "Perfect correlation"],  
    correctAnswer: "Weak positive"  
},  
{  
    questionText: "What is the formula to predict y in a simple linear regression model?",  
    options: ["y = mx + c", "y = x/m + c", "y = x + mc", "y = mx"],  
    correctAnswer: "y = mx + c"  
},  
{  
    questionText: "Which statistical test is commonly used to test the significance of the correlation coefficient?",  
    options: ["t-test", "ANOVA", "Chi-square test", "Z-test"],  
    correctAnswer: "t-test"  
},  
{  
    questionText: "In regression, what does an R² value of 0.85 indicate?",  
    options: ["85% of the variance in the dependent variable is explained by the independent variable", "85% correlation between variables", "No relationship between variables", "A weak linear relationship"],  
    correctAnswer: "85% of the variance in the dependent variable is explained by the independent variable"  
},  
{  
    questionText: "What is an outlier in a scatter plot?",  
    options: ["A data point far from the others", "The midpoint of the data", "The highest value in the data", "A random data point"],  
    correctAnswer: "A data point far from the others"  
},  
{  
    questionText: "Which of the following is a non-linear regression method?",  
    options: ["Polynomial regression", "Linear regression", "Multiple regression", "Simple regression"],  
    correctAnswer: "Polynomial regression"  
},  
{  
    questionText: "What does a horizontal regression line indicate?",  
    options: ["No relationship between variables", "Strong positive correlation", "Strong negative correlation", "Linear relationship"],  
    correctAnswer: "No relationship between variables"  
},  
{  
    questionText: "Which of the following is NOT an assumption of linear regression?",  
    options: ["Variables have a linear relationship", "Residuals are normally distributed", "Correlation coefficient is positive", "Homoscedasticity is present"],  
    correctAnswer: "Correlation coefficient is positive"  
},  
{  
    questionText: "If the correlation coefficient between X and Y is 0.95, what can we conclude?",  
    options: ["Strong positive linear relationship", "Strong negative linear relationship", "No relationship", "Weak positive relationship"],  
    correctAnswer: "Strong positive linear relationship"  
},  
{  
    questionText: "What does the slope of the regression line represent?",  
    options: ["Change in the dependent variable for a unit change in the independent variable", "The intercept of the line", "Residual variance", "The y-axis value"],  
    correctAnswer: "Change in the dependent variable for a unit change in the independent variable"  
},  
{  
    questionText: "Which variable is the 'response variable' in regression analysis?",  
    options: ["Dependent variable", "Independent variable", "Slope", "Residual"],  
    correctAnswer: "Dependent variable"  
},  
{  
    questionText: "What does the term 'homoscedasticity' mean in regression?",  
    options: ["Equal variance of residuals across all levels of the independent variable", "Non-linear relationship between variables", "Equal values for independent variables", "Residuals are uncorrelated"],  
    correctAnswer: "Equal variance of residuals across all levels of the independent variable"  
},  
{  
    questionText: "Which value of correlation coefficient indicates the strongest relationship?",  
    options: ["-1", "+1", "0", "0.5"],  
    correctAnswer: "+1"  
},  
{  
    questionText: "In a scatter plot, what does a cluster of points in the top right corner represent?",  
    options: ["Strong positive correlation", "Strong negative correlation", "No correlation", "Weak correlation"],  
    correctAnswer: "Strong positive correlation"  
},  
{  
    questionText: "What is the residual sum of squares in regression analysis?",  
    options: ["The total of squared differences between observed and predicted values", "The slope of the regression line", "The total of squared independent variables", "The correlation coefficient"],  
    correctAnswer: "The total of squared differences between observed and predicted values"  
},  
{  
    questionText: "What is the role of the intercept in a regression equation?",  
    options: ["It represents the predicted value of y when x is 0", "It represents the slope of the regression line", "It measures the correlation between variables", "It predicts the variance of the dependent variable"],  
    correctAnswer: "It represents the predicted value of y when x is 0"  
},  
{  
    questionText: "What does it mean if residuals form a random pattern in a residual plot?",  
    options: ["The regression model fits the data well", "The model is overfitting the data", "The correlation is perfect", "The data has a strong negative trend"],  
    correctAnswer: "The regression model fits the data well"  
},  
{  
    questionText: "What does multicollinearity refer to in regression?",  
    options: ["High correlation between independent variables", "High correlation between dependent and independent variables", "No correlation between variables", "A non-linear relationship"],  
    correctAnswer: "High correlation between independent variables"  
},  
{  
    questionText: "If a regression analysis has one dependent and one independent variable, what type of regression is it?",  
    options: ["Simple linear regression", "Multiple regression", "Logistic regression", "Non-linear regression"],  
    correctAnswer: "Simple linear regression"  
}  
  ]
  const sta121Questions=[
    {  
      questionText: "What does the symbol Σ represent in statistics?",  
      options: ["Summation", "Standard deviation", "Variance", "Population size"],  
      correctAnswer: "Summation"  
  },  
  {  
      questionText: "Which formula calculates the mean of a dataset?",  
      options: ["Σx / n", "Σx² / n", "(Σx)² / n", "Σx - n"],  
      correctAnswer: "Σx / n"  
  },  
  {  
      questionText: "In the formula for variance, what does n represent?",  
      options: ["Number of observations", "Sum of values", "Mean value", "Standard deviation"],  
      correctAnswer: "Number of observations"  
  },  
  {  
      questionText: "What is the formula for standard deviation?",  
      options: ["√(Σ(x - x̄)² / n)", "Σ(x - x̄)²", "Σx / n", "(Σx)² / n"],  
      correctAnswer: "√(Σ(x - x̄)² / n)"  
  },  
  {  
      questionText: "What does the p-value in hypothesis testing represent?",  
      options: ["Probability of observing the data under the null hypothesis", "Standard deviation of the sample", "Sample mean", "Variance of the data"],  
      correctAnswer: "Probability of observing the data under the null hypothesis"  
  },  
  {  
      questionText: "In the formula for z-score, what does x̄ represent?",  
      options: ["Sample mean", "Population mean", "Standard deviation", "Variance"],  
      correctAnswer: "Sample mean"  
  },  
  {  
      questionText: "Which formula is used to calculate the margin of error in confidence intervals?",  
      options: ["z * (σ / √n)", "Σx / n", "Σ(x - x̄)² / n", "(Σx)² / n"],  
      correctAnswer: "z * (σ / √n)"  
  },  
  {  
      questionText: "What does a confidence interval represent?",  
      options: ["Range of values likely to contain the population parameter", "Variance of the population", "Difference between mean and median", "Sample standard deviation"],  
      correctAnswer: "Range of values likely to contain the population parameter"  
  },  
  {  
      questionText: "Which formula calculates the test statistic for a t-test?",  
      options: ["(x̄ - μ) / (s / √n)", "Σx / n", "Σ(x - x̄)² / n", "z * (σ / √n)"],  
      correctAnswer: "(x̄ - μ) / (s / √n)"  
  },  
  {  
      questionText: "What does the symbol μ represent in statistics?",  
      options: ["Population mean", "Sample mean", "Standard deviation", "Variance"],  
      correctAnswer: "Population mean"  
  },  
  {  
    questionText: "Which formula represents the standard error of the mean?",  
    options: ["σ / √n", "Σx / n", "(Σx)² / n", "Σ(x - x̄)² / n"],  
    correctAnswer: "σ / √n"  
},  
{  
    questionText: "In hypothesis testing, what is the null hypothesis usually denoted as?",  
    options: ["H₀", "H₁", "p", "x̄"],  
    correctAnswer: "H₀"  
},  
{  
    questionText: "What does the symbol σ² represent?",  
    options: ["Variance", "Standard deviation", "Population mean", "Sample size"],  
    correctAnswer: "Variance"  
},  
{  
    questionText: "What is the formula for calculating the z-score?",  
    options: ["(x - μ) / σ", "(x - x̄) / s", "(Σx)² / n", "Σx / n"],  
    correctAnswer: "(x - μ) / σ"  
},  
{  
    questionText: "Which value is typically used as the threshold for statistical significance?",  
    options: ["0.05", "0.01", "0.1", "1"],  
    correctAnswer: "0.05"  
},  
{  
    questionText: "What is the formula for the sample variance?",  
    options: ["Σ(x - x̄)² / (n - 1)", "Σx / n", "Σ(x - x̄)² / n", "Σx² / n"],  
    correctAnswer: "Σ(x - x̄)² / (n - 1)"  
},  
{  
    questionText: "What is the formula to calculate the range of a dataset?",  
    options: ["Max value - Min value", "Σx / n", "(Σx)² / n", "Σ(x - x̄)² / n"],  
    correctAnswer: "Max value - Min value"  
},  
{  
    questionText: "What is the purpose of a p-value in hypothesis testing?",  
    options: ["To assess the strength of evidence against the null hypothesis", "To calculate the mean", "To find the standard deviation", "To measure the range"],  
    correctAnswer: "To assess the strength of evidence against the null hypothesis"  
},  
{  
    questionText: "What is the formula to calculate probability in simple events?",  
    options: ["Number of favorable outcomes / Total outcomes", "Σx / n", "x̄ - μ", "(x - x̄)² / n"],  
    correctAnswer: "Number of favorable outcomes / Total outcomes"  
},  
{  
    questionText: "Which formula represents the chi-square statistic?",  
    options: ["Σ((Observed - Expected)² / Expected)", "(x - μ) / σ", "Σx / n", "Σ(x - x̄)² / n"],  
    correctAnswer: "Σ((Observed - Expected)² / Expected)"  
},  
{  
    questionText: "What does the t-distribution account for compared to the z-distribution?",  
    options: ["Smaller sample sizes", "Larger sample sizes", "More variability", "None of the above"],  
    correctAnswer: "Smaller sample sizes"  
},  
{  
    questionText: "What does a 95% confidence interval imply?",  
    options: ["There is a 95% chance the true parameter lies within the interval", "The sample mean is 95% accurate", "The null hypothesis is true 95% of the time", "None of the above"],  
    correctAnswer: "There is a 95% chance the true parameter lies within the interval"  
},  
{  
    questionText: "In a normal distribution, what is the probability of values within 1 standard deviation of the mean?",  
    options: ["68%", "95%", "99.7%", "50%"],  
    correctAnswer: "68%"  
},  
{  
    questionText: "What formula is used to find the mean of a weighted dataset?",  
    options: ["Σ(wx) / Σw", "Σx / n", "(Σx)² / n", "Σ(x - x̄)² / n"],  
    correctAnswer: "Σ(wx) / Σw"  
},  
{  
    questionText: "What is the critical value of z for a 99% confidence interval?",  
    options: ["2.576", "1.96", "3.00", "2.33"],  
    correctAnswer: "2.576"  
},  
{  
    questionText: "What does the F-statistic test in ANOVA?",  
    options: ["Variances between groups", "Sample means", "Correlation", "Regression coefficients"],  
    correctAnswer: "Variances between groups"  
},  
{  
    questionText: "What is the purpose of the central limit theorem?",  
    options: ["To describe the distribution of sample means", "To measure standard deviation", "To define variance", "To find probabilities"],  
    correctAnswer: "To describe the distribution of sample means"  
},  
{  
    questionText: "What does the formula x̄ ± z * (σ / √n) calculate?",  
    options: ["Confidence interval for the mean", "Sample variance", "Population standard deviation", "T-test statistic"],  
    correctAnswer: "Confidence interval for the mean"  
},  
{  
    questionText: "What does the alternative hypothesis (H₁) represent?",  
    options: ["A statement indicating a difference or effect exists", "No change or effect", "Population mean equals sample mean", "None of the above"],  
    correctAnswer: "A statement indicating a difference or effect exists"  
},  
{  
    questionText: "What formula represents the coefficient of variation?",  
    options: ["(Standard deviation / Mean) × 100", "σ / √n", "Σx / n", "Σ(x - x̄)² / n"],  
    correctAnswer: "(Standard deviation / Mean) × 100"  
},  
{  
    questionText: "What does the z-test compare?",  
    options: ["A sample mean to a population mean", "Two sample variances", "Two sample means", "A variance to a mean"],  
    correctAnswer: "A sample mean to a population mean"  
},  
{  
    questionText: "What does the slope (b₁) in a regression equation represent?",  
    options: ["The rate of change of y with respect to x", "The intercept value", "Variance of x", "Correlation between x and y"],  
    correctAnswer: "The rate of change of y with respect to x"  
},  
{  
    questionText: "What is the formula for calculating a proportion?",  
    options: ["x / n", "Σx / n", "(Σx)² / n", "Σ(x - x̄)² / n"],  
    correctAnswer: "x / n"  
},
{  
  questionText: "What is the term for the entire group of individuals or objects under study?",  
  options: ["Population", "Sample", "Census", "Subset"],  
  correctAnswer: "Population"  
},  
{  
  questionText: "What is a subset of the population called?",  
  options: ["Sample", "Parameter", "Statistic", "Census"],  
  correctAnswer: "Sample"  
},  
{  
  questionText: "What is the primary purpose of sampling?",  
  options: ["To represent the population", "To calculate the mean", "To test hypotheses", "To measure variance"],  
  correctAnswer: "To represent the population"  
},  
{  
  questionText: "Which sampling method selects participants randomly from the population?",  
  options: ["Simple random sampling", "Systematic sampling", "Stratified sampling", "Cluster sampling"],  
  correctAnswer: "Simple random sampling"  
},  
{  
  questionText: "What is the term for data collected from the entire population?",  
  options: ["Census", "Sample", "Experiment", "Survey"],  
  correctAnswer: "Census"  
},  
{  
  questionText: "What is the difference between a parameter and a statistic?",  
  options: ["A parameter describes a population, a statistic describes a sample", "A parameter describes a sample, a statistic describes a population", "Both describe populations", "Both describe samples"],  
  correctAnswer: "A parameter describes a population, a statistic describes a sample"  
},  
{  
  questionText: "Which of the following is a non-probability sampling method?",  
  options: ["Convenience sampling", "Simple random sampling", "Stratified sampling", "Systematic sampling"],  
  correctAnswer: "Convenience sampling"  
},  
{  
  questionText: "What is the term for the error caused by observing a sample instead of the entire population?",  
  options: ["Sampling error", "Bias", "Non-sampling error", "Variance"],  
  correctAnswer: "Sampling error"  
},  
{  
  questionText: "In systematic sampling, how is the sampling interval determined?",  
  options: ["Population size / Sample size", "Sample size / Population size", "Square root of population size", "Square root of sample size"],  
  correctAnswer: "Population size / Sample size"  
},  
{  
  questionText: "What type of sampling divides the population into groups before sampling?",  
  options: ["Stratified sampling", "Simple random sampling", "Systematic sampling", "Convenience sampling"],  
  correctAnswer: "Stratified sampling"  
},  
{  
  questionText: "Which sampling method is used when the population is naturally divided into groups?",  
  options: ["Cluster sampling", "Stratified sampling", "Systematic sampling", "Simple random sampling"],  
  correctAnswer: "Cluster sampling"  
},  
{  
  questionText: "What is the purpose of stratified sampling?",  
  options: ["To ensure representation of all subgroups", "To reduce sample size", "To increase randomness", "To eliminate sampling error"],  
  correctAnswer: "To ensure representation of all subgroups"  
},  
{  
  questionText: "In cluster sampling, what is selected first?",  
  options: ["Groups", "Individuals", "Samples", "Parameters"],  
  correctAnswer: "Groups"  
},  
{  
  questionText: "What is the term for a variable that describes a sample?",  
  options: ["Statistic", "Parameter", "Population", "Strata"],  
  correctAnswer: "Statistic"  
},  
{  
  questionText: "Which of the following is an example of a sampling frame?",  
  options: ["A list of all students in a university", "A single student", "The average grade of students", "The total number of students"],  
  correctAnswer: "A list of all students in a university"  
},  
{  
  questionText: "What is the formula for sampling proportion?",  
  options: ["Sample size / Population size", "Population size / Sample size", "(Σx) / n", "(x̄ - μ) / σ"],  
  correctAnswer: "Sample size / Population size"  
},  
{  
  questionText: "Which term describes the tendency of a sample statistic to overestimate or underestimate the population parameter?",  
  options: ["Bias", "Sampling error", "Variance", "Error margin"],  
  correctAnswer: "Bias"  
},  
{  
  questionText: "What type of sampling uses personal judgment to select samples?",  
  options: ["Judgmental sampling", "Simple random sampling", "Cluster sampling", "Systematic sampling"],  
  correctAnswer: "Judgmental sampling"  
},  
{  
  questionText: "If a population has 500 individuals and a sample of 50 is chosen, what is the sampling fraction?",  
  options: ["10%", "50%", "5%", "20%"],  
  correctAnswer: "10%"  
},  
{  
  questionText: "Which sampling method is the most expensive to perform?",  
  options: ["Stratified sampling", "Cluster sampling", "Simple random sampling", "Convenience sampling"],  
  correctAnswer: "Stratified sampling"  
},  
{  
  questionText: "Which sampling method is the easiest to implement?",  
  options: ["Convenience sampling", "Simple random sampling", "Systematic sampling", "Cluster sampling"],  
  correctAnswer: "Convenience sampling"  
},  
{  
  questionText: "If a sample mean is used to estimate a population mean, what type of error could occur?",  
  options: ["Sampling error", "Non-sampling error", "Bias", "Measurement error"],  
  correctAnswer: "Sampling error"  
},  
{  
  questionText: "If a researcher uses the first 50 people who enter a room as a sample, which sampling method is this?",  
  options: ["Convenience sampling", "Simple random sampling", "Stratified sampling", "Systematic sampling"],  
  correctAnswer: "Convenience sampling"  
},  
{  
  questionText: "What is the primary goal of sampling in statistics?",  
  options: ["To make inferences about the population", "To calculate the median", "To test hypotheses", "To minimize standard deviation"],  
  correctAnswer: "To make inferences about the population"  
},  
{  
  questionText: "If every nth person in a list is selected, what type of sampling is this?",  
  options: ["Systematic sampling", "Stratified sampling", "Cluster sampling", "Simple random sampling"],  
  correctAnswer: "Systematic sampling"  
},  
{  
  questionText: "What is an advantage of stratified sampling over simple random sampling?",  
  options: ["More accurate representation of subgroups", "Less time-consuming", "Requires less data", "Easier to implement"],  
  correctAnswer: "More accurate representation of subgroups"  
},  
{  
  questionText: "Which of the following is a type of estimation?",  
  options: ["Numerical Estimate", "Point Estimate", "Intravals Estimate", "A good estimator"],  
  correctAnswer: "Stratified sampling"  
},  
{  
  questionText: "What is the difference between random sampling and systematic sampling?",  
  options: ["Random sampling selects any sample; systematic sampling uses intervals", "Systematic sampling is faster", "Random sampling requires a sampling frame", "Both are the same"],  
  correctAnswer: "Random sampling selects any sample; systematic sampling uses intervals"  
},  
{  
  questionText: "What is the advantage of cluster sampling over stratified sampling?",  
  options: ["It is less expensive", "It is more accurate", "It requires a sampling frame", "It minimizes bias"],  
  correctAnswer: "It is less expensive"  
},  
{  
  questionText: "What is the main drawback of convenience sampling?",  
  options: ["Bias", "Accuracy", "Time-consuming", "High cost"],  
  correctAnswer: "Bias"  
},  
{  
  questionText: "If a population has 1,000 members, and a sample size of 100 is selected using random sampling, what is the sampling proportion?",  
  options: ["10%", "5%", "50%", "25%"],  
  correctAnswer: "10%"  
},  
{  
  questionText: "Which sampling method uses strata to create homogeneity within groups?",  
  options: ["Stratified sampling", "Cluster sampling", "Systematic sampling", "Convenience sampling"],  
  correctAnswer: "Stratified sampling"  
},  
{  
  questionText: "What does the term 'correlation' describe in statistics?",  
  options: ["The relationship between two variables", "The average of two variables", "The difference between two variables", "The sum of two variables"],  
  correctAnswer: "The relationship between two variables"  
},  
{  
  questionText: "Which value of correlation coefficient indicates a perfect positive relationship?",  
  options: ["+1", "-1", "0", "+0.5"],  
  correctAnswer: "+1"  
},  
{  
  questionText: "What does a negative correlation coefficient mean?",  
  options: ["As one variable increases, the other decreases", "Both variables increase together", "Both variables decrease together", "There is no relationship"],  
  correctAnswer: "As one variable increases, the other decreases"  
},  
{  
  questionText: "What is the range of the correlation coefficient?",  
  options: ["-1 to +1", "0 to 1", "-∞ to +∞", "-2 to +2"],  
  correctAnswer: "-1 to +1"  
},  
{  
  questionText: "What does a correlation coefficient of 0 signify?",  
  options: ["No linear relationship", "Perfect positive relationship", "Perfect negative relationship", "Strong linear relationship"],  
  correctAnswer: "No linear relationship"  
},  
{  
  questionText: "What is the main purpose of regression analysis?",  
  options: ["To predict the value of a dependent variable based on an independent variable", "To calculate the average of a dataset", "To determine the range of a dataset", "To measure variability"],  
  correctAnswer: "To predict the value of a dependent variable based on an independent variable"  
},  
{  
  questionText: "Which variable is also called the predictor variable in regression?",  
  options: ["Independent variable", "Dependent variable", "Control variable", "Constant variable"],  
  correctAnswer: "Independent variable"  
},  
{  
  questionText: "What does the slope in a regression line represent?",  
  options: ["The change in the dependent variable for a one-unit change in the independent variable", "The value of the dependent variable when the independent variable is zero", "The range of the dependent variable", "The strength of the relationship"],  
  correctAnswer: "The change in the dependent variable for a one-unit change in the independent variable"  
},  
{  
  questionText: "What does the intercept in a regression equation indicate?",  
  options: ["The value of the dependent variable when the independent variable is zero", "The slope of the regression line", "The correlation coefficient", "The range of the dataset"],  
  correctAnswer: "The value of the dependent variable when the independent variable is zero"  
},  
{  
  questionText: "Which type of plot is commonly used to visualize the relationship between two variables?",  
  options: ["Scatter plot", "Bar chart", "Pie chart", "Histogram"],  
  correctAnswer: "Scatter plot"  
},  
{  
  questionText: "In a scatter plot, what does a downward slope suggest?",  
  options: ["A negative correlation", "A positive correlation", "No correlation", "A perfect correlation"],  
  correctAnswer: "A negative correlation"  
},  
{  
  questionText: "If the regression equation is Y = 2X + 3, what is Y when X = 4?",  
  options: ["11", "10", "8", "12"],  
  correctAnswer: "11"  
},  
{  
  questionText: "What does a high R² value indicate in regression?",  
  options: ["The regression model fits the data well", "The data is random", "The slope is steep", "The correlation is weak"],  
  correctAnswer: "The regression model fits the data well"  
},  
{  
  questionText: "What is the purpose of residual analysis in regression?",  
  options: ["To check the accuracy of predictions", "To calculate the slope of the line", "To measure the range of data", "To find the mean"],  
  correctAnswer: "To check the accuracy of predictions"  
},  
{  
  questionText: "What is multicollinearity in regression analysis?",  
  options: ["High correlation between independent variables", "High correlation between dependent variables", "Random relationship between variables", "No relationship between variables"],  
  correctAnswer: "High correlation between independent variables"  
},  
{  
  questionText: "In correlation, what does 'r = -0.8' suggest?",  
  options: ["A strong negative relationship", "A weak negative relationship", "No relationship", "A strong positive relationship"],  
  correctAnswer: "A strong negative relationship"  
},  
{  
  questionText: "Which type of regression involves one independent variable and one dependent variable?",  
  options: ["Simple linear regression", "Multiple regression", "Polynomial regression", "Logistic regression"],  
  correctAnswer: "Simple linear regression"  
},  
{  
  questionText: "Which method is used to estimate the parameters in a regression model?",  
  options: ["Ordinary Least Squares (OLS)", "Maximum Likelihood Estimation", "Gradient Descent", "Bayesian Estimation"],  
  correctAnswer: "Ordinary Least Squares (OLS)"  
},  
{  
  questionText: "What does it mean if a regression line has a slope of zero?",  
  options: ["No relationship between variables", "Perfect positive relationship", "Perfect negative relationship", "Strong linear relationship"],  
  correctAnswer: "No relationship between variables"  
},  
{  
  questionText: "What is the name of the statistical test used to assess the significance of the regression coefficients?",  
  options: ["t-test", "z-test", "Chi-square test", "F-test"],  
  correctAnswer: "t-test"  
},  
{  
  questionText: "What does it mean if the p-value of a regression coefficient is less than 0.05?",  
  options: ["The coefficient is statistically significant", "The model is invalid", "The coefficient is random", "The correlation is perfect"],  
  correctAnswer: "The coefficient is statistically significant"  
},  
{  
  questionText: "What type of variable is typically the response variable in regression?",  
  options: ["Dependent variable", "Independent variable", "Control variable", "Constant variable"],  
  correctAnswer: "Dependent variable"  
},  
{  
  questionText: "What is the primary purpose of a scatter plot in correlation analysis?",  
  options: ["To visualize the relationship between two variables", "To calculate the mean of the data", "To identify outliers", "To determine the range of the dataset"],  
  correctAnswer: "To visualize the relationship between two variables"  
},  
{  
  questionText: "What is the relationship between correlation and causation?",  
  options: ["Correlation does not imply causation", "Correlation always implies causation", "Causation always implies correlation", "There is no relationship between the two"],  
  correctAnswer: "Correlation does not imply causation"  
},
{  
  questionText: "What does a positive correlation coefficient indicate?",  
  options: ["As one variable increases, the other also increases", "As one variable increases, the other decreases", "No relationship between variables", "A perfect negative relationship"],  
  correctAnswer: "As one variable increases, the other also increases"  
},  
{  
  questionText: "Which statistical measure indicates the strength and direction of a linear relationship?",  
  options: ["Correlation coefficient", "Mean", "Median", "Variance"],  
  correctAnswer: "Correlation coefficient"  
},  
{  
  questionText: "What type of correlation exists when the data points in a scatter plot form a perfect straight line?",  
  options: ["Perfect correlation", "No correlation", "Weak correlation", "Random correlation"],  
  correctAnswer: "Perfect correlation"  
},  
{  
  questionText: "What is the main difference between correlation and regression?",  
  options: ["Correlation measures strength; regression predicts outcomes", "Regression measures strength; correlation predicts outcomes", "Both measure prediction", "Both measure strength"],  
  correctAnswer: "Correlation measures strength; regression predicts outcomes"  
},  
{  
  questionText: "Which regression model is used when the dependent variable is categorical?",  
  options: ["Logistic regression", "Simple linear regression", "Multiple regression", "Polynomial regression"],  
  correctAnswer: "Logistic regression"  
},  
{  
  questionText: "What does it mean if two variables have a correlation coefficient close to 0?",  
  options: ["There is little to no linear relationship", "There is a strong positive linear relationship", "There is a strong negative linear relationship", "The variables are independent"],  
  correctAnswer: "There is little to no linear relationship"  
},  
{  
  questionText: "What is the purpose of calculating the coefficient of determination (R²)?",  
  options: ["To measure how well the regression model explains the variability of the dependent variable", "To determine the slope of the regression line", "To calculate the mean of the dataset", "To check for multicollinearity"],  
  correctAnswer: "To measure how well the regression model explains the variability of the dependent variable"  
},  
{  
  questionText: "In regression, what is the name of the variable being predicted?",  
  options: ["Dependent variable", "Independent variable", "Control variable", "Predictor variable"],  
  correctAnswer: "Dependent variable"  
},  
{  
  questionText: "What does a correlation coefficient of -1 indicate?",  
  options: ["A perfect negative linear relationship", "A perfect positive linear relationship", "No relationship", "A weak negative linear relationship"],  
  correctAnswer: "A perfect negative linear relationship"  
}  
  ]


  const AMECQuestions=[
    {  
      questionText: "What is the smallest particle of an element that retains its chemical properties?",  
      options: ["Atom", "Molecule", "Compound", "Ion"],  
      correctAnswer: "Atom"  
    },  
    {  
      questionText: "Which of the following is a diatomic molecule?",  
      options: ["H2O", "O2", "CO2", "NaCl"],  
      correctAnswer: "O2"  
    },  
    {  
      questionText: "What type of bond is formed when atoms share electrons?",  
      options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],  
      correctAnswer: "Covalent bond"  
    },  
    {  
      questionText: "What is the azimuthal quantum number for an s-orbital?",  
      options: ["0", "1", "2", "3"],  
      correctAnswer: "0"  
    },  
    {  
      questionText: "Which element has the electronic configuration 1s2 2s2 2p6?",  
      options: ["Oxygen", "Neon", "Sodium", "Magnesium"],  
      correctAnswer: "Neon"  
    },  
    {  
      questionText: "What is the approximate atomic mass of Carbon?",  
      options: ["6 amu", "12 amu", "18 amu", "24 amu"],  
      correctAnswer: "12 amu"  
    },  
    {  
      questionText: "How many valence electrons does Chlorine have?",  
      options: ["5", "6", "7", "8"],  
      correctAnswer: "7"  
    },  
    {  
      questionText: "What is the electronic configuration of Sodium?",  
      options: ["1s2 2s2 2p6 3s1", "1s2 2s2 2p5", "1s2 2s2 2p6", "1s2 2s2"],  
      correctAnswer: "1s2 2s2 2p6 3s1"  
    },  
    {  
      questionText: "Which of these is a noble gas?",  
      options: ["Hydrogen", "Oxygen", "Neon", "Nitrogen"],  
      correctAnswer: "Neon"  
    },  
    {  
      questionText: "What is the periodic trend for atomic size across a period?",  
      options: ["Increases", "Decreases", "Remains constant", "Varies irregularly"],  
      correctAnswer: "Decreases"  
    },  
    {  
      questionText: "What does the azimuthal quantum number describe?",  
      options: ["Size of the orbital", "Shape of the orbital", "Orientation of the orbital", "Spin of the electron"],  
      correctAnswer: "Shape of the orbital"  
    },  
    {  
      questionText: "Which group of elements is known as the alkali metals?",  
      options: ["Group 1", "Group 2", "Group 17", "Group 18"],  
      correctAnswer: "Group 1"  
    },  
    {  
      questionText: "What is the electronic configuration of Magnesium?",  
      options: ["1s2 2s2 2p6 3s2", "1s2 2s2 2p6 3p1", "1s2 2s2 2p6 3p2", "1s2 2s2 2p6"],  
      correctAnswer: "1s2 2s2 2p6 3s2"  
    },  
    {  
      questionText: "What is the oxidation state of oxygen in water (H2O)?",  
      options: ["+1", "0", "-1", "-2"],  
      correctAnswer: "-2"  
    },  
    {  
      questionText: "Which element has the highest electronegativity?",  
      options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],  
      correctAnswer: "Fluorine"  
    },  
    {  
      questionText: "What is the chemical formula of Ammonia?",  
      options: ["NH3", "NH4", "NH2", "NH"],  
      correctAnswer: "NH3"  
    },  
    {  
      questionText: "Which of these is a compound?",  
      options: ["O2", "H2", "CO2", "N2"],  
      correctAnswer: "CO2"  
    },  
    {  
      questionText: "What is the maximum number of electrons in a p-orbital?",  
      options: ["2", "4", "6", "8"],  
      correctAnswer: "6"  
    },  
    {  
      questionText: "What is the atomic number of Carbon?",  
      options: ["4", "6", "8", "10"],  
      correctAnswer: "6"  
    },  
    {  
      questionText: "What is the group number of Halogens in the periodic table?",  
      options: ["Group 16", "Group 17", "Group 18", "Group 15"],  
      correctAnswer: "Group 17"  
    },  
    {  
      questionText: "Which of these describes a molecule?",  
      options: ["A single atom", "Two or more atoms bonded together", "A positively charged particle", "A negatively charged particle"],  
      correctAnswer: "Two or more atoms bonded together"  
    },  
    {  
      questionText: "What is the charge of an electron?",  
      options: ["+1", "0", "-1", "-2"],  
      correctAnswer: "-1"  
    },  
    {  
      questionText: "Which element is represented by the symbol 'K' in the periodic table?",  
      options: ["Calcium", "Potassium", "Krypton", "Sulfur"],  
      correctAnswer: "Potassium"  
    },  
    {  
      questionText: "What is the maximum number of electrons in the d-orbital?",  
      options: ["2", "6", "10", "14"],  
      correctAnswer: "10"  
    }, 
    {  
      questionText: "What is the periodic trend for electronegativity across a period?",  
      options: ["Increases", "Decreases", "Remains constant", "Varies irregularly"],  
      correctAnswer: "Increases"  
    },  
    {  
      questionText: "Which of the following represents an sp3 hybridized atom?",  
      options: ["CH4", "C2H2", "CO2", "C2H4"],  
      correctAnswer: "CH4"  
    },  
    {  
      questionText: "What is the total number of protons and neutrons in the nucleus of an atom called?",  
      options: ["Atomic number", "Mass number", "Isotopic number", "Avogadro number"],  
      correctAnswer: "Mass number"  
    },  
    {  
      questionText: "What is the oxidation state of Sodium in NaCl?",  
      options: ["0", "+1", "-1", "+2"],  
      correctAnswer: "+1"  
    },  
    {  
      questionText: "Which element has the electronic configuration [Ne] 3s2?",  
      options: ["Magnesium", "Sodium", "Aluminum", "Silicon"],  
      correctAnswer: "Magnesium"  
    },  
    {  
      questionText: "What does the principal quantum number (n) indicate?",  
      options: ["Size of the orbital", "Shape of the orbital", "Orientation of the orbital", "Spin of the electron"],  
      correctAnswer: "Size of the orbital"  
    },  
    {  
      questionText: "What is the shape of an s-orbital?",  
      options: ["Spherical", "Dumbbell", "Cloverleaf", "Linear"],  
      correctAnswer: "Spherical"  
    },  
    {  
      questionText: "Which of the following is a metalloid?",  
      options: ["Carbon", "Boron", "Oxygen", "Magnesium"],  
      correctAnswer: "Boron"  
    },  
    {  
      questionText: "What is the atomic number of Hydrogen?",  
      options: ["0", "1", "2", "3"],  
      correctAnswer: "1"  
    },  
    {  
      questionText: "Which group in the periodic table contains the noble gases?",  
      options: ["Group 16", "Group 17", "Group 18", "Group 1"],  
      correctAnswer: "Group 18"  
    },  
    {  
      questionText: "What is the molecular formula of methane?",  
      options: ["CH3", "CH4", "C2H6", "C3H8"],  
      correctAnswer: "CH4"  
    },  
    {  
      questionText: "What is the block of an element with the electronic configuration 3d5 4s1?",  
      options: ["s-block", "p-block", "d-block", "f-block"],  
      correctAnswer: "d-block"  
    },  
    {  
      questionText: "Which of the following is a transition metal?",  
      options: ["Calcium", "Iron", "Potassium", "Sulfur"],  
      correctAnswer: "Iron"  
    },  
    {  
      questionText: "What is the name of the compound with the formula H2SO4?",  
      options: ["Sulfur dioxide", "Sulfuric acid", "Sodium sulfate", "Sulfur trioxide"],  
      correctAnswer: "Sulfuric acid"  
    },  
    {  
      questionText: "What is the maximum number of electrons in the f-orbital?",  
      options: ["6", "10", "14", "18"],  
      correctAnswer: "14"  
    },  
    {  
      questionText: "Which of the following is an example of an ionic compound?",  
      options: ["H2O", "NaCl", "CH4", "CO2"],  
      correctAnswer: "NaCl"  
    },  
    {  
      questionText: "What is the electron configuration of oxygen (atomic number 8)?",  
      options: ["1s2 2s2 2p4", "1s2 2s2 2p6", "1s2 2s1", "1s2 2p6"],  
      correctAnswer: "1s2 2s2 2p4"  
    },  
    {  
      questionText: "What is the empirical formula of glucose?",  
      options: ["C6H12O6", "CH2O", "C2H4O2", "CHO"],  
      correctAnswer: "CH2O"  
    },  
    {  
      questionText: "Which of the following best describes a compound?",  
      options: ["A pure substance made of two or more elements chemically combined", "A mixture of two or more elements", "A single atom", "A positively charged ion"],  
      correctAnswer: "A pure substance made of two or more elements chemically combined"  
    },  
    {  
      questionText: "What is the common name for H2O?",  
      options: ["Water", "Hydrogen peroxide", "Hydroxide", "Oxygen"],  
      correctAnswer: "Water"  
    },  
    {  
      questionText: "Which element in period 3 has the highest electronegativity?",  
      options: ["Sodium", "Chlorine", "Magnesium", "Aluminum"],  
      correctAnswer: "Chlorine"  
    },  
    {  
      questionText: "What is the azimuthal quantum number (l) for a p-orbital?",  
      options: ["0", "1", "2", "3"],  
      correctAnswer: "1"  
    },  
    {  
      questionText: "What is the chemical symbol for the element Gold?",  
      options: ["Au", "Ag", "Pb", "Gd"],  
      correctAnswer: "Au"  
    },  
    {  
      questionText: "What is the maximum number of electrons in the second energy level?",  
      options: ["2", "6", "8", "10"],  
      correctAnswer: "8"  
    },  
    {  
      questionText: "What is the bond angle in a tetrahedral molecule?",  
      options: ["90°", "109.5°", "120°", "180°"],  
      correctAnswer: "109.5°"  
    }             
  ]
  const hybridizationQuestions=[
    {  
      questionText: "What is the hybridization of carbon in methane (CH4)?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp3"  
    },  
    {  
      questionText: "What is the bond angle in an sp3 hybridized molecule?",  
      options: ["109.5°", "120°", "180°", "90°"],  
      correctAnswer: "109.5°"  
    },  
    {  
      questionText: "Which type of hybridization occurs in ethene (C2H4)?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp2"  
    },  
    {  
      questionText: "What is the geometry of an sp hybridized molecule?",  
      options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],  
      correctAnswer: "Linear"  
    },  
    {  
      questionText: "How many sp3 hybrid orbitals are formed in methane?",  
      options: ["2", "3", "4", "5"],  
      correctAnswer: "4"  
    },  
    {  
      questionText: "What is the hybridization of the carbon atoms in acetylene (C2H2)?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp"  
    },  
    {  
      questionText: "Which of the following molecules exhibits sp2 hybridization?",  
      options: ["CH4", "BF3", "BeCl2", "PCl5"],  
      correctAnswer: "BF3"  
    },  
    {  
      questionText: "What is the geometry of a molecule with sp3d hybridization?",  
      options: ["Tetrahedral", "Trigonal planar", "Trigonal bipyramidal", "Octahedral"],  
      correctAnswer: "Trigonal bipyramidal"  
    },  
    {  
      questionText: "What is the hybridization of oxygen in water (H2O)?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp3"  
    },  
    {  
      questionText: "What is the hybridization of the central atom in PCl5?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp3d"  
    },  
    {  
      questionText: "Which bond type involves overlap of sp2 hybrid orbitals?",  
      options: ["σ bond", "π bond", "dative bond", "ionic bond"],  
      correctAnswer: "σ bond"  
    },  
    {  
      questionText: "What is the hybridization of carbon in graphite?",  
      options: ["sp", "sp2", "sp3", "sp3d2"],  
      correctAnswer: "sp2"  
    },  
    {  
      questionText: "Which molecule exhibits sp3 hybridization?",  
      options: ["C2H2", "BF3", "CH4", "CO2"],  
      correctAnswer: "CH4"  
    },  
    {  
      questionText: "What is the hybridization of nitrogen in ammonia (NH3)?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp3"  
    },  
    {  
      questionText: "Which molecule has a trigonal planar shape due to sp2 hybridization?",  
      options: ["CO2", "NH3", "BF3", "H2O"],  
      correctAnswer: "BF3"  
    },  
    {  
      questionText: "How many unhybridized p-orbitals are present in sp2 hybridization?",  
      options: ["1", "2", "3", "0"],  
      correctAnswer: "1"  
    },  
    {  
      questionText: "Which of the following is an example of a compound with sp3d2 hybridization?",  
      options: ["SF6", "PCl5", "NH3", "BF3"],  
      correctAnswer: "SF6"  
    },  
    {  
      questionText: "What is the geometry of an sp3d2 hybridized molecule?",  
      options: ["Trigonal bipyramidal", "Tetrahedral", "Octahedral", "Linear"],  
      correctAnswer: "Octahedral"  
    },  
    {  
      questionText: "What is the hybridization of carbon in benzene (C6H6)?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp2"  
    },  
    {  
      questionText: "What is the hybridization of the central atom in XeF4?",  
      options: ["sp", "sp2", "sp3", "sp3d2"],  
      correctAnswer: "sp3d2"  
    },  
    {  
      questionText: "What is the bond angle in an sp2 hybridized molecule?",  
      options: ["90°", "109.5°", "120°", "180°"],  
      correctAnswer: "120°"  
    },  
    {  
      questionText: "Which molecule exhibits sp hybridization?",  
      options: ["CO2", "CH4", "NH3", "BF3"],  
      correctAnswer: "CO2"  
    },  
    {  
      questionText: "What is the hybridization of boron in BF3?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp2"  
    },  
    {  
      questionText: "Which of the following is a characteristic of sp hybridization?",  
      options: ["Linear geometry", "Trigonal planar geometry", "Tetrahedral geometry", "Octahedral geometry"],  
      correctAnswer: "Linear geometry"  
    },  
    {  
      questionText: "How many orbitals combine to form sp3 hybrid orbitals?",  
      options: ["2", "3", "4", "5"],  
      correctAnswer: "4"  
    },  
    {  
      questionText: "What type of bonds are present in ethyne (C2H2)?",  
      options: ["One σ and one π bond", "Two σ bonds", "One σ and two π bonds", "Three π bonds"],  
      correctAnswer: "One σ and two π bonds"  
    },  
    {  
      questionText: "Which of the following molecules has a square planar geometry?",  
      options: ["CH4", "XeF4", "BF3", "NH3"],  
      correctAnswer: "XeF4"  
    },  
    {  
      questionText: "What is the hybridization of the central atom in BeCl2?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp"  
    },  
    {  
      questionText: "What is the shape of a molecule with sp3 hybridization?",  
      options: ["Linear", "Tetrahedral", "Trigonal planar", "Octahedral"],  
      correctAnswer: "Tetrahedral"  
    },  
    {  
      questionText: "What is the hybridization of phosphorus in PH3?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp3"  
    },  
    {  
      questionText: "Which hybridization results in a molecule with a 180° bond angle?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp"  
    },  
    {  
      questionText: "Which molecule has a seesaw geometry due to sp3d hybridization?",  
      options: ["SF4", "CH4", "NH3", "XeF4"],  
      correctAnswer: "SF4"  
    },  
    {  
      questionText: "What is the hybridization of sulfur in SF6?",  
      options: ["sp", "sp2", "sp3", "sp3d2"],  
      correctAnswer: "sp3d2"  
    },  
    {  
      questionText: "What is the hybridization of nitrogen in NO3-?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp2"  
    },  
    {  
      questionText: "How many π bonds are present in ethene (C2H4)?",  
      options: ["1", "2", "3", "0"],  
      correctAnswer: "1"  
    },  
    {  
      questionText: "What is the bond angle in a trigonal bipyramidal molecule?",  
      options: ["90° and 120°", "109.5°", "120°", "180°"],  
      correctAnswer: "90° and 120°"  
    },  
    {  
      questionText: "Which hybrid orbitals are used by the central atom in CO2?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp"  
    },  
    {  
      questionText: "What is the hybridization of carbon in CCl4?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp3"  
    },  
    {  
      questionText: "What is the hybridization of the carbon atom in CH2O?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp2"  
    },  
    {  
      questionText: "What is the geometry of a molecule with sp3d2 hybridization?",  
      options: ["Octahedral", "Trigonal planar", "Linear", "Tetrahedral"],  
      correctAnswer: "Octahedral"  
    },  
    {  
      questionText: "What type of hybridization is present in NH4+?",  
      options: ["sp", "sp2", "sp3", "sp3d"],  
      correctAnswer: "sp3"  
    },  
    {  
      questionText: "How many σ bonds are present in ethyne (C2H2)?",  
      options: ["1", "2", "3", "4"],  
      correctAnswer: "1"  
    }      
  ]
  const chm101Questions=[
      {
        questionText: "What is the smallest particle of an element that retains its chemical properties?",
        options: ["Atom", "Molecule", "Compound", "Ion"],
        correctAnswer: "Atom"
      },
      {
        questionText: "Which of the following is a diatomic molecule?",
        options: ["H20", "O2", "NaCl", "C6H12O6"],
        correctAnswer: "O2"
      },
      {
        questionText: "Which of the following elements has the smallest atomic radius?",
        options: ["Nitrogen", "Oxygen", "Fluorine", "Carbon"],
        correctAnswer: "Fluorine"
      },
      {
        questionText: "What is the electronic configuration of sodium (Na)?",
        options: ["1s2 2s2 2p6 3p1", "1s2 2s2 2p6", "1s2 2s2 2p5 3s1", "1s2 2s2 2p6 3s1"],
        correctAnswer: "1s2 2s2 2p6 3s1"
      },
      {
        questionText: "What is the hybridization of carbon in methane (CH4)?",
        options: ["sp3", "sp2", "sp", "dsp2"],
        correctAnswer: "sp3"
      },
      {
        questionText: "What is the shape of a water (H2O) molecule?",
        options: ["Linear", "Bent", "Tetrahedral", "Trigonal planar"],
        correctAnswer: "Bent"
      },
      {
        questionText: "Which of the following is a strong acid?",
        options: ["H2CO3", "CH3COOH", "HCl", "NH3"],
        correctAnswer: "HCl"
      },
      {
        questionText: "Which base is found in household bleach?",
        options: ["H20", "NH3", "KOH", "NaOH"],
        correctAnswer: "NaOH"
      },
      {
        questionText: "What type of bond is formed between two hydrogen atoms in H2?",
        options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
        correctAnswer: "Covalent bond"
      },
      {
        questionText: "Which compound is formed by the reaction of an acid and a base?",
        options: ["Water", "Salt", "Alcohol", "Ketone"],
        correctAnswer: "Salt"
      },
      {
        questionText: "What is the periodic trend for electronegativity across a period?",
        options: ["Remains Constant", "Decreases", "Increases", "Varies irregularly"],
        correctAnswer: "Increases"
      },
      {
        questionText: "What is the maximum number of electrons that can occupy the p-orbital?",
        options: ["8", "2", "4", "6"],
        correctAnswer: "6"
      },
      {
        questionText: "Which of the following elements has the highest ionization energy?",
        options: ["Helium", "Lithium", "Fluorine", "Carbon"],
        correctAnswer: "Helium"
      },
      {
        questionText: "What is the hybridization of carbon in ethene (C2H4)?",
        options: ["sp3", "sp2", "sp", "dsp2"],
        correctAnswer: "sp2"
      },
      {
        questionText: "Which molecule has a linear shape?",
        options: ["H20", "NH3", "CO2", "CH4"],
        correctAnswer: "CO2"
      },
      {
        questionText: "Which of the following is an amphoteric substance?",
        options: ["CH4", "HCl", "NaOH", "Water"],
        correctAnswer: "Water"
      },
      {
        questionText: "What is the oxidation state of oxygen in H2O2?",
        options: ["-1", "-2", "0", "+1"],
        correctAnswer: "-1"
      },
      {
        questionText: "Which of the following elements is a d-block element?",
        options: ["Oxygen", "Iron", "Helium", "Silicon"],
        correctAnswer: "Iron"
      },
      {
        questionText: "Which of these compounds is ionic?",
        options: ["H20", "CH4", "NaCl", "CCl4"],
        correctAnswer: "NaCl"
      },
      {
        questionText: "What is the electronic configuration of chlorine (Cl)?",
        options: ["1s2 2s2 2p6 3s2 3p4", "1s2 2s2 2p6 3s2 3p6", "1s2 2s2 2p5", "1s2 2s2 2p6 3s2 3p5"],
        correctAnswer: "1s2 2s2 2p6 3s2 3p5"
      },
      {
        questionText: "What is the bond angle in a tetrahedral molecule?",
        options: ["109.5 degrees", "90 degrees", "120 degrees", "180 degrees"],
        correctAnswer: "109.5 degrees"
      },
      {
        questionText: "Which acid is commonly found in vinegar?",
        options: ["Citrus Acid", "Acetic acid", "Sulfuric acid", "Nitric acid"],
        correctAnswer: "Acetic acid"
      },
      {
        questionText: "What is the hybridization of the central atom in XeF4?",
        options: ["sp3", "sp3d", "sp3d2", "sp2"],
        correctAnswer: "sp3d2"
      },
      {
        questionText: "Which element has the highest electronegativity?",
        options: ["Nitrogen", "Oxygen", "Chlorine", "Fluorine"],
        correctAnswer: "Fluorine"
      },
      {
        questionText: "What is the shape of ammonia (NH3) molecule?",
        options: ["Trigonal pyramidal", "Tetrahedral", "Linear", "Square planar"],
        correctAnswer: "Trigonal pyramidal"
      },
      {
        questionText: "Which salt is formed by the neutralization of NaOH and HCl?",
        options: ["NaOH", "NaH", "NaCl", "Na2SO4"],
        correctAnswer: "NaCl"
      },
      {
        questionText: "Which of the following is a property of bases?",
        options: ["Turns red litmus paper blue", "Sour taste", "Reacts with metals", "Bitter taste"],
        correctAnswer: "Bitter taste"
      },
      {
        questionText: "What is the bond order of oxygen molecule (O2)?",
        options: ["2", "1", "3", "4"],
        correctAnswer: "2"
      },
      {
        questionText: "What is the pH of a neutral solution?",
        options: ["7", "1", "14", "0"],
        correctAnswer: "7"
      },
      {
        questionText: "Which of the following is a characteristic of ionic compounds?",
        options: ["High melting point", "Low boiling point", "Poor conductor of electricity", "Soft texture"],
        correctAnswer: "High melting point"
      },
      {
        questionText: "Which of the following is a Lewis base?",
        options: ["BF3", "H2O", "CO2", "NH3"],
        correctAnswer: "NH3"
      },
      {
        questionText: "What is the molecular geometry of BF3?",
        options: ["Bent", "Linear", "Tetrahedral", "Trigonal planar"],
        correctAnswer: "Trigonal planar"
      },
      {
        questionText: "Which acid is used in car batteries?",
        options: ["Sulfuric acid", "Nitric acid", "Acetic acid", "Hydrochloric acid"],
        correctAnswer: "Sulfuric acid"
      },
      {
        questionText: "What is the oxidation state of sulfur in H2SO4?",
        options: ["+6", "+4", "-2", "0"],
        correctAnswer: "+6"
      },
      {
        questionText: "What is the molecular formula of ethanol?",
        options: ["C2H4", "CH3COOH", "C2H5OH", "CH3OH"],
        correctAnswer: "C2H5OH"
      },
      {
        questionText: "Which of the following elements is a noble gas?",
        options: ["Bromine", "Nitrogen", "Chlorine", "Argon"],
        correctAnswer: "Argon"
      },
      {
        questionText: "What is the hybridization of carbon in acetylene (C2H2)?",
        options: ["sp2", "sp", "sp3", "dsp2"],
        correctAnswer: "sp"
      },
      {
        questionText: "What is the oxidation state of chlorine in NaClO3?",
        options: ["-1", "+3", "+7", "+5"],
        correctAnswer: "+5"
      },
      {
        questionText: "Which of the following is a weak base?",
        options: ["KOH", "NaOH", "NH3", "Ca(OH)2"],
        correctAnswer: "NH3"
      },
      {
        questionText: "What is the shape of SF6 molecule?",
        options: ["Octahedral", "Tetrahedral", "Square planar", "Trigonal bipyramidal"],
        correctAnswer: "Octahedral"
      },
      {
        questionText: "Which of the following is an example of a covalent compound?",
        options: ["CaO", "NaCl", "H2O", "MgCl2"],
        correctAnswer: "H2O"
      },
      {
        questionText: "Which element is the most abundant in the Earth's crust?",
        options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
        correctAnswer: "Oxygen"
      },
      {
        questionText: "What is the bond angle in a linear molecule?",
        options: ["90 degrees", "109.5 degrees", "120 degrees", "180 degrees"],
        correctAnswer: "180 degrees"
      },
      {
        questionText: "What is the chemical formula for baking soda?",
        options: ["K2C03", "Na2CO3", "NaHCO3", "CaCO3"],
        correctAnswer: "NaHCO3"
      },
      {
        questionText: "What does the concept of hybridization help to explain in chemistry?",
        options: ["Atomic structure", "Bond formation", "Chemical equilibrium", "Reaction rate"],
        correctAnswer: "Bond formation"
      },
      {
        questionText: "How many hybrid orbitals are formed during sp3 hybridization?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4"
      },
      {
        questionText: "What type of hybridization occurs in the methane (CH4) molecule?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp3"
      },
      {
        questionText: "What is the bond angle in a molecule with sp3 hybridization?",
        options: ["90°", "120°", "109.5°", "180°"],
        correctAnswer: "109.5°"
      },
      {
        questionText: "What hybridization is found in the central atom of CO2?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp"
      },
      {
        questionText: "What is the geometry of a molecule with sp2 hybridization?",
        options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],
        correctAnswer: "Trigonal planar"
      },
      {
        questionText: "Which of the following molecules has sp hybridization?",
        options: ["CH4", "C2H2", "NH3", "H2O"],
        correctAnswer: "C2H2"
      },
      {
        questionText: "What is the shape of a molecule with sp3d2 hybridization?",
        options: ["Linear", "Trigonal bipyramidal", "Octahedral", "Square planar"],
        correctAnswer: "Octahedral"
      },
      {
        questionText: "What is the bond angle in an sp2 hybridized molecule?",
        options: ["90°", "120°", "109.5°", "180°"],
        correctAnswer: "120°"
      },
      {
        questionText: "In hybridization theory, what is a sigma bond?",
        options: ["A bond formed by lateral overlap of orbitals", "A bond formed by end-to-end overlap of orbitals", "A bond formed by shared lone pairs", "A bond formed by sp orbitals"],
        correctAnswer: "A bond formed by end-to-end overlap of orbitals"
      },
      {
        questionText: "What is the hybridization of carbon in ethene (C2H4)?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp2"
      },
      {
        questionText: "Which of the following species exhibits sp3d hybridization?",
        options: ["CH4", "NH3", "PCl5", "H2O"],
        correctAnswer: "PCl5"
      },
      {
        questionText: "What is the hybridization of the central atom in BF3?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp2"
      },
      {
        questionText: "What determines the hybridization of an atom?",
        options: ["The number of electrons", "The number of bonds and lone pairs", "The number of lone pairs", "The number of atoms in the molecule"],
        correctAnswer: "The number of bonds and lone pairs"
      },
      {
        questionText: "What is the hybridization of nitrogen in NH3?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp3"
      },
      {
        questionText: "What type of hybridization occurs in the carbon atoms of ethyne (C2H2)?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp"
      },
      {
        questionText: "What is the geometry of a molecule with sp hybridization?",
        options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],
        correctAnswer: "Linear"
      },
      {
        questionText: "Which type of hybrid orbitals are involved in the bonding of PCl5?",
        options: ["sp2", "sp3", "sp3d", "sp3d2"],
        correctAnswer: "sp3d"
      },
      {
        questionText: "What hybridization is exhibited by the carbon atoms in benzene (C6H6)?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp2"
      },
      {
        questionText: "What type of hybridization does the central atom in SF6 exhibit?",
        options: ["sp", "sp2", "sp3", "sp3d2"],
        correctAnswer: "sp3d2"
      },
      {
        questionText: "What is the molecular shape of a molecule with sp3 hybridization and one lone pair?",
        options: ["Tetrahedral", "Trigonal pyramidal", "Bent", "Linear"],
        correctAnswer: "Trigonal pyramidal"
      },
      {
        questionText: "What hybridization is exhibited by the oxygen atom in water (H2O)?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp3"
      },
      {
        questionText: "What is the shape of a molecule with sp3 hybridization and two lone pairs?",
        options: ["Linear", "Bent", "Trigonal planar", "Tetrahedral"],
        correctAnswer: "Bent"
      },
      {
        questionText: "What is the hybridization of the phosphorus atom in PCl5?",
        options: ["sp", "sp2", "sp3", "sp3d"],
        correctAnswer: "sp3d"
      },
      {
        questionText: "What is the bond angle in a molecule with sp hybridization?",
        options: ["90°", "120°", "180°", "109.5°"],
        correctAnswer: "180°"
      }        
  ]

  const gasLawsQuestions=[
    {
      questionText: "What is Boyle's Law?",
      options: ["Pressure is directly proportional to temperature", "Pressure is inversely proportional to volume", "Volume is directly proportional to temperature", "Volume is inversely proportional to temperature"],
      correctAnswer: "Pressure is inversely proportional to volume"
    },
    {
      questionText: "Which of the following equations represents Charles's Law?",
      options: ["P1V1 = P2V2", "V1/T1 = V2/T2", "PV = nRT", "P/T = constant"],
      correctAnswer: "V1/T1 = V2/T2"
    },
    {
      questionText: "In the Ideal Gas Law, what does 'R' represent?",
      options: ["Universal constant", "Molar gas constant", "Pressure", "Temperature"],
      correctAnswer: "Molar gas constant"
    },
    {
      questionText: "What is the SI unit of pressure in gas laws?",
      options: ["Pascal", "Newton", "Joule", "Liter"],
      correctAnswer: "Pascal"
    },
    {
      questionText: "What happens to the volume of a gas when the temperature increases at constant pressure?",
      options: ["Increases", "Decreases", "Remains the same", "Becomes zero"],
      correctAnswer: "Increases"
    },
    {
      questionText: "What is the value of the gas constant (R) in SI units?",
      options: ["8.31 J/mol·K", "0.0821 atm·L/mol·K", "1 atm·L/mol·K", "101.3 J/mol·K"],
      correctAnswer: "8.31 J/mol·K"
    },
    {
      questionText: "Which gas law combines Boyle's, Charles's, and Gay-Lussac's Laws?",
      options: ["Combined Gas Law", "Ideal Gas Law", "Dalton's Law", "Avogadro's Law"],
      correctAnswer: "Combined Gas Law"
    },
    {
      questionText: "What does Avogadro's Law state about gases at constant temperature and pressure?",
      options: ["Equal volumes contain equal moles", "Equal volumes contain equal pressure", "Equal volumes contain equal temperature", "Equal volumes contain equal densities"],
      correctAnswer: "Equal volumes contain equal moles"
    },
    {
      questionText: "What does the Ideal Gas Law PV = nRT assume?",
      options: ["No intermolecular forces", "Constant volume", "Variable gas constant", "Non-negligible molecular size"],
      correctAnswer: "No intermolecular forces"
    },
    {
      questionText: "What is the relationship between pressure and temperature in Gay-Lussac's Law?",
      options: ["Directly proportional", "Inversely proportional", "Independent", "Exponential"],
      correctAnswer: "Directly proportional"
    },
    {
      questionText: "If a gas has a pressure of 2 atm and volume of 5 L, what happens to its volume if the pressure increases to 4 atm at constant temperature?",
      options: ["Decreases to 2.5 L", "Increases to 10 L", "Remains 5 L", "Becomes zero"],
      correctAnswer: "Decreases to 2.5 L"
    },
    {
      questionText: "What is the standard temperature in gas laws?",
      options: ["273 K", "300 K", "100 K", "0 K"],
      correctAnswer: "273 K"
    },
    {
      questionText: "What is the molar volume of an ideal gas at standard temperature and pressure (STP)?",
      options: ["22.4 L", "24.5 L", "1 L", "10 L"],
      correctAnswer: "22.4 L"
    },
    {
      questionText: "What does Dalton's Law state about gas mixtures?",
      options: ["The total pressure is the sum of partial pressures", "The total volume is the sum of partial volumes", "The temperature is constant", "The gases do not interact"],
      correctAnswer: "The total pressure is the sum of partial pressures"
    },
    {
      questionText: "What happens to gas pressure when the volume is halved at constant temperature?",
      options: ["It doubles", "It halves", "It remains constant", "It becomes zero"],
      correctAnswer: "It doubles"
    },
    {
      questionText: "What is the relationship between temperature and kinetic energy of gas molecules?",
      options: ["Directly proportional", "Inversely proportional", "Independent", "Exponential"],
      correctAnswer: "Directly proportional"
    },
    {
      questionText: "What is the unit of the gas constant R in atm·L/mol·K?",
      options: ["0.0821", "1", "101.3", "22.4"],
      correctAnswer: "0.0821"
    },
    {
      questionText: "If the volume of a gas doubles at constant temperature, what happens to its pressure?",
      options: ["Halves", "Doubles", "Remains constant", "Increases exponentially"],
      correctAnswer: "Halves"
    },
    {
      questionText: "Which law explains the diffusion of gases?",
      options: ["Graham's Law", "Boyle's Law", "Charles's Law", "Avogadro's Law"],
      correctAnswer: "Graham's Law"
    },
    {
      questionText: "What happens to the pressure of a gas when its temperature increases at constant volume?",
      options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      correctAnswer: "Increases"
    },
    {
      questionText: "What is the term for the pressure exerted by one gas in a mixture?",
      options: ["Partial pressure", "Total pressure", "Standard pressure", "Gauge pressure"],
      correctAnswer: "Partial pressure"
    },
    {
      questionText: "What is STP in gas laws?",
      options: ["Standard Temperature and Pressure", "Standard Time and Pressure", "Standard Temperature and Period", "Standard Testing Point"],
      correctAnswer: "Standard Temperature and Pressure"
    },
    {
      questionText: "How is density of a gas calculated using the Ideal Gas Law?",
      options: ["PM/RT", "RT/P", "PV/n", "MRT/P"],
      correctAnswer: "PM/RT"
    },
    {
      questionText: "What happens to the volume of a gas when the pressure increases at constant temperature?",
      options: ["Decreases", "Increases", "Remains the same", "Becomes infinite"],
      correctAnswer: "Decreases"
    },
    {
      questionText: "What happens to gas molecules at absolute zero temperature?",
      options: ["Molecular motion stops", "Pressure becomes infinite", "Volume becomes infinite", "Kinetic energy doubles"],
      correctAnswer: "Molecular motion stops"
    },
    {
      questionText: "What is the compressibility factor of an ideal gas?",
      options: ["1", "0", "10", "100"],
      correctAnswer: "1"
    },
    {
      questionText: "Which gas law applies to scuba diving to explain pressure changes?",
      options: ["Boyle's Law", "Charles's Law", "Ideal Gas Law", "Dalton's Law"],
      correctAnswer: "Boyle's Law"
    },
    {
      questionText: "What does Boyle's law state about the relationship between pressure and volume?",
      options: ["They are directly proportional", "They are inversely proportional", "They are unrelated", "They remain constant"],
      correctAnswer: "They are inversely proportional"
    },
    {
      questionText: "Which gas law combines Boyle's, Charles's, and Gay-Lussac's laws?",
      options: ["Ideal Gas Law", "Avogadro's Law", "Combined Gas Law", "Dalton's Law"],
      correctAnswer: "Combined Gas Law"
    },
    {
      questionText: "What is the unit of the universal gas constant (R) in SI units?",
      options: ["Joule per mole kelvin", "Pascal", "Kelvin", "Mole"],
      correctAnswer: "Joule per mole kelvin"
    },
    {
      questionText: "What is the relationship between temperature and volume according to Charles's law?",
      options: ["Directly proportional", "Inversely proportional", "Constant", "Exponential"],
      correctAnswer: "Directly proportional"
    },
    {
      questionText: "What does the ideal gas law equation PV = nRT describe?",
      options: ["The behavior of real gases", "The behavior of ideal gases", "The behavior of liquids", "The behavior of solids"],
      correctAnswer: "The behavior of ideal gases"
    },
    {
      questionText: "What does Gay-Lussac's law state about pressure and temperature?",
      options: ["They are directly proportional", "They are inversely proportional", "They are unrelated", "They remain constant"],
      correctAnswer: "They are directly proportional"
    },
    {
      questionText: "Which variable remains constant in Boyle's law?",
      options: ["Pressure", "Temperature", "Volume", "Moles"],
      correctAnswer: "Temperature"
    },
    {
      questionText: "What happens to gas particles when temperature increases at constant volume?",
      options: ["They move faster", "They move slower", "They remain stationary", "They disappear"],
      correctAnswer: "They move faster"
    },
    {
      questionText: "What is the volume of one mole of an ideal gas at STP?",
      options: ["22.4 L", "1 L", "100 L", "0.0821 L"],
      correctAnswer: "22.4 L"
    },
    {
      questionText: "What is the relationship between pressure and temperature at constant volume?",
      options: ["Directly proportional", "Inversely proportional", "Constant", "Exponential"],
      correctAnswer: "Directly proportional"
    },
    {
      questionText: "Which gas law is represented by V1/T1 = V2/T2?",
      options: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Ideal Gas Law"],
      correctAnswer: "Charles's Law"
    },
    {
      questionText: "What does Dalton's law of partial pressures state?",
      options: ["The total pressure is the sum of partial pressures", "The total pressure is the product of partial pressures", "The total pressure is constant", "The total pressure is inversely proportional to volume"],
      correctAnswer: "The total pressure is the sum of partial pressures"
    },
    {
      questionText: "What is the relationship between volume and moles in Avogadro's law?",
      options: ["Directly proportional", "Inversely proportional", "Constant", "Unrelated"],
      correctAnswer: "Directly proportional"
    },
    {
      questionText: "What is the pressure of an ideal gas at absolute zero temperature?",
      options: ["Zero", "One atm", "Infinity", "Negative"],
      correctAnswer: "Zero"
    },
    {
      questionText: "What happens to the volume of a gas when temperature decreases at constant pressure?",
      options: ["It decreases", "It increases", "It remains constant", "It doubles"],
      correctAnswer: "It decreases"
    },
    {
      questionText: "What is the significance of the kinetic molecular theory?",
      options: ["It explains gas behavior", "It describes solid properties", "It focuses on liquids", "It ignores temperature effects"],
      correctAnswer: "It explains gas behavior"
    },
    {
      questionText: "Which law can be derived from PV = nRT when moles and temperature are constant?",
      options: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Dalton's Law"],
      correctAnswer: "Boyle's Law"
    },
    {
      questionText: "What does STP stand for in gas laws?",
      options: ["Standard Temperature and Pressure", "Standard Time Period", "Scientific Temperature and Pressure", "Specific Temperature Point"],
      correctAnswer: "Standard Temperature and Pressure"
    },
    {
      questionText: "What does an increase in gas temperature typically cause?",
      options: ["Increase in kinetic energy", "Decrease in pressure", "Decrease in volume", "Decrease in energy"],
      correctAnswer: "Increase in kinetic energy"
    },
    {
      questionText: "What unit is commonly used to measure pressure in gas laws?",
      options: ["Pascal", "Joule", "Kelvin", "Mole"],
      correctAnswer: "Pascal"
    },
    {
      questionText: "What happens to gas molecules when volume is reduced at constant temperature?",
      options: ["They collide more frequently", "They stop moving", "They expand", "They combine"],
      correctAnswer: "They collide more frequently"
    },
    {
      questionText: "What does the term 'absolute zero' represent in gas laws?",
      options: ["The point where molecular motion stops", "The maximum temperature", "The pressure limit", "The ideal gas point"],
      correctAnswer: "The point where molecular motion stops"
    },
    {
      questionText: "Which gas law explains why a balloon shrinks when placed in a freezer?",
      options: ["Charles's Law", "Boyle's Law", "Gay-Lussac's Law", "Dalton's Law"],
      correctAnswer: "Charles's Law"
    },
    {
      questionText: "What is the SI unit for temperature in gas laws?",
      options: ["Kelvin", "Celsius", "Fahrenheit", "Pascal"],
      correctAnswer: "Kelvin"
    }    
  ]
  const HATQuestions=[
    {
      questionText: "What is the SI unit of temperature?",
      options: ["Kelvin", "Celsius", "Fahrenheit", "Rankine"],
      correctAnswer: "Kelvin"
    },
    {
      questionText: "What is the specific heat capacity of a substance?",
      options: ["The amount of heat required to raise the temperature of 1 kg of the substance by 1 K", "The heat required to change the state of 1 kg of the substance", "The total heat stored in the substance", "The heat required to raise the temperature of 1 mole of the substance by 1 K"],
      correctAnswer: "The amount of heat required to raise the temperature of 1 kg of the substance by 1 K"
    },
    {
      questionText: "What does thermal conductivity measure?",
      options: ["The ability of a material to conduct heat", "The ability of a material to absorb heat", "The heat required to melt a material", "The amount of heat required to vaporize a material"],
      correctAnswer: "The ability of a material to conduct heat"
    },
    {
      questionText: "What is the primary mode of heat transfer in solids?",
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],
      correctAnswer: "Conduction"
    },
    {
      questionText: "What happens to the kinetic energy of molecules when a substance is heated?",
      options: ["It increases", "It decreases", "It remains constant", "It depends on the substance"],
      correctAnswer: "It increases"
    },
    {
      questionText: "Which material is a good conductor of heat?",
      options: ["Copper", "Wood", "Plastic", "Glass"],
      correctAnswer: "Copper"
    },
    {
      questionText: "What type of heat transfer occurs through a vacuum?",
      options: ["Radiation", "Conduction", "Convection", "None of the above"],
      correctAnswer: "Radiation"
    },
    {
      questionText: "What is the formula for heat transfer in conduction?",
      options: ["Q = kA(T1 - T2)/d", "Q = mcΔT", "Q = PΔt", "Q = nCΔT"],
      correctAnswer: "Q = kA(T1 - T2)/d"
    },
    {
      questionText: "What does the term 'thermal equilibrium' mean?",
      options: ["Two objects have the same temperature", "Two objects have different temperatures", "The heat flow between objects is maximized", "No heat is transferred between objects"],
      correctAnswer: "Two objects have the same temperature"
    },
    {
      questionText: "What is the boiling point of water at standard atmospheric pressure?",
      options: ["100°C", "212°F", "373 K", "All of the above"],
      correctAnswer: "All of the above"
    },
    {
      questionText: "Which law relates heat transfer to temperature difference and thermal resistance?",
      options: ["Fourier's Law", "Newton's Law of Cooling", "Stefan-Boltzmann Law", "Zeroth Law of Thermodynamics"],
      correctAnswer: "Fourier's Law"
    },
    {
      questionText: "What is the process of heat transfer in fluids due to density differences?",
      options: ["Convection", "Conduction", "Radiation", "Evaporation"],
      correctAnswer: "Convection"
    },
    {
      questionText: "What is the unit of thermal conductivity in the SI system?",
      options: ["W/m·K", "J/K", "J/m·s", "W/m"],
      correctAnswer: "W/m·K"
    },
    {
      questionText: "What happens to the temperature of a substance during a phase change?",
      options: ["It remains constant", "It increases", "It decreases", "It depends on the heat added"],
      correctAnswer: "It remains constant"
    },
    {
      questionText: "What is the thermal conductivity of an ideal insulator?",
      options: ["Zero", "Infinity", "Very high", "Very low"],
      correctAnswer: "Zero"
    },
    {
      questionText: "What is the specific latent heat of fusion?",
      options: ["The heat required to change 1 kg of a solid into a liquid without temperature change", "The heat required to raise the temperature of 1 kg of a liquid by 1 K", "The heat lost during solidification", "The heat required to vaporize a liquid"],
      correctAnswer: "The heat required to change 1 kg of a solid into a liquid without temperature change"
    },
    {
      questionText: "Which factor does not affect the rate of heat conduction?",
      options: ["Color of the material", "Cross-sectional area", "Thickness of the material", "Thermal conductivity of the material"],
      correctAnswer: "Color of the material"
    },
    {
      questionText: "What is the principle of a thermos flask?",
      options: ["Minimizing heat transfer by conduction, convection, and radiation", "Increasing heat transfer by radiation", "Allowing convection but preventing conduction", "Allowing conduction but preventing radiation"],
      correctAnswer: "Minimizing heat transfer by conduction, convection, and radiation"
    },
    {
      questionText: "Which type of material typically has the lowest thermal conductivity?",
      options: ["Gases", "Metals", "Liquids", "Solids"],
      correctAnswer: "Gases"
    },
    {
      questionText: "What is the relationship between heat energy, mass, and temperature change?",
      options: ["Q = mcΔT", "Q = kAΔT", "Q = nCΔT", "Q = PV/T"],
      correctAnswer: "Q = mcΔT"
    },
    {
      questionText: "What is the heat required to raise the temperature of 1 mole of a substance by 1 K called?",
      options: ["Molar heat capacity", "Specific heat capacity", "Latent heat", "Thermal conductivity"],
      correctAnswer: "Molar heat capacity"
    },
    {
      questionText: "What happens to the efficiency of heat transfer as the thickness of an insulating material increases?",
      options: ["It decreases", "It increases", "It remains constant", "It becomes zero"],
      correctAnswer: "It decreases"
    },
    {
      questionText: "Which law states that heat energy is proportional to the temperature difference?",
      options: ["Fourier's Law", "Newton's Law of Cooling", "First Law of Thermodynamics", "Kirchhoff's Law"],
      correctAnswer: "Fourier's Law"
    },
    {
      questionText: "What is the mode of heat transfer through infrared waves?",
      options: ["Radiation", "Conduction", "Convection", "Evaporation"],
      correctAnswer: "Radiation"
    },
    {
      questionText: "What property determines the rate at which a material conducts heat?",
      options: ["Thermal conductivity", "Specific heat", "Latent heat", "Density"],
      correctAnswer: "Thermal conductivity"
    },
    {
      questionText: "What is the relationship between heat flow, thermal conductivity, and temperature gradient?",
      options: ["Heat flow is directly proportional to the thermal conductivity and temperature gradient", "Heat flow is inversely proportional to the thermal conductivity", "Heat flow is inversely proportional to the temperature gradient", "Heat flow does not depend on either thermal conductivity or temperature gradient"],
      correctAnswer: "Heat flow is directly proportional to the thermal conductivity and temperature gradient"
    },
    {
      questionText: "What is the formula to calculate heat energy required to change the phase of a substance?",
      options: ["Q = mL", "Q = mcΔT", "Q = kAΔT/d", "Q = PV"],
      correctAnswer: "Q = mL"
    },
    {
      questionText: "Which of the following materials has the highest thermal conductivity?",
      options: ["Silver", "Water", "Glass", "Wood"],
      correctAnswer: "Silver"
    },
    {
      questionText: "Which phenomenon explains why metals feel cold to touch?",
      options: ["High thermal conductivity", "Low specific heat capacity", "Low density", "High emissivity"],
      correctAnswer: "High thermal conductivity"
    },
    {
      questionText: "What is the term for the transfer of heat by the movement of fluid particles?",
      options: ["Convection", "Conduction", "Radiation", "Diffusion"],
      correctAnswer: "Convection"
    },
    {
      questionText: "Which law of thermodynamics is applied when two bodies reach the same temperature after heat exchange?",
      options: ["Zeroth Law of Thermodynamics", "First Law of Thermodynamics", "Second Law of Thermodynamics", "Third Law of Thermodynamics"],
      correctAnswer: "Zeroth Law of Thermodynamics"
    },
    {
      questionText: "How does increasing the thickness of an insulator affect its thermal resistance?",
      options: ["Thermal resistance increases", "Thermal resistance decreases", "Thermal resistance remains constant", "Thermal resistance becomes zero"],
      correctAnswer: "Thermal resistance increases"
    },
    {
      questionText: "What is the specific latent heat of vaporization?",
      options: ["The heat required to change 1 kg of a liquid into a gas without temperature change", "The heat required to change 1 kg of a solid into a liquid without temperature change", "The heat lost during freezing", "The heat required to raise the temperature of 1 kg of a gas by 1 K"],
      correctAnswer: "The heat required to change 1 kg of a liquid into a gas without temperature change"
    },
    {
      questionText: "Which of the following describes an endothermic process?",
      options: ["Heat is absorbed from the surroundings", "Heat is released to the surroundings", "No heat is exchanged with the surroundings", "Heat flows spontaneously between two bodies"],
      correctAnswer: "Heat is absorbed from the surroundings"
    },
    {
      questionText: "What is the main reason for using vacuum in a thermos flask?",
      options: ["To reduce heat loss by conduction and convection", "To increase heat loss by radiation", "To keep the contents at a constant pressure", "To prevent external temperature fluctuations"],
      correctAnswer: "To reduce heat loss by conduction and convection"
    },
    {
      questionText: "What does Newton's Law of Cooling describe?",
      options: ["The rate of heat loss is proportional to the temperature difference between the body and its surroundings", "The heat transfer rate depends only on the material properties", "Heat transfer occurs only through conduction", "The temperature of a body is constant regardless of surroundings"],
      correctAnswer: "The rate of heat loss is proportional to the temperature difference between the body and its surroundings"
    },
    {
      questionText: "What is the thermal resistance of a material?",
      options: ["The opposition to heat flow through the material", "The ability of a material to store heat", "The maximum temperature the material can withstand", "The heat required to raise the temperature of the material by 1 K"],
      correctAnswer: "The opposition to heat flow through the material"
    },
    {
      questionText: "Which of these is an example of heat transfer by radiation?",
      options: ["The warmth felt from sunlight", "Boiling water in a pot", "Heating a metal rod over a flame", "Heat transfer through walls of a building"],
      correctAnswer: "The warmth felt from sunlight"
    },
    {
      questionText: "What is the temperature at which water has its maximum density?",
      options: ["4°C", "0°C", "100°C", "10°C"],
      correctAnswer: "4°C"
    },
    {
      questionText: "What is the relationship between emissivity and absorption of a surface?",
      options: ["A good emitter is also a good absorber", "A good emitter is a poor absorber", "Emissivity and absorption are unrelated", "Emissivity decreases with absorption"],
      correctAnswer: "A good emitter is also a good absorber"
    },
    {
      questionText: "Which property of a material determines how well it emits thermal radiation?",
      options: ["Emissivity", "Thermal conductivity", "Specific heat", "Latent heat"],
      correctAnswer: "Emissivity"
    },
    {
      questionText: "What is the primary mode of heat transfer in gases?",
      options: ["Convection", "Conduction", "Radiation", "Diffusion"],
      correctAnswer: "Convection"
    },
    {
      questionText: "What happens to the temperature of an object when it absorbs more thermal energy than it emits?",
      options: ["The temperature increases", "The temperature decreases", "The temperature remains constant", "It depends on the material"],
      correctAnswer: "The temperature increases"
    },
    {
      questionText: "Which factor has the greatest influence on the rate of heat radiation?",
      options: ["Temperature difference", "Thickness of material", "Color of the surface", "Specific heat"],
      correctAnswer: "Temperature difference"
    },
    {
      questionText: "Which gas is used in thermometers for measuring very low temperatures?",
      options: ["Helium", "Hydrogen", "Nitrogen", "Argon"],
      correctAnswer: "Helium"
    },
    {
      questionText: "What is the temperature at which all molecular motion theoretically stops?",
      options: ["Absolute zero", "0°C", "273 K", "-273°C"],
      correctAnswer: "Absolute zero"
    },
    {
      questionText: "What type of surfaces are poor emitters of thermal radiation?",
      options: ["Polished and shiny surfaces", "Black surfaces", "Rough surfaces", "Dark-colored surfaces"],
      correctAnswer: "Polished and shiny surfaces"
    },
    {
      questionText: "What does a high specific heat capacity indicate about a substance?",
      options: ["It requires a large amount of heat to raise its temperature", "It heats up quickly", "It loses heat quickly", "It has low thermal resistance"],
      correctAnswer: "It requires a large amount of heat to raise its temperature"
    },
    {
      questionText: "What is the heat transfer mechanism in a double-walled vacuum flask?",
      options: ["Minimal heat transfer due to reduced conduction and convection", "Maximized heat transfer due to convection", "Reduced heat transfer due to high thermal conductivity", "Heat transfer only through conduction"],
      correctAnswer: "Minimal heat transfer due to reduced conduction and convection"
    },
    {
      questionText: "What is the temperature at which water freezes in Kelvin?",
      options: ["273 K", "0 K", "100 K", "373 K"],
      correctAnswer: "273 K"
    }        
  ]
  const thermoQuestions=[
    {
      questionText: "What is the First Law of Thermodynamics?",
      options: [
        "Energy cannot be created or destroyed, only transformed",
        "Heat cannot spontaneously flow from a colder body to a hotter body",
        "Entropy always increases in an isolated system",
        "A perfect crystal at absolute zero has zero entropy"
      ],
      correctAnswer: "Energy cannot be created or destroyed, only transformed"
    },
    {
      questionText: "Which thermodynamic process occurs at constant volume?",
      options: [
        "Isothermal process",
        "Isochoric process",
        "Adiabatic process",
        "Isobaric process"
      ],
      correctAnswer: "Isochoric process"
    },
    {
      questionText: "What does entropy measure in a system?",
      options: [
        "Energy conservation",
        "The degree of disorder or randomness",
        "Temperature change",
        "Work done on the system"
      ],
      correctAnswer: "The degree of disorder or randomness"
    },
    {
      questionText: "Which law of thermodynamics defines absolute zero temperature?",
      options: [
        "First law",
        "Second law",
        "Zeroth law",
        "Third law"
      ],
      correctAnswer: "Third law"
    },
    {
      questionText: "What is a reversible process in thermodynamics?",
      options: [
        "A process that cannot be reversed",
        "A process where the system remains in equilibrium",
        "A process involving heat exchange only",
        "A spontaneous process"
      ],
      correctAnswer: "A process where the system remains in equilibrium"
    },
    {
      questionText: "What is the formula for work done during an isobaric process?",
      options: [
        "W = P ΔV",
        "W = nRT ln(V2/V1)",
        "W = ΔU + Q",
        "W = -Q ΔT"
      ],
      correctAnswer: "W = P ΔV"
    },
    {
      questionText: "What is the efficiency (η) of a Carnot engine?",
      options: [
        "η = 1 - Qc/Qh",
        "η = Qh - Qc",
        "η = 1 - Tc/Th",
        "η = Qh/Th"
      ],
      correctAnswer: "η = 1 - Tc/Th"
    },
    {
      questionText: "What is the relationship between heat (Q), mass (m), specific heat capacity (c), and temperature change (ΔT)?",
      options: [
        "Q = mc^2",
        "Q = mcΔT",
        "Q = m ΔT",
        "Q = ΔT/c"
      ],
      correctAnswer: "Q = mcΔT"
    },
    {
      questionText: "What is the formula for internal energy change in an ideal gas?",
      options: [
        "ΔU = nCvΔT",
        "ΔU = nRT ln(V2/V1)",
        "ΔU = Q - W",
        "ΔU = PΔV"
      ],
      correctAnswer: "ΔU = nCvΔT"
    },
    {
      questionText: "How is the entropy change calculated in an isothermal process?",
      options: [
        "ΔS = nR ln(V2/V1)",
        "ΔS = Q/T",
        "ΔS = nRT ln(V2/V1)",
        "ΔS = PΔV"
      ],
      correctAnswer: "ΔS = Q/T"
    },
    {
      questionText: "What is the thermodynamic system where no heat is exchanged?",
      options: [
        "Adiabatic system",
        "Isothermal system",
        "Isobaric system",
        "Isochoric system"
      ],
      correctAnswer: "Adiabatic system"
    },
    {
      questionText: "Which quantity remains constant in an isothermal process?",
      options: [
        "Temperature",
        "Pressure",
        "Volume",
        "Entropy"
      ],
      correctAnswer: "Temperature"
    },
    {
      questionText: "What is the specific heat capacity of water in SI units?",
      options: [
        "4.18 J/g·°C",
        "2.34 J/g·°C",
        "1.01 J/g·°C",
        "0.82 J/g·°C"
      ],
      correctAnswer: "4.18 J/g·°C"
    },
    {
      questionText: "What is the Second Law of Thermodynamics?",
      options: [
        "Entropy of an isolated system always increases",
        "Energy cannot be created or destroyed",
        "Absolute zero cannot be reached",
        "Heat flows only when work is done"
      ],
      correctAnswer: "Entropy of an isolated system always increases"
    },
    {
      questionText: "What is the heat required to change 1 kg of a substance from solid to liquid called?",
      options: [
        "Latent heat of fusion",
        "Latent heat of vaporization",
        "Specific heat capacity",
        "Thermal conductivity"
      ],
      correctAnswer: "Latent heat of fusion"
    },
    {
      questionText: "What is the first law of thermodynamics?",
      options: ["Energy cannot be created or destroyed", "Entropy always increases", "Heat flows from cold to hot spontaneously", "The universe tends toward disorder"],
      correctAnswer: "Energy cannot be created or destroyed"
    },
    {
      questionText: "Which of the following equations represents the first law of thermodynamics?",
      options: ["Q = mcΔT", "ΔU = Q - W", "PV = nRT", "P1V1 = P2V2"],
      correctAnswer: "ΔU = Q - W"
    },
    {
      questionText: "What does the symbol ΔU represent in thermodynamics?",
      options: ["Change in entropy", "Change in temperature", "Change in internal energy", "Change in work"],
      correctAnswer: "Change in internal energy"
    },
    {
      questionText: "What is the unit of heat in the SI system?",
      options: ["Joule", "Calorie", "Watt", "Newton"],
      correctAnswer: "Joule"
    },
    {
      questionText: "Which process occurs at constant pressure?",
      options: ["Isobaric", "Isochoric", "Isothermal", "Adiabatic"],
      correctAnswer: "Isobaric"
    },
    {
      questionText: "What is an isothermal process?",
      options: ["A process with constant volume", "A process with constant temperature", "A process with constant pressure", "A process with no heat exchange"],
      correctAnswer: "A process with constant temperature"
    },
    {
      questionText: "In an adiabatic process, which quantity remains constant?",
      options: ["Pressure", "Volume", "Heat", "Temperature"],
      correctAnswer: "Heat"
    },
    {
      questionText: "What is the second law of thermodynamics?",
      options: ["Heat flows spontaneously from hot to cold", "Energy cannot be created or destroyed", "Entropy of an isolated system decreases", "Work done is equal to heat supplied"],
      correctAnswer: "Heat flows spontaneously from hot to cold"
    },
    {
      questionText: "What is entropy a measure of?",
      options: ["Energy", "Disorder", "Work", "Temperature"],
      correctAnswer: "Disorder"
    },
    {
      questionText: "Which of the following is an example of an irreversible process?",
      options: ["Melting of ice", "Expansion of gas in a vacuum", "Compression of gas at constant pressure", "Isothermal expansion"],
      correctAnswer: "Expansion of gas in a vacuum"
    },
    {
      questionText: "What is the efficiency of a Carnot engine dependent on?",
      options: ["Heat added", "Work done", "Temperature difference", "Entropy change"],
      correctAnswer: "Temperature difference"
    },
    {
      questionText: "Which formula represents the efficiency of a heat engine?",
      options: ["η = W/Qh", "η = Qc/Qh", "η = mcΔT", "η = P1V1/T1"],
      correctAnswer: "η = W/Qh"
    },
    {
      questionText: "What is the SI unit of entropy?",
      options: ["J/K", "W/m²", "kg/m³", "N·m"],
      correctAnswer: "J/K"
    },
    {
      questionText: "In thermodynamics, what does Q stand for?",
      options: ["Heat", "Work", "Energy", "Temperature"],
      correctAnswer: "Heat"
    },
    {
      questionText: "What type of process is characterized by no heat exchange?",
      options: ["Isothermal", "Adiabatic", "Isochoric", "Isobaric"],
      correctAnswer: "Adiabatic"
    },
    {
      questionText: "What is the thermal efficiency of an ideal Carnot engine operating between temperatures T1 and T2?",
      options: ["1 - T1/T2", "T1/T2", "1 + T1/T2", "T2/T1"],
      correctAnswer: "1 - T1/T2"
    },
    {
      questionText: "What is the relationship between work (W), heat (Q), and internal energy change (ΔU)?",
      options: ["ΔU = Q + W", "ΔU = Q - W", "Q = W + ΔU", "Q = ΔU - W"],
      correctAnswer: "ΔU = Q - W"
    },
    {
      questionText: "What does a positive value for work (W) in thermodynamics indicate?",
      options: ["Work done by the system", "Work done on the system", "Heat absorbed", "Energy lost"],
      correctAnswer: "Work done on the system"
    },
    {
      questionText: "What does the area under a PV diagram represent?",
      options: ["Temperature", "Heat", "Work", "Entropy"],
      correctAnswer: "Work"
    },
    {
      questionText: "What is the purpose of a heat pump?",
      options: ["Convert heat into work", "Transfer heat from a colder body to a hotter body", "Reduce entropy", "Increase work output"],
      correctAnswer: "Transfer heat from a colder body to a hotter body"
    },
    {
      questionText: "What is the third law of thermodynamics?",
      options: ["Entropy approaches zero as temperature approaches absolute zero", "Heat flows spontaneously from hot to cold", "Energy cannot be created or destroyed", "Entropy of an isolated system increases"],
      correctAnswer: "Entropy approaches zero as temperature approaches absolute zero"
    },
    {
      questionText: "What is the value of absolute zero in Celsius?",
      options: ["-273.15°C", "0°C", "-100°C", "-273°C"],
      correctAnswer: "-273.15°C"
    },
    {
      questionText: "What does the term 'isochoric' mean?",
      options: ["Constant pressure", "Constant volume", "Constant temperature", "Constant entropy"],
      correctAnswer: "Constant volume"
    },
    {
      questionText: "What is the formula for calculating heat (Q) in a system?",
      options: ["Q = mcΔT", "Q = ΔU - W", "Q = W - ΔU", "Q = PV"],
      correctAnswer: "Q = mcΔT"
    },
    {
      questionText: "Which thermodynamic process is used in refrigerators?",
      options: ["Adiabatic process", "Isothermal process", "Reversible process", "Heat pump process"],
      correctAnswer: "Heat pump process"
    },
    {
      questionText: "What is the work done during an isochoric process?",
      options: ["Zero", "Positive", "Negative", "Depends on heat exchanged"],
      correctAnswer: "Zero"
    },
    {
      questionText: "What is the heat capacity of a substance defined as?",
      options: ["The amount of heat required to change its temperature by one degree", "The amount of heat required to change its state", "The amount of energy stored per unit mass", "The amount of work done by the substance"],
      correctAnswer: "The amount of heat required to change its temperature by one degree"
    },
    {
      questionText: "Which law governs the relationship between pressure, volume, and temperature in an ideal gas?",
      options: ["Ideal gas law", "Boyle's law", "Charles's law", "Avogadro's law"],
      correctAnswer: "Ideal gas law"
    },
    {
      questionText: "What is the term for heat transfer through a solid without the movement of particles?",
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],
      correctAnswer: "Conduction"
    },
    {
      questionText: "Which formula represents the change in entropy (ΔS)?",
      options: ["ΔS = Q/T", "ΔS = T/Q", "ΔS = Q × T", "ΔS = PV/T"],
      correctAnswer: "ΔS = Q/T"
    },
    {
      questionText: "Which thermodynamic variable remains constant in an isobaric process?",
      options: ["Pressure", "Volume", "Entropy", "Temperature"],
      correctAnswer: "Pressure"
    },
    {
      questionText: "What is the Carnot cycle?",
      options: ["A theoretical thermodynamic cycle with maximum efficiency", "A practical heat engine", "A refrigeration process", "A cycle with no heat loss"],
      correctAnswer: "A theoretical thermodynamic cycle with maximum efficiency"
    },
    {
      questionText: "What is the relationship between temperature and entropy?",
      options: ["Higher temperature generally increases entropy", "Higher temperature decreases entropy", "Temperature and entropy are inversely proportional", "Temperature has no effect on entropy"],
      correctAnswer: "Higher temperature generally increases entropy"
    },
    {
      questionText: "What happens to the efficiency of a heat engine as the temperature of the cold reservoir approaches absolute zero?",
      options: ["Efficiency increases", "Efficiency decreases", "Efficiency becomes zero", "Efficiency becomes infinite"],
      correctAnswer: "Efficiency increases"
    }    
  ]
  const phy103Questions=[
    {
      questionText: "What is the pressure exerted by a gas if the volume is halved at constant temperature?",
      options: ["It halves", "It doubles", "It remains the same", "It quadruples"],
      correctAnswer: "It doubles"
    },
    {
      questionText: "Which law states that the volume of a gas is inversely proportional to its pressure at constant temperature?",
      options: ["Avogadro's Law", "Charles's Law", "Gay-Lussac's Law", "Boyle's Law"],
      correctAnswer: "Boyle's Law"
    },
    {
      questionText: "What is the SI unit of temperature?",
      options: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
      correctAnswer: "Kelvin"
    },
    {
      questionText: "What happens to the kinetic energy of particles as temperature increases?",
      options: ["It decreases", "It increases", "It remains constant", "It fluctuates"],
      correctAnswer: "It increases"
    },
    {
      questionText: "What is the relation between pressure and temperature in Gay-Lussac's Law?",
      options: ["Directly proportional", "Inversely proportional", "No relation", "Exponentially proportional"],
      correctAnswer: "Directly proportional"
    },
    {
      questionText: "What type of process occurs at constant pressure?",
      options: ["Isothermal", "Adiabatic", "Isobaric", "Isochoric"],
      correctAnswer: "Isobaric"
    },
    {
      questionText: "Which gas law explains why a balloon expands when heated?",
      options: ["Charles's Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
      correctAnswer: "Charles's Law"
    },
    {
      questionText: "What is the specific heat capacity of a substance?",
      options: ["Heat required to raise 1 kg by 1 K", "Heat required to raise 1 g by 1 °C", "Heat required to raise 1 mole by 1 K", "Heat required to change phase"],
      correctAnswer: "Heat required to raise 1 kg by 1 K"
    },
    {
      questionText: "What is the efficiency of a Carnot engine dependent on?",
      options: ["Type of working substance", "Temperatures of reservoirs", "Volume of the engine", "Pressure of the gas"],
      correctAnswer: "Temperatures of reservoirs"
    },
    {
      questionText: "What happens to gas pressure when temperature increases at constant volume?",
      options: ["It decreases", "It increases", "It remains the same", "It fluctuates"],
      correctAnswer: "It increases"
    },
    {
      questionText: "What is the SI unit of thermal conductivity?",
      options: ["W/mK", "J/mK", "W/m^2", "J/m^2"],
      correctAnswer: "W/mK"
    },
    {
      questionText: "What is the total internal energy of an ideal gas dependent on?",
      options: ["Pressure", "Volume", "Temperature", "Density"],
      correctAnswer: "Temperature"
    },
    {
      questionText: "What type of material has a high thermal conductivity?",
      options: ["Metal", "Wood", "Plastic", "Rubber"],
      correctAnswer: "Metal"
    },
    {
      questionText: "What is the name of the process in which heat is transferred through a fluid?",
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],
      correctAnswer: "Convection"
    },
    {
      questionText: "What is the equation for the first law of thermodynamics?",
      options: ["ΔU = Q + W", "ΔU = W - Q", "ΔU = Q - W", "ΔU = PΔV"],
      correctAnswer: "ΔU = Q - W"
    },
    {
      questionText: "What is the critical temperature of a substance?",
      options: ["Temperature at absolute zero", "Temperature below which gas cannot liquefy", "Temperature above which gas cannot liquefy", "Temperature of maximum density"],
      correctAnswer: "Temperature above which gas cannot liquefy"
    },
    {
      questionText: "What is the term for the resistance of a material to deformation?",
      options: ["Ductility", "Plasticity", "Elasticity", "Malleability"],
      correctAnswer: "Elasticity"
    },
    {
      questionText: "What type of process occurs at constant volume?",
      options: ["Isothermal", "Adiabatic", "Isobaric", "Isochoric"],
      correctAnswer: "Isochoric"
    },
    {
      questionText: "What happens to the length of a rod when heated?",
      options: ["It contracts", "It expands", "It remains the same", "It melts"],
      correctAnswer: "It expands"
    },
    {
      questionText: "What is the formula for the ideal gas law?",
      options: ["PV = nRT", "P/T = V/R", "P = nR/V", "PT = nR"],
      correctAnswer: "PV = nRT"
    },
    {
      questionText: "What is the measure of the average kinetic energy of particles in a system?",
      options: ["Pressure", "Volume", "Temperature", "Heat"],
      correctAnswer: "Temperature"
    },
    {
      questionText: "What property of a material determines how much heat it can store?",
      options: ["Density", "Thermal Conductivity", "Specific heat capacity", "Elastic modulus"],
      correctAnswer: "Specific heat capacity"
    },
    {
      questionText: "What is the unit of the gas constant R?",
      options: ["Nm", "Pa·m^3", "J/mol·K", "kg·m^2"],
      correctAnswer: "J/mol·K"
    },
    {
      questionText: "Which law states that the volume of a gas is directly proportional to its temperature at constant pressure?",
      options: ["Boyle's Law", "Avogadro's Law", "Charles's Law", "Dalton's Law"],
      correctAnswer: "Charles's Law"
    },
    {
      questionText: "What is the term for the amount of heat required to raise the temperature of 1 kg of a substance by 1 K?",
      options: ["Latent heat", "Thermal conductivity", "Specific heat", "Heat flux"],
      correctAnswer: "Specific heat"
    },
    {
      questionText: "What is the term for heat transfer without a medium?",
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],
      correctAnswer: "Radiation"
    },
    {
      questionText: "What is the thermodynamic process with no heat exchange called?",
      options: ["Isothermal", "Isochoric", "Adiabatic", "Isobaric"],
      correctAnswer: "Adiabatic"
    },
    {
      questionText: "What happens to the elasticity of a material at high temperature?",
      options: ["It increases", "It decreases", "It remains constant", "It becomes zero"],
      correctAnswer: "It decreases"
    },
    {
      questionText: "What is the ratio of stress to strain in a material called?",
      options: ["Young's modulus", "Bulk modulus", "Shear modulus", "Elastic limit"],
      correctAnswer: "Young's modulus"
    },
    {
      questionText: "Which quantity is conserved in all thermodynamic processes?",
      options: ["Work", "Heat", "Pressure", "Energy"],
      correctAnswer: "Energy"
    },
    {
      questionText: "What is the term for the amount of heat required to convert 1 kg of a solid into a liquid?",
      options: ["Latent heat of vaporization", "Latent heat of fusion", "Specific heat", "Heat flux"],
      correctAnswer: "Latent heat of fusion"
    },
    {
      questionText: "What happens to the density of a gas when temperature increases at constant pressure?",
      options: ["It increases", "It decreases", "It remains the same", "It fluctuates"],
      correctAnswer: "It decreases"
    },
    {
      questionText: "What is the term for a measure of a material's ability to conduct heat?",
      options: ["Thermal conductivity", "Specific heat", "Heat capacity", "Latent heat"],
      correctAnswer: "Thermal conductivity"
    },
    {
      questionText: "Which type of material is a good insulator of heat?",
      options: ["Metal", "Wood", "Glass", "Plastic"],
      correctAnswer: "Wood"
    },
    {
      questionText: "What is the efficiency of a heat engine limited by?",
      options: ["Input temperature", "Output temperature", "Fuel Type", "Reservoir temperatures"],
      correctAnswer: "Reservoir temperatures"
    },
    {
      questionText: "What is the term for the temperature at which a gas becomes a liquid?",
      options: ["Melting point", "Freezing point", "Boiling point", "Condensation point"],
      correctAnswer: "Condensation point"
    },
    {
      questionText: "What is the process in which heat is transferred from a hot object to a cold object through direct contact?",
      options: ["Evaporation", "Convection", "Radiation", "Conduction"],
      correctAnswer: "Conduction"
    },
    {
      questionText: "What is the unit of specific heat capacity?",
      options: ["kg/m^3", "W/mK", "J/mol·K", "J/kg·K"],
      correctAnswer: "J/kg·K"
    },
    {  
      questionText: "What is the relationship between stress and strain for an elastic material?",  
      options: ["Exponentially Proportional", "Inversely proportional", "No relation", "Directly proportional"],  
      correctAnswer: "Directly proportional"  
    },  
    {  
      questionText: "What is the phase change from solid to gas called?",  
      options: ["Freezing", "Condensation", "Evaporation", "Sublimation"],  
      correctAnswer: "Sublimation"  
    },  
    {  
      questionText: "What happens to the volume of a gas when pressure increases at constant temperature?",  
      options: ["It increases", "It decreases", "It remains constant", "It fluctuates"],  
      correctAnswer: "It decreases"  
    },  
    {  
      questionText: "Which law explains the diffusion of gases?",  
      options: ["Boyle's Law", "Graham's Law", "Avogadro's Law", "Charles's Law"],  
      correctAnswer: "Graham's Law"  
    },  
    {  
      questionText: "What is the term for the energy required to raise the temperature of a unit mass of a substance by one degree?",  
      options: ["Latent heat", "Specific heat", "Thermal energy", "Heat flux"],  
      correctAnswer: "Specific heat"  
    },  
    {  
      questionText: "What happens to the boiling point of a liquid when external pressure decreases?",  
      options: ["It increases", "It decreases", "It remains the same", "It fluctuates"],  
      correctAnswer: "It decreases"  
    },  
    {  
      questionText: "What is the value of the universal gas constant R?",  
      options: ["8.314 J/mol·K", "6.022 x 10^23 J/mol·K", "1.01 x 10^5 Pa", "273 K"],  
      correctAnswer: "8.314 J/mol·K"  
    },  
    {  
      questionText: "What happens to the length of an object when cooled?",  
      options: ["It expands", "It contracts", "It remains constant", "It bends"],  
      correctAnswer: "It contracts"  
    },  
    {  
      questionText: "Which law relates the partial pressure of gases in a mixture to the total pressure?",  
      options: ["Dalton's Law", "Boyle's Law", "Gay-Lussac's Law", "Henry's Law"],  
      correctAnswer: "Dalton's Law"  
    },  
    {  
      questionText: "What is the measure of a fluid's resistance to flow?",  
      options: ["Viscosity", "Density", "Thermal conductivity", "Surface tension"],  
      correctAnswer: "Viscosity"  
    },  
    {  
      questionText: "Which process involves the transfer of heat without the movement of matter?",  
      options: ["Evaporation", "Convection", "Radiation", "Conduction"],  
      correctAnswer: "Conduction"  
    },  
    {  
      questionText: "What type of material is best for minimizing heat transfer?",  
      options: ["Semiconductor", "Conductor", "Metal", "Insulator"],  
      correctAnswer: "Insulator"  
    },  
    {  
      questionText: "Which process describes heat transfer through electromagnetic waves?",  
      options: ["Conduction", "Convection", "Radiation", "Diffusion"],  
      correctAnswer: "Radiation"  
    },  
    {  
      questionText: "What is the formula for calculating work done in an isobaric process?",  
      options: ["W = PΔV", "W = Q - ΔU", "W = nRT", "W = PV"],  
      correctAnswer: "W = PΔV"  
    },  
    {  
      questionText: "What is the name for the point where all three phases of matter coexist?",  
      options: ["Critical Point", "Boiling point", "Triple point", "Melting point"],  
      correctAnswer: "Triple point"  
    },  
    {  
      questionText: "Which law relates the amount of gas to the volume it occupies at constant temperature and pressure?",  
      options: ["Avogadro's Law", "Boyle's Law", "Charles's Law", "Graham's Law"],  
      correctAnswer: "Avogadro's Law"  
    },  
    {  
      questionText: "What is the process by which a liquid changes into a vapor below its boiling point?",  
      options: ["Condensation", "Evaporation", "Sublimation", "Melting"],  
      correctAnswer: "Evaporation"  
    },  
    {  
      questionText: "What is the coefficient of linear expansion?",  
      options: ["Change in mass per degree temperature change", "Change in length per degree temperature change", "Change in density per degree temperature change", "Change in volume per degree temperature change"],  
      correctAnswer: "Change in length per degree temperature change"  
    },  
    {  
      questionText: "What is the term for the heat energy required to change a substance from liquid to gas?",  
      options: ["Specific heat", "Latent heat of fusion", "Latent heat of vaporization", "Heat capacity"],  
      correctAnswer: "Latent heat of vaporization"  
    },  
    {  
      questionText: "What is the term for the amount of force per unit area?",  
      options: ["Work", "Stress", "Strain", "Pressure"],  
      correctAnswer: "Pressure"  
    },  
    {  
      questionText: "Which gas law is applied when the number of moles and pressure remain constant?",  
      options: ["Charles's Law", "Boyle's Law", "Avogadro's Law", "Gay-Lussac's Law"],  
      correctAnswer: "Charles's Law"  
    },  
    {  
      questionText: "What happens to the density of a substance when it is heated?",  
      options: ["It increases", "It decreases", "It remains the same", "It fluctuates"],  
      correctAnswer: "It decreases"  
    },  
    {  
      questionText: "What is the term for the maximum stress that a material can withstand?",  
      options: ["Elastic limit", "Plastic limit", "Yield strength", "Breaking stress"],  
      correctAnswer: "Breaking stress"  
    },  
    {  
      questionText: "What happens to the pressure of a gas if the temperature is decreased at constant volume?",  
      options: ["It increases", "It decreases", "It remains constant", "It fluctuates"],  
      correctAnswer: "It decreases"  
    },  
    {  
      questionText: "What is the term for the energy required to raise the temperature of a unit mass of a substance by 1 degree Celsius?",  
      options: ["Specific heat capacity", "Latent heat", "Thermal conductivity", "Heat flux"],  
      correctAnswer: "Specific heat capacity"  
    },  
    {  
      questionText: "Which law states that the total pressure of a mixture of gases is the sum of their partial pressures?",  
      options: ["Dalton's Law", "Boyle's Law", "Charles's Law", "Avogadro's Law"],  
      correctAnswer: "Dalton's Law"  
    },  
    {  
      questionText: "What happens to the resistance of a conductor when its temperature increases?",  
      options: ["It increases", "It decreases", "It remains constant", "It fluctuates"],  
      correctAnswer: "It increases"  
    },  
    {  
      questionText: "What is the process in which heat is transferred through electromagnetic waves?",  
      options: ["Radiation", "Conduction", "Convection", "Evaporation"],  
      correctAnswer: "Radiation"  
    },  
    {  
      questionText: "What is the SI unit of energy?",  
      options: ["Joule", "Watt", "Newton", "Pascal"],  
      correctAnswer: "Joule"  
    },  
    {  
      questionText: "Which gas law states that pressure is directly proportional to temperature at constant volume?",  
      options: ["Gay-Lussac's Law", "Boyle's Law", "Charles's Law", "Avogadro's Law"],  
      correctAnswer: "Gay-Lussac's Law"  
    },  
    {  
      questionText: "What is the term for the point at which the solid, liquid, and gas phases of a substance coexist?",  
      options: ["Triple point", "Critical point", "Boiling point", "Freezing point"],  
      correctAnswer: "Triple point"  
    },  
    {  
      questionText: "What is the primary factor affecting the elasticity of a material?",  
      options: ["Temperature", "Pressure", "Density", "Stress-strain relationship"],  
      correctAnswer: "Stress-strain relationship"  
    },  
    {  
      questionText: "What happens to the volume of a gas when the pressure is doubled at constant temperature?",  
      options: ["It halves", "It doubles", "It remains the same", "It quadruples"],  
      correctAnswer: "It halves"  
    },  
    {  
      questionText: "What is the term for the ability of a material to return to its original shape after deformation?",  
      options: ["Elasticity", "Plasticity", "Ductility", "Malleability"],  
      correctAnswer: "Elasticity"  
    },  
    {  
      questionText: "What is the formula for calculating work done during a thermodynamic process?",  
      options: ["W = PΔV", "W = F×d", "W = Q×t", "W = m×g"],  
      correctAnswer: "W = PΔV"  
    },  
    {  
      questionText: "What is the term for heat transfer through a solid material?",  
      options: ["Conduction", "Convection", "Radiation", "Advection"],  
      correctAnswer: "Conduction"  
    },  
    {  
      questionText: "Which property of a gas affects its thermal conductivity?",  
      options: ["Density", "Temperature", "Volume", "Specific heat"],  
      correctAnswer: "Temperature"  
    },  
    {  
      questionText: "What is the ratio of heat added or removed to temperature change?",  
      options: ["Latent heat", "Specific heat capacity", "Thermal conductivity", "Heat capacity"],  
      correctAnswer: "Heat capacity"  
    },  
    {  
      questionText: "What happens to the boiling point of water at higher altitudes?",  
      options: ["It remains the same", "It increases", "It decreases", "It fluctuates"],  
      correctAnswer: "It decreases"  
    },  
    {  
      questionText: "Which gas law relates volume and temperature at constant pressure?",  
      options: ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Dalton's Law"],  
      correctAnswer: "Charles's Law"  
    },  
    {  
      questionText: "What is the term for the amount of energy required to change a solid to a liquid?",  
      options: ["Latent heat of fusion", "Latent heat of vaporization", "Specific heat capacity", "Thermal energy"],  
      correctAnswer: "Latent heat of fusion"  
    },  
    {  
      questionText: "What is the relationship between temperature and kinetic energy of gas molecules?",  
      options: ["Exponentially proportional", "Inversely proportional", "No relationship", "Directly proportional"],  
      correctAnswer: "Directly proportional"  
    },  
    {  
      questionText: "What is the formula for calculating heat transfer in a substance?",  
      options: ["Q=mgh", "Q = PΔV", "Q = mcΔT", "Q = VIt"],  
      correctAnswer: "Q = mcΔT"  
    },  
    {  
      questionText: "What is the term for the heat transfer between fluids at different temperatures?",  
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],  
      correctAnswer: "Convection"  
    },  
    {  
      questionText: "What type of material is typically used in thermal insulation?",  
      options: ["Plastic", "Metal", "Glass", "Ceramic"],  
      correctAnswer: "Plastic"  
    },  
    {  
      questionText: "Which gas law explains the relationship between pressure and volume at constant temperature?",  
      options: ["Dalton's law", "Charles's Law", "Avogadro's Law", "Boyle's Law"],  
      correctAnswer: "Boyle's Law"  
    },  
    {  
      questionText: "What is the main principle behind the functioning of a refrigerator?",  
      options: ["Conservation of energy", "Thermal conductivity", "Heat transfer from cold to hot", "Latent heat of vaporization"],  
      correctAnswer: "Heat transfer from cold to hot"  
    },  
    {  
      questionText: "What is the SI unit of thermal energy?",  
      options: ["Watt", "Joule", "Kelvin", "Newton"],  
      correctAnswer: "Joule"  
    },  
    {  
      questionText: "What is the term for the maximum strain a material can withstand?",  
      options: ["Yield strength", "Stress", "Plasticity", "Elastic limit"],  
      correctAnswer: "Elastic limit"  
    },  
    {  
      questionText: "What happens to a gas's volume when its temperature is reduced at constant pressure?",  
      options: ["It remains the same", "It increases", "It decreases", "It fluctuates"],  
      correctAnswer: "It decreases"  
    },  
    {  
      questionText: "Which property of a material is measured in W/m·K?",  
      options: ["Specific Heat", "Thermal conductivity", "Latent heat", "Elastic modulus"],  
      correctAnswer: "Thermal conductivity"  
    },  
    {  
      questionText: "What happens to entropy in a reversible thermodynamic process?",  
      options: ["It fluctuates", "It increases", "It decreases", "It remains constant"],  
      correctAnswer: "It remains constant"  
    },  
    {  
      questionText: "What is the term for the energy transferred between two objects due to temperature difference?",  
      options: ["Power", "Work", "Heat", "Thermal conductivity"],  
      correctAnswer: "Heat"  
    },  
    {  
      questionText: "What is the term for the ratio of heat emitted by a surface to heat radiated by a blackbody at the same temperature?",  
      options: ["Reflectivity", "Emissivity", "Absorptivity", "Conductivity"],  
      correctAnswer: "Emissivity"  
    },  
    {  
      questionText: "What is the term for the state where all parts of a system are at the same temperature?",  
      options: ["Phase equilibrium", "Mechanical equilibrium", "Thermal conductivity", "Thermal equilibrium"],  
      correctAnswer: "Thermal equilibrium"  
    },  
    {  
      questionText: "What is the term for the relationship between the heat added and the temperature change in a phase change process?",  
      options: ["Thermal energy", "Specific heat", "Latent heat", "Heat capacity"],  
      correctAnswer: "Latent heat"  
    },  
    {  
      questionText: "What happens to the speed of sound in a material as its temperature increases?",  
      options: ["It decreaces", "It increases", "It remains the same", "It fluctuates"],  
      correctAnswer: "It increases"  
    }          
  ]

  const COLQuestions=[
    {
      questionText: "What is the primary goal of agricultural livelihood systems?",
      options: ["Ensuring food security", "Maximizing profits", "Improving soil fertility", "Reducing labor costs"],
      correctAnswer: "Ensuring food security"
    },
    {
      questionText: "Which of the following is NOT a characteristic of sustainable agricultural livelihoods?",
      options: ["Environmental sustainability", "Economic viability", "Dependence on non-renewable resources", "Social equity"],
      correctAnswer: "Dependence on non-renewable resources"
    },
    {
      questionText: "What does 'livelihood diversification' refer to?",
      options: ["Focusing on a single source of income", "Engaging in multiple income-generating activities", "Abandoning traditional farming practices", "Reducing agricultural productivity"],
      correctAnswer: "Engaging in multiple income-generating activities"
    },
    {
      questionText: "Which is a key element of a livelihood framework?",
      options: ["Natural resources", "Industrial development", "Urban migration", "Technology dependence"],
      correctAnswer: "Natural resources"
    },
    {
      questionText: "What role does education play in agricultural livelihoods?",
      options: ["It improves productivity and resource management", "It reduces the need for innovation", "It discourages farming practices", "It increases dependence on traditional methods"],
      correctAnswer: "It improves productivity and resource management"
    },
    {
      questionText: "What is the meaning of 'livelihood assets'?",
      options: ["Resources and skills people use to make a living", "Agricultural equipment only", "Government policies", "Exported goods"],
      correctAnswer: "Resources and skills people use to make a living"
    },
    {
      questionText: "Which of the following is an example of a natural livelihood asset?",
      options: ["Soil fertility", "Education", "Machinery", "Marketing skills"],
      correctAnswer: "Soil fertility"
    },
    {
      questionText: "What does 'vulnerability context' in livelihood analysis describe?",
      options: ["External factors affecting people's livelihoods", "Natural resilience of farming systems", "Community traditions", "Government regulations"],
      correctAnswer: "External factors affecting people's livelihoods"
    },
    {
      questionText: "Which is an example of an economic activity contributing to livelihoods?",
      options: ["Crop farming", "Deforestation", "Mining without regulations", "Urban sprawl"],
      correctAnswer: "Crop farming"
    },
    {
      questionText: "What is a key factor that enhances agricultural livelihoods in rural areas?",
      options: ["Access to markets", "Monocropping", "Reduced investment in irrigation", "Over-reliance on subsidies"],
      correctAnswer: "Access to markets"
    },
    {
      questionText: "Why is access to credit important for agricultural livelihoods?",
      options: ["It helps farmers invest in better inputs and tools", "It reduces the need for skilled labor", "It discourages innovation", "It eliminates the need for planning"],
      correctAnswer: "It helps farmers invest in better inputs and tools"
    },
    {
      questionText: "Which practice can harm agricultural livelihoods?",
      options: ["Overgrazing", "Crop rotation", "Organic farming", "Irrigation development"],
      correctAnswer: "Overgrazing"
    },
    {
      questionText: "What does the term 'food security' mean in the context of livelihoods?",
      options: ["Having reliable access to nutritious food", "Only exporting agricultural products", "Focusing on high-value crops", "Prioritizing cash crops over food crops"],
      correctAnswer: "Having reliable access to nutritious food"
    },
    {
      questionText: "Which livelihood strategy is focused on reducing risk and ensuring stability?",
      options: ["Livelihood diversification", "Over-specialization", "Monocropping", "Excessive mechanization"],
      correctAnswer: "Livelihood diversification"
    },
    {
      questionText: "What is the impact of climate change on agricultural livelihoods?",
      options: ["It increases vulnerability", "It reduces uncertainty", "It stabilizes market prices", "It encourages monocropping"],
      correctAnswer: "It increases vulnerability"
    },
    {
      questionText: "What is one of the social factors that influence agricultural livelihoods?",
      options: ["Cultural norms and traditions", "Weather patterns", "Soil type", "Pest infestation"],
      correctAnswer: "Cultural norms and traditions"
    },
    {
      questionText: "What is the primary objective of agricultural extension services?",
      options: ["To improve farmers' knowledge and skills", "To increase migration to urban areas", "To promote monocropping", "To reduce crop diversity"],
      correctAnswer: "To improve farmers' knowledge and skills"
    },
    {
      questionText: "Which of the following is an example of a human livelihood asset?",
      options: ["Skills and education", "Land ownership", "Irrigation systems", "Climate patterns"],
      correctAnswer: "Skills and education"
    },
    {
      questionText: "What does 'resilience' mean in the context of agricultural livelihoods?",
      options: ["The ability to recover from shocks and stresses", "Dependence on external aid", "Abandoning traditional practices", "Focusing only on cash crops"],
      correctAnswer: "The ability to recover from shocks and stresses"
    },
    {
      questionText: "Which of these can negatively affect rural livelihoods?",
      options: ["Lack of infrastructure", "Access to markets", "Diversification of income", "Adoption of modern farming techniques"],
      correctAnswer: "Lack of infrastructure"
    },
    {
      questionText: "What is the significance of natural resources in agricultural livelihoods?",
      options: ["They are essential for productivity and sustainability", "They limit income opportunities", "They increase dependence on imports", "They reduce crop diversity"],
      correctAnswer: "They are essential for productivity and sustainability"
    },
    {
      questionText: "Which of the following is a key livelihood strategy for rural farmers?",
      options: ["Mixed farming", "Relying solely on government aid", "Abandoning traditional methods", "Exporting all produce"],
      correctAnswer: "Mixed farming"
    },
    {
      questionText: "What is the main goal of livelihood frameworks in agriculture?",
      options: ["To analyze and improve people's living conditions", "To focus only on crop production", "To discourage diversification", "To reduce investments in technology"],
      correctAnswer: "To analyze and improve people's living conditions"
    },
    {
      questionText: "Which of the following is an example of a physical livelihood asset?",
      options: ["Irrigation facilities", "Cultural beliefs", "Family traditions", "Climate patterns"],
      correctAnswer: "Irrigation facilities"
    },
    {
      questionText: "What does 'sustainable livelihood' aim to achieve?",
      options: ["Meeting present needs without compromising future generations", "Maximizing profits at all costs", "Focusing only on cash crops", "Ignoring environmental concerns"],
      correctAnswer: "Meeting present needs without compromising future generations"
    },
    {
      questionText: "Why is access to technology important in agricultural livelihoods?",
      options: ["It enhances productivity and efficiency", "It increases dependency on labor", "It discourages innovation", "It reduces the quality of produce"],
      correctAnswer: "It enhances productivity and efficiency"
    },
    {
      questionText: "Which of these factors can reduce the vulnerability of agricultural livelihoods?",
      options: ["Improved infrastructure and education", "Climate change and deforestation", "Overgrazing and overfishing", "Excessive dependence on a single crop"],
      correctAnswer: "Improved infrastructure and education"
    },
    {
      questionText: "What is an example of a social capital asset in livelihoods?",
      options: ["Community networks and relationships", "Farm machinery", "Climate stability", "Market prices"],
      correctAnswer: "Community networks and relationships"
    },
    {
      questionText: "What role does market access play in agricultural livelihoods?",
      options: ["It ensures fair pricing and income stability", "It discourages production diversification", "It reduces opportunities for profit", "It leads to higher transportation costs"],
      correctAnswer: "It ensures fair pricing and income stability"
    },
    {
      questionText: "Which of the following is an external factor affecting agricultural livelihoods?",
      options: ["Government policies", "Farmers' education levels", "Soil quality", "Crop diversity"],
      correctAnswer: "Government policies"
    },
    {
      questionText: "What is one way to reduce risks in agricultural livelihoods?",
      options: ["Diversifying income sources", "Focusing only on cash crops", "Avoiding market expansion", "Ignoring technological advancements"],
      correctAnswer: "Diversifying income sources"
    },
    {
      questionText: "Which of the following is a direct impact of land degradation on livelihoods?",
      options: ["Reduced agricultural productivity", "Increased market access", "Improved crop diversity", "Enhanced income levels"],
      correctAnswer: "Reduced agricultural productivity"
    },
    {
      questionText: "What is a major challenge faced by agricultural livelihoods in developing countries?",
      options: ["Limited access to credit and technology", "Abundance of natural resources", "Excessive market competition", "Over-reliance on education"],
      correctAnswer: "Limited access to credit and technology"
    },
    {
      questionText: "What is the primary focus of the concept of livelihoods?",
      options: ["How people sustain their basic needs", "Maximizing agricultural output", "Global trade practices", "Urban development strategies"],
      correctAnswer: "How people sustain their basic needs"
    },
    {
      questionText: "How does gender equality impact agricultural livelihoods?",
      options: ["It improves resource allocation and productivity", "It reduces opportunities for women", "It increases labor costs", "It discourages family participation"],
      correctAnswer: "It improves resource allocation and productivity"
    },
    {
      questionText: "What is an example of a human capital asset in agriculture?",
      options: ["Knowledge of sustainable farming practices", "Farm equipment", "Government subsidies", "Market infrastructure"],
      correctAnswer: "Knowledge of sustainable farming practices"
    },
    {
      questionText: "What is the role of water resources in agricultural livelihoods?",
      options: ["They are critical for crop irrigation and livestock", "They reduce reliance on technology", "They discourage innovation", "They limit crop diversity"],
      correctAnswer: "They are critical for crop irrigation and livestock"
    },
    {
      questionText: "Which of the following is a negative consequence of poor rural infrastructure?",
      options: ["Reduced market access for farmers", "Improved education opportunities", "Increased agricultural exports", "Enhanced food security"],
      correctAnswer: "Reduced market access for farmers"
    },
    {
      questionText: "What is the impact of over-reliance on a single crop on livelihoods?",
      options: ["Increased vulnerability to market and climate risks", "Enhanced income stability", "Improved food security", "Reduced need for diversification"],
      correctAnswer: "Increased vulnerability to market and climate risks"
    },
    {
      questionText: "What is one of the benefits of sustainable agricultural practices?",
      options: ["Improved long-term productivity and environmental health", "Increased dependence on chemical inputs", "Reduced crop diversity", "Higher short-term profits only"],
      correctAnswer: "Improved long-term productivity and environmental health"
    },
    {
      questionText: "Why is social equity important in livelihood systems?",
      options: ["It ensures fair access to resources and opportunities", "It discourages community cooperation", "It increases economic disparity", "It reduces market competition"],
      correctAnswer: "It ensures fair access to resources and opportunities"
    },
    {
      questionText: "What does 'livelihood resilience' refer to?",
      options: ["The ability to adapt to shocks and recover", "Dependence on a single income source", "Over-reliance on natural resources", "Ignoring external factors"],
      correctAnswer: "The ability to adapt to shocks and recover"
    },
    {
      questionText: "Which of these is a sustainable livelihood strategy?",
      options: ["Agroforestry", "Deforestation", "Monocropping", "Overfishing"],
      correctAnswer: "Agroforestry"
    },
    {
      questionText: "What role does livestock play in agricultural livelihoods?",
      options: ["It provides income, nutrition, and manure for farming", "It discourages crop cultivation", "It reduces household income", "It increases reliance on imports"],
      correctAnswer: "It provides income, nutrition, and manure for farming"
    },
    {
      questionText: "Which of the following is a key challenge to achieving sustainable livelihoods?",
      options: ["Climate change and resource degradation", "Improved market access", "Adoption of modern farming techniques", "Community participation"],
      correctAnswer: "Climate change and resource degradation"
    },
    {
      questionText: "What is one of the key pillars of sustainable agricultural livelihoods?",
      options: ["Environmental conservation", "Monocropping", "Excessive use of fertilizers", "Abandoning traditional methods"],
      correctAnswer: "Environmental conservation"
    },
    {
      questionText: "What does 'income diversification' mean in agricultural livelihoods?",
      options: ["Engaging in multiple income-generating activities", "Relying solely on one crop", "Reducing agricultural outputs", "Focusing only on food crops"],
      correctAnswer: "Engaging in multiple income-generating activities"
    },
    {
      questionText: "What is the role of rural cooperatives in enhancing livelihoods?",
      options: ["They provide access to resources and markets", "They discourage innovation", "They reduce community participation", "They limit opportunities for women"],
      correctAnswer: "They provide access to resources and markets"
    },
    {
      questionText: "Which of the following can improve the resilience of agricultural livelihoods?",
      options: ["Adopting climate-smart farming practices", "Ignoring market demands", "Over-reliance on chemical inputs", "Deforestation"],
      correctAnswer: "Adopting climate-smart farming practices"
    },
    {
      questionText: "What is one impact of poor land management on livelihoods?",
      options: ["Decreased agricultural productivity", "Increased soil fertility", "Enhanced biodiversity", "Improved water availability"],
      correctAnswer: "Decreased agricultural productivity"
    },
    {
      questionText: "What is a key factor in ensuring food security within agricultural livelihoods?",
      options: ["Diversified farming systems", "Reduced market access", "Limited technological advancements", "Over-dependence on a single crop"],
      correctAnswer: "Diversified farming systems"
    },
    {
      questionText: "Which of these is considered a financial capital asset in agricultural livelihoods?",
      options: ["Savings and access to credit", "Fertile soil", "Irrigation systems", "Community networks"],
      correctAnswer: "Savings and access to credit"
    },
    {
      questionText: "What is the impact of education on agricultural livelihoods?",
      options: ["It enhances knowledge and adoption of better practices", "It reduces agricultural productivity", "It increases labor shortages", "It discourages rural development"],
      correctAnswer: "It enhances knowledge and adoption of better practices"
    }  
  ]
  const ruralQuestions=[
    {
      questionText: "What is the primary goal of rural development?",
      options: ["Improving the quality of life in rural areas", "Encouraging rural-to-urban migration", "Focusing solely on agricultural production", "Limiting access to modern technology"],
      correctAnswer: "Improving the quality of life in rural areas"
    },
    {
      questionText: "Which of the following is a major challenge in rural development?",
      options: ["Poor infrastructure and lack of access to basic services", "Excessive industrialization", "Overpopulation in urban areas", "Increased technological advancements"],
      correctAnswer: "Poor infrastructure and lack of access to basic services"
    },
    {
      questionText: "What is urban development focused on?",
      options: ["Enhancing infrastructure, housing, and services in cities", "Promoting agriculture over industry", "Encouraging rural migration to cities", "Reducing population in urban areas"],
      correctAnswer: "Enhancing infrastructure, housing, and services in cities"
    },
    {
      questionText: "How does rural development contribute to national growth?",
      options: ["By reducing urban congestion and enhancing food security", "By increasing urban unemployment", "By discouraging industrialization", "By isolating rural areas from urban centers"],
      correctAnswer: "By reducing urban congestion and enhancing food security"
    },
    {
      questionText: "What is a key feature of rural-urban development integration?",
      options: ["Creating balanced growth between rural and urban areas", "Focusing entirely on urbanization", "Neglecting rural areas in favor of cities", "Encouraging migration from cities to rural areas"],
      correctAnswer: "Creating balanced growth between rural and urban areas"
    },
    {
      questionText: "What is one major factor that differentiates rural and urban development?",
      options: ["Access to resources and infrastructure", "Geographical size", "Cultural heritage", "Environmental conditions"],
      correctAnswer: "Access to resources and infrastructure"
    },
    {
      questionText: "What does rural infrastructure development primarily focus on?",
      options: ["Roads, irrigation, electricity, and clean water supply", "Industrial zones and skyscrapers", "Urban housing projects", "Metropolitan transport systems"],
      correctAnswer: "Roads, irrigation, electricity, and clean water supply"
    },
    {
      questionText: "Which of the following is a common issue in urban development?",
      options: ["Overpopulation and housing shortages", "Lack of agricultural resources", "Insufficient rainfall", "Scarcity of fertile land"],
      correctAnswer: "Overpopulation and housing shortages"
    },
    {
      questionText: "How does rural-to-urban migration impact rural areas?",
      options: ["It causes labor shortages and population decline", "It improves rural development efforts", "It increases agricultural productivity", "It encourages industrialization in villages"],
      correctAnswer: "It causes labor shortages and population decline"
    },
    {
      questionText: "What is the role of technology in urban development?",
      options: ["Enhancing transportation, communication, and waste management", "Focusing only on agriculture", "Reducing infrastructure investments", "Encouraging rural migration"],
      correctAnswer: "Enhancing transportation, communication, and waste management"
    },
    {
      questionText: "Which of the following is a significant challenge in rural areas?",
      options: ["Limited access to education and healthcare", "Overcrowded housing conditions", "High levels of air pollution", "Traffic congestion"],
      correctAnswer: "Limited access to education and healthcare"
    },
    {
      questionText: "What is a key aspect of urban planning in development?",
      options: ["Efficient land use and zoning", "Promoting agricultural production", "Discouraging technological advancements", "Ignoring environmental sustainability"],
      correctAnswer: "Efficient land use and zoning"
    },
    {
      questionText: "What is a key difference between rural and urban lifestyles?",
      options: ["Urban areas have more access to amenities", "Rural areas are more industrialized", "Rural areas have higher population densities", "Urban areas lack cultural diversity"],
      correctAnswer: "Urban areas have more access to amenities"
    },
    {
      questionText: "Which of the following is a common cause of rural poverty?",
      options: ["Lack of access to markets and infrastructure", "Overpopulation in rural areas", "High levels of industrialization", "Extensive urbanization"],
      correctAnswer: "Lack of access to markets and infrastructure"
    },
    {
      questionText: "What is the focus of sustainable urban development?",
      options: ["Balancing economic growth with environmental conservation", "Prioritizing industrialization over environmental concerns", "Reducing urban infrastructure", "Encouraging rural migration to cities"],
      correctAnswer: "Balancing economic growth with environmental conservation"
    },
    {
      questionText: "What is one effect of urban sprawl on rural areas?",
      options: ["Loss of agricultural land and natural habitats", "Improved rural infrastructure", "Increased rural population", "Enhanced access to education in rural areas"],
      correctAnswer: "Loss of agricultural land and natural habitats"
    },
    {
      questionText: "How can rural and urban areas be better connected?",
      options: ["By improving transportation and communication networks", "By limiting rural development", "By increasing urban population", "By restricting migration between the two areas"],
      correctAnswer: "By improving transportation and communication networks"
    },
    {
      questionText: "What is one goal of rural-urban linkages in development?",
      options: ["Creating a symbiotic relationship between cities and rural areas", "Reducing investment in rural infrastructure", "Encouraging urban migration", "Focusing solely on rural areas"],
      correctAnswer: "Creating a symbiotic relationship between cities and rural areas"
    },
    {
      questionText: "What is an advantage of urbanization for rural communities?",
      options: ["Improved market access for agricultural products", "Loss of labor in rural areas", "Decline in rural productivity", "Environmental degradation in cities"],
      correctAnswer: "Improved market access for agricultural products"
    },
    {
      questionText: "What is a primary challenge of rural-urban migration?",
      options: ["Urban overpopulation and rural labor shortages", "Improved rural productivity", "Balanced resource allocation", "Increased access to rural markets"],
      correctAnswer: "Urban overpopulation and rural labor shortages"
    },
    {
      questionText: "What is the purpose of urban renewal projects?",
      options: ["To redevelop and improve declining urban areas", "To discourage population growth in cities", "To focus on rural development exclusively", "To increase urban sprawl"],
      correctAnswer: "To redevelop and improve declining urban areas"
    },
    {
      questionText: "How does industrialization affect rural development?",
      options: ["It provides opportunities for job creation and infrastructure improvement", "It discourages investment in agriculture", "It limits technological advancements", "It reduces market access for rural products"],
      correctAnswer: "It provides opportunities for job creation and infrastructure improvement"
    },
    {
      questionText: "What is one effect of urban poverty on development efforts?",
      options: ["It creates inequalities in access to education and healthcare", "It encourages sustainable development", "It reduces the demand for housing", "It increases agricultural production"],
      correctAnswer: "It creates inequalities in access to education and healthcare"
    },
    {
      questionText: "How can rural and urban development be harmonized?",
      options: ["By promoting policies that support balanced growth", "By prioritizing urban development only", "By reducing investment in rural areas", "By discouraging urban planning"],
      correctAnswer: "By promoting policies that support balanced growth"
    },
    {
      questionText: "What is the role of education in rural development?",
      options: ["It equips individuals with skills for self-sufficiency", "It reduces agricultural output", "It increases dependency on urban centers", "It discourages rural migration"],
      correctAnswer: "It equips individuals with skills for self-sufficiency"
    },
    {
      questionText: "What is a common environmental challenge in urban areas?",
      options: ["Air and water pollution", "Soil erosion", "Limited access to irrigation", "Over-reliance on agriculture"],
      correctAnswer: "Air and water pollution"
    },
    {
      questionText: "How can sustainable development benefit both rural and urban areas?",
      options: ["By ensuring resources are utilized efficiently without depletion", "By reducing rural productivity", "By limiting urban expansion", "By discouraging rural industrialization"],
      correctAnswer: "By ensuring resources are utilized efficiently without depletion"
    },
    {
      questionText: "Which sector is most commonly associated with rural development?",
      options: ["Agriculture and farming", "Information technology", "Banking and finance", "Heavy industry"],
      correctAnswer: "Agriculture and farming"
    },
    {
      questionText: "What is a major benefit of rural electrification?",
      options: ["It improves productivity and quality of life in rural areas", "It decreases agricultural output", "It encourages urban migration", "It reduces reliance on education"],
      correctAnswer: "It improves productivity and quality of life in rural areas"
    },
    {
      questionText: "What is the primary cause of urban congestion?",
      options: ["Rapid urbanization and population growth", "Decline in rural populations", "Reduction in agricultural activities", "Overproduction of goods"],
      correctAnswer: "Rapid urbanization and population growth"
    },
    {
      questionText: "Which of the following is a strategy to address urban housing shortages?",
      options: ["Affordable housing projects", "Reducing urban populations", "Focusing on rural development exclusively", "Decreasing infrastructure development"],
      correctAnswer: "Affordable housing projects"
    },
    {
      questionText: "What does the term 'urban sprawl' refer to?",
      options: ["The uncontrolled expansion of urban areas", "The planned development of cities", "The migration of people to rural areas", "The reduction of urban populations"],
      correctAnswer: "The uncontrolled expansion of urban areas"
    },
    {
      questionText: "How can rural-urban migration be managed effectively?",
      options: ["By improving living conditions and opportunities in rural areas", "By restricting migration policies", "By discouraging education in rural communities", "By limiting access to healthcare in urban areas"],
      correctAnswer: "By improving living conditions and opportunities in rural areas"
    },
    {
      questionText: "Which of the following is a key indicator of successful rural development?",
      options: ["Increased income levels and better living standards", "Reduction in agricultural production", "Higher rates of urban migration", "Decline in rural education levels"],
      correctAnswer: "Increased income levels and better living standards"
    },
    {
      questionText: "What is a critical issue in urban transport systems?",
      options: ["Traffic congestion and pollution", "Lack of paved roads", "Over-reliance on agriculture", "Scarcity of public transport options in rural areas"],
      correctAnswer: "Traffic congestion and pollution"
    },
    {
      questionText: "What does integrated rural development focus on?",
      options: ["Combining various sectors like education, health, and infrastructure", "Promoting urbanization", "Reducing agricultural activities", "Centralizing industries in cities"],
      correctAnswer: "Combining various sectors like education, health, and infrastructure"
    },
    {
      questionText: "What is a key challenge of urban development in developing countries?",
      options: ["Overpopulation and lack of infrastructure", "Decline in urban migration", "Reduction in trade opportunities", "Overinvestment in rural areas"],
      correctAnswer: "Overpopulation and lack of infrastructure"
    },
    {
      questionText: "What is the main goal of sustainable rural development?",
      options: ["Ensuring long-term use of resources without degradation", "Encouraging migration to urban areas", "Reducing agricultural output", "Promoting industrialization in rural areas"],
      correctAnswer: "Ensuring long-term use of resources without degradation"
    },
    {
      questionText: "Which of the following is an example of social capital in rural development?",
      options: ["Community networks and support systems", "Fertile land", "Agricultural tools", "Financial institutions"],
      correctAnswer: "Community networks and support systems"
    },
    {
      questionText: "What is a major environmental concern in urban areas?",
      options: ["Air and water pollution", "Soil fertility loss", "Decline in crop yields", "Lack of irrigation facilities"],
      correctAnswer: "Air and water pollution"
    },
    {
      questionText: "Which of these policies can help reduce rural poverty?",
      options: ["Providing access to microfinance and education", "Restricting rural-urban migration", "Focusing only on urban development", "Encouraging dependence on foreign aid"],
      correctAnswer: "Providing access to microfinance and education"
    },
    {
      questionText: "What is the role of urban planning in sustainable development?",
      options: ["To manage land use and resources efficiently", "To discourage industrialization", "To reduce education levels in urban areas", "To prioritize rural over urban areas"],
      correctAnswer: "To manage land use and resources efficiently"
    },
    {
      questionText: "What is one key advantage of decentralizing industries to rural areas?",
      options: ["It creates jobs and reduces rural-to-urban migration", "It increases rural poverty", "It limits access to modern technology", "It reduces agricultural productivity"],
      correctAnswer: "It creates jobs and reduces rural-to-urban migration"
    },
    {
      questionText: "What is a common challenge in both rural and urban development?",
      options: ["Inequality in access to resources and services", "Lack of cultural heritage", "Excessive infrastructure investment", "Decline in population growth"],
      correctAnswer: "Inequality in access to resources and services"
    },
    {
      questionText: "What does 'urbanization' mean in the context of development?",
      options: ["The growth and expansion of cities", "The decline of industrial activities", "The migration of people to rural areas", "The reduction of rural infrastructure"],
      correctAnswer: "The growth and expansion of cities"
    },
    {
      questionText: "Which of the following is a long-term solution to urban overcrowding?",
      options: ["Developing rural areas to reduce migration", "Increasing population growth", "Decreasing urban infrastructure", "Restricting urban planning"],
      correctAnswer: "Developing rural areas to reduce migration"
    },
    {
      questionText: "How can urban and rural areas complement each other in development?",
      options: ["By fostering trade and resource exchange between them", "By isolating rural areas from urban centers", "By limiting rural access to technology", "By encouraging urban migration only"],
      correctAnswer: "By fostering trade and resource exchange between them"
    },
    {
      questionText: "What is the impact of poor infrastructure on rural development?",
      options: ["It limits access to markets, healthcare, and education", "It increases agricultural productivity", "It reduces urban migration", "It encourages industrialization in rural areas"],
      correctAnswer: "It limits access to markets, healthcare, and education"
    },
    {
      questionText: "What is a shared goal of both rural and urban development?",
      options: ["Enhancing the quality of life for residents", "Reducing population growth", "Discouraging industrialization", "Focusing only on agriculture"],
      correctAnswer: "Enhancing the quality of life for residents"
    }    
  ]
  const uilagxQuestions=[
    {
      questionText: "What is the primary focus of the concept of livelihood?",
      options: ["Securing the means to live", "Urban migration", "Industrial development", "Reducing agricultural output"],
      correctAnswer: "Securing the means to live"
    },
    {
      questionText: "Which of the following best describes sustainable livelihood?",
      options: ["Rapid industrialization", "The ability to cope with and recover from stress and shocks", "Urban development at the expense of rural areas", "Dependence on external aid"],
      correctAnswer: "The ability to cope with and recover from stress and shocks"
    },
    {
      questionText: "What is one key component of rural livelihood strategies?",
      options: ["Urban housing projects", "High-tech industries", "Agriculture and farming", "Reduction in labor availability"],
      correctAnswer: "Agriculture and farming"
    },
    {
      questionText: "Which of these is an example of a natural asset in a livelihood framework?",
      options: ["Savings and loans", "Education and training", "Social networks", "Land and water resources"],
      correctAnswer: "Land and water resources"
    },
    {
      questionText: "What does urban livelihood often rely on?",
      options: ["Formal and informal employment sectors", "Subsistence farming", "Deforestation", "Lack of access to healthcare"],
      correctAnswer: "Formal and informal employment sectors"
    },
    {
      questionText: "What is a common challenge for rural livelihoods?",
      options: ["Excessive migration to rural areas", "Limited access to markets and infrastructure", "Overabundance of job opportunities", "High-tech industrialization"],
      correctAnswer: "Limited access to markets and infrastructure"
    },
    {
      questionText: "Which of the following policies can improve rural livelihoods?",
      options: ["Reducing agricultural investments", "Prioritizing urban infrastructure", "Access to microfinance and education", "Encouraging rural depopulation"],
      correctAnswer: "Access to microfinance and education"
    },
    {
      questionText: "What is one main advantage of urban livelihoods?",
      options: ["More environmental resources", "Dependence on subsistence farming", "Lower cost of living", "Greater access to diversified income sources"],
      correctAnswer: "Greater access to diversified income sources"
    },
    {
      questionText: "What is a major objective of rural development?",
      options: ["To improve quality of life and reduce poverty in rural areas", "To promote urbanization", "To encourage rural-urban migration", "To industrialize rural regions exclusively"],
      correctAnswer: "To improve quality of life and reduce poverty in rural areas"
    },
    {
      questionText: "How does rural development contribute to national economic growth?",
      options: ["By encouraging migration to urban areas", "By enhancing agricultural production and rural entrepreneurship", "By reducing trade opportunities", "By limiting access to markets"],
      correctAnswer: "By enhancing agricultural production and rural entrepreneurship"
    },
    {
      questionText: "What is one way urban development differs from rural development?",
      options: ["Urban development reduces job oppurtunities", "Urban development emphasizes farming over industries", "Urban development focuses on infrastructure and industrial growth", "Urban development has a lower population density"],
      correctAnswer: "Urban development focuses on infrastructure and industrial growth"
    },
    {
      questionText: "Which sector is critical for sustainable rural livelihoods?",
      options: ["Urban housing", "Heavy industry", "Tourism", "Agriculture"],
      correctAnswer: "Agriculture"
    },
    {
      questionText: "What is the role of education in rural development?",
      options: ["It empowers individuals with skills for better livelihood opportunities", "It decreases agricultural productivity", "It restricts access to urban areas", "It reduces economic growth in rural areas"],
      correctAnswer: "It empowers individuals with skills for better livelihood opportunities"
    },
    {
      questionText: "Which of the following is a critical challenge in urban development?",
      options: ["Lack of agricultural land", "Overpopulation and strain on infrastructure", "High cost of rural labor", "Excessive availability of housing"],
      correctAnswer: "Overpopulation and strain on infrastructure"
    },
    {
      questionText: "What does the term 'urbanization' refer to?",
      options: ["The decline of urban areas", "The reduction of rural areas", "The process of increasing the number of people living in cities", "The focus on rural electrification"],
      correctAnswer: "The process of increasing the number of people living in cities"
    },
    {
      questionText: "Which of the following factors often drives rural-to-urban migration?",
      options: ["Abundance of agricultural land in rural areas", "Improved rural infrastructure", "Decline in urban living standards", "Better job opportunities and education in cities"],
      correctAnswer: "Better job opportunities and education in cities"
    },
    {
      questionText: "What is the primary objective of urban planning?",
      options: ["To organize land use and infrastructure development in cities", "To reduce urban populations", "To encourage rural migration", "To promote traditional farming methods"],
      correctAnswer: "To organize land use and infrastructure development in cities"
    },
    {
      questionText: "Which of the following is a sustainable livelihood approach?",
      options: ["Focusing on industrial development", "Strengthening local capacities and resources", "Encouraging dependence on foreign aid", "Neglecting rural education"],
      correctAnswer: "Strengthening local capacities and resources"
    },
    {
      questionText: "What is a common feature of rural livelihoods?",
      options: ["Extensive industrial employment", "Highly developed transport systems", "Dependence on natural resources", "High population density"],
      correctAnswer: "Dependence on natural resources"
    },
    {
      questionText: "What is the main difference between rural and urban development priorities?",
      options: ["Urban development reduces educational opputunities", "Rural development targets industries, while urban development focuses on farming", "Rural development discourages infrastructure development", "Rural development focuses on agriculture, while urban development emphasizes industrialization"],
      correctAnswer: "Rural development focuses on agriculture, while urban development emphasizes industrialization"
    },
    {
      questionText: "What is a major factor limiting rural development in developing countries?",
      options: ["Poor infrastructure and limited access to services", "Excessive investment in agriculture", "High levels of industrialization", "Urban overcrowding"],
      correctAnswer: "Poor infrastructure and limited access to services"
    },
    {
      questionText: "What is one key characteristic of urban development?",
      options: ["Dependence on subsistence farming", "High population density and infrastructure growth", "Lack of access to education", "Limited economic activities"],
      correctAnswer: "High population density and infrastructure growth"
    },
    {
      questionText: "Which policy can improve rural livelihoods significantly?",
      options: ["Encouraging urban migration", "Reducing agricultural productivity", "Providing access to markets and credit facilities", "Neglecting rural healthcare"],
      correctAnswer: "Providing access to markets and credit facilities"
    },
    {
      questionText: "What does the term 'livelihood diversification' refer to?",
      options: ["Reducing the number of rural jobs", "Specializing in a single crop or industry", "Focusing only on farming", "Engaging in multiple income-generating activities"],
      correctAnswer: "Engaging in multiple income-generating activities"
    },
    {
      questionText: "What is the primary purpose of rural electrification projects?",
      options: ["To enhance living standards and support economic activities", "To promote urban migration", "To reduce agricultural productivity", "To limit access to modern technology"],
      correctAnswer: "To enhance living standards and support economic activities"
    },
    {
      questionText: "Which sector is a key driver of urban economic growth?",
      options: ["Subsistence farming", "Industrial and service sectors", "Traditional fishing", "Timber logging"],
      correctAnswer: "Industrial and service sectors"
    },
    {
      questionText: "What is a major difference between rural and urban areas?",
      options: ["Urban areas lack infrastructure", "Rural areas have higher population density", "Rural areas rely on agriculture, while urban areas focus on industries", "Rural areas are less affected by environmental issues"],
      correctAnswer: "Rural areas rely on agriculture, while urban areas focus on industries"
    },
    {
      questionText: "Which of the following is a benefit of urban development?",
      options: ["Limited access to healthcare", "Increased poverty rates", "Reduction in housing options", "Increased job opportunities in diverse sectors"],
      correctAnswer: "Increased job opportunities in diverse sectors"
    },
    {
      questionText: "What does the term 'sustainable rural development' emphasize?",
      options: ["Balancing economic, social, and environmental goals in rural areas", "Prioritizing urban migration", "Focusing solely on industrial growth", "Neglecting rural education"],
      correctAnswer: "Balancing economic, social, and environmental goals in rural areas"
    },
    {
      questionText: "How can rural-urban migration impact rural areas?",
      options: ["It improves rural infrastructure", "It can lead to labor shortages in agriculture", "It increases rural population density", "It reduces urban job opportunities"],
      correctAnswer: "It can lead to labor shortages in agriculture"
    },
    {
      questionText: "What is one key challenge in balancing rural and urban development?",
      options: ["Lack of urban job oppurtunities", "Excessive rural population growth", "Unequal allocation of resources and investments", "Overdevelopment of rural industries"],
      correctAnswer: "Unequal allocation of resources and investments"
    },
    {
      questionText: "What is a livelihood asset in the context of rural development?",
      options: ["A system of urban employment", "A rural migration plan", "A policy document", "Any resource or skill that supports sustainable living"],
      correctAnswer: "Any resource or skill that supports sustainable living"
    },
    {
      questionText: "Which of the following best describes urban sprawl?",
      options: ["Unplanned and uncontrolled expansion of urban areas", "The migration of people to rural areas", "A planned development strategy", "A reduction in urban population"],
      correctAnswer: "Unplanned and uncontrolled expansion of urban areas"
    },
    {
      questionText: "Which government initiative would benefit rural livelihoods the most?",
      options: ["Increasing urbanization rates", "Providing access to education, healthcare, and infrastructure", "Limiting agricultural investments", "Reducing microfinance opportunities"],
      correctAnswer: "Providing access to education, healthcare, and infrastructure"
    },
    {
      questionText: "What is a common reason for urban unemployment?",
      options: ["Abundance of industrial jobs", "Excessive agricultural production", "Rapid migration from rural areas to cities", "Lack of infrastructure development"],
      correctAnswer: "Rapid migration from rural areas to cities"
    },
    {
      questionText: "What does the term 'poverty alleviation' refer to in rural development?",
      options: ["Investing solely in urban industries", "Promoting urbanization", "Encouraging rural depopulation", "Reducing the level of poverty in rural areas"],
      correctAnswer: "Reducing the level of poverty in rural areas"
    },
    {
      questionText: "What is a livelihood strategy that is common in urban areas?",
      options: ["Engaging in formal and informal employment", "Practicing subsistence farming", "Using only natural resources for survival", "Relying exclusively on family support"],
      correctAnswer: "Engaging in formal and informal employment"
    },
    {
      questionText: "What is the role of technology in improving rural livelihoods?",
      options: ["Reducing rural educational oppurtunities", "Increasing productivity and access to markets", "Promoting urban overcrowding", "Limiting access to healthcare"],
      correctAnswer: "Increasing productivity and access to markets"
    },
    {
      questionText: "How can urbanization negatively affect rural areas?",
      options: ["It reduces access to urban services", "It leads to increased rural investments", "It can result in the depopulation of rural regions", "It improves rural education significantly"],
      correctAnswer: "It can result in the depopulation of rural regions"
    },
    {
      questionText: "What is one challenge rural-urban migrants often face in cities?",
      options: ["Overabundance of housing options", "Access to abundant lands",  "Low population density", "Difficulty in finding suitable employment"],
      correctAnswer: "Difficulty in finding suitable employment"
    },
    {
      questionText: "What is a key goal of integrated rural-urban development strategies?",
      options: ["Achieving balanced growth and reducing inequality", "Promoting only urban industrialization", "Focusing entirely on rural areas", "Reducing rural agricultural productivity"],
      correctAnswer: "Achieving balanced growth and reducing inequality"
    },
    {
      questionText: "Which factor is crucial for improving urban infrastructure?",
      options: ["Reducing urban population", "Increasing rural poverty", "Neglecting sanitation services", "Investment in transportation and utilities"],
      correctAnswer: "Investment in transportation and utilities"
    },
    {
      questionText: "What is the main driver of urban population growth in developing countries?",
      options: ["Declining birth rates", "Overdevelopment of rural areas", "Rural-urban migration",  "Reduced access to education"],
      correctAnswer: "Rural-urban migration"
    },
    {
      questionText: "How does education contribute to rural development?",
      options: ["By increasing rural-urban migration", "By empowering individuals with skills for diverse livelihoods", "By reducing rural healthcare access", "By limiting agricultural productivity"],
      correctAnswer: "By empowering individuals with skills for diverse livelihoods"
    },
    {
      questionText: "What is a common issue in rural areas that hinders economic development?",
      options: ["Lack of access to financial services", "Overpopulation in urban centers", "High levels of industrialization", "Excessive infrastructure development"],
      correctAnswer: "Lack of access to financial services"
    },
    {
      questionText: "What is the primary focus of urban planning?",
      options: ["Promoting rural migration", "Improving agricultural productivity", "Reducing access to education", "Designing sustainable and efficient cities"],
      correctAnswer: "Designing sustainable and efficient cities"
    },
    {
      questionText: "Which sector is most vital for sustaining rural livelihoods?",
      options: ["Urban manufacturing", "Tourism industries", "Agriculture and related activities", "Information technology"],
      correctAnswer: "Agriculture and related activities"
    },
    {
      questionText: "What is a major challenge in urban development?",
      options: ["Lack of rural migration", "Overcrowding and pressure on infrastructure", "Low population density", "Excessive agricultural development"],
      correctAnswer: "Overcrowding and pressure on infrastructure"
    },
    {
      questionText: "What does the term 'rural-urban linkages' refer to?",
      options: ["The interconnection between rural and urban economies", "The migration of people to urban areas", "The isolation of rural communities", "The division of resources between cities and rural areas"],
      correctAnswer: "The interconnection between rural and urban economies"
    },
    {
      questionText: "What is a typical feature of rural areas?",
      options: ["Agricultural-based economies and low population density", "High industrial output", "Advanced transportation systems", "High urban population density"],
      correctAnswer: "Agricultural-based economies and low population density"
    },
    {
      questionText: "What is one effect of urbanization on the environment?",
      options: ["Reduction in rural development", "Improved biodiversity in cities", "Enhanced rural agricultural production", "Increased pollution and environmental degradation"],
      correctAnswer: "Increased pollution and environmental degradation"
    },
    {
      questionText: "How can governments promote sustainable livelihoods?",
      options: ["By limiting investments in rural areas", "By increasing urban migration", "By creating policies that support both rural and urban development", "By reducing access to education in rural regions"],
      correctAnswer: "By creating policies that support both rural and urban development"
    },
    {
      questionText: "What is a potential benefit of rural tourism?",
      options: ["Reducing access to rural infrastructure", "Providing alternative income sources for rural communities",  "Increasing urban congestion", "Limiting economic opportunities"],
      correctAnswer: "Providing alternative income sources for rural communities"
    },
    {
      questionText: "Why is rural health care important for livelihoods?",
      options: ["It ensures a healthy workforce for economic activities", "It reduces the need for rural education", "It promotes urban migration", "It limits rural population growth"],
      correctAnswer: "It ensures a healthy workforce for economic activities"
    },
    {
      questionText: "What is the purpose of urban regeneration projects?",
      options: ["To promote rural migration to cities", "To expand agricultural activities", "To reduce rural education opportunities", "To revitalize and improve deteriorated urban areas"],
      correctAnswer: "To revitalize and improve deteriorated urban areas"
    },
    {
      questionText: "What is a key feature of sustainable urban development?",
      options: ["Uncontrolled urban sprawl", "Exclusive focus on industrial growth", "Efficient use of resources and reduced environmental impact", "Neglect of rural areas"],
      correctAnswer: "Efficient use of resources and reduced environmental impact"
    },
    {
      questionText: "How can rural electrification improve livelihoods?",
      options: ["By reducing access to technology", "By enabling modern farming and education methods", "By increasing urban migration rates", "By limiting rural population growth"],
      correctAnswer: "By enabling modern farming and education methods"
    },
    {
      questionText: "What is one major cause of urban poverty?",
      options: ["Limited job opportunities for unskilled migrants", "Excessive agricultural investments", "High levels of rural development", "Reduced urban population density"],
      correctAnswer: "Limited job opportunities for unskilled migrants"
    },
    {
      questionText: "Why is gender equality important in rural development?",
      options: ["It reduces agricultural production", "It limits women's participation in farming", "It promotes urban migration", "It ensures equal opportunities and resources for all"],
      correctAnswer: "It ensures equal opportunities and resources for all"
    },
    {
      questionText: "What is a significant impact of poor urban planning?",
      options: ["Improved rural development", "Reduction in urban pollution", "Increased traffic congestion and inefficient resource use", "Enhanced housing options for low-income groups"],
      correctAnswer: "Increased traffic congestion and inefficient resource use"
    },
    {
      questionText: "How can financial inclusion impact rural livelihoods?",
      options: ["By increasing reliance on urban economies", "By providing access to credit and savings for small businesses", "By limiting rural development", "By reducing agricultural productivity"],
      correctAnswer: "By providing access to credit and savings for small businesses"
    },
    {
      questionText: "What is a challenge in achieving rural-urban integration?",
      options: ["Balancing resource allocation between the two regions", "Excessive urban investments", "Focusing solely on rural development", "Neglecting urban transportation systems"],
      correctAnswer: "Balancing resource allocation between the two regions"
    },
    {
      questionText: "What is the importance of cooperatives in rural development?",
      options: ["They promote urbanization", "They reduce agricultural diversity", "They increase dependency on aid", "They help farmers access markets and negotiate fair prices"],
      correctAnswer: "They help farmers access markets and negotiate fair prices"
    },
    {
      questionText: "How does improved transportation benefit rural communities?",
      options: ["By reducing rural economic activities", "By encouraging urban overpopulation", "By connecting them to markets and essential services", "By isolating rural economies"],
      correctAnswer: "By connecting them to markets and essential services"
    },
    {
      questionText: "What is a common characteristic of sustainable livelihoods?",
      options: ["Dependence on a single job type", "Diversification of income sources", "Exclusive focus on urban opportunities", "Neglect of environmental concerns"],
      correctAnswer: "Diversification of income sources"
    },
    {
      questionText: "Why is urban green space important for sustainable development?",
      options: ["It improves air quality and enhances quality of life", "It limits urban housing options", "It reduces urban productivity", "It isolates rural areas"],
      correctAnswer: "It improves air quality and enhances quality of life"
    },
    {
      questionText: "What role does migration play in livelihood strategies?",
      options: ["It limits access to education", "It reduces rural productivity", "It hinders urban development", "It can diversify income sources for rural households"],
      correctAnswer: "It can diversify income sources for rural households"
    },
    {
      questionText: "What is a significant feature of inclusive urban development?",
      options: ["Focusing solely on industrial zones", "Restricting access to rural migrants", "Ensuring equal access to services for all residents", "Promoting rural isolation"],
      correctAnswer: "Ensuring equal access to services for all residents"
    },
    {
      questionText: "What is the role of renewable energy in rural development?",
      options: ["Promoting rural migration to cities", "Providing sustainable power sources for remote areas", "Reducing agricultural activities", "Increasing reliance on fossil fuels"],
      correctAnswer: "Providing sustainable power sources for remote areas"
    },
    {
      questionText: "How can governments support rural-urban partnerships?",
      options: ["By isolating urban centers", "By reducing investments in rural areas", "By promoting only urban industries", "By fostering policies that encourage collaboration and shared growth"],
      correctAnswer: "By fostering policies that encourage collaboration and shared growth"
    },
    {
      questionText: "What is a major contributor to rural outmigration?",
      options: ["Excessive agricultural productivity", "Abundance of rural industries", "Lack of employment opportunities and access to basic services", "High levels of rural education"],
      correctAnswer: "Lack of employment opportunities and access to basic services"
    },
    {
      questionText: "What is a common barrier to urban livelihoods?",
      options: ["Lack of affordable housing and stable employment", "Overinvestment in transportation", "High levels of rural education", "Abundance of job opportunities"],
      correctAnswer: "Lack of affordable housing and stable employment"
    },
    {
      questionText: "How does access to education impact urban development?",
      options: ["It limits urban infrastructure", "It equips individuals with skills for better jobs and innovation", "It reduces rural productivity", "It promotes urban isolation"],
      correctAnswer: "It equips individuals with skills for better jobs and innovation"
    },
    {
      questionText: "What is the purpose of community-driven development initiatives?",
      options: ["To promote urbanization", "To restrict rural migration", "To focus on industrial growth only", "To empower local populations to manage and sustain projects"],
      correctAnswer: "To empower local populations to manage and sustain projects"
    },
    {
      questionText: "What does the concept of 'sustainable rural livelihoods' focus on?",
      options: ["Isolating rural areas from urban centers", "Ensuring long-term economic, social, and environmental stability", "Reducing rural population", "Increasing reliance on government aid"],
      correctAnswer: "Ensuring long-term economic, social, and environmental stability"
    },
    {
      questionText: "How can urban centers support rural economies?",
      options: ["By creating demand for rural goods and labor", "By reducing trade opportunities", "By isolating rural markets", "By focusing solely on urban industries"],
      correctAnswer: "By creating demand for rural goods and labor"
    },
    {
      questionText: "What is one key element of urban-rural linkages?",
      options: ["Isolation of rural and urban economies", "Focusing solely on urban migration", "Promoting rural poverty", "Mutual exchange of goods, labor, and knowledge"],
      correctAnswer: "Mutual exchange of goods, labor, and knowledge"
    },
    {
      questionText: "What is a major factor in urban poverty?",
      options: ["Abundance of rural resources", "Low rates of rural migration", "Limited access to education and formal employment", "Surplus housing options"],
      correctAnswer: "Limited access to education and formal employment"
    },
    {
      questionText: "What is the benefit of vocational training for rural livelihoods?",
      options: ["It limits rural education", "It equips individuals with skills for non-agricultural income sources", "It promotes urban-only job opportunities", "It isolates rural economies"],
      correctAnswer: "It equips individuals with skills for non-agricultural income sources"
    },
    {
      questionText: "What is a sustainable approach to urban waste management?",
      options: ["Promoting recycling and waste-to-energy solutions", "Increasing waste dumping in rural areas", "Limiting urban infrastructure", "Reducing investments in urban sanitation"],
      correctAnswer: "Promoting recycling and waste-to-energy solutions"
    },
    {
      questionText: "What is one key objective of livelihood programs in rural areas?",
      options: ["Promoting urban migration", "Reducing agricultural activities", "Limiting access to rural markets", "Enhancing income generation and self-reliance",],
      correctAnswer: "Enhancing income generation and self-reliance"
    },
    {
      questionText: "How can urbanization indirectly benefit rural development?",
      options: ["By reducing rural population", "By limiting rural educational opportunities", "By creating demand for rural agricultural products", "By neglecting rural healthcare needs"],
      correctAnswer: "By creating demand for rural agricultural products"
    },
    {
      questionText: "Which initiative can enhance rural livelihoods significantly?",
      options: ["Encouraging only urban-based industries", "Providing microfinance and entrepreneurship training", "Restricting rural education access", "Promoting urban sprawl"],
      correctAnswer: "Providing microfinance and entrepreneurship training"
    },
    {
      questionText: "What is a typical characteristic of informal livelihoods in urban areas?",
      options: ["Unregulated jobs such as street vending or day labor", "Guaranteed wages and benefits", "Exclusive focus on industrial work", "Dependence on rural agriculture"],
      correctAnswer: "Unregulated jobs such as street vending or day labor"
    },
    {
      questionText: "What is a common factor contributing to rural poverty?",
      options: ["Overinvestment in urban areas", "Surplus agricultural production", "Increased migration to rural regions", "Lack of access to quality education and healthcare"],
      correctAnswer: "Lack of access to quality education and healthcare"
    },
    {
      questionText: "What does the term 'urban livelihoods' refer to?",
      options: ["Farming activities in rural areas", "Traditional subsistence practices", "Means of living and earning income in cities", "Exclusive reliance on informal economies"],
      correctAnswer: "Means of living and earning income in cities"
    },
    {
      questionText: "What is one challenge faced by rural women in sustaining livelihoods?",
      options: ["Overdependence on urban job markets", "Limited access to land, credit, and training", "Increased political representation", "Excessive access to technology"],
      correctAnswer: "Limited access to land, credit, and training"
    },
    {
      questionText: "How can urban development promote sustainable livelihoods?",
      options: ["By fostering job creation in diverse sectors", "By reducing investments in infrastructure", "By limiting access to clean water", "By focusing solely on rural industries"],
      correctAnswer: "By fostering job creation in diverse sectors"
    },
    {
      questionText: "Which strategy can improve the balance between rural and urban development?",
      options: ["Isolating rural and urban economies", "Focusing only on rural development", "Promoting rapid urban migration", "Strengthening rural-urban linkages",],
      correctAnswer: "Strengthening rural-urban linkages"
    },
    {
      questionText: "What is a significant challenge of urban slum development?",
      options: ["Excessive urban infrastructure", "Low population density", "Poor living conditions and lack of basic services", "Abundance of industrial jobs"],
      correctAnswer: "Poor living conditions and lack of basic services"
    },
    {
      questionText: "How does access to markets improve rural livelihoods?",
      options: ["By reducing rural employment opportunities", "By providing opportunities to sell agricultural products", "By limiting agricultural productivity", "By increasing urban poverty rates"],
      correctAnswer: "By providing opportunities to sell agricultural products"
    },
    {
      questionText: "What is one major cause of urban unemployment?",
      options: ["High rates of rural-to-urban migration", "Increased demand for industrial jobs", "Surplus job opportunities", "Overdevelopment of urban infrastructure"],
      correctAnswer: "High rates of rural-to-urban migration"
    },
    {
      questionText: "What is one negative effect of urban sprawl?",
      options: ["Reduction in housing demand", "Improved rural development", "Greater access to public services", "Increased pressure on natural resources and infrastructure"],
      correctAnswer: "Increased pressure on natural resources and infrastructure"
    },
    {
      questionText: "What is the focus of rural livelihood programs?",
      options: ["Reducing rural population", "Focusing on rapid urbanization", "Providing sustainable means of income and improving quality of life", "Promoting dependency on external aid"],
      correctAnswer: "Providing sustainable means of income and improving quality of life"
    },
    {
      questionText: "What is a major advantage of urban planning?",
      options: ["Increased rural migration", "Efficient allocation of resources and better living conditions", "Reduction in urban population", "Limited industrial activities"],
      correctAnswer: "Efficient allocation of resources and better living conditions"
    },
    {
      questionText: "What role does education play in rural-urban development?",
      options: ["It provides skills necessary for diversified income sources", "It limits access to urban opportunities", "It promotes rural isolation", "It reduces rural productivity"],
      correctAnswer: "It provides skills necessary for diversified income sources"
    },
    {
      questionText: "What is a potential benefit of rural-urban partnerships?",
      options: ["Limited rural development", "Urban isolation from rural areas", "Exclusive focus on urban industries","Improved trade and shared resources between regions"],
      correctAnswer: "Improved trade and shared resources between regions"
    },
    {
      questionText: "How can access to technology improve rural livelihoods?",
      options: ["By reducing access to education", "By promoting urban migration", "By isolating rural economies", "By increasing productivity and connectivity"],
      correctAnswer: "By increasing productivity and connectivity"
    },
    {
      questionText: "What is the primary goal of sustainable urban development?",
      options: ["Focusing only on industrialization growth", "Promoting rural migration", "Creating environmentally friendly and resource-efficient cities", "Neglecting urban education"],
      correctAnswer: "Creating environmentally friendly and resource-efficient cities"
    },
    {
      questionText: "What does the term 'livelihood resilience' mean?",
      options: ["Exclusive reliance on government support", "The ability to recover and adapt to challenges affecting livelihoods", "Total focus on urban jobs", "Isolation of rural economies from urban centers"],
      correctAnswer: "The ability to recover and adapt to challenges affecting livelihoods"
    }    
  ]

  const ecologyQuestions=[
    {
      questionText: "What is the definition of ecology?",
      options: ["The study of living organisms and their interactions with each other and the environment", "The classification of living organisms", "The study of genetic inheritance", "The study of human anatomy"],
      correctAnswer: "The study of living organisms and their interactions with each other and the environment"
    },
    {
      questionText: "Which of the following is a biotic factor in an ecosystem?",
      options: ["Plants", "Sunlight", "Temperature", "Soil"],
      correctAnswer: "Plants"
    },
    {
      questionText: "Which term describes the role and position a species has in its environment?",
      options: ["Niche", "Habitat", "Community", "Ecosystem"],
      correctAnswer: "Niche"
    },
    {
      questionText: "What is an ecosystem?",
      options: ["A community of organisms interacting with their physical environment", "A group of species that live in the same area", "The atmospheric layer above the Earth", "The genetic composition of a population"],
      correctAnswer: "A community of organisms interacting with their physical environment"
    },
    {
      questionText: "Which of these is an abiotic factor?",
      options: ["Temperature", "Fish", "Bacteria", "Trees"],
      correctAnswer: "Temperature"
    },
    {
      questionText: "What is a food chain?",
      options: ["A linear sequence of organisms where each is eaten by the next one in the chain", "A network of interconnected food webs", "The process of photosynthesis in plants", "A type of ecological cycle"],
      correctAnswer: "A linear sequence of organisms where each is eaten by the next one in the chain"
    },
    {
      questionText: "What is the primary source of energy for most ecosystems?",
      options: ["The sun", "Water", "Soil nutrients", "Carbon dioxide"],
      correctAnswer: "The sun"
    },
    {
      questionText: "What is a trophic level?",
      options: ["The position an organism occupies in a food chain", "A type of habitat", "The process of energy transfer in cells", "A method of reproduction in plants"],
      correctAnswer: "The position an organism occupies in a food chain"
    },
    {
      questionText: "What are decomposers in an ecosystem?",
      options: ["Organisms that break down dead organic matter", "Animals that eat plants", "Plants that produce energy", "Organisms that consume predators"],
      correctAnswer: "Organisms that break down dead organic matter"
    },
    {
      questionText: "Which of the following is an example of mutualism?",
      options: ["Bees pollinating flowers", "A lion hunting a zebra", "A parasite feeding on its host", "A bird feeding on fish"],
      correctAnswer: "Bees pollinating flowers"
    },
    {
      questionText: "What is biodiversity?",
      options: ["The variety of life in an ecosystem", "The number of predators in an ecosystem", "The total amount of biomass in an ecosystem", "The percentage of plant species in a habitat"],
      correctAnswer: "The variety of life in an ecosystem"
    },
    {
      questionText: "What is the term for a group of the same species living in a specific area?",
      options: ["Population", "Community", "Ecosystem", "Biosphere"],
      correctAnswer: "Population"
    },
    {
      questionText: "What is primary succession?",
      options: ["The development of a community in an area without soil", "The recovery of a damaged ecosystem", "The process of predation", "The migration of species to a new habitat"],
      correctAnswer: "The development of a community in an area without soil"
    },
    {
      questionText: "What is secondary succession?",
      options: ["The reestablishment of an ecosystem after a disturbance", "The formation of a new habitat", "The extinction of species in a community", "The migration of animals to urban areas"],
      correctAnswer: "The reestablishment of an ecosystem after a disturbance"
    },
    {
      questionText: "What is the greenhouse effect?",
      options: ["The trapping of heat by gases in the Earth's atmosphere", "The warming of urban areas due to human activity", "The conversion of carbon dioxide into oxygen by plants", "The absorption of solar radiation by water bodies"],
      correctAnswer: "The trapping of heat by gases in the Earth's atmosphere"
    },
    {
      questionText: "Which biogeochemical cycle involves the movement of water through the environment?",
      options: ["The water cycle", "The carbon cycle", "The nitrogen cycle", "The phosphorus cycle"],
      correctAnswer: "The water cycle"
    },
    {
      questionText: "What is a keystone species?",
      options: ["A species that has a disproportionately large impact on its ecosystem", "The largest predator in an ecosystem", "A species that migrates seasonally", "A species that is the most abundant in an area"],
      correctAnswer: "A species that has a disproportionately large impact on its ecosystem"
    },
    {
      questionText: "Which of the following best describes an invasive species?",
      options: ["A non-native species that disrupts ecosystems", "A species that is threatened with extinction", "A species that occupies a specific niche", "A species that reproduces slowly"],
      correctAnswer: "A non-native species that disrupts ecosystems"
    },
    {
      questionText: "What is carrying capacity?",
      options: ["The maximum number of individuals an environment can support", "The total biomass of an ecosystem", "The rate of population growth in a community", "The energy flow in a food web"],
      correctAnswer: "The maximum number of individuals an environment can support"
    },
    {
      questionText: "What is the term for an animal that only eats plants?",
      options: ["Herbivore", "Carnivore", "Omnivore", "Decomposer"],
      correctAnswer: "Herbivore"
    },
    {
      questionText: "What is the main difference between a food chain and a food web?",
      options: ["A food chain is linear, while a food web is interconnected", "A food chain includes decomposers, while a food web does not", "A food web only includes herbivores", "A food chain involves only abiotic factors"],
      correctAnswer: "A food chain is linear, while a food web is interconnected"
    },
    {
      questionText: "What term describes the variety of ecosystems, species, and genetic diversity within an area?",
      options: ["Biodiversity", "Symbiosis", "Ecosystem resilience", "Carrying capacity"],
      correctAnswer: "Biodiversity"
    },
    {
      questionText: "What is the primary role of producers in an ecosystem?",
      options: ["To convert sunlight into chemical energy", "To break down dead organisms", "To regulate predator populations", "To consume other organisms for energy"],
      correctAnswer: "To convert sunlight into chemical energy"
    },
    {
      questionText: "Which process in the water cycle involves water vapor turning into liquid?",
      options: ["Condensation", "Evaporation", "Transpiration", "Precipitation"],
      correctAnswer: "Condensation"
    },
    {
      questionText: "What is the term for organisms that feed on both plants and animals?",
      options: ["Omnivores", "Herbivores", "Carnivores", "Decomposers"],
      correctAnswer: "Omnivores"
    },
    {
      questionText: "What is an example of an abiotic component in a forest ecosystem?",
      options: ["Soil", "Deer", "Trees", "Birds"],
      correctAnswer: "Soil"
    },
    {
      questionText: "What is the primary energy source for photosynthesis?",
      options: ["Sunlight", "Carbon dioxide", "Oxygen", "Glucose"],
      correctAnswer: "Sunlight"
    },
    {
      questionText: "Which cycle is responsible for the movement of carbon between the atmosphere, living organisms, and the Earth?",
      options: ["The carbon cycle", "The nitrogen cycle", "The phosphorus cycle", "The water cycle"],
      correctAnswer: "The carbon cycle"
    },
    {
      questionText: "Which of the following is an example of commensalism?",
      options: ["A bird nesting in a tree", "A bee pollinating a flower", "A lion hunting a gazelle", "A parasite feeding on a host"],
      correctAnswer: "A bird nesting in a tree"
    },
    {
      questionText: "What does an energy pyramid show?",
      options: ["The flow of energy through trophic levels", "The number of species in an ecosystem", "The migration patterns of animals", "The decomposition process in soil"],
      correctAnswer: "The flow of energy through trophic levels"
    },
    {
      questionText: "What is the process by which plants release water vapor into the atmosphere?",
      options: ["Transpiration", "Evaporation", "Condensation", "Precipitation"],
      correctAnswer: "Transpiration"
    },
    {
      questionText: "What is the role of nitrogen-fixing bacteria in an ecosystem?",
      options: ["To convert atmospheric nitrogen into a usable form for plants", "To break down organic matter", "To decompose dead organisms", "To produce oxygen during photosynthesis"],
      correctAnswer: "To convert atmospheric nitrogen into a usable form for plants"
    },
    {
      questionText: "Which of the following is a characteristic of a desert biome?",
      options: ["Low rainfall", "High biodiversity", "Dense vegetation", "Temperatures below freezing year-round"],
      correctAnswer: "Low rainfall"
    },
    {
      questionText: "What term describes the interaction where one organism benefits, and the other is harmed?",
      options: ["Parasitism", "Commensalism", "Mutualism", "Predation"],
      correctAnswer: "Parasitism"
    },
    {
      questionText: "What is an ecological community?",
      options: ["A group of interacting populations in an area", "The abiotic factors in an ecosystem", "A population of a single species", "The total biomass in an ecosystem"],
      correctAnswer: "A group of interacting populations in an area"
    },
    {
      questionText: "What is the process by which plants and algae produce their own food using sunlight?",
      options: ["Photosynthesis", "Respiration", "Nitrogen fixation", "Decomposition"],
      correctAnswer: "Photosynthesis"
    },
    {
      questionText: "Which of these organisms is an autotroph?",
      options: ["Grass", "Lion", "Mushroom", "Human"],
      correctAnswer: "Grass"
    },
    {
      questionText: "Which factor would likely decrease biodiversity in an ecosystem?",
      options: ["Habitat destruction", "Increased plant diversity", "Establishment of wildlife corridors", "Introduction of native species"],
      correctAnswer: "Habitat destruction"
    },
    {
      questionText: "What is the term for the gradual process of ecosystem recovery following a disturbance?",
      options: ["Ecological succession", "Adaptation", "Habitat fragmentation", "Natural selection"],
      correctAnswer: "Ecological succession"
    },
    {
      questionText: "What type of biome is characterized by low temperatures and permafrost?",
      options: ["Tundra", "Savanna", "Temperate forest", "Tropical rainforest"],
      correctAnswer: "Tundra"
    },
    {
      questionText: "What is the function of decomposers in an ecosystem?",
      options: ["Breaking down dead material and recycling nutrients", "Producing food through photosynthesis", "Consuming primary producers", "Regulating predator populations"],
      correctAnswer: "Breaking down dead material and recycling nutrients"
    },
    {
      questionText: "Which of the following would be an example of a density-dependent factor in population growth?",
      options: ["Disease", "Natural disaster", "Climate change", "Temperature"],
      correctAnswer: "Disease"
    },
    {
      questionText: "What is the term for a species that is introduced to a new environment and disrupts local ecosystems?",
      options: ["Invasive species", "Endemic species", "Keystone species", "Native species"],
      correctAnswer: "Invasive species"
    },
    {
      questionText: "What is the role of a predator in an ecosystem?",
      options: ["To control prey populations", "To increase plant growth", "To decompose organic matter", "To convert sunlight into energy"],
      correctAnswer: "To control prey populations"
    },
    {
      questionText: "What is the main limiting factor for plant growth in a desert ecosystem?",
      options: ["Water availability", "Sunlight", "Temperature", "Soil nutrients"],
      correctAnswer: "Water availability"
    },
    {
      questionText: "What is the study of the distribution and abundance of organisms called?",
      options: ["Population ecology", "Genetics", "Ethology", "Physiology"],
      correctAnswer: "Population ecology"
    },
    {
      questionText: "Which of the following is an example of a primary consumer?",
      options: ["Rabbit", "Eagle", "Grass", "Fungus"],
      correctAnswer: "Rabbit"
    },
    {
      questionText: "What happens to energy as it moves up trophic levels in a food chain?",
      options: ["It decreases", "It increases", "It remains constant", "It fluctuates randomly"],
      correctAnswer: "It decreases"
    },
    {
      questionText: "What is the role of chlorophyll in photosynthesis?",
      options: ["To capture sunlight", "To absorb carbon dioxide", "To produce glucose", "To store oxygen"],
      correctAnswer: "To capture sunlight"
    },
    {
      questionText: "Which of the following is an example of a climax community?",
      options: ["A mature forest", "A newly formed volcanic island", "A freshly plowed field", "A recently flooded area"],
      correctAnswer: "A mature forest"
    }     
  ]
  const haeQuestions=[
    {  
      questionText: "What is the basic unit of heredity?",  
      options: ["Gene", "Chromosome", "Nucleus", "Protein"],  
      correctAnswer: "Gene"  
    },  
    {  
      questionText: "Who is known as the father of genetics?",  
      options: ["Gregor Mendel", "Charles Darwin", "Watson and Crick", "Lamarck"],  
      correctAnswer: "Gregor Mendel"  
    },  
    {  
      questionText: "What is the physical appearance of an organism called?",  
      options: ["Phenotype", "Genotype", "Allele", "Trait"],  
      correctAnswer: "Phenotype"  
    },  
    {  
      questionText: "What is the alternate form of a gene called?",  
      options: ["Allele", "Trait", "Chromatid", "Genome"],  
      correctAnswer: "Allele"  
    },  
    {  
      questionText: "What determines the sex of a human baby?",  
      options: ["Combination of X and Y chromosomes", "Number of chromosomes", "Environmental factors", "Dominant traits"],  
      correctAnswer: "Combination of X and Y chromosomes"  
    },  
    {  
      questionText: "What is the term for a gene that masks the effect of another gene?",  
      options: ["Dominant", "Recessive", "Co-dominant", "Incomplete"],  
      correctAnswer: "Dominant"  
    },  
    {  
      questionText: "What is the primary mechanism of evolution?",  
      options: ["Natural selection", "Mutation", "Genetic drift", "Gene flow"],  
      correctAnswer: "Natural selection"  
    },  
    {  
      questionText: "Which scientist proposed the theory of evolution by natural selection?",  
      options: ["Charles Darwin", "Gregor Mendel", "Jean-Baptiste Lamarck", "Alfred Wallace"],  
      correctAnswer: "Charles Darwin"  
    },  
    {  
      questionText: "What is the term for a sudden change in the genetic material of an organism?",  
      options: ["Mutation", "Adaptation", "Hybridization", "Selection"],  
      correctAnswer: "Mutation"  
    },  
    {  
      questionText: "Which of the following is an example of a vestigial organ in humans?",  
      options: ["Appendix", "Heart", "Liver", "Brain"],  
      correctAnswer: "Appendix"  
    },  
    {  
      questionText: "What is the study of heredity and variation called?",  
      options: ["Genetics", "Evolution", "Ecology", "Biochemistry"],  
      correctAnswer: "Genetics"  
    },  
    {  
      questionText: "What is the term for the passing of traits from parents to offspring?",  
      options: ["Heredity", "Mutation", "Adaptation", "Evolution"],  
      correctAnswer: "Heredity"  
    },  
    {  
      questionText: "What is a hybrid organism?",  
      options: ["An organism with different alleles for a trait", "An organism with identical alleles", "An organism without a genotype", "An organism that reproduces asexually"],  
      correctAnswer: "An organism with different alleles for a trait"  
    },  
    {  
      questionText: "What is the term for a diagram used to predict genetic crosses?",  
      options: ["Punnett square", "Pedigree chart", "Karyotype", "Phylogenetic tree"],  
      correctAnswer: "Punnett square"  
    },  
    {  
      questionText: "What is the smallest unit of evolution?",  
      options: ["Population", "Species", "Individual", "Gene pool"],  
      correctAnswer: "Population"  
    },  
    {  
      questionText: "What is the process by which organisms better adapted to their environment survive and reproduce?",  
      options: ["Natural selection", "Artificial selection", "Adaptation", "Extinction"],  
      correctAnswer: "Natural selection"  
    },  
    {  
      questionText: "What is a genotype?",  
      options: ["The genetic makeup of an organism", "The observable traits of an organism", "The process of gene mutation", "The environment of an organism"],  
      correctAnswer: "The genetic makeup of an organism"  
    },  
    {  
      questionText: "What is a fossil?",  
      options: ["Preserved remains or traces of ancient organisms", "A living organism", "A genetic mutation", "A recently discovered species"],  
      correctAnswer: "Preserved remains or traces of ancient organisms"  
    },  
    {  
      questionText: "What is the term for the gradual change in species over time?",  
      options: ["Evolution", "Mutation", "Adaptation", "Speciation"],  
      correctAnswer: "Evolution"  
    },  
    {  
      questionText: "What is an example of artificial selection?",  
      options: ["Selective breeding of dogs", "Camouflage in animals", "Bird migration", "Formation of fossils"],  
      correctAnswer: "Selective breeding of dogs"  
    },  
    {  
      questionText: "What is the term for a structure that has lost its original function?",  
      options: ["Vestigial structure", "Homologous structure", "Analogous structure", "Adaptive structure"],  
      correctAnswer: "Vestigial structure"  
    },  
    {  
      questionText: "What is a homologous structure?",  
      options: ["Structures with similar anatomy but different functions", "Structures with identical functions", "Structures present only in fossils", "Structures used for locomotion"],  
      correctAnswer: "Structures with similar anatomy but different functions"  
    },  
    {  
      questionText: "What is genetic drift?",  
      options: ["Random changes in allele frequencies", "Natural selection", "Gene flow", "Mutation"],  
      correctAnswer: "Random changes in allele frequencies"  
    },  
    {  
      questionText: "What is speciation?",  
      options: ["Formation of a new species", "Adaptation to an environment", "Loss of genetic variation", "Mutation in a single gene"],  
      correctAnswer: "Formation of a new species"  
    },  
    {  
      questionText: "What is the term for traits that improve an organism's ability to survive and reproduce?",  
      options: ["Adaptations", "Mutations", "Alleles", "Vestiges"],  
      correctAnswer: "Adaptations"  
    },  
    {  
      questionText: "What is the role of DNA in heredity?",  
      options: ["Carries genetic information", "Acts as an enzyme", "Produces energy", "Fights infections"],  
      correctAnswer: "Carries genetic information"  
    },  
    {  
      questionText: "What is the difference between dominant and recessive traits?",  
      options: ["Dominant traits mask recessive traits", "Recessive traits are always expressed", "Dominant traits are weaker", "Recessive traits are stronger"],  
      correctAnswer: "Dominant traits mask recessive traits"  
    },  
    {  
      questionText: "What are analogous structures?",  
      options: ["Structures with similar functions but different origins", "Structures with identical anatomy", "Structures that have evolved independently", "Structures used in reproduction"],  
      correctAnswer: "Structures with similar functions but different origins"  
    },  
    {  
      questionText: "What is Lamarck's theory of evolution?",  
      options: ["Inheritance of acquired traits", "Natural selection", "Genetic drift", "Mutation theory"],  
      correctAnswer: "Inheritance of acquired traits"  
    },  
    {  
      questionText: "What is Darwin's finches an example of?",  
      options: ["Adaptive radiation", "Mutation", "Vestigial structures", "Artificial selection"],  
      correctAnswer: "Adaptive radiation"  
    },  
    {  
      questionText: "What is the purpose of a pedigree chart?",  
      options: ["To trace inheritance patterns", "To show evolutionary relationships", "To classify organisms", "To measure genetic drift"],  
      correctAnswer: "To trace inheritance patterns"  
    },  
    {  
      questionText: "What is the term for genetic material passed from parents to offspring?",  
      options: ["Inheritance", "Mutation", "Adaptation", "Evolution"],  
      correctAnswer: "Inheritance"  
    },  
    {  
      questionText: "What is the significance of the fossil record?",  
      options: ["Evidence of evolution", "Proof of genetic drift", "Explanation of mutations", "Demonstration of artificial selection"],  
      correctAnswer: "Evidence of evolution"  
    },  
    {  
      questionText: "What are polygenic traits?",  
      options: ["Traits controlled by multiple genes", "Traits controlled by one gene", "Traits controlled by a single allele", "Traits without genetic basis"],  
      correctAnswer: "Traits controlled by multiple genes"  
    },  
    {  
      questionText: "What are the building blocks of DNA?",  
      options: ["Nucleotides", "Amino acids", "Proteins", "Lipids"],  
      correctAnswer: "Nucleotides"  
    },  
    {  
      questionText: "What is the role of natural selection in evolution?",  
      options: ["Promotes survival of the fittest", "Eliminates all mutations", "Prevents genetic drift", "Stops speciation"],  
      correctAnswer: "Promotes survival of the fittest"  
    },  
    {  
      questionText: "What is genetic variation?",  
      options: ["Differences in DNA among individuals", "Lack of mutations", "Identical traits in a population", "Loss of genetic information"],  
      correctAnswer: "Differences in DNA among individuals"  
    },  
    {  
      questionText: "What is the significance of Mendel's experiments?",  
      options: ["Laid the foundation of genetics", "Explained natural selection", "Disproved evolution", "Invented the Punnett square"],  
      correctAnswer: "Laid the foundation of genetics"  
    },  
    {  
      questionText: "What is a phylogenetic tree used for?",  
      options: ["To show evolutionary relationships", "To trace inheritance", "To identify mutations", "To display genetic drift"],  
      correctAnswer: "To show evolutionary relationships"  
    },  
    {  
      questionText: "What is the term for a random change in an organism's DNA?",  
      options: ["Mutation", "Adaptation", "Recombination", "Selection"],  
      correctAnswer: "Mutation"  
    },  
    {  
      questionText: "What is the importance of genetic diversity in a population?",  
      options: ["Increases adaptability to environmental changes", "Ensures identical traits", "Reduces mutations", "Eliminates recessive genes"],  
      correctAnswer: "Increases adaptability to environmental changes"  
    },  
    {  
      questionText: "What is a monohybrid cross?",  
      options: ["Cross involving one trait", "Cross involving two traits", "Cross between species", "Cross between different populations"],  
      correctAnswer: "Cross involving one trait"  
    },  
    {  
      questionText: "What is the role of crossing over in meiosis?",  
      options: ["Increases genetic variation", "Eliminates mutations", "Prevents genetic drift", "Stops recombination"],  
      correctAnswer: "Increases genetic variation"  
    },  
    {  
      questionText: "What are the two types of evolution?",  
      options: ["Microevolution and macroevolution", "Natural and artificial selection", "Gradual and punctuated equilibrium", "Sympatric and allopatric speciation"],  
      correctAnswer: "Microevolution and macroevolution"  
    },  
    {  
      questionText: "What is the significance of DNA fingerprinting?",  
      options: ["Identifies individuals based on their DNA", "Traces evolutionary history", "Explains natural selection", "Detects genetic drift"],  
      correctAnswer: "Identifies individuals based on their DNA"  
    }      
  ]
  const cagQuestions=[
    {  
      questionText: "What is the structural and functional unit of heredity?",  
      options: ["Gene", "Chromosome", "RNA", "Protein"],  
      correctAnswer: "Gene"  
    },  
    {  
      questionText: "What are chromosomes primarily composed of?",  
      options: ["DNA and proteins", "RNA and lipids", "Proteins and lipids", "Carbohydrates and DNA"],  
      correctAnswer: "DNA and proteins"  
    },  
    {  
      questionText: "Where are chromosomes located in a eukaryotic cell?",  
      options: ["Nucleus", "Cytoplasm", "Ribosome", "Golgi apparatus"],  
      correctAnswer: "Nucleus"  
    },  
    {  
      questionText: "What is the total number of chromosomes in a human somatic cell?",  
      options: ["46", "23", "44", "22"],  
      correctAnswer: "46"  
    },  
    {  
      questionText: "What are the two identical halves of a replicated chromosome called?",  
      options: ["Chromatids", "Centromeres", "Genes", "Alleles"],  
      correctAnswer: "Chromatids"  
    },  
    {  
      questionText: "What connects the two sister chromatids?",  
      options: ["Centromere", "Telomere", "Spindle fiber", "Nucleosome"],  
      correctAnswer: "Centromere"  
    },  
    {  
      questionText: "What term refers to the observable characteristics of an organism?",  
      options: ["Phenotype", "Genotype", "Chromosome", "Gene pool"],  
      correctAnswer: "Phenotype"  
    },  
    {  
      questionText: "What type of chromosome determines the sex of an individual?",  
      options: ["Sex chromosome", "Autosome", "Haploid chromosome", "Diploid chromosome"],  
      correctAnswer: "Sex chromosome"  
    },  
    {  
      questionText: "What is the difference between autosomes and sex chromosomes?",  
      options: ["Autosomes are non-sex chromosomes", "Sex chromosomes determine traits", "Autosomes have no centromeres", "Sex chromosomes are present in all cells"],  
      correctAnswer: "Autosomes are non-sex chromosomes"  
    },  
    {  
      questionText: "What is the name for the process that reduces chromosome number by half in gametes?",  
      options: ["Meiosis", "Mitosis", "Replication", "Fertilization"],  
      correctAnswer: "Meiosis"  
    },  
    {  
      questionText: "How many chromosomes are present in a human gamete?",  
      options: ["23", "46", "22", "44"],  
      correctAnswer: "23"  
    },  
    {  
      questionText: "What is the region at the end of a chromosome called?",  
      options: ["Telomere", "Centromere", "Chromatid", "Gene"],  
      correctAnswer: "Telomere"  
    },  
    {  
      questionText: "What are homologous chromosomes?",  
      options: ["Chromosomes with the same genes in the same order", "Identical copies of a chromosome", "Chromosomes without centromeres", "Chromosomes only found in gametes"],  
      correctAnswer: "Chromosomes with the same genes in the same order"  
    },  
    {  
      questionText: "What is a karyotype?",  
      options: ["A visual representation of chromosomes", "A type of chromosome mutation", "The study of cell division", "A genetic disorder"],  
      correctAnswer: "A visual representation of chromosomes"  
    },  
    {  
      questionText: "What is a mutation?",  
      options: ["A change in DNA sequence", "The division of chromosomes", "The replication of RNA", "The pairing of alleles"],  
      correctAnswer: "A change in DNA sequence"  
    },  
    {  
      questionText: "Which of the following is a chromosomal disorder?",  
      options: ["Down syndrome", "Diabetes", "Sickle cell anemia", "Asthma"],  
      correctAnswer: "Down syndrome"  
    },  
    {  
      questionText: "What is the function of histone proteins?",  
      options: ["To package DNA into chromosomes", "To transcribe RNA", "To replicate DNA", "To signal cell division"],  
      correctAnswer: "To package DNA into chromosomes"  
    },  
    {  
      questionText: "What is the term for genes located on the same chromosome?",  
      options: ["Linked genes", "Recessive genes", "Dominant genes", "Alleles"],  
      correctAnswer: "Linked genes"  
    },  
    {  
      questionText: "What is the term for the position of a gene on a chromosome?",  
      options: ["Locus", "Allele", "Centromere", "Telomere"],  
      correctAnswer: "Locus"  
    },  
    {  
      questionText: "What is the role of chromosomes during cell division?",  
      options: ["To ensure accurate distribution of genetic material", "To produce energy for cell division", "To synthesize proteins", "To regulate cell communication"],  
      correctAnswer: "To ensure accurate distribution of genetic material"  
    },
    {  
      questionText: "What is the basic structure of a chromosome?",  
      options: ["DNA tightly coiled around proteins", "RNA strands", "A single protein chain", "Loose strands of DNA"],  
      correctAnswer: "DNA tightly coiled around proteins"  
    },  
    {  
      questionText: "What is the role of telomeres in chromosomes?",  
      options: ["Protect chromosome ends", "Replicate DNA", "Join sister chromatids", "Produce RNA"],  
      correctAnswer: "Protect chromosome ends"  
    },  
    {  
      questionText: "What happens during crossing over in meiosis?",  
      options: ["Exchange of genetic material between homologous chromosomes", "Division of chromatids", "Mutation of genes", "Duplication of chromosomes"],  
      correctAnswer: "Exchange of genetic material between homologous chromosomes"  
    },  
    {  
      questionText: "What is the result of nondisjunction during meiosis?",  
      options: ["An abnormal number of chromosomes in gametes", "An extra set of homologous chromosomes", "Loss of telomeres", "Mutation of genes"],  
      correctAnswer: "An abnormal number of chromosomes in gametes"  
    },  
    {  
      questionText: "What is the genetic composition of an organism referred to as?",  
      options: ["Genotype", "Phenotype", "Gene pool", "Chromatid"],  
      correctAnswer: "Genotype"  
    },  
    {  
      questionText: "Which organelle in the cell synthesizes RNA?",  
      options: ["Nucleolus", "Mitochondria", "Golgi apparatus", "Endoplasmic reticulum"],  
      correctAnswer: "Nucleolus"  
    },  
    {  
      questionText: "What term describes the alternative forms of a gene?",  
      options: ["Alleles", "Chromatids", "Loci", "Centromeres"],  
      correctAnswer: "Alleles"  
    },  
    {  
      questionText: "What is the term for an organism with identical alleles for a gene?",  
      options: ["Homozygous", "Heterozygous", "Recessive", "Dominant"],  
      correctAnswer: "Homozygous"  
    },  
    {  
      questionText: "What determines the phenotype of an organism?",  
      options: ["Its genotype and environment", "Only its genotype", "The centromeres", "The chromosome count"],  
      correctAnswer: "Its genotype and environment"  
    },  
    {  
      questionText: "What do we call chromosomes that are not sex chromosomes?",  
      options: ["Autosomes", "Allosomes", "Chromatids", "Homologous chromosomes"],  
      correctAnswer: "Autosomes"  
    },  
    {  
      questionText: "What is the primary role of mRNA?",  
      options: ["To carry genetic information from DNA to ribosomes", "To replicate DNA", "To package proteins", "To protect chromosomes"],  
      correctAnswer: "To carry genetic information from DNA to ribosomes"  
    },  
    {  
      questionText: "What type of RNA is part of the ribosome's structure?",  
      options: ["rRNA", "mRNA", "tRNA", "snRNA"],  
      correctAnswer: "rRNA"  
    },  
    {  
      questionText: "What is the role of transfer RNA (tRNA)?",  
      options: ["To bring amino acids to ribosomes", "To carry genetic code", "To replicate DNA", "To package chromosomes"],  
      correctAnswer: "To bring amino acids to ribosomes"  
    },  
    {  
      questionText: "What is the difference between mitosis and meiosis?",  
      options: ["Mitosis produces identical cells, meiosis produces gametes", "Mitosis occurs only in sex cells", "Meiosis produces identical cells", "Mitosis occurs in gametes"],  
      correctAnswer: "Mitosis produces identical cells, meiosis produces gametes"  
    },  
    {  
      questionText: "What is a gene mutation?",  
      options: ["A change in the DNA sequence of a gene", "A fusion of chromosomes", "A splitting of chromosomes", "A loss of centromeres"],  
      correctAnswer: "A change in the DNA sequence of a gene"  
    },  
    {  
      questionText: "What structure holds genes in an organized manner within a cell?",  
      options: ["Chromosomes", "Nucleolus", "Ribosomes", "Centrioles"],  
      correctAnswer: "Chromosomes"  
    },  
    {  
      questionText: "Which chromosome pair determines human gender?",  
      options: ["23rd pair", "22nd pair", "1st pair", "24th pair"],  
      correctAnswer: "23rd pair"  
    },  
    {  
      questionText: "What is the term for a cell with two sets of chromosomes?",  
      options: ["Diploid", "Haploid", "Polyploid", "Anaploid"],  
      correctAnswer: "Diploid"  
    },  
    {  
      questionText: "What is the term for a cell with only one set of chromosomes?",  
      options: ["Haploid", "Diploid", "Tetraploid", "Polyploid"],  
      correctAnswer: "Haploid"  
    },  
    {  
      questionText: "What is the main role of DNA polymerase?",  
      options: ["To synthesize DNA", "To package chromosomes", "To translate RNA", "To produce proteins"],  
      correctAnswer: "To synthesize DNA"  
    },  
    {  
      questionText: "Which phase of mitosis involves the separation of sister chromatids?",  
      options: ["Anaphase", "Prophase", "Metaphase", "Telophase"],  
      correctAnswer: "Anaphase"  
    },  
    {  
      questionText: "Which scientist discovered the structure of DNA?",  
      options: ["James Watson and Francis Crick", "Charles Darwin", "Gregor Mendel", "Louis Pasteur"],  
      correctAnswer: "James Watson and Francis Crick"  
    },  
    {  
      questionText: "What term refers to a permanent alteration in DNA?",  
      options: ["Mutation", "Transcription", "Replication", "Translation"],  
      correctAnswer: "Mutation"  
    },  
    {  
      questionText: "What do you call the total genetic information in an organism?",  
      options: ["Genome", "Chromosome", "Gene pool", "Genotype"],  
      correctAnswer: "Genome"  
    },  
    {  
      questionText: "What is a chromosomal aberration?",  
      options: ["A structural change in a chromosome", "An identical chromosome", "A mutation in RNA", "A centromere loss"],  
      correctAnswer: "A structural change in a chromosome"  
    },  
    {  
      questionText: "What is the central dogma of molecular biology?",  
      options: ["DNA → RNA → Protein", "RNA → DNA → Protein", "Protein → RNA → DNA", "DNA → Protein → RNA"],  
      correctAnswer: "DNA → RNA → Protein"  
    },  
    {  
      questionText: "What is genetic recombination?",  
      options: ["The exchange of DNA segments between chromosomes", "The replication of RNA", "The mutation of genes", "The synthesis of proteins"],  
      correctAnswer: "The exchange of DNA segments between chromosomes"  
    },  
    {  
      questionText: "What is the purpose of mitosis?",  
      options: ["To produce identical cells for growth and repair", "To create gametes", "To mutate chromosomes", "To reduce chromosome numbers"],  
      correctAnswer: "To produce identical cells for growth and repair"  
    },  
    {  
      questionText: "What is an allele?",  
      options: ["An alternative form of a gene", "A type of chromosome", "A protein structure", "A cell organelle"],  
      correctAnswer: "An alternative form of a gene"  
    },  
    {  
      questionText: "What do we call the sequence of DNA that codes for a specific protein?",  
      options: ["Gene", "Locus", "Telomere", "Centromere"],  
      correctAnswer: "Gene"  
    }      
  ]
  const bio101Questions=[
    {
      questionText: "Which of the following is a characteristic of living things?",
      options: ["Growth and reproduction", "Ability to produce light", "Presence of feathers", "None of the above"],
      correctAnswer: "Growth and reproduction"
    },
    {
      questionText: "What is the smallest functional unit of life?",
      options: ["Tissue", "Cell", "Organ", "Organism"],
      correctAnswer: "Cell"
    },
    {
      questionText: "Which organelle is responsible for energy production in cells?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
      correctAnswer: "Mitochondria"
    },
    {
      questionText: "What is the primary function of the nucleus?",
      options: ["Protein synthesis", "Energy production", "Lipid transport", "Storage of genetic material"],
      correctAnswer: "Storage of genetic material"
    },
    {
      questionText: "What is the process by which living organisms produce offspring?",
      options: ["Reproduction", "Respiration", "Digestion", "Excretion"],
      correctAnswer: "Reproduction"
    },
    {
      questionText: "Which process involves the division of a single cell into two identical daughter cells?",
      options: ["Meiosis", "Mitosis", "Fertilization", "Transcription"],
      correctAnswer: "Mitosis"
    },
    {
      questionText: "What is the function of ribosomes in the cell?",
      options: ["Energy production", "Cell division", "Protein synthesis", "Lipid metabolism"],
      correctAnswer: "Protein synthesis"
    },
    {
      questionText: "Which of these is NOT a characteristic of living things?",
      options: ["Adaptation to environment", "Metabolism", "Growth", "Static existence"],
      correctAnswer: "Static existence"
    },
    {
      questionText: "What term refers to the sum of all chemical reactions in the body?",
      options: ["Metabolism", "Digestion", "Osmosis", "Diffusion"],
      correctAnswer: "Metabolism"
    },
    {
      questionText: "Which type of reproduction involves only one parent?",
      options: ["Sexual reproduction", "Asexual reproduction", "Binary fission", "Meiosis"],
      correctAnswer: "Asexual reproduction"
    },
    {
      questionText: "Which organelle is known as the 'powerhouse of the cell'?",
      options: ["Chloroplast", "Nucleus", "Mitochondria", "Ribosome"],
      correctAnswer: "Mitochondria"
    },
    {
      questionText: "What is the term for the threadlike structures that carry genetic information?",
      options: ["Centrioles", "Ribosomes", "Spindle fibers", "Chromosomes"],
      correctAnswer: "Chromosomes"
    },
    {
      questionText: "What is the primary role of chloroplasts in plant cells?",
      options: ["Photosynthesis", "Respiration", "Protein synthesis", "Cell division"],
      correctAnswer: "Photosynthesis"
    },
    {
      questionText: "What is the relationship between DNA and chromosomes?",
      options: ["DNA is made of chromosomes", "Chromosomes are made of DNA", "Chromosomes contain only proteins", "They are unrelated"],
      correctAnswer: "Chromosomes are made of DNA"
    },
    {
      questionText: "Which scientist is known as the father of genetics?",
      options: ["Charles Darwin", "James Watson", "Gregor Mendel", "Francis Crick"],
      correctAnswer: "Gregor Mendel"
    },
    {
      questionText: "What is the purpose of meiosis in organisms?",
      options: ["Growth of tissues", "Repair of cells", "Protein synthesis", "Production of gametes"],
      correctAnswer: "Production of gametes"
    },
    {
      questionText: "What is the name of the process by which plants make their food?",
      options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
      correctAnswer: "Photosynthesis"
    },
    {
      questionText: "Which type of cell lacks a nucleus?",
      options: ["Eukaryotic cell", "Prokaryotic cell", "Plant cell", "Animal cell"],
      correctAnswer: "Prokaryotic cell"
    },
    {
      questionText: "What is the role of genes in organisms?",
      options: ["Provide energy", "Aid in digestion", "Carry hereditary information", "Protect cells"],
      correctAnswer: "Carry hereditary information"
    },
    {
      questionText: "Which term refers to organisms of the same species living in a particular area?",
      options: ["Community", "Ecosystem", "Habitat", "Population"],
      correctAnswer: "Population"
    },
    {
      questionText: "Which of the following defines the ability of living organisms to maintain a stable internal environment?",
      options: ["Homeostasis", "Adaptation", "Growth", "Reproduction"],
      correctAnswer: "Homeostasis"
    },
    {
      questionText: "What distinguishes eukaryotic cells from prokaryotic cells?",
      options: ["Ability to reproduce", "Presence of a nucleus", "Larger size", "Lack of DNA"],
      correctAnswer: "Presence of a nucleus"
    },
    {
      questionText: "Which process allows green plants to convert sunlight into chemical energy?",
      options: ["Respiration", "Osmosis", "Photosynthesis", "Fermentation"],
      correctAnswer: "Photosynthesis"
    },
    {
      questionText: "What characteristic is shared by both plant and animal cells?",
      options: ["Cell wall structure", "Chloroplasts", "Central vacuole", "Presence of mitochondria"],
      correctAnswer: "Presence of mitochondria"
    },
    {
      questionText: "How is genetic information passed from parents to offspring?",
      options: ["Through genes", "Via proteins", "By enzymes", "Using lipids"],
      correctAnswer: "Through genes"
    },
    {
      questionText: "What does the term 'autotroph' mean?",
      options: ["An organism that consumes other organisms", "An organism that produces its own food", "An organism that cannot reproduce", "An organism that relies on sunlight for movement"],
      correctAnswer: "An organism that produces its own food"
    },
    {
      questionText: "Which of the following structures is responsible for protein synthesis in cells?",
      options: ["Golgi apparatus", "Nucleus", "Ribosomes", "Lysosomes"],
      correctAnswer: "Ribosomes"
    },
    {
      questionText: "Which process occurs during the interphase of the cell cycle?",
      options: ["Cell division", "Chromosome segregation", "Nuclear breakdown", "DNA replication"],
      correctAnswer: "DNA replication"
    },
    {
      questionText: "How does sexual reproduction differ from asexual reproduction?",
      options: ["It involves the combination of genetic material from two parents", "It results in identical offspring", "It requires less energy", "It occurs only in plants"],
      correctAnswer: "It involves the combination of genetic material from two parents"
    },
    {
      questionText: "What is the main function of xylem in plants?",
      options: ["Transporting sugars", "Transporting water and minerals", "Carrying genetic information", "Protecting the plant from pathogens"],
      correctAnswer: "Transporting water and minerals"
    },
    {
      questionText: "Which cell organelle contains enzymes for breaking down cellular waste?",
      options: ["Mitochondria", "Nucleus", "Lysosomes", "Chloroplasts"],
      correctAnswer: "Lysosomes"
    },
    {
      questionText: "What is the term for an organism's ability to respond to changes in its environment?",
      options: ["Homeostasis", "Metabolism", "Growth", "Irritability"],
      correctAnswer: "Irritability"
    },
    {
      questionText: "Which process in plants involves the loss of water vapor through stomata?",
      options: ["Transpiration", "Photosynthesis", "Respiration", "Fermentation"],
      correctAnswer: "Transpiration"
    },
    {
      questionText: "What is the primary role of stomata in plant leaves?",
      options: ["Absorption of sunlight", "Gas exchange", "Storage of food", "Transport of nutrients"],
      correctAnswer: "Gas exchange"
    },
    {
      questionText: "Which structure in the cell regulates the entry and exit of substances?",
      options: ["Nuclear envelope", "Cell wall", "Cell membrane", "Cytoplasm"],
      correctAnswer: "Cell membrane"
    },
    {
      questionText: "What is the study of interactions between organisms and their environment called?",
      options: ["Biochemistry", "Evolution", "Genetics", "Ecology"],
      correctAnswer: "Ecology"
    },
    {
      questionText: "Which cellular organelle is primarily involved in the synthesis of lipids?",
      options: ["Smooth endoplasmic reticulum", "Rough endoplasmic reticulum", "Mitochondria", "Ribosomes"],
      correctAnswer: "Smooth endoplasmic reticulum"
    },
    {
      questionText: "What is the role of tRNA during protein synthesis?",
      options: ["Storing genetic information", "Carrying amino acids to ribosomes", "Forming peptide bonds", "Breaking down proteins"],
      correctAnswer: "Carrying amino acids to ribosomes"
    },
    {
      questionText: "What type of organism thrives in extreme environments like hot springs or salty lakes?",
      options: ["Bacteria", "Protists", "Archaea", "Fungi"],
      correctAnswer: "Archaea"
    },
    {
      questionText: "Which term describes the transfer of traits from parents to offspring?",
      options: ["Adaptation", "Mutation", "Natural selection", "Heredity"],
      correctAnswer: "Heredity"
    },
    {
      questionText: "What does the term 'natural selection' refer to?",
      options: ["Survival of organisms best adapted to their environment", "Random changes in genetic material", "Equal survival chances for all organisms", "Production of identical offspring"],
      correctAnswer: "Survival of organisms best adapted to their environment"
    },
    {
      questionText: "What is a genotype?",
      options: ["The physical appearance of an organism", "The genetic makeup of an organism", "A type of cell division", "The process of DNA replication"],
      correctAnswer: "The genetic makeup of an organism"
    },
    {
      questionText: "Which cellular process produces four genetically diverse haploid cells?",
      options: ["Mitosis", "Meiosis", "Binary fission", "Osmosis"],
      correctAnswer: "Meiosis"
    },
    {
      questionText: "What is the role of chlorophyll in plants?",
      options: ["Breaking down sugars", "Transporting water", "Absorbing light for photosynthesis", "Providing structural support"],
      correctAnswer: "Absorbing light for photosynthesis"
    },
    {
      questionText: "What is the primary purpose of mitosis in multicellular organisms?",
      options: ["To produce genetically diverse cells", "To create haploid cells", "To transport nutrients", "To enable growth and repair"],
      correctAnswer: "To enable growth and repair"
    },
    {
      questionText: "Which molecule carries genetic information in cells?",
      options: ["DNA", "RNA", "Protein", "Lipid"],
      correctAnswer: "DNA"
    },
    {
      questionText: "What is the basic unit of life in all living organisms?",
      options: ["The organ", "The cell", "The molecule", "The tissue"],
      correctAnswer: "The cell"
    },
    {
      questionText: "What is the main function of white blood cells in the human body?",
      options: ["To transport oxygen", "To digest food", "To fight infections", "To store energy"],
      correctAnswer: "To fight infections"
    },
    {
      questionText: "Which organelle is responsible for energy production in animal cells?",
      options: ["Ribosomes", "Chloroplasts", "Golgi apparatus", "Mitochondria"],
      correctAnswer: "Mitochondria"
    },
    {
      questionText: "What is the main difference between autotrophs and heterotrophs?",
      options: ["Autotrophs make their own food", "Heterotrophs use sunlight", "Autotrophs lack chlorophyll", "Heterotrophs reproduce asexually"],
      correctAnswer: "Autotrophs make their own food"
    },
    {
      questionText: "Which cellular structure contains the hereditary material in a eukaryotic cell?",
      options: ["Cytoplasm", "Nucleus", "Cell membrane", "Ribosome"],
      correctAnswer: "Nucleus"
    },
    {
      questionText: "What is the function of the cell wall in plant cells?",
      options: ["To transport proteins", "To conduct photosynthesis", "To provide structural support", "To regulate temperature"],
      correctAnswer: "To provide structural support"
    },
    {
      questionText: "What is the role of the plasma membrane in cells?",
      options: ["To store genetic material", "To generate energy", "To produce proteins", "To control the movement of substances in and out"],
      correctAnswer: "To control the movement of substances in and out"
    },
    {
      questionText: "Which type of reproduction produces genetically identical offspring?",
      options: ["Asexual reproduction", "Sexual reproduction", "Cross-pollination", "Meiosis"],
      correctAnswer: "Asexual reproduction"
    },
    {
      questionText: "What is the relationship between DNA and chromosomes?",
      options: ["DNA is made of chromosomes", "Chromosomes are made of DNA", "DNA and chromosomes are unrelated", "DNA is only in prokaryotes"],
      correctAnswer: "Chromosomes are made of DNA"
    },
    {
      questionText: "What characteristic is unique to living organisms?",
      options: ["The ability to dissolve in water", "The ability to absorb sunlight", "The ability to reproduce", "The ability to expand when heated"],
      correctAnswer: "The ability to reproduce"
    },
    {
      questionText: "What is the function of the vacuole in plant cells?",
      options: ["Synthesis of proteins", "Generation of energy", "Absorption of light", "Storage of nutrients and waste"],
      correctAnswer: "Storage of nutrients and waste"
    },
    {
      questionText: "Which organelle is involved in the synthesis of proteins?",
      options: ["Ribosome", "Chloroplast", "Lysosome", "Centriole"],
      correctAnswer: "Ribosome"
    },
    {
      questionText: "What determines the hereditary traits of an organism?",
      options: ["Proteins", "Genes", "Carbohydrates", "Lipids"],
      correctAnswer: "Genes"
    },
    {
      questionText: "What is the main function of enzymes in biological systems?",
      options: ["To store genetic material", "To transport oxygen", "To speed up chemical reactions", "To create cell walls"],
      correctAnswer: "To speed up chemical reactions"
    },
    {
      questionText: "What is the role of meiosis in reproduction?",
      options: ["To repair damaged cells", "To produce identical cells", "To synthesize proteins", "To produce gametes"],
      correctAnswer: "To produce gametes"
    },
    {
      questionText: "What is the smallest unit of hereditary information?",
      options: ["Gene", "DNA", "Protein", "Enzyme"],
      correctAnswer: "Gene"
    },
    {
      questionText: "What is the importance of genetic variation in evolution?",
      options: ["It ensures all offspring are identical", "It enables adaptation to changing environments", "It limits diversity in a population", "It prevents mutations"],
      correctAnswer: "It enables adaptation to changing environments"
    },
    {
      questionText: "Which type of cell division occurs in somatic cells?",
      options: ["Meiosis", "Binary fission", "Budding", "Mitosis"],
      correctAnswer: "Mitosis"
    },
    {
      questionText: "What is the term for the physical expression of a gene?",
      options: ["Genotype", "Mutation", "Phenotype", "Allele"],
      correctAnswer: "Phenotype"
    },
    {
      questionText: "Which molecule is the primary source of energy in cells?",
      options: ["DNA", "ATP", "RNA", "Glucose"],
      correctAnswer: "ATP"
    },
    {
      questionText: "What happens during the process of transcription?",
      options: ["DNA is copied into RNA", "Proteins are synthesized", "Chromosomes are replicated", "Energy is released"],
      correctAnswer: "DNA is copied into RNA"
    },
    {
      questionText: "Which organ system is responsible for gas exchange in humans?",
      options: ["Digestive system", "Nervous system", "Excretory system", "Respiratory system"],
      correctAnswer: "Respiratory system"
    },
    {
      questionText: "What is the role of chloroplasts in plant cells?",
      options: ["To store water", "To digest food", "To carry out photosynthesis", "To transport oxygen"],
      correctAnswer: "To carry out photosynthesis"
    },
    {
      questionText: "Which term describes the gradual change in species over time?",
      options: ["Adaptation", "Evolution", "Speciation", "Mutation"],
      correctAnswer: "Evolution"
    },
    {
      questionText: "What is the function of the Golgi apparatus in cells?",
      options: ["To modify and package proteins", "To produce ATP", "To store genetic material", "To carry out photosynthesis"],
      correctAnswer: "To modify and package proteins"
    },
    {
      questionText: "Which group of organisms is considered producers in an ecosystem?",
      options: ["Animals", "Fungi", "Bacteria", "Plants"],
      correctAnswer: "Plants"
    },
    {
      questionText: "What is the main function of mitochondria in eukaryotic cells?",
      options: ["To synthesize proteins", "To transport molecules", "To produce energy through cellular respiration", "To store genetic information"],
      correctAnswer: "To produce energy through cellular respiration"
    },
    {
      questionText: "Which process explains the transfer of traits from parents to offspring?",
      options: ["Evolution", "Inheritance", "Mutation", "Adaptation"],
      correctAnswer: "Inheritance"
    },
    {
      questionText: "What role do decomposers play in an ecosystem?",
      options: ["Breaking down dead organisms", "Producing oxygen", "Absorbing sunlight", "Creating energy"],
      correctAnswer: "Breaking down dead organisms"
    },
    {
      questionText: "Which organelle contains digestive enzymes for breaking down cellular waste?",
      options: ["Lysosome", "Mitochondrion", "Nucleus", "Golgi body"],
      correctAnswer: "Lysosome"
    },
    {  
      questionText: "What is the primary function of ribosomes in a cell?",  
      options: ["Energy production", "Protein synthesis",  "DNA replication", "Cell division"],  
      correctAnswer: "Protein synthesis"  
    },  
    {  
      questionText: "Which characteristic is unique to living things?",  
      options: ["Burning fuel for energy", "Freezing at low temperatures", "Growth and reproduction",  "Breaking into smaller parts"],  
      correctAnswer: "Growth and reproduction"  
    },  
    {  
      questionText: "What organelle is the control center of the cell?",  
      options: ["Mitochondria", "Chloroplast", "Golgi apparatus", "Nucleus"],  
      correctAnswer: "Nucleus"  
    },  
    {  
      questionText: "What is one main difference between plant and animal cells?",  
      options: ["Plant cells have cell walls", "Animal cells have chloroplasts", "Plant cells lack nuclei", "Animal cells lack ribosomes"],  
      correctAnswer: "Plant cells have cell walls"  
    },  
    {  
      questionText: "Which process ensures genetic variation in sexually reproducing organisms?",  
      options: ["Mitosis", "Binary fission", "Budding", "Meiosis"],  
      correctAnswer: "Meiosis"  
    },  
    {  
      questionText: "What is the term for the thread-like structures that carry genes?",  
      options: ["Proteins", "Enzymes", "Chromosomes", "Ribosomes"],  
      correctAnswer: "Chromosomes"  
    },  
    {  
      questionText: "Which substance primarily makes up the cell membrane?",  
      options: ["Proteins", "Lipids",  "Carbohydrates", "Nucleotides"],  
      correctAnswer: "Lipids"  
    },  
    {  
      questionText: "What is the smallest unit of life?",  
      options: ["Cell", "Atom", "Molecule", "Organ"],  
      correctAnswer: "Cell"  
    },  
    {  
      questionText: "Which process converts light energy into chemical energy?",  
      options: ["Respiration", "Fermentation", "Oxidation", "Photosynthesis"],  
      correctAnswer: "Photosynthesis"  
    },  
    {  
      questionText: "What is the hereditary material in most living organisms?",  
      options: ["RNA", "Protein", "DNA", "Carbohydrate"],  
      correctAnswer: "DNA"  
    },  
    {  
      questionText: "What is the movement of water across a selectively permeable membrane called?",  
      options: ["Diffusion", "Osmosis", "Active transport", "Endocytosis"],  
      correctAnswer: "Osmosis"  
    },  
    {  
      questionText: "Which gas is released during photosynthesis?",  
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Methane"],  
      correctAnswer: "Oxygen"  
    },  
    {  
      questionText: "What structure is responsible for cell division in animal cells?",  
      options: ["Cell wall", "Chloroplasts", "Mitochondria", "Centrioles"],  
      correctAnswer: "Centrioles"  
    },  
    {  
      questionText: "What does the term 'genotype' refer to?",  
      options: ["The observable characteristics of an organism", "The type of cell wall", "The genetic makeup of an organism", "The shape of the nucleus"],  
      correctAnswer: "The genetic makeup of an organism"  
    },  
    {  
      questionText: "What is the main purpose of mitosis?",  
      options: ["To produce gametes", "To produce identical daughter cells", "To increase genetic variation", "To create chlorophyll"],  
      correctAnswer: "To produce identical daughter cells"  
    },  
    {  
      questionText: "What term describes the ability of an organism to maintain stable internal conditions?",  
      options: ["Homeostasis", "Photosynthesis", "Adaptation", "Metabolism"],  
      correctAnswer: "Homeostasis"  
    },  
    {  
      questionText: "What is the powerhouse of the cell?",  
      options: ["Nucleus", "Ribosome", "Golgi apparatus", "Mitochondria"],  
      correctAnswer: "Mitochondria"  
    },  
    {  
      questionText: "Which type of cell lacks a nucleus?",  
      options: ["Eukaryotic cells", "Plant cells", "Prokaryotic cells", "Animal cells"],  
      correctAnswer: "Prokaryotic cells"  
    },  
    {  
      questionText: "What is the primary component of chromosomes?",  
      options: ["RNA", "DNA", "Protein", "Lipid"],  
      correctAnswer: "DNA"  
    },  
    {  
      questionText: "Which cellular organelle is responsible for packaging and transporting proteins?",  
      options: ["Golgi apparatus", "Mitochondria", "Nucleus", "Lysosome"],  
      correctAnswer: "Golgi apparatus"  
    },  
    {  
      questionText: "What term describes the passing of traits from parents to offspring?",  
      options: ["Mutation", "Evolution", "Variation", "Heredity"],  
      correctAnswer: "Heredity"  
    },  
    {  
      questionText: "What is the role of chlorophyll in plants?",  
      options: ["To produce oxygen", "To absorb water", "To absorb sunlight for photosynthesis",  "To support plant structure"],  
      correctAnswer: "To absorb sunlight for photosynthesis"  
    },  
    {  
      questionText: "What is the primary function of the xylem in plants?",  
      options: ["To produce energy", "To transport water", "To store nutrients", "To transport sugars"],  
      correctAnswer: "To transport water"  
    },  
    {  
      questionText: "What is an ecosystem?",  
      options: ["A community of organisms and their environment", "A single population in a habitat", "A group of cells functioning together", "A network of water bodies"],  
      correctAnswer: "A community of organisms and their environment"  
    }      
  ]

// Function to seed questions
const seedQuestions = async () => {
    try {
      // Clear existing questions
      await Question.deleteMany();
      console.log("Existing questions removed.");
  
      // Fetch all courses
      const courses = await Course.find({});
      if (!courses.length) {
        console.error("No courses found. Please seed your courses first.");
        return;
      }
  
      const questions = [];
      
      
      //Seed Units And Dimensions Quesstions
      const uadCourse = courses.find((course) =>
        course.topics.includes("Units And Dimensions")
      );
      if (uadCourse) {
        UnitsAndDimensionsQuestions.forEach((q) => {
          questions.push({
            courseId: uadCourse._id,
            topic: "Units And Dimensions",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${UnitsAndDimensionsQuestions.length} Units And Dimensions questions.`);
      }

      const hybCourse = courses.find((course) =>
        course.topics.includes("Hybridization")
      );
      if (hybCourse) {
        hybridizationQuestions.forEach((q) => {
          questions.push({
            courseId: hybCourse._id,
            topic: "Hybridization",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${hybridizationQuestions.length} Hybridization questions.`);
      }

      const glCourse = courses.find((course) =>
        course.topics.includes("Gas Laws")
      );
      if (glCourse) {
        gasLawsQuestions.forEach((q) => {
          questions.push({
            courseId: glCourse._id,
            topic: "Gas Laws",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${gasLawsQuestions.length} Gas Laws questions.`);
      }

      const hatCourse = courses.find((course) =>
        course.topics.includes("Heat And Temperature")
      );
      if (hatCourse) {
        HATQuestions.forEach((q) => {
          questions.push({
            courseId: hatCourse._id,
            topic: "Heat And Temperature",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${HATQuestions.length} Heat And Temperature questions.`);
      }

      const amecCourse = courses.find((course) =>
        course.topics.includes("Atoms,Molecules,Elements And Compounds")
      );
      if (amecCourse) {
        AMECQuestions.forEach((q) => {
          questions.push({
            courseId: amecCourse._id,
            topic: "Atoms,Molecules,Elements And Compounds",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${AMECQuestions.length} Atoms,Molecules,Elements And Compounds questions.`);
      }

      const LGCourse = courses.find((course) =>
        course.topics.includes("Logic Gates")
      );
      if (LGCourse) {
        LGQuestions.forEach((q) => {
          questions.push({
            courseId: LGCourse._id,
            topic: "Logic Gates",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${LGQuestions.length} Logic Gates questions.`);
      }
      const hocCourse = courses.find((course) =>
        course.topics.includes("History Of Computers")
      );
      if (hocCourse) {
        HistoryOCQuestions.forEach((q) => {
          questions.push({
            courseId: hocCourse._id,
            topic: "History Of Computers",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${HistoryOCQuestions.length} History Of Computers questions.`);
      }
      const cocCourse = courses.find((course) =>
        course.topics.includes("Component Of Computer")
      );
      if (cocCourse) {
        ComponentOCQuestions.forEach((q) => {
          questions.push({
            courseId: cocCourse._id,
            topic: "Component Of Computer",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${ComponentOCQuestions.length} Componenet Of Computer questions.`);
      }
      const aocdCourse = courses.find((course) =>
        course.topics.includes("Areas Of Computer Discipline")
      );
      if (aocdCourse) {
        AOCDQuestions.forEach((q) => {
          questions.push({
            courseId: aocdCourse._id,
            topic: "Areas Of Computer Discipline",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${AOCDQuestions.length} Units And Dimensions questions.`);
      }
      const ipCourse = courses.find((course) =>
        course.topics.includes("Information Processing")
      );
      if (ipCourse) {
        IPQuestions.forEach((q) => {
          questions.push({
            courseId: ipCourse._id,
            topic: "Information Processing",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${IPQuestions.length} Information Processing questions.`);
      }

      const formulaCourse = courses.find((course) =>
        course.topics.includes("Formula's Testing")
      );
      if (formulaCourse) {
        FormulaQuestions.forEach((q) => {
          questions.push({
            courseId: formulaCourse._id,
            topic: "Formula's Testing",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${FormulaQuestions.length} Formula's Testing questions.`);
      }
      const pasCourse = courses.find((course) =>
        course.topics.includes("Population And Sampling")
      );
      if (pasCourse) {
        PASQuestions.forEach((q) => {
          questions.push({
            courseId: pasCourse._id,
            topic: "Population And Sampling",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${PASQuestions.length} Population And Sampling questions.`);
      }
      const racCourse = courses.find((course) =>
        course.topics.includes("Regression And Correlation")
      );
      if (racCourse) {
        RACQuestions.forEach((q) => {
          questions.push({
            courseId: racCourse._id,
            topic: "Regression And Correlation",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${RACQuestions.length} Regression And Correlation questions.`);
      }

      // Seed Vector Questions
      const svaCourse = courses.find((course) =>
        course.topics.includes("Simple Vector Arithmetic")
      );
      if (svaCourse) {
        SimpleVectorArithmeticQuestions.forEach((q) => {
          questions.push({
            courseId: svaCourse._id,
            topic: "Simple Vector Arithmetic",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${SimpleVectorArithmeticQuestions.length} Simple Vector Arithmetic questions.`);
      }

      //Seed Kinematics Questions
      const kinematicsCourse = courses.find((course) =>
        course.topics.includes("Kinematics")
      );
      if (kinematicsCourse) {
        KinematicsQuestions.forEach((q) => {
          questions.push({
            courseId: kinematicsCourse._id,
            topic: "Kinematics",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${KinematicsQuestions.length} Kinematics questions.`);
      }


      //Seed Conservative Forces Questions
      const cfCourse = courses.find((course) =>
        course.topics.includes("Conservative Force")
      );
      if (cfCourse) {
        ConservativeForceQuestions.forEach((q) => {
          questions.push({
            courseId: cfCourse._id,
            topic: "Conservative Force",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${ConservativeForceQuestions.length} Conservative Force questions.`);
      }


      // Seed Space And Time Questions
      const satCourse = courses.find((course) =>
        course.topics.includes("Space And Time")
      );
      if (satCourse) {
        SpaceAndTimeQuestions.forEach((q) => {
          questions.push({
            courseId: satCourse._id,
            topic: "Space And Time",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${SpaceAndTimeQuestions.length} Space And Time questions.`);
      }

      // Seed Grammar(Clauses) Questions
      const grammarCourse = courses.find((course) =>
        course.topics.includes("Grammar(Clauses)")
      );
      if (grammarCourse) {
        GrammarQuestions.forEach((q) => {
          questions.push({
            courseId: grammarCourse._id,
            topic: "Grammar(Clauses)",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${GrammarQuestions.length} Grammar(Clauses) questions.`);
      }
  
      // Seed Sound Patterns Questions
      const soundPatternsCourse = courses.find((course) =>
        course.topics.includes("Sound Patterns")
      );
      if (soundPatternsCourse) {
        SoundPatternQuestions.forEach((q) => {
          questions.push({
            courseId: soundPatternsCourse._id,
            topic: "Sound Patterns",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${SoundPatternQuestions.length} Sound Patterns questions.`);
      }

      const AntonymsandSynonymsCourse = courses.find((course) =>
        course.topics.includes("Antonyms And Synonyms")
      );
      if (AntonymsandSynonymsCourse) {
        AntonymsandSynonymsQuestions.forEach((q) => {
          questions.push({
            courseId: AntonymsandSynonymsCourse._id,
            topic: "Antonyms And Synonyms",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${AntonymsandSynonymsQuestions.length} Antonyms And Synonyms questions.`);
      }

      const LSFECCourse = courses.find((course) =>
        course.topics.includes("Language Skills For Effective Communication")
      );
      if (LSFECCourse) {
        LSFECQuestions.forEach((q) => {
          questions.push({
            courseId: LSFECCourse._id,
            topic: "Language Skills For Effective Communication",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${LSFECQuestions.length} Language Skills For Effective Communication questions.`);
      }

      const WRCSCourse = courses.find((course) =>
        course.topics.includes("Writing And Reading Comprehension Strategies")
      );
      if (WRCSCourse) {
        WRCSQuestions.forEach((q) => {
          questions.push({
            courseId: WRCSCourse._id,
            topic: "Writing And Reading Comprehension Strategies",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${WRCSQuestions.length} Writing And Reading Comprehension Strategies questions.`);
      }

      //Seed sets questions
      const SetsCourse = courses.find((course) =>
        course.topics.includes("Sets")
      );
      if (SetsCourse) {
        SetsQuestions.forEach((q) => {
          questions.push({
            courseId: SetsCourse._id,
            topic: "Sets",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${SetsQuestions.length} Sets questions.`);
      }

      //Seed vector questions
      const vectorCourse = courses.find((course) =>
        course.topics.includes("Vectors")
      );
      if (vectorCourse) {
        SimpleVectorArithmeticQuestions.forEach((q) => {
          questions.push({
            courseId: vectorCourse._id,
            topic: "Vectors",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${VectorQuestions.length} Vector questions.`);
      }

      //Seed binomial questions
      const binomialCourse = courses.find((course) =>
        course.topics.includes("Binomial Expansion")
      );
      if (binomialCourse) {
        BinomialQuestions.forEach((q) => {
          questions.push({
            courseId: binomialCourse._id,
            topic: "Binomial Expansion",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${BinomialQuestions.length} Binomial Expansion questions.`);
      }
      const thermoCourse = courses.find((course) =>
        course.topics.includes("Thermodynamics")
      );
      if (thermoCourse) {
        thermoQuestions.forEach((q) => {
          questions.push({
            courseId: thermoCourse._id,
            topic: "Thermodynamics",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${thermoQuestions.length} Thermodynamics questions.`);
      }
      const colCourse = courses.find((course) =>
        course.topics.includes("Concept Of Livelihood")
      );
      if (colCourse) {
        COLQuestions.forEach((q) => {
          questions.push({
            courseId: colCourse._id,
            topic: "Concept Of Livelihood",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${COLQuestions.length} Concept Of Livelihood questions.`);
      }
      const ruralCourse = courses.find((course) =>
        course.topics.includes("Rural Versus Urban Development")
      );
      if (ruralCourse) {
        ruralQuestions.forEach((q) => {
          questions.push({
            courseId: ruralCourse._id,
            topic: "Rural Versus Urban Development",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${ruralQuestions.length} Rural Versus Urban Development questions.`);
      }
      const ecologyCourse = courses.find((course) =>
        course.topics.includes("Ecology")
      );
      if (ecologyCourse) {
          ecologyQuestions.forEach((q) => {
          questions.push({
            courseId: ecologyCourse._id,
            topic: "Ecology",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${ecologyQuestions.length} Ecology questions.`);
      }
      const haeCourse = courses.find((course) =>
        course.topics.includes("Hereditary And Evolution")
      );
      if (haeCourse) {
        haeQuestions.forEach((q) => {
          questions.push({
            courseId: haeCourse._id,
            topic: "Hereditary And Evolution",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${haeQuestions.length} Hereditary And Evolution questions.`);
      }
      const cagCourse = courses.find((course) =>
        course.topics.includes("Chromosones And Genes")
      );
      if (cagCourse) {
        cagQuestions.forEach((q) => {
          questions.push({
            courseId: cagCourse._id,
            topic: "Chromosones And Genes",
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
          });
        });
        console.log(`Added ${cagQuestions.length} Chromosones And Genes questions.`);
      }
  
      // Seed Mixed Questions (no specific topic)
      // Find the specific course for GST111
      const bio101Course = courses.find((course) =>
        course.courseName === "BIO 101" // or use a different field if necessary
    );
    
    if (bio101Course) {
        bio101Questions.forEach((q) => {
        questions.push({
            courseId: bio101Course._id, // Associate with the specific course
            topic: null, // No specific topic for mixed questions
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
        });
        });
        console.log(`Added ${bio101Questions.length} BIO 101 mixed questions.`);
    } else {
        console.error("BIO 101 course not found.");
    }
      const uilagxCourse = courses.find((course) =>
        course.courseName === "BIO 101" // or use a different field if necessary
    );
    
    if (uilagxCourse) {
        uilagxQuestions.forEach((q) => {
        questions.push({
            courseId: uilagxCourse._id, // Associate with the specific course
            topic: null, // No specific topic for mixed questions
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
        });
        });
        console.log(`Added ${uilagxQuestions.length} UIL AGX mixed questions.`);
    } else {
        console.error("UIL AGX course not found.");
    }
      const phy103Course = courses.find((course) =>
        course.courseName === "PHY 103" // or use a different field if necessary
    );
    
    if (phy103Course) {
        phy103Questions.forEach((q) => {
        questions.push({
            courseId: phy103Course._id, // Associate with the specific course
            topic: null, // No specific topic for mixed questions
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
        });
        });
        console.log(`Added ${phy103Questions.length} PHY 103 mixed questions.`);
    } else {
        console.error("PHY 103 course not found.");
    }
      const chm101Course = courses.find((course) =>
        course.courseName === "CHM 101" // or use a different field if necessary
    );
    
    if (chm101Course) {
        chm101Questions.forEach((q) => {
        questions.push({
            courseId: chm101Course._id, // Associate with the specific course
            topic: null, // No specific topic for mixed questions
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
        });
        });
        console.log(`Added ${chm101Questions.length} CHM 101 mixed questions.`);
    } else {
        console.error("CHM 101 course not found.");
    }
        const gst111Course = courses.find((course) =>
            course.courseName === "GST 111" // or use a different field if necessary
        );
        
        if (gst111Course) {
            GST111questions.forEach((q) => {
            questions.push({
                courseId: gst111Course._id, // Associate with the specific course
                topic: null, // No specific topic for mixed questions
                questionText: q.questionText,
                options: q.options,
                correctAnswer: q.correctAnswer,
            });
            });
            console.log(`Added ${GST111questions.length} GST111 mixed questions.`);
        } else {
            console.error("GST111 course not found.");
        }
        const phy101Course = courses.find((course) =>
          course.courseName === "PHY 101" // or use a different field if necessary
      );
      if (phy101Course) {
          PHY101questions.forEach((q) => {
          questions.push({
              courseId: phy101Course._id, // Associate with the specific course
              topic: null, // No specific topic for mixed questions
              questionText: q.questionText,
              options: q.options,
              correctAnswer: q.correctAnswer,
          });
          });
          console.log(`Added ${PHY101questions.length} PHY 101 mixed questions.`);
      } else {
          console.error("PHY 101 course not found.");
      }
      const mth101Course = courses.find((course) =>
        course.courseName === "MTH 101" // or use a different field if necessary
    );
    if (mth101Course) {
        mth101Questions.forEach((q) => {
        questions.push({
            courseId: mth101Course._id, // Associate with the specific course
            topic: null, // No specific topic for mixed questions
            questionText: q.questionText,
            options: q.options,
            correctAnswer: q.correctAnswer,
        });
        });
        console.log(`Added ${mth101Questions.length} MTH 101 mixed questions.`);
    } else {
        console.error("MTH 101 course not found.");
    }
    const cos101Course = courses.find((course) =>
      course.courseName === "COS 101" // or use a different field if necessary
  );
  if (cos101Course) {
      cos101Questions.forEach((q) => {
      questions.push({
          courseId: cos101Course._id, // Associate with the specific course
          topic: null, // No specific topic for mixed questions
          questionText: q.questionText,
          options: q.options,
          correctAnswer: q.correctAnswer,
      });
      });
      console.log(`Added ${cos101Questions.length} COS 101 mixed questions.`);
  } else {
      console.error("COS 101 course not found.");
  }
  const sta121Course = courses.find((course) =>
    course.courseName === "STA 121" // or use a different field if necessary
);
if (sta121Course) {
    sta121Questions.forEach((q) => {
    questions.push({
        courseId: sta121Course._id, // Associate with the specific course
        topic: null, // No specific topic for mixed questions
        questionText: q.questionText,
        options: q.options,
        correctAnswer: q.correctAnswer,
    });
    });
    console.log(`Added ${sta121Questions.length} STA 121 mixed questions.`);
} else {
    console.error("STA 121 course not found.");
}
  
      // Save questions to the database
      await Question.insertMany(questions);
      console.log("Questions seeded successfully.");
    } catch (error) {
      console.error("Error seeding questions:", error);
    } finally {
      mongoose.connection.close();
    }
  };
  
  // Run the seed function
  seedQuestions();
  