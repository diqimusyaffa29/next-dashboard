import React, {FC} from "react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod"
import {jobFormSchema} from "@/lib/form-schema"

interface PostJobPageProps {}

const PostJobPage: FC<PostJobPageProps> = ({}) => {
    
    const form = useForm<z.infer<typeof jobFormSchema>>({
        resolver: zodResolver(jobFormSchema),
        defaultValues: {
            requiredSkills: [],
        },
    });

    const onSubmit = (val: z.infer<typeof jobFormSchema>)=>{
        console.log(val);
    };

    return <div>PostJobPage</div>;
};

export default PostJobPage;
