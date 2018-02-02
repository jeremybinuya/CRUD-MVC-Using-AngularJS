var app = angular.module('eventController', []);

app.factory('crudServiceEvents', function ($http, $routeParams) {
    crudEventObj = {};

    //Get all the Events List
    crudEventObj.getAllEvents = function () {
        var Events;

        Events = $http({
            method: 'GET',
            url: '/Events/Index'
        }).then(function (res) {
            return res.data;
        });
        return Events;
    }

    //Get Event By Id
    crudEventObj.getEventById = function () {
        var Event;
        var id = $routeParams.id;

        Event = $http({
            method: 'GET',
            url: '/Events/Details/' + id
        }).then(function (res) {
            return res.data;
        });
        return Event;
    }

    //Delete Events
    crudEventObj.deleteEventById = function (eventid) {
        var Event;

        Event = $http({
            method: 'POST',
            url: '/Events/Delete/',
            params: { id: eventid }
        }).then(function (res) {
            return res.data;
        })
        return Event;
    }

    //Create Events
    crudEventObj.createEvents = function (event) {
        var Event;

        Event = $http({
            method: 'POST',
            url: '/Events/Create', data: event
        }).then(function (res) {
            window.location.href('#/Events');
        });
        return Event;
    }

    crudEventObj.updateEvent = function (event) {
        var id = $routeParams.id;
        var Event;

        Event = $http({
            method: 'POST',
            url: '/Events/Edit/' + id, data: event
        }).then(function (res) {
            window.location.href('#/Events/');
        });
        return Event;
    }
    return crudEventObj;
});

app.controller('eventsController', function ($scope, crudServiceEvents) {

    //Controller for Get all List of Events
    crudServiceEvents.getAllEvents().then(function (result) {
        $scope.Events = result;
    });

    //Controller Get by ID
    crudServiceEvents.getEventById().then(function (result) {
        $scope.Event = result;
    });

    //Controller Delete Events
    $scope.DeleteEventById = function (evtid) {
        crudServiceEvents.deleteEventById(evtid).then(function (result) {
            $scope.Msg = result.EvtName + "has been deleted successfully"
        });
    };

    //Controller Create Event
    $scope.CreateEvent = function (Evt) {
        crudServiceEvents.createEvents(Evt).then(function (result) {
            $scope.Msg = result.EvtName + " has been create succesffully";
        });
    };

    //Update Controller for Event
    $scope.UpdateEvent = function (Evt) {
        crudServiceEvents.updateEvent(Evt).then(function (result) {
            $scope.Msg = result.EvtName + " has been updated";
        });
    };
});