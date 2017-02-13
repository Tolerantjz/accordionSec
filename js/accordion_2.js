window.onload = function() {
	const contents = document.getElementsByClassName("baseContent");
	const tits = document.getElementsByClassName("switch");
	const parents = document.getElementsByClassName("father");
	let choose = true;
	let num = 0;
	const titleHeights = new Array();
	const contentsHeights = new Array();
	for(let i = 0; i < parents.length; i++) {
		titleHeights[i] = tits[i].clientHeight;
		contentsHeights[i] = contents[i].offsetHeight;
		parents[i].style.height = titleHeights[i] + "px";
	}
	for(let i = 0; i < tits.length; i++) {
		tits[i].index = i;
		tits[i].addEventListener("click", function(e) {
			const tits = document.getElementsByClassName("switch");
			const contents = document.getElementsByClassName("baseContent");
			const triangles = document.getElementsByClassName("triangle");
			e.stopPropagation();
			for(let i = 0; i < contents.length; i++) {
				contents[i].classList.add("hide");
			}
			for(let i = 0; i < triangles.length; i++) {
				triangles[i].classList.remove("down");
			}
			if(choose) {
				contents[this.index].classList.remove("hide");
				triangles[this.index].classList.add("down");
				num = this.index;
				choose = false;
				parents[this.index].style.height = titleHeights[this.index] + contentsHeights[this.index] + "px";
			} else {
				if(num == this.index) {
					contents[this.index].classList.add("hide");
					triangles[this.index].classList.remove("down");
					choose = true;
					parents[this.index].style.height = titleHeights[this.index] + 'px';
				} else {
					for(let i = 0; i < contents.length; i++) {
						contents[i].classList.add("hide");
						parents[i].style.height = titleHeights[i] + "px";
					}
					for(let i = 0; i < triangles.length; i++) {
						triangles[i].classList.remove("down");
					}
					contents[this.index].classList.remove("hide");
					triangles[this.index].classList.add("down");
					num = this.index;
					choose = false;
					parents[this.index].style.height = titleHeights[this.index] + contentsHeights[this.index] + 'px';
				}
			}
		})
	}
}