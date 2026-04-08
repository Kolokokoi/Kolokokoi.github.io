// --- Modal Logic for Certificates ---

const modal = document.getElementById('certModal');
const modalImage = document.getElementById('modalImage');
const modalContent = document.getElementById('certModalContent');

// Function to open the modal and set the image
function openModal(imageSrc) {
    modalImage.src = imageSrc; // Sets the image based on which button was clicked
    modal.classList.remove('hidden');
    
    // Small delay to allow display to register before animating opacity and scale
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
    }, 10);
    
    // Prevent the background website from scrolling while the modal is open
    document.body.style.overflow = 'hidden'; 
}

// Function to close the modal
function closeModal() {
    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');
    
    // Wait for the transition animation to finish before hiding it completely
    setTimeout(() => {
        modal.classList.add('hidden');
        modalImage.src = ''; // Clear the image source
    }, 300); 
    
    // Restore background scrolling
    document.body.style.overflow = 'auto'; 
}

// Optional: Close modal if the user clicks anywhere outside the image (on the dark background)
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});