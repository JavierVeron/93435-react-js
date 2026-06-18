const Curso = () => {
    let nombreCurso = "React JS";
    const estilo = {color:"#336699", backgroundColor:"black", padding:"10px"};

    return (
        <h3>Curso de <span style={estilo}>{nombreCurso.toUpperCase()}</span></h3>
    )
}

export default Curso