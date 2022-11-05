const deleteAllBtn = document.querySelector('.delete-all')
const addBtn = document.querySelector('.add')
const redBtn = document.querySelector('.red')
const blueBtn = document.querySelector('.blue')
const greenBtn = document.querySelector('.green')
const purpleBtn = document.querySelector('.purple')
const goldBtn = document.querySelector('.gold')
const colorAll = document.querySelectorAll('.color')
const colorAllBtn = document.querySelectorAll('.color-all')

const textarea = document.querySelector('#text')
const error = document.querySelector('.error')
const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('delete-note')
const sectionName = document.querySelector('.section-name')
let cardID = 0

const colorShow = () => {
	for (const colors of colorAll) {
		colors.classList.toggle('show')
	}
	blueBtn.style.transitionDelay = '.2s'
	greenBtn.style.transitionDelay = '.4s'
	purpleBtn.style.transitionDelay = '.6s'
	goldBtn.style.transitionDelay = '.8s'
}
const closePanel = () => {
	notePanel.style.display = 'none'
	error.style.visibility = 'hidden'
	textarea.value = ''
}
const openPanel = () => {
	notePanel.style.display = 'flex'
	colorShow()
}
const addNote = () => {
	if (textarea.value !== '') {
		createNote()
		error.style.visibility = 'hidden'
	} else {
		error.style.visibility = 'visible'
	}
}

const createNote = () => {
	const newNote = document.createElement('div')
	newNote.classList.add('note')
	newNote.setAttribute('id', cardID)
	newNote.innerHTML = `
        <div class="note-header">
        <h3 class="note-title">${sectionName.textContent}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class="fas fa-times icon"></i>
        </button>
        </div>
        <div class="note-body">
            ${textarea.value}
        </div> `
	noteArea.appendChild(newNote)
	cardID++
	textarea.value = ''
	notePanel.style.display = 'none'
	if (sectionName.textContent == 'Praca') {
		newNote.style.backgroundColor = 'rgb(255,0,0)'
	} else if (sectionName.textContent == 'Dom') {
		newNote.style.backgroundColor = 'rgb(0,0,255)'
	} else if (sectionName.textContent == 'Uroczystość') {
		newNote.style.backgroundColor = 'rgb(0,128,0)'
	} else if (sectionName.textContent == 'Zakupy') {
		newNote.style.backgroundColor = 'rgb(128,0,128)'
	} else {
		newNote.style.backgroundColor = 'rgb(255,215,0)'
	}
}
const deleteNote = id => {
	const noteToDelete = document.getElementById(id)
	noteArea.removeChild(noteToDelete)
}

const deleteAllNotes = () => {
	noteArea.textContent = ''
}

addBtn.addEventListener('click', colorShow)
redBtn.addEventListener('click', () => {
	sectionName.textContent = 'Praca'
	openPanel()
})
blueBtn.addEventListener('click', () => {
	sectionName.textContent = 'Dom'
	openPanel()
})
greenBtn.addEventListener('click', () => {
	sectionName.textContent = 'Uroczystość'
	openPanel()
})
purpleBtn.addEventListener('click', () => {
	sectionName.textContent = 'Zakupy'
	openPanel()
})
goldBtn.addEventListener('click', () => {
	sectionName.textContent = 'Inne'
	openPanel()
})
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)
