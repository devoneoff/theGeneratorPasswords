
document.addEventListener("DOMContentLoaded", () => {
    window.onload = false;

    // Get the input elements
    const type1 = document.getElementById('input_type1');
    const inputNum1 = document.getElementById('input_num1');
    const type2 = document.getElementById('input_type2');
    const checkBox1 = document.getElementById('input_check1');
    const checkBox2 = document.getElementById('input_check2');
    const checkBox3 = document.getElementById('input_check3');
    const radio1 = document.getElementById('input_radio1');
    const radio2 = document.getElementById('input_radio2');
    const radio3 = document.getElementById('input_radio3');

    type1.addEventListener('change', () => {
        if (type1.checked) {
            document.querySelector('.typeImg1').classList.add('active');
            document.querySelector('.typeImg2').classList.remove('active');
            document.querySelector('.inputs_num').classList.remove('noactive');
        } else {
            document.querySelector('.radioImg1').classList.remove('active');
            document.querySelector('.inputs_num').classList.add('noactive');
        }
    });
    inputNum1.addEventListener('input', () => {
        let inputNum = inputNum1.value;
    });
    type2.addEventListener('change', () => {
        if (type2.checked) {
            document.querySelector('.typeImg2').classList.add('active');
            document.querySelector('.typeImg1').classList.remove('active');
            document.querySelector('.inputs_num').classList.add('noactive');
        } else {
            document.querySelector('.radioImg2').classList.remove('active');
        }
    });
    checkBox1.addEventListener('change', () => {
        if ( checkBox1.checked ) {
            document.querySelector('.checkImg1').classList.toggle('active');
        } else {
            document.querySelector('.checkImg1').classList.toggle('active');
        }
    });
    checkBox2.addEventListener('change', () => {
        if ( checkBox2.checked ) {
            document.querySelector('.checkImg2').classList.toggle('active');
        } else {
            document.querySelector('.checkImg2').classList.toggle('active');
        }
    });
    checkBox3.addEventListener('change', () => {
        if ( checkBox3.checked ) {
            document.querySelector('.checkImg3').classList.toggle('active');
        } else {
            document.querySelector('.checkImg3').classList.toggle('active');
        }
    });


    radio1.addEventListener('change', () => {
        if (radio1.checked) {
            document.querySelector('.radioImg1').classList.add('active');
            document.querySelector('.radioImg2').classList.remove('active');
            document.querySelector('.radioImg3').classList.remove('active');
        } else {
            document.querySelector('.radioImg1').classList.remove('active');
        }
    });

    radio2.addEventListener('change', () => {
        if (radio2.checked) {
            document.querySelector('.radioImg2').classList.add('active');
            document.querySelector('.radioImg1').classList.remove('active');
            document.querySelector('.radioImg3').classList.remove('active');
        } else {
            document.querySelector('.radioImg2').classList.remove('active');
        }
    });

    radio3.addEventListener('change', () => {
        if (radio3.checked) {
            document.querySelector('.radioImg3').classList.add('active');
            document.querySelector('.radioImg1').classList.remove('active');
            document.querySelector('.radioImg2').classList.remove('active');
        } else {
            document.querySelector('.radioImg3').classList.remove('active');
        }
    });
});

const generatePassword = function() {
    const type1 = document.getElementById('input_type1');
    const inputNum1 = document.getElementById('input_num1');
    const type2 = document.getElementById('input_type2');
    const checkBox1 = document.getElementById('input_check1');
    const checkBox2 = document.getElementById('input_check2');
    const checkBox3 = document.getElementById('input_check3');
    const radio1 = document.getElementById('input_radio1');
    const radio2 = document.getElementById('input_radio2');
    const radio3 = document.getElementById('input_radio3');

    const lettersSmall = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
    const lettersBig = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
    const lettersBigSmall = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];
    const numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
    const specialSymbols = [ '-', '_', '@', '#', '!', '&', '$', '?' ];
    const specialSymbolsTypeTwo = [ '@', '#', '!', '&', '$', '?' ];

    let passwordLength = parseInt(inputNum1.value);
    const useLetters = checkBox1.checked;
    const useNumbers = checkBox2.checked;
    const useSpecialSymbols = checkBox3.checked;

    let password = '';

    const charSets = [];
    
    if (radio1.checked) {
        if (useLetters) charSets.push(lettersSmall);
    } else if (radio2.checked) {
        if (useLetters) charSets.push(lettersBig);
    } else if (radio3.checked) {
        if (useLetters) charSets.push(lettersBigSmall);
    }

    if (useNumbers) charSets.push(numbers);     
    

    if ( type1.checked ) {
        if ( useSpecialSymbols ) charSets.push( specialSymbols );
        for ( let i = 0; i < passwordLength; i++ ) {
            let randomCharSet = charSets[Math.floor(Math.random() * charSets.length)];
            let randomChar = randomCharSet[Math.floor(Math.random() * randomCharSet.length)];
            password += randomChar;
        }
        
        
    } else if ( type2.checked ) {
        if ( useSpecialSymbols ) charSets.push( specialSymbolsTypeTwo );
        let passwordsParts = '';
        for ( let parts = 0; parts < 3; parts++ ) {
            let passwordsPart = '';
            for ( let part = 0; part < 4; part++ ) {
                let randomCharSet = charSets[Math.floor(Math.random() * charSets.length)];
                let randomChar = randomCharSet[Math.floor(Math.random() * randomCharSet.length)];
                passwordsPart += randomChar;
            }
            passwordsParts = passwordsParts + passwordsPart;
            if ( parts < 2 ) {
                passwordsParts = passwordsParts + '-';
            }
        }
        password = passwordsParts;

    }
    const resultPassword = document.querySelector('.result_password');
    resultPassword.textContent = password;

    const copyBtn = document.querySelector('.copybtn');
    copyBtn.classList.remove('noCopyBtn');

    document.querySelector('.alertCopy').classList.remove('alert');
    document.querySelector('.result_passwordBlock').classList.remove('alertBlock');
};


const copyText = function() {   

    const passwordDiv = document.getElementById('result_password');
    const copyBtn = document.getElementById('copy_btn');

    const handleClick = () => {
        const passwordText = passwordDiv.textContent;
        navigator.clipboard.writeText(passwordText)
            .then(() => {
                document.querySelector('.alertCopy').classList.add('alert');
                document.querySelector('.result_passwordBlock').classList.add('alertBlock');
                copyBtn.removeEventListener('click', handleClick);
            })
    };

    copyBtn.addEventListener('click', handleClick);
}
