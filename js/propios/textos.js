function ocultar(texto, boton1, boton2)
{
	document.getElementById(texto).style.display = 'none';
	document.getElementById(boton1).style.display = 'block';
	document.getElementById(boton2).style.display = 'none';
}

function mostrar(texto, boton1, boton2)
{
	document.getElementById(texto).style.display = 'block';
	document.getElementById(boton1).style.display = 'none';
	document.getElementById(boton2).style.display = 'block';
}