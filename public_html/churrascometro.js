var churras = angular.module('churras', []);

churras.controller('principal', function ($scope, $http) {

    $scope.carnes = [];
    $scope.bebidas = [];
    $scope.outros = [];

    $http.get('produtos.json').then(function (response) {
        $scope.carnes = response.data.carnes;
        $scope.bebidas = response.data.bebidas;
        $scope.outros = response.data.outros;
    });

    $scope.compras = [];

    $scope.comprarCarne = function () {
        var p = $scope.carneSelecionada;
        var q = $scope.carneQtd;
        var v = valor(p, $scope.carnes);

        if (p !== undefined && q > 0) {
            $scope.compras.push({
                tipo: 'carnes',
                produto: p,
                quantidade: q,
                valor: v
            });
        }
    };

    $scope.comprarBebida = function () {
        var p = $scope.bebidaSelecionada;
        var q = $scope.bebidaQtd;
        var v = valor(p, $scope.bebidas);

        if (p !== undefined && q > 0) {
            $scope.compras.push({
                tipo: 'bebidas',
                produto: p,
                quantidade: q,
                valor: v
            });
        }
    };

    $scope.comprarOutro = function () {
        var p = $scope.outroSelecionado;
        var q = $scope.outroQtd;
        var v = valor(p, $scope.outros);

        if (p !== undefined && q > 0) {
            $scope.compras.push({
                tipo: 'outros',
                produto: p,
                quantidade: q,
                valor: v
            });
        }
    };

    var valor = function (nome, lista) {
        var valor = 0;

        for (var i = 0; i < lista.length; i++) {
            var p = lista[i];

            if (p.nome === nome) {
                valor = p.valor;
                break;
            }
        }

        return valor;
    };

    $scope.quantidade = function (tipo) {
        var qtd = 0;

        for (var i = 0; i < $scope.compras.length; i++) {
            var c = $scope.compras[i];

            if (c.tipo === tipo) {
                qtd += c.quantidade;
            }
        }

        return qtd;
    };

    $scope.total = function (tipo) {
        var total = 0;

        for (var i = 0; i < $scope.compras.length; i++) {
            var c = $scope.compras[i];

            if (tipo === undefined || c.tipo === tipo) {
                total += c.quantidade * c.valor;
            }
        }

        return total.toFixed(2);
    };

});
