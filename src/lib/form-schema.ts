import {JOBTYPES} from "@/constants";
import {z} from "zod";

export const jobFormSchema = z.object({
    roles: z
        .string({required_error: "Job title is required"})
        .min(3, {message: "Job Title must be at least 3 Characters"}),
    jobType: z.enum(JOBTYPES, {required_error: "You need to select a job type"}),
    salaryFrom : z.string({required_error: "Salary from is required"}),
    salaryTo : z.string({required_error: "Salary To is required"}),
    categoryId: z.string({required_error: "You need to select a category"}),
    requiredSkills: z.string().array().nonempty({message: "Required Skill must be at least 1 skill"}),
    jobDescription: z.string({required_error: "Job Description is Required"}).min(10, {message: "Job Description must be at least 10 caharacters"}),
    responsibilities: z.string({required_error: "Job Description is Required"}).min(10, {message: "Job Description must be at least 10 caharacters"}),
    whoYouAre: z.string({required_error: "Job Description is Required"}).min(10, {message: "Job Description must be at least 10 caharacters"}),
    niceToHave: z.string({required_error: "Job Description is Required"}).min(10, {message: "Job Description must be at least 10 caharacters"}),
    benefits: z.object({
        benefit: z.string(),
        description: z.string()
    }).array().nonempty({message: "Benefit must be at least 1 benefit"}),
    // 

});
