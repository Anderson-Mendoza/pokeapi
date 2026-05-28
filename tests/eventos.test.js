



describe('Interaccion con el DOM', () => {
    document.body.innerHTML = `
     <div class="buscar-poke">
        <input id="input-buscar" class="input" type="text" placeholder="Buscar pokemon">
        <button id="btn-buscar" class="btn-buscar"> Buscar </button>
    </div>
    
    `;

    require('../src/eventos')


});

test('busca el texto ingresado', () => {
    const input = document.getElementById("input-buscar");

    input.value = 'texto ingresado'
    expect(input.value).toBe('texto ingresado')
});


