var app = angular.module('employeeController', []);

app.factory('crudServiceEmployess', function ($http, $routeParams) {
    crudEmpObj = {};


    //Get all the Employee list
    crudEmpObj.getAll = function () {
        var Emps;

        Emps = $http({ method: 'Get', url: '/Employees/Index'}).then(function (response) {
            return response.data;
        });
        return Emps;
    }

    //Get Employee By Id
    crudEmpObj.getEmployeeByEmpId = function () {
        var Emp;
        var id = $routeParams.id;

        Emp = $http({ method: 'Get', url: '/Employees/Details/' + id }).then(function (response) {
            return response.data;
        });
        return Emp;
    }

    //Delete Employee
    crudEmpObj.deleteByEmpId = function (empid) {
        var Emp;

        Emp = $http({ method: 'Post', url: '/Employees/Delete/', params: { id: empid } }).then(function (response) {
            return response.data;
        });
        return Emp;
    };

    //Create new Employee
    crudEmpObj.createEmployee = function (emp) {
        var Emp;

        Emp = $http({ method: 'Post', url: '/Employees/Create/', data: emp }).then(function (response) {
            //return response.data;
            window.location.href = '#/Employees';
        });
        return Emp;
    };

    //Updating All Employee
    crudEmpObj.updateEmployee = function (emp) {
        var id = $routeParams.id
        var Emp;

        Emp = $http({ method: 'Post', url: '/Employees/Edit/'+ id, data:emp }).then(function (response) {
            window.location.href = '#/Employees';
        });
        return Emp;
    };

    return crudEmpObj;
});

app.controller('employessController', function ($scope,crudServiceEmployess) {


    //Controller for Get all List of Employee
    crudServiceEmployess.getAll().then(function (result) {
        $scope.Emps = result;
    });

    //Controller Get ByID
    crudServiceEmployess.getEmployeeByEmpId().then(function (result) {
        $scope.Emp = result;
    });

    $scope.currentPage = 1;
    $scope.empsPerPage = 5;


    //Multiple Select for employee using checkbox
    $scope.SelectAll = function (epp, cp) {
        for (i = epp * (cp - 1) ; i < $scope.Emps.length && i < epp * cp; i++) {
            $scope.Emps[i].ckbOne = $scope.ckbAll;
        }
    };

    //Clear all checkbox
    $scope.ClearAll = function () {
        $scope.ckbAll = false;
        for (i = 0; i < $scope.Emps.length; i++) {
            $scope.Emps[i].ckbOne = false;
        }
    };

    //Select one Employee using checkbox
    $scope.SelectOne = function (epp, cp) {
        for (i = epp * (cp - 1) ; i < $scope.Emps.length && i < epp * cp; i++) {
            if ($scope.Emps[i].ckbOne == false) {
                $scope.ckbAll = false;
                return;
            }
        }
        $scope.ckbAll = true;
    };

    //Multiple Delete using checkbox
    $scope.MultiDelete = function (epp, cp) {
        for (i = epp * (cp - 1) ; i < $scope.Emps.length && i < epp * cp; i++) {
            if ($scope.Emps[i].ckbOne = true) {
                $scope.DeleteByEmpId($scope.Emps[i].EmpId);
            }
        }
        $scope.ckbAll = false;
    };

    ///controller Delete Emoployee
    $scope.DeleteByEmpId = function (eid) {
        crudServiceEmployess.deleteByEmpId(eid).then(function (result) {
            $scope.Msg = result.FullName + " has been deleted successfully";

            crudServiceEmployess.getAll().then(function (result) {
                $scope.Emps = result;
            });
        });
    };

    //Controller Create Employee
    $scope.CreateEmployee = function (Emp) {
        crudServiceEmployess.createEmployee(Emp).then(function (result) {
            $scope.Msg = result.FullName + " has been created successfully!!";
        });
    };

    //Update Controller for Employee
    $scope.UpdateEmployee = function (Emp) {
        crudServiceEmployess.updateEmployee(Emp).then(function (result) {
            $scope.Msg = result.FullName + " has been updated successfully";
        });
    };
});