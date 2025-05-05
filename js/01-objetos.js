const auto = {
  color: "rojo",
  marca: "fiat",
  modelo: "palio",
  estado1: "encendido",
  estado2: "apagado",

encender: function(){
    document.writeln(`<p>El auto esta ${this.estado1}</p>`)
},
apagar: function (){
    document.writeln(`<p> El auto esta ${this.estado2} </p>`)
}
}

auto.encender()
auto.apagar()