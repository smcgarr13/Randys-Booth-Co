// Get inventory ID from the form element
const inventoryId = document.getElementById('edit-inventory-form').dataset.inventoryId;

// Add event listener & prevent its default submit behavior
document.getElementById('edit-inventory-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  // Get the form data and convert it to an object
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  // console.log(data);
  console.log('Submitting data:', data);

  try {
    const response = await fetch(`/inventories/${inventoryId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Handle server response & redirect to the inventory card page
    if (response.ok) {
      console.log('Response OK, redirecting...');
      window.location.href = `/inventory`;
      // window.location.href = `/inventories`;
    } else {
      console.error('Error updating inventory item:', await response.json());
    }

  } catch (error) {
    console.error('Error updating inventory item:', error);
  }
});