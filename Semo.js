document.getElementById('download-btn').addEventListener('click', function(e) { e.preventDefault(); document.getElementById('download-modal').style.display = 'flex'; });
document.getElementById('download-modal').addEventListener('click', function(e) { if (e.target === this) { this.style.display = 'none'; } });
document.querySelector('.cancel-btn').addEventListener('click', function() { document.getElementById('download-modal').style.display = 'none'; });
const image3D = document.querySelector('.executor-image');
let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
let isMouseMoving = false;
function updateAnimation() {
    if (!isMouseMoving) return;
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;
    const rotateX = (currentY - 0.5) * 20;
    const rotateY = (currentX - 0.5) * -20;
    image3D.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    requestAnimationFrame(updateAnimation);
}
image3D.addEventListener('mousemove', function(e) {
    const rect = this.getBoundingClientRect();
    mouseX = (e.clientX - rect.left) / rect.width;
    mouseY = (e.clientY - rect.top) / rect.height;
    isMouseMoving = true;
    requestAnimationFrame(updateAnimation);
});
image3D.addEventListener('mouseleave', function() {
    isMouseMoving = false;
    this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    this.classList.remove('hover');
});
