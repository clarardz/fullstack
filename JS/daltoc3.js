class movil {
    constructor(color, peso, rdp, rdc, ram) {
        this.color = color;
        this.peso = peso;
        this.rdp = rdp;
        this.rdc = rdc;
        this.ram = ram;

        this.encendido = false;
    }
    encender() {
        if (this.encendido == false) {
            console.log("movil encendido");
            this.encendido = true;

        } else {
            console.log("el movil esta apagado")
        }
    }
    reiniciar(){
        if (this.encendido == true){ 
            console.log("reiniciando movil")
        }else{
            console.log("esta apagado")
        }
    }
    tomarFoto(){
        console.log(`foto en una resolucion de ${this.rdc}`)
    }
    grabarVideo(){
        console.log(`video en una resolucion de ${this.rdc}`)
    }
    // mobileInfo(){ 
    //     return `
    //     color: ${this.color}
    //     peso: ${this.peso}
    //     rdp: ${this.rdp}
    //     rdc: ${this.rdc}
    //     rdv: ${this.rdv}
    //     ram: ${this.ram} 
    //     `; 
    // }
}
movil1 = new movil ( "rojo", "150g", "5'", "full hd", "2GB"); 

movil1.encender(); 
movil1.reiniciar(); 
movil1.tomarFoto(); 
movil1.grabarVideo(); 
// movil1.mobileInfo(); 
