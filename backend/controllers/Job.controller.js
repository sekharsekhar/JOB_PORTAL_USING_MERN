import { Job } from "../models/job.model.js";
import mongoose from "mongoose";

// ✅ Admin posts job
export const PostJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;

    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newJob = await Job.create({
      title,
      description,
      requirements: requirements.split(",").map((r) => r.trim()),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId,
    });

    res.setHeader("Content-Type", "application/json");
    return res.status(201).json({
      message: "New Job created successfully",
      Job: newJob,
      success: true,
    });
  } catch (error) {
    console.error("Error in PostJob:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// ✅ Get all jobs (search support)
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({
        createdAt: -1,
      });
    if (!jobs || jobs.length === 0) {
      return res.status(404).json({
        message: "No jobs found",
        success: false,
      });
    }
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error("Error in getAllJobs:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// ✅ Get job by ID
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }

    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    console.error("Error in getJobById:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// ✅ Admin: Get jobs created by them
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId }).populate({
      path: "company",
      createdAt: -1,
    });

    if (!jobs) {
      return res.status(404).json({
        message: "No jobs found for this admin",
        success: false,
      });
    }

    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.error("Error in getAdminJobs:", error);
    res.status(500).json({ message: "Server error", success: false });
  }
};

// export const getAdminJobs = async (req, res) => {
//   try {
//     const adminId = req.id;
//     const jobs = await Job.find({ created_by: adminId }).populate({
//       path: "company",
//       createdAt: -1,
//     });
//     if (!jobs) {
//       return res.status(404).json({
//         message: "Jobs not found.",
//         success: false,
//       });
//     }
//     return res.status(200).json({
//       jobs,
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
