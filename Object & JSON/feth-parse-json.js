// fetch and parse JSON

fetch('http://127.0.0.1:5500/Object%20%26%20JSON/src/example') // Example API endpoint
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('User name:', data.name);
    console.log('User email:', data.email);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });