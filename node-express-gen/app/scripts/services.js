'use strict';

angular.module('Destinator')
.constant("baseURL", "http://localhost:3033/")
.factory('destinosFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "destinos", null, {
            'query':  {method:'GET', isArray:true}
        });

}])
.factory('productividadFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateProductividad: function (identificador, productividad){
            myResource.update(
            {id: identificador},
            {comp_productividad: productividad},
            function (successResponse) {},
            function (failResponse) {}
          );
          }
        }

}])

.factory('direccionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateDireccion: function (identificador, dir){
            myResource.update(
            {id: identificador},
            {direccion: dir},
            function (successResponse) {},
            function (failResponse) {}
          );
          }
        }

}])

.factory('telefonoFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateTelefono: function (identificador, tel){
            myResource.update(
            {id: identificador},
            {telefono: tel},
            function (successResponse) {console.log("updateTelefono correct");},
            function (failResponse) {console.log("Fail updateTelefono");}
          );
          }
        }

}])

.factory('horarioFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateHorario: function (identificador, horario){
            myResource.update(
            {id: identificador},
            {horario_flexibilidad: horario},
            function (successResponse) {console.log("updateHorario correct");},
            function (failResponse) {console.log("Fail updateHorario");}
          );
          }
        }

}])
.factory('descripcionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateDescripcion: function (identificador, desc){
            myResource.update(
            {id: identificador},
            {descripcion: desc},
            function (successResponse) {console.log("updateHorario correct");},
            function (failResponse) {console.log("Fail updateHorario");}
          );
          }
        }

}])

.factory('transporteFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateTransporte: function (identificador, transp ){
            myResource.update(
            {id: identificador},
            {transporte_publico: transp},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])

.factory('aparcamientoFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateAparcamiento: function (identificador, aparc ){
            myResource.update(
            {id: identificador},
            {aparcamiento: aparc},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])

.factory('ayudasFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateAyudas: function (identificador, ayudas ){
            myResource.update(
            {id: identificador},
            {ayudas_estudios: ayudas},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])

.factory('ayudascuerpossuperioresFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateAyudasCuerposSuperiores: function (identificador, ayudas ){
            myResource.update(
            {id: identificador},
            {ayudas_cuerpos_superiores: ayudas},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])

.factory('conciliacionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateConciliacion: function (identificador, concil ){
            myResource.update(
            {id: identificador},
            {concilacion: concil},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])

.factory('accionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateAccion: function (identificador, accion ){
            myResource.update(
            {id: identificador},
            {accion_social: accion},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])

.factory('comedorFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateComedor: function (identificador, comed ){
            myResource.update(
            {id: identificador},
            {comedor: comed},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])

.factory('duchaFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateDucha: function (identificador, duch ){
            myResource.update(
            {id: identificador},
            {ducha: duch},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])

.factory('promocionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updatePromocion: function (identificador, promo ){
            myResource.update(
            {id: identificador},
            {promocion: promo},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])

.factory('externosFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


        var myResource = $resource(baseURL + "destinos/:id", null, {
            'update': {
                method: 'PUT'
            }
        });



        return {
          updateExternos: function (identificador, ext ){
            myResource.update(
            {id: identificador},
            {externos: ext},
            function (successResponse) {console.log("update correct");},
            function (failResponse) {console.log("Fail update");}
          );
          }
        }

}])


.factory('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "dishes/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

}])

.factory('commentFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

        return $resource(baseURL + "dishes/:id/comments/:commentId", {id:"@Id", commentId: "@CommentId"}, {
            'update': {
                method: 'PUT'
            }
        });

}])

.factory('promotionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

    return $resource(baseURL + "promotions/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

}])

.factory('corporateFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


    return $resource(baseURL + "leadership/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

}])


.factory('favoriteFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


    return $resource(baseURL + "favorites/:id", null, {
            'update': {
                method: 'PUT'
            },
            'query':  {method:'GET', isArray:false}
        });

}])

.factory('feedbackFactory', ['$resource', 'baseURL', function ($resource, baseURL) {


    return $resource(baseURL + "feedback/:id", null, {
            'update': {
                method: 'PUT'
            }
        });

}])

.factory('$localStorage', ['$window', function ($window) {
    return {
        store: function (key, value) {
            $window.localStorage[key] = value;
        },
        get: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        remove: function (key) {
            $window.localStorage.removeItem(key);
        },
        storeObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key, defaultValue) {
            return JSON.parse($window.localStorage[key] || defaultValue);
        }
    }
}])

.factory('AuthFactory', ['$resource', '$http', '$localStorage', '$rootScope', '$window', 'baseURL', 'ngDialog', function($resource, $http, $localStorage, $rootScope, $window, baseURL, ngDialog){
    
    var authFac = {};
    var TOKEN_KEY = 'Token';
    var isAuthenticated = false;
    var username = '';
    var authToken = undefined;
    

  function loadUserCredentials() {
    var credentials = $localStorage.getObject(TOKEN_KEY,'{}');
    if (credentials.username != undefined) {
      useCredentials(credentials);
    }
  }
 
  function storeUserCredentials(credentials) {
    $localStorage.storeObject(TOKEN_KEY, credentials);
    useCredentials(credentials);
  }
 
  function useCredentials(credentials) {
    isAuthenticated = true;
    username = credentials.username;
    authToken = credentials.token;
 
    // Set the token as header for your requests!
    $http.defaults.headers.common['x-access-token'] = authToken;
  }
 
  function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.common['x-access-token'] = authToken;
    $localStorage.remove(TOKEN_KEY);
  }
     
    authFac.login = function(loginData) {
        
        $resource(baseURL + "users/login")
        .save(loginData,
           function(response) {
              storeUserCredentials({username:loginData.username, token: response.token});
              $rootScope.$broadcast('login:Successful');

           },
           function(response){
              isAuthenticated = false;
            
              var message = '\
                <div class="ngdialog-message">\
                <div><h3>Login Unsuccessful</h3></div>' +
                  '<div><p>' +  response.data.err.message + '</p><p>' +
                    response.data.err.name + '</p></div>' +
                '<div class="ngdialog-buttons">\
                    <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click=confirm("OK")>OK</button>\
                </div>'
            
                ngDialog.openConfirm({ template: message, plain: 'true'});
           }
        
        );

    };
    
    authFac.logout = function() {
        $resource(baseURL + "users/logout").get(function(response){
        });
        destroyUserCredentials();
        $rootScope.$broadcast('logout');
        
    };
    
    authFac.register = function(registerData) {
        
        $resource(baseURL + "users/register")
        .save(registerData,
           function(response) {
              authFac.login({username:registerData.username, password:registerData.password});
            if (registerData.rememberMe) {
                $localStorage.storeObject('userinfo',
                    {username:registerData.username, password:registerData.password});
            }
           
              $rootScope.$broadcast('registration:Successful');
           },
           function(response){
            
              var message = '\
                <div class="ngdialog-message">\
                <div><h3>Registration Unsuccessful</h3></div>' +
                  '<div><p>' +  response.data.err.message + 
                  '</p><p>' + response.data.err.name + '</p></div>';

                ngDialog.openConfirm({ template: message, plain: 'true'});

           }
        
        );
    };
    
    authFac.isAuthenticated = function() {
        return isAuthenticated;
    };
    
    authFac.getUsername = function() {
        return username;  
    };

    loadUserCredentials();
    
    return authFac;
    
}])
;