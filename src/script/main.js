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

    // Extract unique values for each filter type
    const categories = [...new Set(allTools.flatMap(tool => tool.category))].sort();
    const easeOfUseValues = [...new Set(allTools.map(tool => tool.ease_of_use))].sort();
    const licenseValues = [...new Set(allTools.map(tool => `${tool.license} ${tool.license_version}`))].sort();
    const typesValues = [...new Set(allTools.flatMap(tool => tool.types.split(',').map(t => t.trim())))].sort();

    // GitHub Stars ranges
    const githubStarsRanges = [
      { label: '0-100', min: 0, max: 100 },
      { label: '101-1000', min: 101, max: 1000 },
      { label: '1001-10000', min: 1001, max: 10000 },
      { label: '10000+', min: 10001, max: Infinity }
    ];

    // Populate category filters
    populateFilter('category-filters', categories, 'category', 'All');

    // Populate ease of use filters
    populateFilter('ease-of-use-filters', easeOfUseValues, 'ease_of_use', 'All');

    // Populate license filters
    populateFilter('license-filters', licenseValues, 'license', 'All');

    // Populate types filters
    populateFilter('types-filters', typesValues, 'types', 'All');

    // Populate GitHub stars filters
    const githubStarsFilters = document.getElementById('github-stars-filters');
    githubStarsRanges.forEach(range => {
      const option = document.createElement('label');
      option.className = 'filter-option';
      option.innerHTML = `
        <input type="radio" name="github_stars" value="${range.label}">
        <span>${range.label}</span>
      `;
      option.querySelector('input').onchange = applyFilters;
      githubStarsFilters.appendChild(option);
    });

    // Add an "All" option for GitHub stars
    const allStarsOption = document.createElement('label');
    allStarsOption.className = 'filter-option';
    allStarsOption.innerHTML = `
      <input type="radio" name="github_stars" value="All" checked>
      <span>All</span>
    `;
    allStarsOption.querySelector('input').onchange = applyFilters;
    githubStarsFilters.prepend(allStarsOption);

    // Add search functionality
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', applyFilters);

    // Display all tools initially
    applyFilters();
  } catch (error) {
    console.error('Error loading tools:', error);
    document.getElementById('tools-list').innerHTML = '<p>Error loading tools data. Please try again later.</p>';
  }
}

// Populate a filter section with options
function populateFilter(elementId, options, filterKey, allLabel) {
  const filterElement = document.getElementById(elementId);

  // Add "All" option
  const allOption = document.createElement('label');
  allOption.className = 'filter-option';
  allOption.innerHTML = `
    <input type="radio" name="${filterKey}" value="${allLabel}" checked>
    <span>${allLabel}</span>
  `;
  allOption.querySelector('input').onchange = applyFilters;
  filterElement.appendChild(allOption);

  // Add other options
  options.forEach(option => {
    if (option) {
      const optionElement = document.createElement('label');
      optionElement.className = 'filter-option';
      optionElement.innerHTML = `
        <input type="radio" name="${filterKey}" value="${option}">
        <span>${option}</span>
      `;
      optionElement.querySelector('input').onchange = applyFilters;
      filterElement.appendChild(optionElement);
    }
  });
}

// Apply all active filters
function applyFilters() {
  const searchTerm = document.getElementById('search').value.toLowerCase();

  // Get selected values for each filter
  const selectedCategory = document.querySelector('input[name="category"]:checked')?.value;
  const selectedEaseOfUse = document.querySelector('input[name="ease_of_use"]:checked')?.value;
  const selectedLicense = document.querySelector('input[name="license"]:checked')?.value;
  const selectedTypes = document.querySelector('input[name="types"]:checked')?.value;
  const selectedStarsRange = document.querySelector('input[name="github_stars"]:checked')?.value;

  let filteredTools = allTools;

  // Filter by search term
  if (searchTerm) {
    filteredTools = filteredTools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm)
    );
  }

  // Filter by category
  if (selectedCategory && selectedCategory !== 'All') {
    filteredTools = filteredTools.filter(tool => tool.category.includes(selectedCategory));
  }

  // Filter by ease of use
  if (selectedEaseOfUse && selectedEaseOfUse !== 'All') {
    filteredTools = filteredTools.filter(tool => tool.ease_of_use === selectedEaseOfUse);
  }

  // Filter by license
  if (selectedLicense && selectedLicense !== 'All') {
    filteredTools = filteredTools.filter(tool => `${tool.license} ${tool.license_version}` === selectedLicense);
  }

  // Filter by types
  if (selectedTypes && selectedTypes !== 'All') {
    filteredTools = filteredTools.filter(tool =>
      tool.types.split(',').map(t => t.trim()).includes(selectedTypes)
    );
  }

  // Filter by GitHub stars range
  if (selectedStarsRange && selectedStarsRange !== 'All') {
    const range = {
      '0-100': { min: 0, max: 100 },
      '101-1000': { min: 101, max: 1000 },
      '1001-10000': { min: 1001, max: 10000 },
      '10000+': { min: 10001, max: Infinity }
    }[selectedStarsRange];

    filteredTools = filteredTools.filter(tool => {
      const stars = tool.github_stars || 0;
      return stars >= range.min && stars <= range.max;
    });
  }

  displayTools(filteredTools);
}

// Display tools in the list with accordion design
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
    // Create the accordion container
    const toolCard = document.createElement('details');
    toolCard.className = 'tool-card';

    // Create the summary (visible by default)
    const summary = document.createElement('summary');
    summary.innerHTML = `
      <div class="tool-identity">
        <span class="tool-name">${tool.name}</span>
        <span class="tool-producer">${tool.owner_project}</span>
      </div>
      <div class="tool-purpose">
        ${tool.description}
        ${tool.types ? `<br><strong>Types:</strong> ${tool.types}` : ''}
      </div>
    `;

    // Create the body (hidden by default, shown when expanded)
    const body = document.createElement('div');
    body.className = 'tool-body';

    // Build the facts section
    let factsHTML = `
      <div class="tool-facts">
        <div class="tool-term">License</div>
        <div class="tool-definition">${tool.license} ${tool.license_version}</div>

        <div class="tool-term">Ease of Use</div>
        <div class="tool-definition">${tool.ease_of_use}</div>

        <div class="tool-term">Categories</div>
        <div class="tool-definition">${tool.category.join(', ')}</div>

        <div class="tool-term">Types</div>
        <div class="tool-definition">${tool.types}</div>
    `;

    // Add GitHub Stars if available
    if (tool.github_stars) {
      factsHTML += `
        <div class="tool-term">GitHub Stars</div>
        <div class="tool-definition">${tool.github_stars}</div>
      `;
    }

    // Add Last Update if available
    if (tool.github_last_update) {
      factsHTML += `
        <div class="tool-term">Last Update</div>
        <div class="tool-definition">${tool.github_last_update}</div>
      `;
    }

    // Add Links
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
    factsHTML += `
        <div class="tool-term">Links</div>
        <div class="tool-definition">${linksHtml || 'N/A'}</div>
      </div>
    `;

    // Add Alternatives and Notes if available
    if (tool.alternatives) {
      factsHTML += `<p><strong>Alternatives:</strong> ${tool.alternatives}</p>`;
    }
    if (tool.notes) {
      factsHTML += `<p><strong>Notes:</strong> ${tool.notes}</p>`;
    }

    body.innerHTML = factsHTML;

    // Append summary and body to the tool card
    toolCard.appendChild(summary);
    toolCard.appendChild(body);

    // Append the tool card to the list
    toolsList.appendChild(toolCard);
  });
}

// Load tools when the page loads
window.onload = loadTools;