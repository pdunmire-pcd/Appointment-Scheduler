// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Get form element
    const form = document.querySelector('form');
    
    // Get all input elements we need to validate
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    
    // Helper function to show error message
    function showError(inputElement, message) {
        const errorElement = document.getElementById(inputElement.id + '-error');
        errorElement.textContent = message;
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
    }
    
    // Helper function to clear error message
    function clearError(inputElement) {
        const errorElement = document.getElementById(inputElement.id + '-error');
        errorElement.textContent = '';
        inputElement.classList.remove('invalid');
        inputElement.classList.add('valid');
    }
    
    // Form submit event listener
    form.addEventListener('submit', function(e) {
        e.preventDefault();         
        let isValid = true; 

        // Validate First Name
        if (fname.value.trim() === '') {
            showError(fname, 'First name is required');
            isValid = false;
        } else {
            clearError(fname);
        }

        // Validate Last Name
        if (lname.value.trim() === '') {
            showError(lname, 'Last name is required');
            isValid = false;
        } else {
            clearError(lname);
        }
        
        // Validate Date
        

        // If all validations passed, submit the form
        if (isValid) {
            alert('Form is valid! (In a real app, this would submit to the server)');
            // form.submit(); // Uncomment this in production
        } else {
            // Scroll to first error
            const firstError = document.querySelector('.invalid');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });

    // Real-time validation on blur (when user leaves a field)
    fname.addEventListener('blur', function() {
        if (fname.value.trim() === '') {
            showError(fname, 'First name is required');
        } else {
            clearError(fname);
        }
    });

    lname.addEventListener('blur', function() {
        if (lname.value.trim() === '') {
            showError(lname, 'Last name is required');
        } else {
            clearError(lname);
        }
    });

});