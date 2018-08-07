describe('Ao manipular json', function() {
    it('Deve gerar um html', function() {

        obterLayoutPedido();
        expect(document.getElementById('frmOrder').innerHTML).toBeDefined();
    });
});