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
    $scope.carnesCompradas = {quantidade: 0, total: 0};
    $scope.bebidasCompradas = {quantidade: 0, total: 0};
    $scope.outrosComprados = {quantidade: 0, total: 0};

    $scope.comprarCarne = function () {
        var carnes = $('#carnes').val();
        var carnesQtd = $('#carnes-qtd').val();

        var p = JSON.parse(carnes);
        var q = parseFloat(carnesQtd);

        if (q > 0) {
            $scope.compras.push({
                tipo: 'carnes',
                produto: p,
                quantidade: q
            });
            $scope.carnesCompradas.quantidade += q;
            $scope.carnesCompradas.total += p.valor;
        }
    };

    $scope.comprarBebida = function () {
        var bebidas = $('#bebidas').val();
        var bebidasQtd = $('#bebidas-qtd').val();

        var p = JSON.parse(bebidas);
        var q = parseFloat(bebidasQtd);

        if (q > 0) {
            $scope.compras.push({
                tipo: 'bebidas',
                quantidade: q,
                produto: p
            });
            $scope.bebidasCompradas.quantidade += q;
            $scope.bebidasCompradas.total += p.valor;
        }
    };

    $scope.comprarOutro = function () {
        var outros = $('#outros').val();
        var outrosQtd = $('#outros-qtd').val();

        var p = JSON.parse(outros);
        var q = parseFloat(outrosQtd);

        if (q > 0) {
            $scope.compras.push({
                tipo: 'outros',
                quantidade: q,
                produto: p
            });
            $scope.outrosComprados.quantidade += q;
            $scope.outrosComprados.total += p.valor;
        }
    };

    $scope.getTotal = function () {
        var total = $scope.carnesCompradas.total + $scope.bebidasCompradas.total + $scope.outrosComprados.total;

        return total.toFixed(2);
    };

});

