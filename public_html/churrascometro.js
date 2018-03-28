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
        }
    };

});

