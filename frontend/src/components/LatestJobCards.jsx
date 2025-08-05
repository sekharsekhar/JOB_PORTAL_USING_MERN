import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`description/${job._id}`)}
      className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer"
    >
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job.title}</h1>
        <p className="text-sm text-gray-600">
          {job.description?.slice(0, 150)}...
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4 flex-wrap">
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job.vacancyCount || "1"} Positions
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job.jobType || "Full Time"}
        </Badge>
        <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
          {/* {job.salary || "Not disclosed"} */}
          {job.salary ? `${job.salary} LPA` : "Not disclosed"}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
