const xhr = new XMLHttpRequest()
console.log(xhr.readyState)
const url = 'https://api.github.com/users'
xhr.open('GET', url)
console.log(xhr.readyState)
// AJAX  CODE
xhr.onreadystatechange = () => {
        console.log(xhr.readyState)
        if(xhr.readyState == 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText))
        }
}
xhr.send()