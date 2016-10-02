var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Verify = require('./verify');

var Destinos = require('../models/destinos');

var destRouter = express.Router();
    

    destRouter.route('/')
    //.get(Verify.verifyOrdinaryUser, function(req,res,next){
    .get(Verify.verifyOrdinaryUser, function(req,res,next){
            Destinos.find({})
            .populate('comments.postedBy')
            .exec(function (err, destino) {
            //if (err)  throw err;
            if (err)  next(err);
            res.json(destino);
        });

    })

   .post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
        Destinos.create(req.body, function (err, destino) {
            if (err) next(err);
            console.log('Destino creado');
            var id = destino._id;

            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Añadido destino con id: ' + id);
        });
    })

   .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
        Destinos.remove({}, function (err, resp) {
            if (err) next(err);
            res.json(resp);
        });
    });


    destRouter.route('/:destId')
    .get(function (req, res, next) {
        Destinos.findById(req.params.destId)
        .populate('comments.postedBy')
        .exec(function (err, destino) {
            if (err) next(err);
            res.json(destino);
        });

    })

    .put(function (req, res, next) {
        Destinos.findByIdAndUpdate(req.params.destId, {
            $set: req.body
        }, {
            new: true
        }, function (err, destino) {
            if (err) next(err);
            res.json(destino);
        });
    })

    .delete(function (req, res, next) {
        Destinos.findByIdAndRemove(req.params.destId, function (err, resp) {        
            if (err) next(err);
            res.json(resp);
        });
    });

    destRouter.route('/:destId/comments')
    //.all(Verify.verifyOrdinaryUser)
    .get(function (req, res, next) {
        Destinos.findById(req.params.destId)
        .populate('comments.postedBy')
        .exec(function (err, destino) {
            if (err) next(err);
            res.json(destino.comments);
        });

    })

    .post(Verify.verifyOrdinaryUser, function (req, res, next) {
        Destinos.findById(req.params.destId, function (err, destino) {
            if (err) next(err);
            req.body.postedBy = req.decoded._id;
            destino.comments.push(req.body);
            destino.save(function (err, destino) {
                if (err) next(err);
                console.log('Comentarios actualizados!');
                res.json(destino);
            });
        });
    })

    .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
        Destinos.findById(req.params.destId, function (err, destino) {
            if (err) next(err);
            for (var i = (destino.comments.length - 1); i >= 0; i--) {
                destino.comments.id(destino.comments[i]._id).remove();
            }
            destino.save(function (err, result) {
                if (err) next(err);
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                });
                res.end('Borrados todos los comentarios!');
            });
        });
    });

    destRouter.route('/:destId/comments/:commentId')
    //.all(Verify.verifyOrdinaryUser)
    .get(Verify.verifyOrdinaryUser, function (req, res, next) {
        Destinos.findById(req.params.destId)
        .populate('comments.postedBy')
        .exec(function (err, destino) {
            if (err) next(err);
            res.json(destino.comments.id(req.params.commentId));
        });


    })

    .put(Verify.verifyOrdinaryUser, function (req, res, next) {
        // We delete the existing commment and insert the updated
        // comment as a new comment
        Destinos.findById(req.params.destId, function (err, destino) {
            if (err) next(err);
            destino.comments.id(req.params.commentId).remove();
            req.body.postedBy = req.decoded._id;
            destino.comments.push(req.body);
            destino.save(function (err, destino) {
                if (err) next(err);
                console.log('Comentarios actualizados!');
                res.json(destino);
            });
        });
    })

    .delete(Verify.verifyOrdinaryUser, function (req, res, next) {
        Destinos.findById(req.params.destId, function (err, destino) {
            if (destino.comments.id(req.params.commentId).postedBy
               != req.decoded._id) {
                var err = new Error('You are not authorized to perform this operation!');
                err.status = 403;
                return next(err);
            }
            destino.comments.id(req.params.commentId).remove();
            destino.save(function (err, resp) {
                if (err) next(err);
                res.json(resp);
            });
        });
    });

module.exports = destRouter;