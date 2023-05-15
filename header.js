let appHeader = `
  <nav>
    <a href="index.html">Inicio</a>
    <div class="dropdown">
      <a href="#productos">Épocas</a>
      <div class="dropdown-content">
        <li> <a class="nav-link" href="fernando.html">Fernando VII</a>  </li>
        <li> <a class="nav-link" href="isabel.html">Isabel II</a> </li>
        <li> <a class="nav-link" href="carlismo.html">Carlismo</a> </li>
        <li> <a class="nav-link" href="amadeo.html">Amadeo I</a> </li>
        <li> <a class="nav-link" href="1rep.html">1ª República</a> </li>
        <li> <a class="nav-link" href="alfonsoxii.html">Alfonso XII</a> </li>
        <li> <a class="nav-link" href="alfonsoxiii.html">Alfonso XIII</a> </li>
        <li> <a class="nav-link" href="2rep.html">2ª República</a> </li>
        <li> <a class="nav-link" href="juancarlos.html">Juan Carlos I</a> </li>
      </div>
    </div>
    <a href="contacto.html">Contacto</a>
  </nav>
`;
document.getElementById("app-header").innerHTML = appHeader;