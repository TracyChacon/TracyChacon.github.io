const checkButton = document.getElementById('check-btn')
const textInput = document.getElementById('text-input')
const result = document.getElementById('result')

checkButton.addEventListener('click', function () {
  const inputValue = textInput.value
  const cleanInput = cleanString(inputValue.toLowerCase())

  if (inputValue === '') {
    alert('Please input a value')
  } else if (isPalindrome(cleanInput)) {
    const HTMLString = `<p>${inputValue} is a palindrome</p>`
    result.innerHTML = HTMLString
  } else {
    const HTMLString = `<p>${inputValue} is not a palindrome</p>`
    result.innerHTML = HTMLString
  }
})

function isPalindrome(str) {
  if (str.length <= 1) return true
  return (
    str[0] == str[str.length - 1] &&
    isPalindrome(str.substring(1, str.length - 1))
  )
}

function cleanString(str) {
  return str.replace(/[^a-z0-9]/gi, '')
}
