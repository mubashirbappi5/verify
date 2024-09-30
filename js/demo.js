document.getElementById('verify-btn').addEventListener("click",function(e){
    e.preventDefault()
    console.log('cheak this code')
    const inputField1 = document.getElementById('input1').value
    const inputField2 = document.getElementById('input2').value
    const inputField3 = document.getElementById('input3').value
    const inputField4 = document.getElementById('input4').value
    
    console.log(inputField1,inputField2,inputField3,inputField4)

    if(inputField1 == '2' &&
        inputField2 == '4' &&
        inputField3  == '9' &&
        inputField4 == '11'
    ){
        alert("verify complate")

    }
    else{
        alert("Invalid code")
    }
})