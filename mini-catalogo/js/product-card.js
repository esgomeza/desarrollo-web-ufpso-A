class ProductCard extends HTMLElement {

connectedCallback(){

const nombre = this.getAttribute("nombre");
const precio = this.getAttribute("precio");
const descripcion = this.getAttribute("descripcion");

const shadow = this.attachShadow({mode:"open"});

shadow.innerHTML = `
<style>

.card{
border:1px solid #ccc;
padding:15px;
margin:10px;
border-radius:8px;
width:120px;
text-align:center;
}

</style>

<div class="card">
<h3>${nombre}</h3>
<p>${descripcion}</p>
<strong>${precio}</strong>
</div>
`;

}

}

customElements.define("product-card", ProductCard);