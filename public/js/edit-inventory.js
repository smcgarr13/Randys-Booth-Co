const inventoryId = document.getElementById('edit-inventory-form').dataset.inventoryId;

document.getElementById('edit-inventory-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const response = await fetch(`/api/inventories/${inventoryId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      window.location.href = `/inventory`;
    } else {
      console.error('Error updating inventory item:', await response.json());
    }

  } catch (error) {
    console.error('Error updating inventory item:', error);
  }
});