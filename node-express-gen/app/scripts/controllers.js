'use strict';

angular.module('Destinator')

.controller('MenuController', ['$scope', 'menuFactory', 'favoriteFactory', function ($scope, menuFactory, favoriteFactory) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    $scope.showFavorites = false;
    $scope.showMenu = false;
    $scope.message = "Loading ...";

    menuFactory.query(
        function (response) {
            $scope.dishes = response;
            $scope.showMenu = true;

        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });

    $scope.select = function (setTab) {
        $scope.tab = setTab;

        if (setTab === 2) {
            $scope.filtText = "appetizer";
        } else if (setTab === 3) {
            $scope.filtText = "mains";
        } else if (setTab === 4) {
            $scope.filtText = "dessert";
        } else {
            $scope.filtText = "";
        }
    };

    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };

    $scope.toggleDetails = function () {
        $scope.showDetails = !$scope.showDetails;
    };

    $scope.toggleFavorites = function () {
        $scope.showFavorites = !$scope.showFavorites;
    };
    
    $scope.addToFavorites = function(dishid) {
        console.log('Add to favorites', dishid);
        favoriteFactory.save({_id: dishid});
        $scope.showFavorites = !$scope.showFavorites;
    };
}])

.controller('ContactController', ['$scope', 'feedbackFactory', function ($scope, feedbackFactory) {

    $scope.feedback = {
        mychannel: "",
        firstName: "",
        lastName: "",
        agree: false,
        email: ""
    };

    var channels = [{
        value: "tel",
        label: "Tel."
    }, {
        value: "Email",
        label: "Email"
    }];

    $scope.channels = channels;
    $scope.invalidChannelSelection = false;

    $scope.sendFeedback = function () {


        if ($scope.feedback.agree && ($scope.feedback.mychannel == "")) {
            $scope.invalidChannelSelection = true;
        } else {
            $scope.invalidChannelSelection = false;
            feedbackFactory.save($scope.feedback);
            $scope.feedback = {
                mychannel: "",
                firstName: "",
                lastName: "",
                agree: false,
                email: ""
            };
            $scope.feedback.mychannel = "";
            $scope.feedbackForm.$setPristine();
        }
    };
}])

.controller('DishDetailController', ['$scope', '$state', '$stateParams', 'menuFactory', 'commentFactory', function ($scope, $state, $stateParams, menuFactory, commentFactory) {

    $scope.dish = {};
    $scope.showDish = false;
    $scope.message = "Loading ...";

    $scope.dish = menuFactory.get({
            id: $stateParams.id
        })
        .$promise.then(
            function (response) {
                $scope.dish = response;
                $scope.showDish = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );

    $scope.mycomment = {
        rating: 5,
        comment: ""
    };

    $scope.submitComment = function () {

        commentFactory.save({id: $stateParams.id}, $scope.mycomment);

        $state.go($state.current, {}, {reload: true});
        
        $scope.commentForm.$setPristine();

        $scope.mycomment = {
            rating: 5,
            comment: ""
        };
    }
}])

// implement the IndexController and About Controller here

.controller('HomeController', ['$scope', '$state', 'ngDialog', 'destinosFactory', function ($scope, $state, ngDialog, destinosFactory) {
   /* destinosFactory.query({})
        .$promise.then(
            function (response) {
                $scope.destino = [];
                var destinos = response;
                //$scope.destino = destinos[0];
                $scope.destino = destinos;
                
                //$scope.showDish = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );*/


        $scope.openDialog = function (productivity, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.productividad = productivity;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/productividad.html', scope: $scope, className: 'ngdialog-theme-default', controller:"ProductividadController" });
            
            
        };
        $scope.openDialogDir = function (dir, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.direccion = dir;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/direccion.html', scope: $scope, className: 'ngdialog-theme-default', controller:"DireccionController" });
            
            
        };

         $scope.openDialogTel = function (tel, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.telefono = tel;
            $scope.puesto_num = puesto_num;
            console.log("puesto_num en openDialogTel " + $scope.puesto_num);
            ngDialog.open({ template: 'views/telefono.html', scope: $scope, className: 'ngdialog-theme-default', controller:"TelefonoController" });
            
            
        };

        $scope.openDialogHorario = function (horario, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.horario_flexibilidad = horario;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/horario.html', scope: $scope, className: 'ngdialog-theme-default', controller:"HorarioController" });
            
            
        };

        $scope.openDialogDescripcion = function (desc, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.descripcion = desc;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/descripcion.html', scope: $scope, className: 'ngdialog-theme-default', controller:"DescripcionController" });
            
            
        };

        $scope.openDialogTransporte = function (transp, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.transporte_publico = transp;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/transporte.html', scope: $scope, className: 'ngdialog-theme-default', controller:"TransporteController" });
            
            
        };

        $scope.openDialogAparcamiento = function (aparc, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.aparcamiento = aparc;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/aparcamiento.html', scope: $scope, className: 'ngdialog-theme-default', controller:"AparcamientoController" });
            
            
        };

        $scope.openDialogAyudas = function (ayudas, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.ayudas_estudios = ayudas;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/ayudas.html', scope: $scope, className: 'ngdialog-theme-default', controller:"AyudasController" });
            
            
        };

        $scope.openDialogAyudasCuerposSuperiores = function (ayudas, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.ayudas_cuerpos_superiores = ayudas;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/ayudas_cuerpos_superiores.html', scope: $scope, className: 'ngdialog-theme-default', controller:"AyudasCuerposSuperioresController" });
            
            
        };

        $scope.openDialogConciliacion = function (concil, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.conciliacion = concil;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/conciliacion.html', scope: $scope, className: 'ngdialog-theme-default', controller:"ConciliacionController" });
            
            
        };

        $scope.openDialogAccion = function (accion, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.accion_social = accion;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/accion.html', scope: $scope, className: 'ngdialog-theme-default', controller:"AccionController" });
            
            
        };

        $scope.openDialogComedor = function (comed, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.comedor = comed;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/comedor.html', scope: $scope, className: 'ngdialog-theme-default', controller:"ComedorController" });
            
            
        };

         $scope.openDialogDucha = function (duch, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.ducha = duch;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/ducha.html', scope: $scope, className: 'ngdialog-theme-default', controller:"DuchaController" });
            
            
        };

        $scope.openDialogPromocion = function (promo, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.promocion = promo;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/promocion.html', scope: $scope, className: 'ngdialog-theme-default', controller:"PromocionController" });
            
            
        };

        $scope.openDialogExternos = function (ext, id, puesto_num) {
            //var newScope = $scope.$new();
            //newScope.productividad = productivity;
            //newScope.id = id;
            //scope: newScope
            $scope.identificador = id;
            $scope.externos = ext;
            $scope.puesto_num = puesto_num;
            ngDialog.open({ template: 'views/externos.html', scope: $scope, className: 'ngdialog-theme-default', controller:"ExternosController" });
            
            
        };

        $scope.$on('login:Successful', function () {
            $scope.destino = destinosFactory.query({})
            .$promise.then(
                function (response) {

                    $scope.destino = response;
                    //$scope.showDish = true;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
        });

        $scope.$on('logout', function () {
            $scope.destino = destinosFactory.query({})
            .$promise.then(
                function (response) {

                    $scope.destino = response;
                    //$scope.showDish = true;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
        });

        $scope.destino = destinosFactory.query({})
        .$promise.then(
            function (response) {

                $scope.destino = response;
                //$scope.showDish = true;
            },
            function (response) {
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );
    
}])

.controller('ProductividadController', ['$scope', '$state', '$stateParams', 'ngDialog', 'productividadFactory', function ($scope, $state, $stateParams, ngDialog, productividadFactory) {
    
    //$scope.loginData = $localStorage.getObject('userinfo','{}');
    
    
    $scope.doUpdateProductividad = function() {
        //$scope.destino[$filter('filter')($scope.destino, {id: $scope.identificador})[0] = $scope.productividad;
        //$scope.gradeC = $filter('filter')($scope.results.subjects, {grade: 'C'})[0];
        $scope.destino[$scope.puesto_num-1].comp_productividad = $scope.productividad;
        
        
        //productividadFactory.updateProductividad($scope.id, $scope.productividad);
        productividadFactory.updateProductividad($scope.identificador, $scope.productividad);
       // $state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
        ngDialog.close();
        // $state.go('app', $stateParams, { reload: true, inherit: true, notify: true  });
       //$state.transitionTo('home');
       //$state.transitionTo($state);
    };

    
}])

.controller('DireccionController', ['$scope', '$state', '$stateParams', 'ngDialog', 'direccionFactory', function ($scope, $state, $stateParams, ngDialog, direccionFactory) {
    
    //$scope.loginData = $localStorage.getObject('userinfo','{}');
    
    
    $scope.doUpdateDireccion = function() {
        //$scope.destino[$filter('filter')($scope.destino, {id: $scope.identificador})[0] = $scope.productividad;
        //$scope.gradeC = $filter('filter')($scope.results.subjects, {grade: 'C'})[0];
        $scope.destino[$scope.puesto_num-1].direccion = $scope.direccion;
        console.log("puesto " + $scope.puesto_num);
        
        //productividadFactory.updateProductividad($scope.id, $scope.productividad);
        direccionFactory.updateDireccion($scope.identificador, $scope.direccion);

    
               
      
       
           // $state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });
        ngDialog.close();
        // $state.go('app', $stateParams, { reload: true, inherit: true, notify: true  });
       //$state.transitionTo('home');
       //$state.transitionTo($state);
    };

    
}])

.controller('TelefonoController', ['$scope', '$state', '$stateParams', 'ngDialog', 'telefonoFactory', function ($scope, $state, $stateParams, ngDialog, telefonoFactory) {
    
    //$scope.loginData = $localStorage.getObject('userinfo','{}');
    
    
    $scope.doUpdateTelefono = function() {

        $scope.destino[$scope.puesto_num-1].telefono = $scope.telefono;
        
       
        
        telefonoFactory.updateTelefono($scope.identificador, $scope.telefono);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('HorarioController', ['$scope', '$state', '$stateParams', 'ngDialog', 'horarioFactory', function ($scope, $state, $stateParams, ngDialog, horarioFactory) {
    
    $scope.doUpdateHorario = function() {

        $scope.destino[$scope.puesto_num-1].horario_flexibilidad = $scope.horario_flexibilidad;
        horarioFactory.updateHorario($scope.identificador, $scope.horario_flexibilidad);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('DescripcionController', ['$scope', '$state', '$stateParams', 'ngDialog', 'descripcionFactory', function ($scope, $state, $stateParams, ngDialog, descripcionFactory) {
    
    $scope.doUpdateDescripcion = function() {

        $scope.destino[$scope.puesto_num-1].descripcion = $scope.descripcion;
        descripcionFactory.updateDescripcion($scope.identificador, $scope.descripcion);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('TransporteController', ['$scope', '$state', '$stateParams', 'ngDialog', 'transporteFactory', function ($scope, $state, $stateParams, ngDialog, transporteFactory) {
    
    $scope.doUpdateTransporte = function() {

        $scope.destino[$scope.puesto_num-1].transporte_publico = $scope.transporte_publico;
        transporteFactory.updateTransporte($scope.identificador, $scope.transporte_publico);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('AparcamientoController', ['$scope', '$state', '$stateParams', 'ngDialog', 'aparcamientoFactory', function ($scope, $state, $stateParams, ngDialog, aparcamientoFactory) {
    
    $scope.doUpdateAparcamiento = function() {

        $scope.destino[$scope.puesto_num-1].aparcamiento = $scope.aparcamiento;
        aparcamientoFactory.updateAparcamiento($scope.identificador, $scope.aparcamiento);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('AyudasController', ['$scope', '$state', '$stateParams', 'ngDialog', 'ayudasFactory', function ($scope, $state, $stateParams, ngDialog, ayudasFactory) {
    
    $scope.doUpdateAyudas = function() {

        $scope.destino[$scope.puesto_num-1].ayudas_estudios = $scope.ayudas_estudios;
        ayudasFactory.updateAyudas($scope.identificador, $scope.ayudas_estudios);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('AyudasCuerposSuperioresController', ['$scope', '$state', '$stateParams', 'ngDialog', 'ayudascuerpossuperioresFactory', function ($scope, $state, $stateParams, ngDialog, ayudascuerpossuperioresFactory) {
    
    $scope.doUpdateAyudasCuerposSuperiores = function() {

        $scope.destino[$scope.puesto_num-1].ayudas_cuerpos_superiores = $scope.ayudas_cuerpos_superiores;
        ayudascuerpossuperioresFactory.updateAyudasCuerposSuperiores($scope.identificador, $scope.ayudas_cuerpos_superiores);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('ConciliacionController', ['$scope', '$state', '$stateParams', 'ngDialog', 'conciliacionFactory', function ($scope, $state, $stateParams, ngDialog, conciliacionFactory) {
    
    $scope.doUpdateConciliacion = function() {

        $scope.destino[$scope.puesto_num-1].concilacion = $scope.conciliacion;
        conciliacionFactory.updateConciliacion($scope.identificador, $scope.conciliacion);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('AccionController', ['$scope', '$state', '$stateParams', 'ngDialog', 'accionFactory', function ($scope, $state, $stateParams, ngDialog, accionFactory) {
    
    $scope.doUpdateAccion = function() {

        $scope.destino[$scope.puesto_num-1].accion_social = $scope.accion_social;
        accionFactory.updateAccion($scope.identificador, $scope.accion_social);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('ComedorController', ['$scope', '$state', '$stateParams', 'ngDialog', 'comedorFactory', function ($scope, $state, $stateParams, ngDialog, comedorFactory) {
    
    $scope.doUpdateComedor = function() {

        $scope.destino[$scope.puesto_num-1].comedor = $scope.comedor;
        comedorFactory.updateComedor($scope.identificador, $scope.comedor);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('DuchaController', ['$scope', '$state', '$stateParams', 'ngDialog', 'duchaFactory', function ($scope, $state, $stateParams, ngDialog, duchaFactory) {
    
    $scope.doUpdateDucha = function() {

        $scope.destino[$scope.puesto_num-1].ducha = $scope.ducha;
        duchaFactory.updateDucha($scope.identificador, $scope.ducha);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('PromocionController', ['$scope', '$state', '$stateParams', 'ngDialog', 'promocionFactory', function ($scope, $state, $stateParams, ngDialog, promocionFactory) {
    
    $scope.doUpdatePromocion = function() {

        $scope.destino[$scope.puesto_num-1].promocion = $scope.promocion;
        promocionFactory.updatePromocion($scope.identificador, $scope.promocion);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])

.controller('ExternosController', ['$scope', '$state', '$stateParams', 'ngDialog', 'externosFactory', function ($scope, $state, $stateParams, ngDialog, externosFactory) {
    
    $scope.doUpdateExternos = function() {

        $scope.destino[$scope.puesto_num-1].externos = $scope.externos;
        externosFactory.updateExternos($scope.identificador, $scope.externos);
        ngDialog.close();
        //$state.transitionTo($state);
    };

    
}])
.controller('AboutController', ['$scope', 'corporateFactory', function ($scope, corporateFactory) {

    $scope.leaders = corporateFactory.query();

}])

.controller('FavoriteController', ['$scope', '$state', 'favoriteFactory', function ($scope, $state, favoriteFactory) {

    $scope.tab = 1;
    $scope.filtText = '';
    $scope.showDetails = false;
    $scope.showDelete = false;
    $scope.showMenu = false;
    $scope.message = "Loading ...";

    favoriteFactory.query(
        function (response) {
            $scope.dishes = response.dishes;
            $scope.showMenu = true;
        },
        function (response) {
            $scope.message = "Error: " + response.status + " " + response.statusText;
        });

    $scope.select = function (setTab) {
        $scope.tab = setTab;

        if (setTab === 2) {
            $scope.filtText = "appetizer";
        } else if (setTab === 3) {
            $scope.filtText = "mains";
        } else if (setTab === 4) {
            $scope.filtText = "dessert";
        } else {
            $scope.filtText = "";
        }
    };

    $scope.isSelected = function (checkTab) {
        return ($scope.tab === checkTab);
    };

    $scope.toggleDetails = function () {
        $scope.showDetails = !$scope.showDetails;
    };

    $scope.toggleDelete = function () {
        $scope.showDelete = !$scope.showDelete;
    };
    
    $scope.deleteFavorite = function(dishid) {
        console.log('Delete favorites', dishid);
        favoriteFactory.delete({id: dishid});
        $scope.showDelete = !$scope.showDelete;
        $state.go($state.current, {}, {reload: true});
    };
}])

.controller('HeaderController', ['$scope', '$state', '$rootScope', 'ngDialog', 'AuthFactory', function ($scope, $state, $rootScope, ngDialog, AuthFactory) {

    $scope.loggedIn = false;
    $scope.username = '';
    
    if(AuthFactory.isAuthenticated()) {
        $scope.loggedIn = true;
        $scope.username = AuthFactory.getUsername();
    }
        
    $scope.openLogin = function () {
        ngDialog.open({ template: 'views/login.html', scope: $scope, className: 'ngdialog-theme-default', controller:"LoginController" });
    };
    
    $scope.logOut = function() {
       AuthFactory.logout();
        $scope.loggedIn = false;
        $scope.username = '';
    };
    
    $rootScope.$on('login:Successful', function () {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
    });
        
    $rootScope.$on('registration:Successful', function () {
        $scope.loggedIn = AuthFactory.isAuthenticated();
        $scope.username = AuthFactory.getUsername();
    });
    
    $scope.stateis = function(curstate) {
       return $state.is(curstate);  
    };
    
}])

.controller('LoginController', ['$scope', 'ngDialog', '$localStorage', 'AuthFactory', function ($scope, ngDialog, $localStorage, AuthFactory) {
    
    $scope.loginData = $localStorage.getObject('userinfo','{}');
    
    $scope.doLogin = function() {
        if($scope.rememberMe)
           $localStorage.storeObject('userinfo',$scope.loginData);

        AuthFactory.login($scope.loginData);

        ngDialog.close();

     
       


    };


            
    $scope.openRegister = function () {
        ngDialog.open({ template: 'views/register.html', scope: $scope, className: 'ngdialog-theme-default', controller:"RegisterController" });
    };
    
}])

.controller('RegisterController', ['$scope', 'ngDialog', '$localStorage', 'AuthFactory', function ($scope, ngDialog, $localStorage, AuthFactory) {
    
    $scope.register={};
    $scope.loginData={};
    
    $scope.doRegister = function() {
        console.log('Doing registration', $scope.registration);

        AuthFactory.register($scope.registration);
        
        ngDialog.close();

    };
}])
;