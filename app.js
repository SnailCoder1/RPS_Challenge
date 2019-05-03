const renderMessage = (button) => {
	let div = document.querySelector('.message')
	div.innerHTML = `<p>choice ${button}</p>`
}


document.addEventListener('DOMContentLoaded', () => {
	const rock = document.querySelector('.rock')
	const paper = document.querySelector('.paper')
	const scissors = document.querySelector('.scissors')

	rock.addEventListener('click',event => {
		renderMessage("Rock")
	})
	paper.addEventListener('click',event => {
		renderMessage("Paper")
	})
	scissors.addEventListener('click',event => {
		renderMessage("Scissors")
	})

})



//Paper = () => {
//  document.getElementById("choice").innerHTML = "You bet in Paper"
//}


//Paper = () => {
 //   document.getElementById("choice").innerHTML = "You bet Rockr"
//}

//Paper = () => {
  //  document.getElementById("choice").innerHTML = "You bet in Scissors"
//}
