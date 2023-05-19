let appHeader = `
  <nav>
  
    <a href="../../index.html">Inicio</a>
    <div class="dropdown">
      <a href="#productos">Épocas</a>
      <div class="dropdown-content">
        <li> <a class="nav-link" href="../../fernandoVII.html">Fernando VII</a>  </li>
        <li> <a class="nav-link" href="../../isabelII.html">Isabel II</a> </li>
        <li> <a class="nav-link" href="../../carlismo.html">Carlismo</a> </li>
        <li> <a class="nav-link" href="../../amadeoI.html">Amadeo I</a> </li>
        <li> <a class="nav-link" href="../../1rep.html">1ª República</a> </li>
        <li> <a class="nav-link" href="../../alfonsoXII.html">Alfonso XII</a> </li>
        <li> <a class="nav-link" href="../../alfonsoXIII.html">Alfonso XIII</a> </li>
        <li> <a class="nav-link" href="../../2rep.html">2ª República</a> </li>
        <li> <a class="nav-link" href="../../juanCarlosI.html">Juan Carlos I</a> </li>
      </div>
    </div>
    <a href="../../contacto.html">Contacto</a>
	
	
	<form id="searchForm" onsubmit="return searchMedals()">
	  <input type="text" id="searchInput" placeholder="Buscar">
	  <button type="submit">Buscar</button>
	</form>

	<div id="searchResults"></div>
	
	
  </nav>
`;
document.getElementById("app-header").innerHTML = appHeader;