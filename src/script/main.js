// src/script/main.js
let allTools = [];

// Load tools when the page loads
async function loadTools() {
  try {
    const response = await fetch('res/var/data/tools.json');
    if (!response.ok) {
      throw new Error('Failed to load tools data');
    }
    allTools = await response.json();

    // Extract unique categories from the JSON
    const categories = [...new Set(allTools.flatMap(tool => tool.category))].sort();

    // Populate category filters in the sidebar
    const categoryFilters = document.getElementById('category-filters');

    // Add an "All" option
    const allOption = document.createElement('label');
    allOption.className = 'filter-option';
    allOption.innerHTML = `
      <input type="radio" name="category" value="All" checked>
      <span>${'All'}</span>
    `;
    allOption.querySelector('input').onchange = () => filterToolsByCategory('All');
    categoryFilters.appendChild(allOption);

    // Add category options
    categories.forEach(category => {
      const option = document.createElement('label');
      option.className = 'filter-option';
      option.innerHTML = `
        <input type="radio" name="category" value="${category}">
        <span>${category}</span>
      `;
      option.querySelector('input').onchange = () => filterToolsByCategory(category);
      categoryFilters.appendChild(option);
    });

    // Add search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const selectedCategory = document.querySelector('input[name="category"]:checked').value;
      filterTools(searchTerm, selectedCategory);
    });

    // Display all tools initially
    displayTools(allTools);
  } catch (error) {
    console.error('Error loading tools:', error);
    document.getElementById('tools-list').innerHTML = '<p>Error loading tools data. Please try again later.</p>';
  }
}

// Filter tools by category and search term
function filterTools(searchTerm = '', category = 'All') {
  let filteredTools = allTools;

  // Filter by category
  if (category !== 'All') {
    filteredTools = filteredTools.filter(tool => tool.category.includes(category));
  }

  // Filter by search term
  if (searchTerm) {
    filteredTools = filteredTools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm)
    );
  }

  displayTools(filteredTools);
}

// Filter tools by category only
function filterToolsByCategory(category) {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  filterTools(searchTerm, category);
}

// Display tools in the list
function displayTools(tools) {
  const toolsList = document.getElementById('tools-list');
  const resultsCount = document.getElementById('results-count');

  toolsList.innerHTML = '';
  resultsCount.textContent = `${tools.length} ${tools.length === 1 ? 'result' : 'results'}`;

  if (tools.length === 0) {
    toolsList.innerHTML = '<p>No tools found.</p>';
    return;
  }

  tools.forEach(tool => {
    const toolCard = document.createElement('div');
    toolCard.className = 'tool-card';

    let linksHtml = '';
    if (tool.website) {
      linksHtml += `<a href="${tool.website}" target="_blank">Website</a>`;
    }
    if (tool.docs) {
      linksHtml += ` | <a href="${tool.docs}" target="_blank">Docs</a>`;
    }
    if (tool.code) {
      linksHtml += ` | <a href="${tool.code}" target="_blank">Code</a>`;
    }

    const alternativesHtml = tool.alternatives ? `<p><strong>Alternatives:</strong> ${tool.alternatives}</p>` : '';
    const notesHtml = tool.notes ? `<p><strong>Notes:</strong> ${tool.notes}</p>` : '';

    toolCard.innerHTML = `
      <h3>${tool.name}</h3>
      <p><strong>Categories:</strong> ${tool.category.join(', ')}</p>
      <p><strong>Description:</strong> ${tool.description}</p>
      <p><strong>License:</strong> ${tool.license} ${tool.license_version}</p>
      <p><strong>Ease of Use:</strong> ${tool.ease_of_use}</p>
      <p><strong>Owner:</strong> ${tool.owner_project}</p>
      ${tool.github_stars ? `<p><strong>GitHub Stars:</strong> ${tool.github_stars}</p>` : ''}
      ${tool.github_last_update ? `<p><strong>Last Update:</strong> ${tool.github_last_update}</p>` : ''}
      <p>${linksHtml}</p>
      ${alternativesHtml}
      ${notesHtml}
    `;
    toolsList.appendChild(toolCard);
  });
}

// Load tools when the page loads
window.onload = loadTools;