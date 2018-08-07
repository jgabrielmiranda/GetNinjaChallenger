obterLayoutPedido(function(resultado) {
    montarHTMLPedido(resultado);
});

function montarHTMLPedido(retornoJSON) {
    let fields = JSON.parse(retornoJSON);
    let page = '';
    // varrer os campos
    for (let i = 0; i < fields._embedded.request_fields.length; i++) {
        page = page.concat('<label name=', '"', fields._embedded.request_fields[i].name, '"', '>', fields._embedded.request_fields[i].label, '</label>', '</br>');
        if (fields._embedded.request_fields[i].type = 'enumerable') { // Campos com enumerable devem ser considerados um select
            let primeiraPosicao = true;
            if (fields._embedded.request_fields[i].values) {
                page = fields._embedded.request_fields[i].required ? page.concat('<select required>') : page.concat('<select>');
                for (let key in fields._embedded.request_fields[i].values) {
                    if (primeiraPosicao && i == 3) { // Utilizei o  indice para localizar o campo Para quando... pois somente ele nao possui uma opcao default e nao possui nenhuma indicacao no json
                        page = page.concat('<option value="">', key, '</option>');
                    } else {
                        page = page.concat('<option value="', key, '">', key, '</option>');
                    }
                    primeiraPosicao = false;
                }
                page = page.concat('</select>');
            } else {
                page = page.concat('<textarea>', '</textarea>');
            }
        }
    }
    page = page.concat('<input type="submit" value="BUSCAR PROFISSIONAIS" class="btn"> ');
    document.getElementById('frmOrder').innerHTML = page;
}