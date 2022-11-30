import express from "express";
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get((req, res) =>  res.send("Hello World"))

router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReview) //ERROR
    .put(ReviewsCtrl.apiUpdateReview) //Works
    .delete(ReviewsCtrl.apiDeleteReview) //Works

export default router;