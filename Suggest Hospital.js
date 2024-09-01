// Scroll Animation
document.addEventListener('scroll', () => {
    const hospitals = document.querySelectorAll('.hospital');
    hospitals.forEach(hospital => {
        const rect = hospital.getBoundingClientRect();
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= viewHeight && rect.bottom >= 0) {
            hospital.style.transform = 'translateX(0)';
            hospital.style.opacity = '1';
        } else {
            hospital.style.transform = 'translateX(-100%)';
            hospital.style.opacity = '0';
        }
    });
});
const hospitalsPerPage = 8;  // Number of hospitals to show per page
let currentPage = 1;

function showPage(pageNumber) {
    const hospitals = document.querySelectorAll('.hospital');
    const totalPages = Math.ceil(hospitals.length / hospitalsPerPage);

    if (pageNumber < 1 || pageNumber > totalPages) return;

    currentPage = pageNumber;
    hospitals.forEach((hospital, index) => {
        hospital.style.display = (index >= (currentPage - 1) * hospitalsPerPage && index < currentPage * hospitalsPerPage) ? 'block' : 'none';
    });

    updateButtons(totalPages);
}

function showNext() {
    showPage(currentPage + 1);
}

function updateButtons(totalPages) {
    document.querySelectorAll('.page-btn').forEach((btn, index) => {
        btn.disabled = (index + 1 > totalPages || index + 1 === currentPage);
    });

    document.querySelector('.pagination .page-btn:last-child').disabled = currentPage === totalPages;
}

// Initialize the first page
showPage(1);



