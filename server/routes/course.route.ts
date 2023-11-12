import express from "express";
import {  addAnwser, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

const courseRouter = express.Router();

courseRouter.post("/createCourse",isAuthenticated, authorizeRoles("admin"), uploadCourse)

courseRouter.put("/editCourse/:id",isAuthenticated, authorizeRoles("admin"), editCourse)

courseRouter.get("/getCourse/:id",isAuthenticated, authorizeRoles("admin"), getSingleCourse)

courseRouter.get("/getCourse/",isAuthenticated, authorizeRoles("admin"), getAllCourses)

courseRouter.get("/getCourseContent/:id",isAuthenticated, getCourseByUser)

courseRouter.put('/addQuestion/',isAuthenticated, addQuestion)

courseRouter.put('/addAnswer/',isAuthenticated, addAnwser)

courseRouter.put('/addReview/:id',isAuthenticated, addReview)

courseRouter.put('/addReply',isAuthenticated,authorizeRoles("admin"), addReplyToReview)

courseRouter.put('/get-courses',isAuthenticated,authorizeRoles("admin"), getAllCourses)

courseRouter.delete('/delete-courses/:id',isAuthenticated,authorizeRoles("admin"), deleteCourse)


export default courseRouter