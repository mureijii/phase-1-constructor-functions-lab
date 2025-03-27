// Scooter Constructor Function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Driver Constructor Function
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // PickupLocation Constructor Function
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Example usage - Creating instances
  const scooter1 = new Scooter(2023, "red", "Xtreme");
  const driver1 = new Driver("John Doe", 28, "5 years");
  const pickupLocation1 = new PickupLocation("123 Main St", "New York");
  
  // Output the created objects to verify
  console.log(scooter1);
  console.log(driver1);
  console.log(pickupLocation1);
  