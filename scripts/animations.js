// add to cart animation //
function addedtocart() {
    var button =
document.querySelector ('.add_to_cart'); 
    if (button.textContent === 'ADD TO CART') {
            button.textContent = 'ADDED TO CART';
            button.style.backgroundColor = '#052847';
            button.style.color = '#ADBBC7';
    } else {
                    button.textContent = 'ADD TO CART'; 
                    button.style.backgroundColor = '#ADBBC7'
                    button.style.color = '#052847';
                    }
                }


function validateForm() {
    let isFilled = true; 

    // name filled 
    const email = 
    document.getElementById('email').value;
    const emailnotFilled =
    document.getElementbyID('emailnotFilled');
    if (email==="") {
        emailnotFilled.textContent = "Email is required.";
        isFilled = false;
    } else {
        emailnotFilled.textConotent = "";
    }
}