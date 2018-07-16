var firstNav = document.querySelector('.txt1')
var secondNav = document.querySelector('.txt2')
var thrirdNav = document.querySelector('.txt3')
var lang = document.querySelector('.html')
var langs = document.querySelectorAll('.select option')

lang.lang = "fr"

if(lang.lang === 'en') {
	firstNav.innerHTML = "Welcome"
	secondNav.innerHTML = "Profil"
	thrirdNav.innerHTML = "Servers"
} else if(lang.lang === 'fr') {
	firstNav.innerHTML = "Acceuille"
	secondNav.innerHTML = "Profil"
	thrirdNav.innerHTML = "Serveurs"
} else if(lang.lang === 'de') {
	firstNav.innerHTML = "Empfang"
	secondNav.innerHTML = "Profil"
	thrirdNav.innerHTML = "Server"
} else if(lang.lang === 'es') {
	firstNav.innerHTML = "Acoge"
	secondNav.innerHTML = "Perfil"
	thrirdNav.innerHTML = "Camareros"
}