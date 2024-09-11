document.getElementById('download-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('download-modal').style.display = 'flex';
});

// Close modal by clicking outside content area
document.getElementById('download-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});

document.querySelector('.cancel-btn').addEventListener('click', function() {
    document.getElementById('download-modal').style.display = 'none';
});

// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});