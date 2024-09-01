// filter code start 
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the filter elements
    const stateFilter = document.getElementById('state');
    const districtFilter = document.getElementById('district');
    const cityFilter = document.getElementById('city');
    const searchInput = document.getElementById('search');
    
    // Get all hospital elements
    const hospitals = document.querySelectorAll('.hospital');

    // Function to filter hospitals based on selected filters and search query
    function filterHospitals() {
        const stateValue = stateFilter.value.toLowerCase();
        const districtValue = districtFilter.value.toLowerCase();
        const cityValue = cityFilter.value.toLowerCase();
        const searchValue = searchInput.value.toLowerCase();

        // Loop through each hospital and determine if it should be visible
        hospitals.forEach(hospital => {
            const hospitalState = hospital.getAttribute('data-state').toLowerCase();
            const hospitalDistrict = hospital.getAttribute('data-district').toLowerCase();
            const hospitalCity = hospital.getAttribute('data-city').toLowerCase();
            const hospitalText = hospital.textContent.toLowerCase();

            // Determine if the hospital matches the selected filters and search query
            const matchesFilters = 
                (stateValue === '' || hospitalState === stateValue) &&
                (districtValue === '' || hospitalDistrict === districtValue) &&
                (cityValue === '' || hospitalCity === cityValue) &&
                (searchValue === '' || hospitalText.includes(searchValue));

            // Show or hide the hospital element based on the filter match
            hospital.style.display = matchesFilters ? 'block' : 'none';
        });
    }

    // Add event listeners to filter elements
    stateFilter.addEventListener('change', filterHospitals);
    districtFilter.addEventListener('change', filterHospitals);
    cityFilter.addEventListener('change', filterHospitals);
    searchInput.addEventListener('input', filterHospitals);
});