// Function to count the number of properties in an object
function countProperties(obj) {
    // Use Object.keys() to get an array of property names
    const properties = Object.keys(obj);
    // Return the length of the array (number of properties)
    return properties.length;
}

// Example usage
const exampleObject = { a: 1, b: 2, c: 3 };
console.log(countProperties(exampleObject)); // Output: 3

// Export the function for testing (optional)
module.exports = countProperties;