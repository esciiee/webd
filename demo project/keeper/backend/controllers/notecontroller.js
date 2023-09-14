const User = require("../models/userModel");
const Note = require("../models/notesModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");


// get all user notes => /api/v1/home
exports.getalluserNotes = catchAsyncErrors(async (req, res, next) => {
    const notes = await Note.find({ user: req.user.id });
    res.status(200).json({
        success: true,
        notes
    });
});

//create a new note => /api/v1/note/new
exports.newNote = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id;
    const note = await Note.create(req.body);
    res.status(200).json({
        success: true,
        note
    });
});

//update note => /api/v1/note/:id
exports.updateNote = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id;
    let note = await Note.findById(req.params.id);
    if(!note){
        return next(new ErrorHandler("Note not found", 404));
    }
    note = req.body;
    // Convert the plain JavaScript object to a Mongoose document
    const noteDocument = new Note(note);

    // Save the updated note in the database
    await noteDocument.save();

    res.status(200).json({
        success: true,
        note
    });
});

//delete note => /api/v1/note/:id
exports.deleteNote = catchAsyncErrors(async (req, res, next) => {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote){
        return next(new ErrorHandler("Note not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "Note deleted successfully"
    });
});

//get single note => /api/v1/note/:id
exports.getSingleNote = catchAsyncErrors(async (req, res, next) => {
    const note = await Note.findById(req.params.id);
    if(!note){
        return next(new ErrorHandler("Note not found", 404));
    }
    res.status(200).json({
        success: true,
        note
    });
});



