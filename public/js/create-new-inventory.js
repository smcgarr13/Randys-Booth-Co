document.getElementById('add-inventory-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
      console.log(data);
    try {
      const response = await fetch('/api/inventories', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
        body: JSON.stringify(data),
    });

      const json = await response.json();

  // Create a new card and populate it with the item details
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="container">
        <ul class="list-group" style="list-style-type: none;" class="inventory-details">
          <li class="item-name">Item Name: ${json.item_name}</li>
          <li class="item-number">Item Number: ${json.item_number}</li>
          <li class="unit-cost">Item Price: $${json.unit_cost}</li>
          <li class="quantity_instock">Quantity Instock: ${json.quantity_instock}</li>
          <li class="available-quantity">Available Quantity: ${json.available_quantity}</li>
          <li class="category-name">Category Name: ${json.category_id}</li>
        </ul>
      </div>
    `;

    // Add the new card to the DOM
    document.querySelector('#inventory-container .row').appendChild(card);

    // Reset the form to clear input fields
    e.target.reset();

  } catch (error) {
    console.error('Error adding inventory item:', error);
  }
});