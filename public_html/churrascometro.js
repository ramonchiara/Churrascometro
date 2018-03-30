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

        if (p !== undefined && q > 0) {
            $scope.compras.push({
                tipo: 'carnes',
                produto: p,
                quantidade: q
            });
        }
    };

    $scope.comprarBebida = function () {
        var p = $scope.bebidaSelecionada;
        var q = $scope.bebidaQtd;

        if (p !== undefined && q > 0) {
            $scope.compras.push({
                tipo: 'bebidas',
                produto: p,
                quantidade: q
            });
        }
    };

    $scope.comprarOutro = function () {
        var p = $scope.outroSelecionado;
        var q = $scope.outroQtd;

        if (p !== undefined && q > 0) {
            $scope.compras.push({
                tipo: 'outros',
                produto: p,
                quantidade: q
            });
        }
    };

    $scope.quantidadeCarnes = function () {
        var qtd = 0;

        for (var i = 0; i < $scope.compras.length; i++) {
            var c = $scope.compras[i];
            
            if (c.tipo === 'carnes') {
                qtd += c.quantidade;
            }
        }

        return qtd;
    };

    $scope.quantidadeBebidas = function () {
        var qtd = 0;

        for (var i = 0; i < $scope.compras.length; i++) {
            var c = $scope.compras[i];
            
            if (c.tipo === 'bebidas') {
                qtd += c.quantidade;
            }
        }

        return qtd;
    };

    $scope.quantidadeOutros = function () {
        var qtd = 0;

        for (var i = 0; i < $scope.compras.length; i++) {
            var c = $scope.compras[i];
            
            if (c.tipo === 'outros') {
                qtd += c.quantidade;
            }
        }

        return qtd;
    };

});
