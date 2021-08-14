function typeing() {
    let mess = document.getElementById('mess').value;
    let sfff = mess.match(/\w+/g);// regular expresoin javascript
    document.querySelector('span').innerText = 'The Total word : '+sfff.length;
    document.getElementById('mess').value = ' ';
  
}
 
